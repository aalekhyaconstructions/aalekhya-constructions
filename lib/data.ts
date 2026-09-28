import {
  Home,
  Building2,
  Hotel,
  UtensilsCrossed,
  Heart,
  Waves,
  TreePine,
  PaintBucket,
  Hammer,
  HardHat,
  Ruler,
  MessageSquare,
  PenTool,
  Network,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

export const CONTACT = {
  email: 'aalekhyaconstructions@gmail.com',
  whatsapp: '918474894473',
  whatsappDisplay: '+91 84748 94473',
  tagline: 'Building Landmarks. Creating Legacies.',
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}`;
export const MAILTO_URL = `mailto:${CONTACT.email}`;

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  description: string;
  image: string;
  features: string[];
};

export const SERVICES: Service[] = [
  {
    slug: 'luxury-homes',
    title: 'Luxury Homes',
    icon: Home,
    blurb: 'Custom-built premium residences crafted with timeless elegance.',
    description:
      'We design and build bespoke luxury homes that blend architectural sophistication with modern functionality — every detail engineered for comfort, prestige and lasting value.',
    image:
      'https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Bespoke architectural design', 'Premium material selection', 'Smart home integration', 'Landscape coordination'],
  },
  {
    slug: 'villas',
    title: 'Villas',
    icon: Building2,
    blurb: 'Private villa estates with cinematic exteriors and refined interiors.',
    description:
      'From concept to handover, our villas deliver a resort-like living experience — open-plan layouts, floor-to-ceiling glazing, and materials chosen for both beauty and durability.',
    image:
      'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Open-plan luxury layouts', 'Panoramic glazing', 'Private pools & decks', 'Energy-efficient systems'],
  },
  {
    slug: 'resorts',
    title: 'Resorts & Tourism',
    icon: Hotel,
    blurb: 'Destination resorts that elevate hospitality into an experience.',
    description:
      'We create resort properties that feel like a retreat — curated guest flows, immersive landscaping, and architecture that responds to the natural surroundings.',
    image:
      'https://images.pexels.com/photos/3011575/pexels-photo-3011575.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Guest experience planning', 'Tropical & modern themes', 'Pool & amenity design', 'Sustainable materials'],
  },
  {
    slug: 'cafeterias',
    title: 'Cafeterias & Restaurants',
    icon: UtensilsCrossed,
    blurb: 'Atmospheric dining spaces designed to delight every guest.',
    description:
      'Ambiance is everything. Our cafeterias and restaurants are designed around mood, flow, and brand identity — engineered acoustics, layered lighting, and durable finishes.',
    image:
      'https://images.pexels.com/photos/17430161/pexels-photo-17430161.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Mood-driven lighting', 'Acoustic engineering', 'Commercial-grade kitchens', 'Brand-aligned interiors'],
  },
  {
    slug: 'commercial-buildings',
    title: 'Commercial Buildings',
    icon: Building2,
    blurb: 'Modern office and retail complexes built for performance.',
    description:
      'Function meets form. We deliver commercial spaces that optimise workflow, impress clients, and stand up to heavy daily use — with flexible floor plates and striking facades.',
    image:
      'https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Flexible floor plates', 'Striking facades', 'High-traffic durability', 'Parking & access planning'],
  },
  {
    slug: 'marriage-halls',
    title: 'Marriage Halls',
    icon: Heart,
    blurb: 'Grand celebration venues engineered for unforgettable events.',
    description:
      'Capacity, comfort, and grandeur. Our marriage halls combine spacious pillar-free layouts with premium acoustics, lighting rigs, and elegant decor infrastructure.',
    image:
      'https://images.pexels.com/photos/30311728/pexels-photo-30311728.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Pillar-free spans', 'Premium acoustics', 'Integrated lighting rigs', 'VIP & guest flow design'],
  },
  {
    slug: 'swimming-pools',
    title: 'Swimming Pools',
    icon: Waves,
    blurb: 'Bespoke pools and water features for residential and hospitality use.',
    description:
      'From infinity edges to resort-style lagoons, we engineer pools that are visually stunning, hygienically sound, and built to last with premium filtration and finishing.',
    image:
      'https://images.pexels.com/photos/19051279/pexels-photo-19051279.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Infinity & lagoon designs', 'Premium filtration', 'Deck & lighting integration', 'Year-round usability'],
  },
  {
    slug: 'parks-landscaping',
    title: 'Parks & Landscaping',
    icon: TreePine,
    blurb: 'Lush green spaces and themed parks that elevate any location.',
    description:
      'We transform open land into living landscapes — themed parks, walking trails, water features, and planting schemes that thrive in the local climate.',
    image:
      'https://images.pexels.com/photos/7546611/pexels-photo-7546611.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Themed park design', 'Native planting schemes', 'Walking & seating areas', 'Water & lighting features'],
  },
  {
    slug: 'gates-compound-walls',
    title: 'Gates & Compound Walls',
    icon: PaintBucket,
    blurb: 'Statement entrances and boundary solutions with premium finishes.',
    description:
      'First impressions count. We design and build gates and compound walls that secure your property while making a bold architectural statement.',
    image:
      'https://images.pexels.com/photos/8134817/pexels-photo-8134817.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Custom gate fabrication', 'Decorative boundary walls', 'Automated access systems', 'Lighting integration'],
  },
  {
    slug: 'renovation-redevelopment',
    title: 'Renovation & Redevelopment',
    icon: Hammer,
    blurb: 'Revive and re-imagine existing structures with modern upgrades.',
    description:
      'Breathe new life into older properties. Our renovation and redevelopment services modernise structures, improve efficiency, and elevate value without starting from scratch.',
    image:
      'https://images.pexels.com/photos/27164969/pexels-photo-27164969.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Structural assessment', 'Modern material upgrades', 'Interior remodelling', 'Value enhancement'],
  },
  {
    slug: 'infrastructure-solutions',
    title: 'Infrastructure Solutions',
    icon: HardHat,
    blurb: 'Foundations, drainage, roads and civil works built to last.',
    description:
      'Beyond buildings, we deliver the infrastructure that supports communities — roads, drainage, site grading, and civil works engineered for longevity.',
    image:
      'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    features: ['Roads & paving', 'Drainage systems', 'Site grading', 'Civil foundations'],
  },
];

export type Project = {
  id: string;
  title: string;
  location: string;
  value: string;
  category: 'Residential' | 'Commercial' | 'Landscaping' | 'Resorts' | 'Parks';
  image: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'residential-gogamukh',
    title: 'Residential Home',
    location: 'Gogamukh, Dhemaji',
    value: '₹1.2 Crore',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A premium two-storey residence featuring panoramic glazing, illuminated facades, and a spacious private estate — delivered with meticulous attention to detail.',
  },
  {
    id: 'park-itanagar',
    title: 'Nature-Themed Park',
    location: 'Itanagar, Arunachal Pradesh',
    value: '₹50 Lakhs',
    category: 'Parks',
    image:
      'https://images.pexels.com/photos/6168453/pexels-photo-6168453.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A vibrant nature-themed park with modern architectural elements, curated greenery, and immersive walking paths designed for community enjoyment.',
  },
  {
    id: 'cafeteria-dhemaji',
    title: 'Modern Cafeteria',
    location: 'Dhemaji',
    value: '₹2.1 Crore',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/27669088/pexels-photo-27669088.png?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A contemporary cafeteria with minimalist furniture, artistic wall decor, and an atmosphere engineered for relaxation and refined dining.',
  },
  {
    id: 'villa-estate',
    title: 'Private Villa Estate',
    location: 'Dhemaji, Assam',
    value: '₹1.8 Crore',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/16573669/pexels-photo-16573669.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A luxurious modern villa showcasing exotic architecture, lush greenery, and elegant outdoor living spaces.',
  },
  {
    id: 'resort-bali',
    title: 'Tropical Resort',
    location: 'Northeast India',
    value: '₹3.5 Crore',
    category: 'Resorts',
    image:
      'https://images.pexels.com/photos/2259226/pexels-photo-2259226.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A tropical resort retreat featuring serene pool areas, palm-lined walkways, and architecture that blends seamlessly with nature.',
  },
  {
    id: 'office-complex',
    title: 'Commercial Office Complex',
    location: 'Assam',
    value: '₹2.6 Crore',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A contemporary office complex with a striking glass-and-steel facade designed for high-performance work environments.',
  },
  {
    id: 'marriage-hall',
    title: 'Grand Marriage Hall',
    location: 'Dhemaji, Assam',
    value: '₹1.5 Crore',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/33914530/pexels-photo-33914530.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A luxurious wedding hall with chandeliers, floral arrangements, and elegant celebration infrastructure.',
  },
  {
    id: 'landscape-garden',
    title: 'Manicured Garden Estate',
    location: 'Itanagar, Arunachal Pradesh',
    value: '₹35 Lakhs',
    category: 'Landscaping',
    image:
      'https://images.pexels.com/photos/39597243/pexels-photo-39597243.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A beautifully manicured garden estate with hedge mazes, pathways, and premium landscaping.',
  },
  {
    id: 'pool-deck',
    title: 'Infinity Pool & Deck',
    location: 'Assam',
    value: '₹45 Lakhs',
    category: 'Landscaping',
    image:
      'https://images.pexels.com/photos/7974839/pexels-photo-7974839.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
    description:
      'A stunning poolside retreat with infinity edges, lounge areas, and integrated lighting for evening ambiance.',
  },
];

export type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WHY_AALEKHYA: WhyItem[] = [
  { title: 'Professional Planning', description: 'Every project begins with detailed feasibility, zoning and architectural planning.', icon: Ruler },
  { title: 'Detailed Estimates', description: 'Transparent BOQ and cost estimates so you know exactly what you are paying for.', icon: FileText },
  { title: 'Transparent Communication', description: 'Regular updates, site reports, and open channels throughout the build.', icon: MessageSquare },
  { title: 'Quality-Driven Execution', description: 'Premium materials and skilled craftsmanship at every stage of construction.', icon: ShieldCheck },
  { title: 'Modern Design Support', description: '3D visualisation and contemporary design tailored to your vision.', icon: PenTool },
  { title: 'Experienced Technical Network', description: 'A trusted network of engineers, architects and specialists across the region.', icon: Network },
];

export const WHY_CHOOSE: WhyItem[] = [
  { title: 'Professional Documentation', description: 'Complete drawings, approvals and documentation handled end-to-end.', icon: FileText },
  { title: 'Detailed BOQ & Estimates', description: 'Itemised bills of quantities with no hidden costs or surprises.', icon: Ruler },
  { title: 'Modern Planning', description: 'Contemporary spatial planning optimised for how you live and work.', icon: PenTool },
  { title: 'Dedicated Coordination', description: 'A single point of contact coordinating every vendor and milestone.', icon: Network },
  { title: 'Quality Standards', description: 'Material and workmanship benchmarks enforced on every site.', icon: ShieldCheck },
  { title: 'Transparent Communication', description: 'Clear, honest updates from the first meeting to final handover.', icon: MessageSquare },
];

export const PROCESS_STEPS = [
  { step: '01', title: 'Consultation', description: 'We discuss your vision, requirements, budget and timeline.' },
  { step: '02', title: 'Site Visit', description: 'Our team inspects the plot and assesses feasibility on the ground.' },
  { step: '03', title: 'Planning', description: 'Detailed floor plans, layouts and structural planning are prepared.' },
  { step: '04', title: '3D Design', description: 'Photorealistic 3D renders bring your project to life before we build.' },
  { step: '05', title: 'Estimation', description: 'A transparent bill of quantities and project cost estimate is delivered.' },
  { step: '06', title: 'Construction', description: 'Skilled execution with quality control at every milestone.' },
  { step: '07', title: 'Final Delivery', description: 'We hand over a landmark you will be proud of, on time.' },
];

export const STATS = [
  { value: 3.8, suffix: '+', prefix: '₹', label: 'Crore Project Portfolio', sub: 'Across completed and ongoing work' },
  { value: 2, suffix: '', prefix: '', label: 'Residential Projects', sub: 'Homes & villas delivered' },
  { value: 3, suffix: '', prefix: '', label: 'Commercial Developments', sub: 'Cafeterias, halls & offices' },
  { value: 3, suffix: '', prefix: '', label: 'Landscape Projects', sub: 'Parks, pools & gardens' },
];

export const FAQS = [
  { q: 'What areas does Aalekhya Constructions serve?', a: 'We are based in Assam and serve clients across Northeast India, including Arunachal Pradesh and surrounding states.' },
  { q: 'Do you provide free consultations and site visits?', a: 'Yes. Your first consultation and site visit are completely free. Use the consultation form or WhatsApp us to schedule one.' },
  { q: 'Can I see a 3D design before construction begins?', a: 'Absolutely. Every project includes 3D visualisation so you can review and approve the design before we break ground.' },
  { q: 'How are project costs estimated?', a: 'We provide a detailed bill of quantities (BOQ) with transparent line items, so you know exactly what each element costs.' },
  { q: 'Do you handle renovations and redevelopments?', a: 'Yes. We revitalise existing structures with modern upgrades, improved efficiency, and elevated value.' },
  { q: 'Is the project estimator on the website an exact quote?', a: 'No. The estimator is a planning tool that gives an approximate budget range. A detailed professional estimate is provided after consultation.' },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Estimator', href: '/estimator' },
  { label: 'Consultation', href: '/consultation' },
  { label: 'Contact', href: '/contact' },
];

export const ESTIMATOR_PROJECT_TYPES = [
  'House',
  'Villa',
  'Resort',
  'Cafeteria',
  'Commercial Building',
  'Marriage Hall',
  'Park',
  'Landscaping',
];

// Approx cost per sq ft (in INR) for budget estimation
export const ESTIMATE_RATES: Record<string, { low: number; high: number; category: string }> = {
  House: { low: 1700, high: 2400, category: 'Premium Residential Construction' },
  Villa: { low: 2600, high: 3800, category: 'Luxury Villa Construction' },
  Resort: { low: 3200, high: 4800, category: 'Hospitality / Resort Development' },
  Cafeteria: { low: 2200, high: 3400, category: 'Commercial F&B Construction' },
  'Commercial Building': { low: 2000, high: 3200, category: 'Commercial Construction' },
  'Marriage Hall': { low: 1800, high: 2800, category: 'Commercial Event Venue' },
  Park: { low: 400, high: 900, category: 'Park & Landscape Development' },
  Landscaping: { low: 300, high: 750, category: 'Landscape Development' },
};
