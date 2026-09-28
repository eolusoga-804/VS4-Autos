export const business = {
  name: "VS4 Autos",
  tagline: "Your trusted partner in automotive care and sales",
  coverage: "High Peak & Greater Manchester",
  contact: {
    phone: "",
    address: "",
    email: "info@vs4autos.com",
    website: "https://vs4autos.com",
    whatsappNumber: "",
    whatsappFallbackMessage:
      "WhatsApp is not configured yet. You can open this enquiry in your email app instead.",
  },
  services: [
    "Interim servicing",
    "Full and major servicing",
    "Brake pad and disc replacement",
    "Engine diagnostics with ODB scanner",
    "Repairs and maintenance",
    "Battery services",
    "Pre-purchase car inspections",
    "Car flipping",
  ],
  serviceDetails: [
    "Mobile mechanic service at your home or workplace",
    "No garage drop-off",
    "No waiting around",
    "OEM quality parts used",
  ],
  promotion: {
    firstServiceDiscount: "£15 off your first full service",
    fullServiceStartingPrice: "£140",
  },
  reviewNote: "Customers mention honest, reliable service.",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  benefits: [
    "We come to your home or workplace",
    "No garage drop-off",
    "No waiting around",
    "OEM quality parts used",
  ],
  offer: {
    fullServiceFrom: "£140",
    firstFullServiceDiscount: "£15 off",
    note: "For new customers booking a first full service.",
  },
  homeContact: {
    heading: "Need a mechanic at your home or workplace?",
    message: "Get in touch to discuss your vehicle and request a quote.",
    buttonLabel: "Contact VS4 Autos",
  },
  approach: {
    heading: "A more convenient way to care for your car",
    intro:
      "We bring mobile mechanic support to your home or workplace across High Peak and Greater Manchester.",
    points: [
      "We come to your home or workplace",
      "No garage drop-off",
      "No waiting around",
      "OEM quality parts used",
    ],
  },
  faqs: [
    {
      question: "Where does VS4 Autos provide mobile mechanic services?",
      answer:
        "We cover High Peak and Greater Manchester. Send your postcode when you enquire so we can confirm availability for your area.",
    },
    {
      question: "Do I need to take my vehicle to a garage?",
      answer:
        "The service is mobile. We come to your home or workplace, so there is no garage drop-off.",
    },
    {
      question: "What services can I ask about?",
      answer:
        "You can enquire about servicing, brakes, diagnostics, repairs and maintenance, batteries, pre-purchase inspections, and car flipping.",
    },
    {
      question: "How much does a full service cost?",
      answer:
        "A full service is listed from £140, with £15 off for new customers. Share your vehicle details when you enquire so VS4 Autos can confirm the right service and price.",
    },
    {
      question: "What should I include when requesting a quote?",
      answer:
        "Send your vehicle registration and postcode, describe the service or issue you need help with, and include any useful timing details. This helps VS4 Autos respond with a relevant quote.",
    },
  ],
  serviceArea: {
    heading: "Mobile mechanic coverage",
    intro:
      "VS4 Autos serves drivers across High Peak and Greater Manchester. Share your postcode when you enquire so we can confirm availability.",
    areas: ["High Peak", "Greater Manchester"],
  },
  serviceDescriptions: {
    "Interim servicing":
      "Routine interim servicing for drivers who want regular maintenance between major services. Share your vehicle details so VS4 Autos can confirm the appropriate work and quote.",
    "Full and major servicing":
      "Full and major servicing for a more thorough maintenance visit. The supplied offer lists full services from £140, with £15 off for new customers. Confirm the price and work for your vehicle when enquiring.",
    "Brake pad and disc replacement":
      "Brake pad and disc replacement for worn braking components. Describe any noises, vibration, or changes in braking and provide your vehicle details so the required work can be discussed.",
    "Engine diagnostics with ODB scanner":
      "Engine diagnostics using an ODB scanner to help identify fault codes and warning lights. A diagnostic reading can guide further checks; it does not by itself confirm every underlying fault.",
    "Repairs and maintenance":
      "Mobile repairs and maintenance for a range of vehicle needs. Explain the issue, share your registration and postcode, and VS4 Autos can discuss whether the work is suitable for a mobile visit.",
    "Battery services":
      "Battery-related checks and replacement enquiries for vehicles that may be struggling to start. Include the vehicle make, model, and symptoms so the right next step can be discussed.",
    "Pre-purchase car inspections":
      "Pre-purchase inspections to help you assess a car before buying. Share the vehicle details and location in advance so availability and the inspection scope can be confirmed.",
    "Car flipping":
      "Ask VS4 Autos about its car flipping activity, the process involved, and any vehicles currently available. Confirm vehicle condition, work carried out, and terms directly before making a purchase.",
  } satisfies Record<string, string>,
  footer: {
    summary: "Mobile vehicle care at your home or workplace.",
    groups: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Servicing", href: "/about" },
          { label: "Brakes and diagnostics", href: "/about" },
          { label: "Pre-purchase inspections", href: "/about" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "Email VS4 Autos", href: "mailto:info@vs4autos.com" },
          { label: "Call VS4 Autos", href: "" },
          { label: "WhatsApp", href: "" },
        ],
      },
    ],
    socials: {
      facebook: "",
      instagram: "",
      whatsapp: "",
    },
    copyright: "Vehicle care across High Peak and Greater Manchester.",
  },
  notFound: {
    eyebrow: "404 · ROUTE NOT FOUND",
    title: "This page has taken a wrong turn.",
    message:
      "The address may be incorrect, or the page may have moved. You can head back to the VS4 Autos home page or explore our services.",
    homeButton: "Go to home",
    servicesButton: "Explore services",
    backButton: "Go back",
    note: "Looking for mobile mechanic support in",
  },
  contactFormErrors: {
    nameRequired: "Enter your name.",
    phoneRequired: "Enter a phone number.",
    phoneInvalid: "Enter a phone number with 10 to 15 digits.",
    emailRequired: "Enter your email address.",
    emailInvalid: "Enter a valid email address.",
    vehicleRequired: "Enter your vehicle make and model.",
    postcodeRequired: "Enter your UK postcode.",
    postcodeInvalid: "Enter a valid UK postcode.",
    serviceRequired: "Choose a service.",
    messageRequired: "Describe how we can help.",
    invalidForm: "Please correct the highlighted fields and try again.",
  },
} as const;
