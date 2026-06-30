// ──────────────────────────────────────────────────────────────────────────
// All editable portfolio content lives here. Update freely — components
// just read from this file, so changes here update the whole site.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Abizar Tsaqif Abrar',
  greeting: "Hi, I'm",
  titles: ['Software Engineer', 'Full-Stack Developer', 'UI/UX Designer'],
  summary:
    "Software Engineering undergraduate at Telkom University building end-to-end products across web, mobile, and user-centered design. I currently support teaching in Design Thinking and Software Construction, while shipping projects that blend clean engineering with thoughtful interfaces.",
  location: 'Jakarta, Indonesia',
  email: 'abizarabrarr@gmail.com',
  phone: '0811-8439-002',
  linkedin: 'https://linkedin.com/in/abizartsaqifabrar',
  github: '', // add GitHub profile URL
  resumeUrl: '', // add path/link to resume PDF, e.g. '/resume.pdf'
  avatarUrl: '', // add profile photo path
}

export const aboutStats = [
  { label: 'Years Learning', value: '3+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies', value: '15+' },
]

export const aboutText =
  "I'm a Software Engineering student who enjoys the full lifecycle of building products — from research and wireframes in Figma to writing clean, tested code in production. Outside of coursework, I mentor peers as a Teaching Assistant, contribute to student organizations, and look for opportunities to turn ideas into usable software."

