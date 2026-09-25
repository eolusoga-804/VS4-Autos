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
} as const;
