import { Product, Service, Project, GalleryItem, FAQItem, ClientItem } from './types';

export const COMPANY_DETAILS = {
  name: "OFFLINE FIRE & SAFETY LTD",
  tagline: "Your Trusted Partner in Fire Protection & Safety Solutions",
  address: "Accra Road, Emmacra Arcade, P.O. Box 75736-00200, Nairobi, Kenya",
  phones: ["0727158332", "0722733331"],
  emails: ["offlinefr716@gmail.com", "sales@offlinefire.co.ke"],
  whatsapp: "0727158332" // Kenya WhatsApp country code format
};

export const SERVICES: Service[] = [
  {
    id: "supply",
    name: "Fire Equipment Supply",
    description: "Supply of international standard certified fire extinguishers, safety equipment, and emergency devices.",
    icon: "Shield",
    details: [
      "Fire Extinguishers (ABC Powder, CO₂, Foam, Water, Wet Chemical)",
      "Fire Blankets & Fire Buckets",
      "Fire Hoses, Hose Reels & Cabinets",
      "Fire Hydrants, Sprinkler Heads & Fire Pumps",
      "Smoke Detectors, Heat Detectors & Alarm Panels",
      "Exit Lights & Emergency Lights"
    ]
  },
  {
    id: "alarm-install",
    name: "Fire Alarm Installation",
    description: "Design and installation of advanced fire alarm systems and detection networks for all facilities.",
    icon: "Bell",
    details: [
      "Residential Homes",
      "Commercial Offices",
      "Schools & Universities",
      "Industrial Factories",
      "Hotels & Malls",
      "Hospitals & Clinics"
    ]
  },
  {
    id: "servicing",
    name: "Fire Extinguisher Servicing",
    description: "Comprehensive maintenance, inspection, refilling, and hydrostatic testing of all fire extinguishers.",
    icon: "Wrench",
    details: [
      "Routine Certified Inspections",
      "High-Pressure Extinguisher Refilling",
      "Hydrostatic Pressure Testing",
      "Compliance Certification & Labeling",
      "Replacement of worn valves and parts"
    ]
  },
  {
    id: "assessment",
    name: "Fire Risk Assessment",
    description: "Professional fire safety compliance inspections, hazard identification, and safety reports.",
    icon: "ClipboardCheck",
    details: [
      "Identifying potential fire hazards",
      "Evaluating adequacy of escape routes",
      "Checking fire safety signage compliance",
      "Drafting fire emergency evacuation plans",
      "Issuing safety compliance reports"
    ]
  },
  {
    id: "training",
    name: "Fire Safety Training",
    description: "Empowering your team with practical firefighting, prevention, and emergency evacuation skills.",
    icon: "GraduationCap",
    details: [
      "Fire Prevention in the Workplace",
      "Hands-on Use of Fire Extinguishers",
      "Emergency Evacuation Drills",
      "First Aid Basics & Emergency Response",
      "Basic firefighting techniques"
    ]
  },
  {
    id: "contracts",
    name: "Maintenance Contracts",
    description: "Annual Maintenance Contracts (AMC) to keep your fire protection systems reliable and ready 24/7.",
    icon: "CalendarRange",
    details: [
      "Quarterly & Annual Scheduled Inspections",
      "Priority Emergency Dispatch Services",
      "Regular sprinkler system and hydrant testing",
      "Continuous system upgrades and panel testing",
      "Discounted rates on spares and new installations"
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "ABC Dry Powder Fire Extinguisher",
    category: "extinguishers",
    description: "Versatile fire extinguisher suitable for Class A (solid materials), Class B (flammable liquids), and Class C (gaseous fires) hazards.",
    image: "/images/ter11.jpg",
    features: ["Certified EN3 / CE approved", "High performance powder agent", "Squeeze grip operation", "Equipped with safety pressure gauge"]
  },
  {
    id: "p2",
    name: "CO₂ Fire Extinguisher",
    category: "extinguishers",
    description: "Excellent for electrical fire risks and Class B fires. Leaves no residue, protecting critical electronic equipment and servers.",
    image: "/images/ter16.jpg",
    features: ["Non-conductive carbon dioxide gas", "No messy chemical residue", "High-quality brass valve with squeeze grip", "Supplied with non-conductive frost-free horn"]
  },
  {
    id: "p3",
    name: "Foam / Water Fire Extinguisher",
    category: "extinguishers",
    description: "Ideal for tackling wood, paper, textiles (Class A) and flammable liquids like petrol and oils (Class B).",
    image: "/images/ter11.jpg",
    features: ["High fighting rating", "Eco-friendly aqueous film-forming foam (AFFF)", "Safety relief valve included", "Durable internal plastic lining"]
  },
  {
    id: "p4",
    name: "Intelligent Fire Alarm Panel",
    category: "alarms",
    description: "Multi-zone fire alarm control panels designed to supervise, monitor, and control complex building emergency setups.",
    image: "/images/ter12.jpg",
    features: ["LCD display with intuitive menu", "Battery backup capability", "Individual zone configuration and labeling", "Supports addressable detectors and sounders"]
  },
  {
    id: "p5",
    name: "Photoelectric Smoke Detector",
    category: "alarms",
    description: "Highly sensitive smoke detection with false-alarm prevention algorithms, ideal for slow-smoldering fires.",
    image: "/images/ter17.jpg",
    features: ["Dual optical sensing technology", "Low-profile aesthetic casing", "Local sounder and LED status indicators", "Easy twist-on mounting base"]
  },
  {
    id: "p6",
    name: "Professional Fire Hose Reel",
    category: "hose",
    description: "Heavy-duty steel hose reel with high-quality reinforced rubber hose for continuous, high-volume fire suppression.",
    image: "/images/ter13.jpg",
    features: ["30-meter high-durability braided rubber hose", "Solid brass landing valve and jet spray nozzle", "Swivel arm mounting for full 180-degree motion", "Corrosion-resistant UV-powder-coated steel drum"]
  },
  {
    id: "p7",
    name: "Fire Safety PPE Kit",
    category: "safety",
    description: "Industrial grade safety equipment to protect personnel during emergencies and dangerous plant environments.",
    image: "/images/ter14.jpg",
    features: ["High-impact ABS safety helmet", "Heat-resistant heavy-duty leather gloves", "Waterproof and slip-resistant safety boots", "High-visibility reflective jacket with ID pocket"]
  },
  {
    id: "p8",
    name: "Emergency LED Exit & Backup Light",
    category: "emergency",
    description: "Energy-efficient LED exit signs and emergency lights with autonomous battery backup systems that trigger during power failure.",
    image: "/images/ter15.jpg",
    features: ["Over 3 hours of battery backup autonomy", "Bright long-lasting green/red LEDs", "Universal ceiling or wall mounting bracket", "Maintenance-free rechargeable Ni-Cd battery"]
  },
  {
    id: "p9",
    name: "Industrial First Aid Kit",
    category: "emergency",
    description: "Fully stocked workplace medical first-aid kit compliant with occupational health and safety regulations.",
    image: "/images/ter20.jpg",
    features: ["Heavy-duty weatherproof wall-mountable cabinet", "Complete set of bandages, antiseptic, splints, and tools", "Clearly categorized quick-access compartments", "Meets international industrial safety regulations"]
  },
  {
    id: "p10",
    name: "Heavy Duty Fire Blanket",
    category: "safety",
    description: "High-temperature fiberglass woven blanket used to smother kitchen grease fires and wrap escapees safely.",
    image: "/images/ter19.jpg",
    features: ["Premium non-flammable woven fiberglass", "Quick-release pull tabs for instant use", "Compact wall-mount pouch", "Supports temperatures up to 550°C"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Installation of Fire Alarm System",
    location: "Commercial Office Complex, Nairobi",
    description: "Designed, installed, and commissioned a fully addressable 8-zone smart fire alarm network featuring smoke/heat sensors, sounders, and automated notification alerts.",
    image: "/images/ter12.jpg",
    category: "Alarms"
  },
  {
    id: "proj2",
    title: "Installation & Commissioning of Fire Extinguishers",
    location: "National School Campus, Kiambu",
    description: "Supplied and installed over 150 certified ABC Dry Powder, CO₂, and water extinguishers across all academic, dormitory, and administrative blocks.",
    image: "/images/ter11.jpg",
    category: "Extinguishers"
  },
  {
    id: "proj3",
    title: "Warehouse Fire Protection System",
    location: "Industrial Logistic Park, Mombasa Road",
    description: "Completed comprehensive fire hydrant installation, fire sprinkler heads network, and wall-mounted high-pressure hose reel brackets for a 50,000 sq ft logistics depot.",
    image: "/images/ter13.jpg",
    category: "Hose Systems"
  }
];

export const GALLERY: GalleryItem[] = [
  { id: "g1", title: "Premium ABC Powder Extinguishers", category: "extinguishers", image: "/images/ter11.jpg" },
  { id: "g2", title: "Complete Office Fire Extinguisher Setup", category: "installations", image: "/images/ter16.jpg" },
  { id: "g3", title: "Smart Fire Alarm Panels", category: "alarms", image: "/images/ter12.jpg" },
  { id: "g4", title: "Workplace Evacuation & Safety Training", category: "training", image: "/images/ter14.jpg" },
  { id: "g5", title: "Safety PPE Inspection Event", category: "events", image: "/images/ter19.jpg" },
  { id: "g6", title: "Industrial Hose Reel Commissioning", category: "projects", image: "/images/ter13.jpg" },
  { id: "g7", title: "Emergency Backup Lighting Network", category: "installations", image: "/images/ter15.jpg" },
  { id: "g8", title: "Refilling & Certified Servicing Depot", category: "extinguishers", image: "/images/ter18.jpg" }
];

export const CLIENTS: ClientItem[] = [
  { id: "c1", name: "Apex Commercial Hubs", category: "Offices" },
  { id: "c2", name: "Greenwood Academy", category: "Schools" },
  { id: "c3", name: "Royal Plaza Hotel", category: "Hotels" },
  { id: "c4", name: "National Trust Bank", category: "Banks" },
  { id: "c5", name: "Mombasa Logistic Depots", category: "Industries" },
  { id: "c6", name: "St. Mary Medical Hospital", category: "Hospitals" },
  { id: "c7", name: "County Government Headquarters", category: "Government Offices" }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you install fire alarm systems?",
    answer: "Yes, we design, supply, install, commission, and maintain advanced addressable and conventional fire alarm systems tailored for residential, commercial, and industrial structures."
  },
  {
    id: "faq2",
    question: "Do you refill fire extinguishers?",
    answer: "Yes! We offer professional fire extinguisher refilling, testing, and servicing. Our depot is fully equipped for ABC Powder, CO2, Foam, Water, and Wet Chemical refills, including safety inspections and hydrostatic pressure tests."
  },
  {
    id: "faq3",
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: "Yes, we provide flexible Annual Maintenance Contracts. Our certified safety engineers will perform regular periodic checks, tests, and maintenance of fire alarms, fire hoses, sprinklers, and extinguishers to keep you fully compliant and safe."
  },
  {
    id: "faq4",
    question: "Are your products certified?",
    answer: "Absolutely. All our fire protection equipment and safety gear meet stringent local and international standards including KEBS, CE, EN3, and NFPA guidelines. We prioritize genuine, premium quality equipment."
  },
  {
    id: "faq5",
    question: "Do you provide emergency fire safety services?",
    answer: "Yes, our team provides urgent inspection, servicing, and technical assistance for fire panels, leaking valves, and active alarm system failures to ensure your business remains protected at all times."
  }
];