export const education = [
  {
    school: 'Telkom University',
    degree: 'Bachelor of Software Engineering (B.Eng.)',
    period: 'September 2023 — Present',
    location: 'Bandung, ID',
    detail: 'GPA: 3.51 / 4.00',
    coursework: [
      'Human-Computer Interaction',
      'UX Design',
      'UI Design',
      'Software Construction',
      'Software Design & Architecture',
      'Object-Oriented Programming',
      'Database Systems',
      'Software Testing & QA',
      'Web Application Development',
      'Mobile Application Development',
      'Data Structures & Algorithms',
    ],
  },
  {
    school: 'SMKN 2 Jakarta',
    degree: 'Vocational High School Diploma — Software Engineering',
    period: 'July 2020 — June 2023',
    location: 'Jakarta, ID',
    detail: null,
    coursework: ['Web Development', 'OOP', 'Database Systems', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
]

export const experience = [
  {
    company: 'Telkom University',
    role: 'Teaching Assistant — Design Thinking',
    period: 'Feb 2026 — Present',
    location: 'Bandung, ID',
    summary:
      'Guide students through the full user-centered design process, from problem framing to validated prototypes.',
    details: [
      'Mentor students through Empathize, Define, Ideate, Prototype, and Test methodologies to develop user-focused solutions.',
      'Support user research efforts including personas, empathy maps, and journey maps.',
      'Review wireframes and high-fidelity prototypes built in Figma, giving feedback on usability and visual hierarchy.',
      'Help facilitate usability testing sessions and guide iteration based on findings.',
      'Assist lecturers with assignment evaluation and classroom discussions.',
    ],
  },
  {
    company: 'Informatics Laboratory, Telkom University',
    role: 'Laboratory Teaching Assistant — Software Construction',
    period: 'Feb 2026 — Present',
    location: 'Bandung, ID',
    summary:
      'Support undergraduate labs on clean code, testing, and object-oriented engineering practices.',
    details: [
      'Mentor students in Clean Code principles, Table-Driven Testing, and OOP best practices.',
      'Guide students on writing maintainable code through naming conventions and refactoring techniques.',
      'Help students implement testing and debugging strategies during practical sessions.',
      'Evaluate programming assignments and provide targeted technical feedback.',
      'Prepare lab materials and assist live coding demonstrations.',
    ],
  },
  {
    company: 'Secretariat General of the DPD RI',
    role: 'Administrative Intern — Bureau of Organization, HR & Cooperation',
    period: 'Feb 2022 — May 2022',
    location: 'Jakarta, ID',
    summary:
      'Handled official documentation and cross-department coordination at a national legislative body.',
    details: [
      'Managed incoming and outgoing official correspondence with accurate documentation.',
      'Oversaw renewal of legal documents including licenses, agreements, and certificates.',
      'Maintained physical and digital filing systems for daily administrative operations.',
      'Coordinated communication between the OKK bureau and other internal departments.',
      'Prepared meeting logistics, schedules, and supporting materials.',
    ],
  },
]

// Add or duplicate project objects freely — ProjectCard renders whatever is here.
export const projects = [
  {
    name: 'Project Name One',
    description:
      'A short, outcome-focused description of what this project does and the problem it solves. Replace with real project details.',
    image: '',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    github: '',
    demo: '',
  },
  {
    name: 'Project Name Two',
    description:
      'A short, outcome-focused description of what this project does and the problem it solves. Replace with real project details.',
    image: '',
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: '',
    demo: '',
  },
  {
    name: 'Project Name Three',
    description:
      'A short, outcome-focused description of what this project does and the problem it solves. Replace with real project details.',
    image: '',
    tech: ['Laravel', 'PHP', 'MySQL'],
    github: '',
    demo: '',
  },
]

export const skills = {
  'UI/UX Design': ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'User Flow', 'Information Architecture', 'Design Thinking', 'Usability Testing', 'Design Systems'],
  'Programming Languages': ['Java', 'C#', 'JavaScript', 'PHP', 'Dart', 'SQL'],
  'Frameworks & Technologies': ['Flutter', 'ASP.NET Core', 'Laravel', 'React', 'RESTful API', 'HTML5', 'CSS3'],
  Tools: ['VS Code', 'Visual Studio', 'GitHub', 'Postman', 'Microsoft Office'],
  'Software Engineering': ['OOP', 'Clean Code', 'Software Construction', 'Software Testing'],
}

export const organizations = [
  {
    org: 'Software Engineering Student Association (HIMA RPL)',
    position: 'Organizational Management Division',
    period: 'Feb 2026 — Present',
    location: 'Telkom University, Bandung',
    description:
      'Coordinate divisional work program timelines, manage administrative documentation, and monitor program execution and post-event evaluation across the association.',
  },
  {
    org: 'Informatics Selecta',
    position: 'Member, Guardian Force Division',
    period: 'Jun 2025 — Nov 2025',
    location: 'Telkom University, Bandung',
    description:
      'Supervised multi-sport tournaments, maintained order and safety protocols, and acted as first point of contact for resolving in-match disputes.',
  },
  {
    org: 'PRADA (Ramadan & Eid al-Adha Committee)',
    position: 'Public Relations Staff',
    period: 'Nov 2024 — Jun 2025',
    location: 'Telkom University, Bandung',
    description:
      "Managed community communication for the university's Eid al-Adha qurban program and promoted it through social media and student organization outreach.",
  },
  {
    org: 'Telkom Dormitory',
    position: 'Dorm Team Member',
    period: 'Dec 2023 — Dec 2024',
    location: 'Telkom University, Bandung',
    description:
      'Maintained a safe and orderly dormitory environment, fostered resident collaboration, and served as liaison between residents and management.',
  },
]

// Replace title/issuer/date/image/url as you earn or update certificates.
// Keep the array at any length — CertificateCard renders each entry.
export const certifications = [
  {
    title: 'Smart IT Competition 2026 — UI/UX Design',
    issuer: 'Sekolah Vokasi D3 Teknik Informatika UNS',
    date: '2026',
    image: '',
    url: '',
  },
  {
    title: 'EISD Hackathon 2025 — Software Innovation Development',
    issuer: 'EISD Laboratory, Telkom University',
    date: '2025',
    image: '',
    url: '',
  },
  {
    title: 'Cyber Security Training — CompTIA Module',
    issuer: 'InfraDigital Foundation',
    date: 'June 2022',
    image: '',
    url: '',
  },
  {
    title: 'Machine Learning & Deep Learning Specialization',
    issuer: 'Kaggle Learn — InfraDigital Foundation',
    date: 'June 2026',
    image: '',
    url: '',
  },
  { title: '', issuer: '', date: '', image: '', url: '' },
  { title: '', issuer: '', date: '', image: '', url: '' },
]
