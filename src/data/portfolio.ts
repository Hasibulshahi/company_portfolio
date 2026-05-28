import client1 from '../assets/images/clients/client-1.svg'
import client2 from '../assets/images/clients/client-2.svg'
import client3 from '../assets/images/clients/client-3.svg'
import client4 from '../assets/images/clients/client-4.svg'
import client5 from '../assets/images/clients/client-5.svg'
import client6 from '../assets/images/clients/client-6.svg'
import event1 from '../assets/images/events/event1.svg'
import event2 from '../assets/images/events/event2.svg'
import event3 from '../assets/images/events/event3.svg'
import event4 from '../assets/images/events/event4.svg'
import founder1 from '../assets/images/founders/founder-1.svg'
import founder2 from '../assets/images/founders/founder-2.svg'
import founder3 from '../assets/images/founders/founder-3.svg'
import project1 from '../assets/images/projects/project-1.svg'
import project2 from '../assets/images/projects/project-2.svg'
import project3 from '../assets/images/projects/project-3.svg'
import project4 from '../assets/images/projects/project-4.svg'

export type NavItem = {
  id: SectionId
  label: string
}

export type SectionId =
  | 'about'
  | 'clients'
  | 'founders'
  | 'events'
  | 'projects'
  | 'contact'

export type Client = {
  name: string
  image: string
}

export type Founder = {
  name: string
  role: string
  bio: string
  image: string
  socialLinks: Array<{
    href: string
    label: string
    platform: 'github' | 'instagram' | 'linkedin' | 'x'
  }>
}

export type EventSlide = {
  title: string
  caption: string
  image: string
}

export type Project = {
  title: string
  description: string
  category: 'Advisory' | 'Digital' | 'Infrastructure'
  image: string
  technologies: string[]
}

export const navigationItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'clients', label: 'Clients' },
  { id: 'founders', label: 'Founders' },
  { id: 'events', label: 'Events' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const companyStats = [
  { value: '14+', label: 'years delivering transformation programs' },
  { value: '60+', label: 'enterprise clients across five markets' },
  { value: '$1.2B', label: 'project portfolio governed end-to-end' },
]

export const clients: Client[] = [
  { name: 'Northbridge Capital', image: client1 },
  { name: 'Aster Labs', image: client2 },
  { name: 'Harbor Grid', image: client3 },
  { name: 'Altura Health', image: client4 },
  { name: 'Summit Freight', image: client5 },
  { name: 'Lumen Civic', image: client6 },
]

export const founders: Founder[] = [
  {
    name: 'Maya Rahman',
    role: 'Managing Director',
    bio: 'Maya leads portfolio strategy with a background in infrastructure finance, stakeholder alignment, and operating model redesign for regulated industries.',
    image: founder1,
    socialLinks: [
      { href: 'https://linkedin.com', label: 'LinkedIn profile', platform: 'linkedin' },
      { href: 'https://x.com', label: 'X profile', platform: 'x' },
    ],
  },
  {
    name: 'Daniel Mercer',
    role: 'Chief Innovation Officer',
    bio: 'Daniel translates business ambition into digital roadmaps, pairing delivery rigor with product thinking to modernize customer and data platforms.',
    image: founder2,
    socialLinks: [
      { href: 'https://linkedin.com', label: 'LinkedIn profile', platform: 'linkedin' },
      { href: 'https://github.com', label: 'GitHub profile', platform: 'github' },
    ],
  },
  {
    name: 'Sofia Karim',
    role: 'Head of Client Partnerships',
    bio: 'Sofia builds executive partnerships grounded in measurable outcomes, helping boards and leadership teams align transformation investments to growth.',
    image: founder3,
    socialLinks: [
      { href: 'https://linkedin.com', label: 'LinkedIn profile', platform: 'linkedin' },
      { href: 'https://instagram.com', label: 'Instagram profile', platform: 'instagram' },
    ],
  },
]

export const eventSlides: EventSlide[] = [
  {
    title: 'Leadership Summit 2026',
    caption: 'Quarterly leadership summit focused on resilient operations and scenario planning.',
    image: event1,
  },
  {
    title: 'Innovation Lab Showcase',
    caption: 'Cross-functional prototypes demonstrating service redesign and data visualization.',
    image: event2,
  },
  {
    title: 'Client Strategy Forum',
    caption: 'Regional strategy forum bringing client teams together to review delivery milestones.',
    image: event3,
  },
  {
    title: 'Community Build Week',
    caption: 'Volunteer initiative pairing our delivery teams with social impact organizations.',
    image: event4,
  },
]

export const projects: Project[] = [
  {
    title: 'Portside Grid Command Center',
    description: 'A multi-agency command platform that unified operational reporting, risk escalation, and field coordination for a national energy operator.',
    category: 'Infrastructure',
    image: project1,
    technologies: ['Governance', 'Analytics', 'Cloud'],
  },
  {
    title: 'Aster Care Experience Layer',
    description: 'A patient-facing digital program that reworked appointment journeys, messaging, and service dashboards across twelve care sites.',
    category: 'Digital',
    image: project2,
    technologies: ['React', 'Design Systems', 'CX'],
  },
  {
    title: 'Northbridge Value Creation Office',
    description: 'A decision-support operating cadence for portfolio companies, combining board packs, KPI narratives, and investment prioritization.',
    category: 'Advisory',
    image: project3,
    technologies: ['PMO', 'Finance', 'Strategy'],
  },
  {
    title: 'Summit Freight Modern Dispatch',
    description: 'A logistics modernization initiative connecting dispatch planning, warehouse events, and mobile workflows for regional teams.',
    category: 'Digital',
    image: project4,
    technologies: ['Mobile', 'APIs', 'Operations'],
  },
]

export const contactDetails = {
  address: '145 Meridian Avenue, Level 12, Singapore 048940',
  email: 'hello@meridianforge.co',
  phone: '+65 6800 2147',
}
