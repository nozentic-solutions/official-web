export interface Service { index: string; title: string; desc: string; }
export interface ServiceDetail { index: string; title: string; desc: string; features: string[]; }
export interface Stat { value: string; label: string; }
export interface Region { name: string; x: number; y: number; }
export interface Testimonial { quote: string; name: string; role: string; }
export interface Value { index: string; title: string; desc: string; }
export interface TeamMember { initials: string; name: string; role: string; }
export interface StartupTier { tag: string; name: string; timeline: string; highlight: boolean; features: string[]; }
export interface SprintStep { index: string; title: string; desc: string; }

export const services: Service[] = [
  { index: '01', title: 'Web Design', desc: 'Marketing sites and web apps designed with real conversion and brand craft.' },
  { index: '02', title: 'Custom Software', desc: 'Bespoke platforms and internal tools built to your exact workflow.' },
  { index: '03', title: 'App Development', desc: 'Native and cross-platform mobile apps, shipped to the App Store and Play Store.' },
  { index: '04', title: 'Managed IT / MSP', desc: 'Round-the-clock infrastructure, security and support so you never firefight alone.' },
];

export const servicesDetailed: ServiceDetail[] = [
  { index: '01 / WEB DESIGN', title: 'Web Design & Development', desc: 'From brand-led marketing sites to complex web applications — designed for conversion, built for speed.', features: ['UX/UI design systems', 'Marketing sites & landing pages', 'E-commerce platforms', 'Performance & SEO engineering'] },
  { index: '02 / SOFTWARE', title: 'Custom Software Development', desc: 'Bespoke platforms, internal tools and automation built around how your business actually operates.', features: ['SaaS product engineering', 'Internal tools & dashboards', 'API & systems integration', 'Legacy modernization'] },
  { index: '03 / APPS', title: 'App Development', desc: 'Native iOS/Android and cross-platform apps that feel fast, look sharp, and ship on schedule.', features: ['iOS & Android native', 'React Native / Flutter', 'App Store & Play Store launch', 'Post-launch iteration'] },
  { index: '04 / MSP', title: 'Managed IT Services (MSP)', desc: 'Infrastructure, security and support run by us, so your team can focus on the product.', features: ['24/7 monitoring & support', 'Cloud infrastructure & DevOps', 'Security & compliance', 'Backup & disaster recovery'] },
];

export const quickStats: Stat[] = [
  { value: 'Est. 2026', label: 'FOUNDED' },
  { value: '30+', label: 'COUNTRIES SERVED' },
  { value: '4', label: 'CORE DISCIPLINES' },
  { value: '99.9%', label: 'CLIENT UPTIME' },
];

export const reachStats: Stat[] = [
  { value: '30+', label: 'COUNTRIES' },
  { value: '5', label: 'TIME ZONES COVERED' },
  { value: '<1hr', label: 'AVG. FIRST RESPONSE' },
];

export const regions: Region[] = [
  { name: 'New York', x: 22, y: 38 },
  { name: 'London', x: 46, y: 26 },
  { name: 'Berlin', x: 52, y: 30 },
  { name: 'Singapore', x: 78, y: 62 },
  { name: 'São Paulo', x: 32, y: 78 },
];

export const testimonials: Testimonial[] = [
  { quote: 'Nozentic shipped our MVP in five weeks and it hasn\u2019t needed a rewrite since.', name: 'Aria Kessler', role: 'Founder, Ledgerly' },
  { quote: 'They think like product owners, not contractors. That changed everything.', name: 'Marcus Oyelaran', role: 'CTO, Orbital Health' },
  { quote: 'Our infrastructure has been rock solid since Nozentic took it over.', name: 'Priya Nathan', role: 'COO, Vantify' },
];

export const values: Value[] = [
  { index: '01', title: 'Ship, don\u2019t theorize', desc: 'We favor working software over polished decks.' },
  { index: '02', title: 'Design is engineering', desc: 'Craft and code quality are the same discipline to us.' },
  { index: '03', title: 'Global by default', desc: 'Distributed teams built for round-the-clock delivery.' },
  { index: '04', title: 'Own the outcome', desc: 'One team accountable from spec to production.' },
];

export const team: TeamMember[] = [
  { initials: 'RK', name: 'Rhea Kapoor', role: 'Co-Founder, Design' },
  { initials: 'DM', name: 'Daniel Moss', role: 'Co-Founder, Engineering' },
  { initials: 'TA', name: 'Tomas Alvez', role: 'Head of Software' },
  { initials: 'SN', name: 'Sana Ndiaye', role: 'Head of Managed Services' },
];

export const startupTiers: StartupTier[] = [
  { tag: 'MVP SPRINT', name: 'Launch', timeline: '3–6 weeks', highlight: false, features: ['One core product flow', 'Web or mobile app', 'Design + build in parallel', 'Launch-ready in weeks'] },
  { tag: 'MOST POPULAR', name: 'Growth', timeline: '6–10 weeks', highlight: true, features: ['Full product build', 'Web + mobile', 'Analytics & auth included', '90 days post-launch support'] },
  { tag: 'RETAINER', name: 'Scale Partner', timeline: 'Ongoing', highlight: false, features: ['Dedicated pod', 'Continuous roadmap delivery', 'Managed infrastructure', 'Priority response SLA'] },
];

export const sprintSteps: SprintStep[] = [
  { index: '01', title: 'Discovery', desc: 'Scope, users, and success metrics in one working session.' },
  { index: '02', title: 'Design', desc: 'Clickable UI in days, not weeks.' },
  { index: '03', title: 'Build', desc: 'Engineers ship in weekly increments you can see.' },
  { index: '04', title: 'Launch', desc: 'Deployed, monitored, and ready for your first users.' },
];

export const projectTypes: string[] = ['Web Design', 'Custom Software', 'App Development', 'Managed IT'];
