// All site content lives here so it is easy to update without touching components.
// Facts come from Hamisi's CV and his live projects. Replace placeholders marked TODO.

export const profile = {
  name: 'Hamisi Abdalla',
  location: 'Ukunda, Kenya',
  linkedin: 'https://www.linkedin.com/in/hamisi-hamisi',
  github: 'https://github.com/Bwanakali254',
  cv: '/Hamisi-Abdalla-CV.pdf',
}

export const heroChips = [
  'Windows Server & Active Directory',
  'LAN / WAN & Wi-Fi',
  'React & Node.js',
  'Live e-commerce in production',
]

export const journey = [
  {
    id: 'foundation',
    index: '01',
    period: 'Jan 2023 – Nov 2025',
    title: 'Learning the stack',
    place: 'Technical University of Mombasa',
    body: 'A Diploma in Information and Communication Technology (Credit): the foundation under everything that follows.',
    points: [
      'Coursework in networking, systems administration and ICT infrastructure',
      'Diploma in IT Support (Alison), completed Sep 2025',
    ],
    accent: '#35e0c1',
    art: 'terminal',
  },
  {
    id: 'kwale',
    index: '02',
    period: 'May – Aug 2024',
    title: 'The server room',
    place: 'County Government of Kwale · ICT Support Technician (Attachment)',
    body: 'My first look at infrastructure that real people depend on every working day.',
    points: [
      'Assisted with Windows Server setup and user account administration',
      'Installed and configured desktops, printers and networking devices',
      'Managed wireless access points to improve connectivity',
      'Supported IFMIS and CMS system operations',
    ],
    accent: '#5aa9ff',
    art: 'server',
  },
  {
    id: 'coast',
    index: '03',
    period: 'Sep – Oct 2025',
    title: 'Signal on the coast',
    place: 'North Coast Beach Hotel · ICT Technician Assistant (Volunteer)',
    body: 'Hospitality IT runs on Wi-Fi that guests never think about, until it drops.',
    points: [
      'Hardware and software support across multiple hotel departments',
      'Troubleshot LAN and guest Wi-Fi connectivity issues',
      'Supported access point configuration and network stability improvements',
      'Delivered end-user support to reduce operational downtime',
    ],
    accent: '#3fd0ff',
    art: 'wifi',
  },
  {
    id: 'sunmega',
    index: '04',
    period: 'Dec 2025 – Present',
    title: 'Going live',
    place: 'SunMega Limited · IT Systems & Website Support (Contract)',
    body: 'Where the two halves meet: I build and run a live e-commerce platform for a solar solutions company.',
    points: [
      'Developed and maintain the live e-commerce platform',
      'Manage hosting configuration, website updates and performance monitoring',
      'Troubleshoot payment gateway issues to keep operations uninterrupted',
      'Ship security updates and performance improvements',
    ],
    accent: '#ffb347',
    art: 'sun',
  },
  {
    id: 'next',
    index: '05',
    period: 'Now',
    title: 'The next node',
    place: 'Open to new opportunities',
    body: 'Looking for a team where reliable systems and careful engineering matter.',
    points: [
      'Ready for full-time IT Support or Network Technician roles',
      'Open to web development projects',
      'Based in Ukunda, Kenya',
    ],
    accent: '#35e0c1',
    art: 'network',
  },
]

export const projects = [
  {
    title: 'SunMega Limited',
    host: 'sunmega.co.ke',
    url: 'https://sunmega.co.ke/',
    kicker: 'Solar e-commerce · Contract, Dec 2025 – present',
    summary:
      'A live e-commerce platform for a solar solutions company. I develop it, run the hosting, monitor performance, keep payment integration working and ship security updates.',
    tags: ['E-commerce', 'Hosting', 'Payments', 'Security'],
    c1: '#3a2a08',
    c2: '#b8741a',
  },
  {
    title: 'Sun Mega Group',
    host: 'sunmegalimited.vercel.app',
    url: 'https://sunmegalimited.vercel.app/',
    kicker: 'Group website · Solar, glass & interior, real estate',
    summary:
      'One front door for three business lines. The site presents the group and routes visitors to the solar, glass and interior, and property divisions under a single brand.',
    tags: ['Brand site', 'Multi-division', 'Vercel', 'Responsive'],
    c1: '#0b1c33',
    c2: '#1c3f69',
  },
  {
    title: 'Univance Education',
    host: 'univanceeducation.com',
    url: 'https://univanceeducation.com/',
    kicker: 'Study-abroad consultancy · Nairobi',
    summary:
      'A lead-focused site for a study-abroad consultancy: six services, destination guides, a program finder and one-tap WhatsApp consultation.',
    tags: ['Lead generation', 'Program finder', 'WhatsApp CTA'],
    c1: '#0a2a2a',
    c2: '#17806f',
  },
  {
    title: 'ENT Services',
    host: 'ent-services.vercel.app',
    url: 'https://ent-services.vercel.app/',
    kicker: 'Travel & lifestyle · Kenya',
    summary:
      'A travel and lifestyle brand offering curated trips, reliable transfers and premium gear in Kenya.',
    tags: ['Brand site', 'Travel', 'Vercel'],
    c1: '#2a0e1c',
    c2: '#a3304f',
    // Uses the existing screenshot. Add `img` to the other projects the same way (see README).
    useExistingImage: true,
  },
]

export const testimonial = {
  quote: 'Amazing work! Delivered on time and exceeded expectations.',
  name: 'Mohammed',
  title: 'CEO, Southside Clothing',
}

export const toolkit = [
  {
    heading: 'Keep it running',
    lead: 'IT support',
    items: [
      'Troubleshooting hardware, software and Windows environments',
      'Windows Server and Active Directory',
      'Desktop, printer and device installation',
      'POS systems support',
      'End-user technical support',
    ],
  },
  {
    heading: 'Keep it connected',
    lead: 'Networking',
    items: [
      'LAN / WAN administration',
      'Wi-Fi and access point configuration',
      'VoIP and CCTV configuration',
      'Network stability and downtime reduction',
    ],
  },
  {
    heading: 'Keep it live',
    lead: 'Web & hosting',
    items: [
      'React, JavaScript, Node.js / Express, Tailwind CSS',
      'Supabase, Firebase and MongoDB',
      'Hosting management and performance monitoring',
      'Payment gateway integration and support',
      'Security updates and site maintenance',
    ],
  },
]

export const education = [
  {
    title: 'Diploma in Information and Communication Technology (Credit)',
    place: 'Technical University of Mombasa',
    period: 'Jan 2023 – Nov 2025',
  },
  {
    title: 'Diploma in Information Technology Support',
    place: 'Alison Online Course',
    period: 'Completed Sep 2025',
  },
]

export const languages = ['English · Full professional proficiency', 'Swahili · Native']
