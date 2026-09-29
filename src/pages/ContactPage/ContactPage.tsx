import { useState } from "react";
import type { FormEvent } from "react";
import { business } from "../../config/business";
import "./ContactPage.css";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  registration: string;
  address: string;
  postcode: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  registration: "",
  address: "",
  postcode: "",
  service: "",
  message: "",
};

function ContactPage() {
  const copy = business.contactPage;
  const errorMessages = business.contactFormErrors;

  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState("");
  const [fallbackMailto, setFallbackMailto] = useState("");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormError("");
    setFallbackMailto("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFallbackMailto("");

    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = errorMessages.nameRequired;
    }

    if (!values.phone.trim()) {
      nextErrors.phone = errorMessages.phoneRequired;
    } else {
      const phoneDigits = values.phone.replace(/\D/g, "");
      if (phoneDigits.length < 10 || phoneDigits.length > 15) {
        nextErrors.phone = errorMessages.phoneInvalid;
      }
    }

    if (!values.email.trim()) {
      nextErrors.email = errorMessages.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = errorMessages.emailInvalid;
    }

    if (!values.vehicle.trim()) {
      nextErrors.vehicle = errorMessages.vehicleRequired;
    }

    if (!values.address.trim()) {
      nextErrors.address = errorMessages.addressRequired;
    }

    if (!values.postcode.trim()) {
      nextErrors.postcode = errorMessages.postcodeRequired;
    } else if (
      !/^(GIR 0AA|[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2})$/i.test(
        values.postcode.trim(),
      )
    ) {
      nextErrors.postcode = errorMessages.postcodeInvalid;
    }

    if (!values.service) {
      nextErrors.service = errorMessages.serviceRequired;
    }

    if (!values.message.trim()) {
      nextErrors.message = errorMessages.messageRequired;
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormError(errorMessages.invalidForm);
      return;
    }

    const messageCopy = copy.whatsappMessage;
    const whatsappMessage = [
      `${messageCopy.title} ${business.name}`,
      `${messageCopy.name}: ${values.name.trim()}`,
      `${messageCopy.phone}: ${values.phone.trim()}`,
      `${messageCopy.email}: ${values.email.trim()}`,
      `${messageCopy.vehicle}: ${values.vehicle.trim()}`,
      `${messageCopy.registration}: ${values.registration.trim() || messageCopy.notProvided}`,
      `${messageCopy.address}: ${values.address.trim()}`,
      `${messageCopy.postcode}: ${values.postcode.trim()}`,
      `${messageCopy.service}: ${values.service}`,
      `${messageCopy.details}: ${values.message.trim()}`,
    ].join("\n");

    const whatsappNumber = business.contact.whatsappNumber.replace(/\D/g, "");

    if (!whatsappNumber) {
      const subject = encodeURIComponent(
        `${messageCopy.title} ${business.name}`,
      );
      const body = encodeURIComponent(whatsappMessage);

      setFormError(business.contact.whatsappFallbackMessage);
      setFallbackMailto(
        `mailto:${business.contact.email}?subject=${subject}&body=${body}`,
      );
      return;
    }

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="contact-page">
      <header className="contact-page__intro" data-aos="fade-up">
        <p className="contact-page__eyebrow">{business.coverage}</p>
        <h1 className="contact-page__title">
          {copy.title} {business.name}
        </h1>
        <p className="contact-page__copy">{copy.intro}</p>
      </header>

      <form
        className="contact-page__form"
        onSubmit={handleSubmit}
        noValidate
        data-aos="fade-up"
      >
        <div className="contact-page__grid">
          <label className="contact-page__field">
            <span>
              {copy.fields.name} {copy.requiredMark}
            </span>
            <input
              name="name"
              autoComplete="name"
              maxLength={80}
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name && (
              <small id="contact-name-error">{errors.name}</small>
            )}
          </label>

          <label className="contact-page__field">
            <span>
              {copy.fields.phone} {copy.requiredMark}
            </span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={24}
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "contact-phone-error" : undefined
              }
            />
            {errors.phone && (
              <small id="contact-phone-error">{errors.phone}</small>
            )}
          </label>

          <label className="contact-page__field">
            <span>
              {copy.fields.email} {copy.requiredMark}
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
            />
            {errors.email && (
              <small id="contact-email-error">{errors.email}</small>
            )}
          </label>

          <label className="contact-page__field">
            <span>
              {copy.fields.vehicle} {copy.requiredMark}
            </span>
            <input
              name="vehicle"
              maxLength={100}
              placeholder={copy.placeholders.vehicle}
              value={values.vehicle}
              onChange={(event) => updateField("vehicle", event.target.value)}
              aria-invalid={Boolean(errors.vehicle)}
              aria-describedby={
                errors.vehicle ? "contact-vehicle-error" : undefined
              }
            />
            {errors.vehicle && (
              <small id="contact-vehicle-error">{errors.vehicle}</small>
            )}
          </label>

          <label className="contact-page__field">
            <span>{copy.fields.registration}</span>
            <input
              name="registration"
              maxLength={10}
              value={values.registration}
              onChange={(event) =>
                updateField("registration", event.target.value)
              }
            />
          </label>

          <label className="contact-page__field contact-page__field--wide">
            <span>
              {copy.fields.address} {copy.requiredMark}
            </span>
            <textarea
              name="address"
              autoComplete="street-address"
              rows={2}
              maxLength={180}
              placeholder={copy.placeholders.address}
              value={values.address}
              onChange={(event) => updateField("address", event.target.value)}
              aria-invalid={Boolean(errors.address)}
              aria-describedby={
                errors.address ? "contact-address-error" : undefined
              }
            />
            {errors.address && (
              <small id="contact-address-error">{errors.address}</small>
            )}
          </label>

          <label className="contact-page__field">
            <span>
              {copy.fields.postcode} {copy.requiredMark}
            </span>
            <input
              name="postcode"
              autoComplete="postal-code"
              maxLength={8}
              value={values.postcode}
              onChange={(event) => updateField("postcode", event.target.value)}
              aria-invalid={Boolean(errors.postcode)}
              aria-describedby={
                errors.postcode ? "contact-postcode-error" : undefined
              }
            />
            {errors.postcode && (
              <small id="contact-postcode-error">{errors.postcode}</small>
            )}
          </label>

          <label className="contact-page__field contact-page__field--wide">
            <span>
              {copy.fields.service} {copy.requiredMark}
            </span>
            <select
              name="service"
              value={values.service}
              onChange={(event) => updateField("service", event.target.value)}
              aria-invalid={Boolean(errors.service)}
              aria-describedby={
                errors.service ? "contact-service-error" : undefined
              }
            >
              <option value="">{copy.placeholders.service}</option>
              {business.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <small id="contact-service-error">{errors.service}</small>
            )}
          </label>

          <label className="contact-page__field contact-page__field--wide">
            <span>
              {copy.fields.message} {copy.requiredMark}
            </span>
            <textarea
              name="message"
              rows={5}
              maxLength={1500}
              value={values.message}
              onChange={(event) => updateField("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
            />
            {errors.message && (
              <small id="contact-message-error">{errors.message}</small>
            )}
          </label>
        </div>

        {formError && (
          <p className="contact-page__error" role="alert">
            {formError}
          </p>
        )}

        {fallbackMailto && (
          <a className="contact-page__email-fallback" href={fallbackMailto}>
            {copy.emailFallback}
          </a>
        )}

        <button className="contact-page__submit" type="submit">
          {copy.submit}
        </button>
        <p className="contact-page__required">{copy.requiredNote}</p>
      </form>
    </main>
  );
}

export default ContactPage;
