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
} as const;
