export const profile = {
  name: "Deeksha Pathak",
  title: "Java Full Stack Developer & AI Engineer",
  tagline:
    "Building scalable backend systems with Spring Boot, Microservices, and ERPNext/Frappe — with hands-on work in secure auth, real-time data, and RAG-based AI tooling.",
  email: "deekshapathak920@gmail.com",
  phone: "+91-9389289870",
  location: "Gurgaon, India",
  linkedin: "https://www.linkedin.com/in/deeksha-pathak-webdeveloper",
};

export const headlines = {
  hero: {
    eyebrow: "Java · Spring Boot · AI",
    line1: "Code that runs the business,",
    line2: "not just the demo.",
    sub: "I build backend systems and workflows that enterprise teams actually rely on — from transport logistics to AI-powered compliance tools.",
  },
  about: {
    num: "00",
    eyebrow: "About",
    line1: "Backend-first, AI-curious,",
    line2: "obsessed with systems that hold up.",
  },
  experience: {
    num: "01",
    eyebrow: "Career",
    line1: "Three roles. One habit:",
    line2: "ship it, then make it faster.",
  },
  projects: {
    num: "02",
    eyebrow: "Proof of work",
    line1: "A platform that reads",
    line2: "documents so people don't have to.",
  },
  skills: {
    num: "03",
    eyebrow: "Toolkit",
    line1: "The stack I reach for",
    line2: "when it has to work.",
  },
  education: {
    num: "04",
    eyebrow: "Foundation",
    line1: "Where the fundamentals",
    line2: "came from.",
  },
  contact: {
    num: "05",
    eyebrow: "Let's talk",
    line1: "Got a backend problem?",
    line2: "Let's fix it.",
    sub: "Open to new roles, freelance work, and interesting problems. Reach out any time.",
  },
};

export const about = {
  paragraphs: [
    "I started out writing Java backends for enterprise platforms, and somewhere between debugging a Keycloak SSO flow and wiring a RAG pipeline into a compliance chatbot, I realized what actually holds my attention: systems that have to be correct, not just impressive in a demo.",
    "Most of my work lives in the unglamorous middle of software — the DocType that encodes a freight booking, the JWT check that has to run on every request, the WebSocket feed that can't drop a packet. I like that kind of problem. It rewards patience over flash.",
    "Lately that's pulled me toward AI tooling — not as a buzzword, but as another backend problem: how do you make retrieval fast, grounded, and boring enough to trust in production.",
  ],
  stats: [
    { value: "2+", label: "years shipping backend systems" },
    { value: "3", label: "companies, 3 very different stacks" },
    { value: "6", label: "domains touched — logistics to compliance AI" },
  ],
};

export const experience = [
  {
    company: "NRS Consultant",
    role: "Software Engineer",
    location: "Gurgaon, India",
    start: "Jul 2026",
    end: "Present",
    current: true,
    points: [
      "Worked on ERPNext-based enterprise applications for Transport Management and Freight Forwarding business processes.",
      "Developed and enhanced Transport Management System (TMS) features covering vehicle, driver, route, trip, consignment, park, job, and settlement workflows.",
      "Worked on Freight Forwarding modules including Enquiry, Quotation, Customer, Port, Booking, and shipment-related processes.",
      "Implemented and modified ERPNext DocTypes, forms, workflows, validations, and backend APIs based on business requirements.",
      "Worked with Python, Frappe Framework, JavaScript, and MariaDB/MySQL for application customization.",
      "Debugged existing workflows and implemented client-specific changes to improve end-to-end business processes.",
    ],
    stack: ["Python", "Frappe", "ERPNext", "JavaScript", "MariaDB"],
  },
  {
    company: "BitxiaTech",
    role: "Software Engineer",
    location: "Gurgaon, India",
    start: "Feb 2026",
    end: "Jun 2026",
    current: false,
    points: [
      "Developed backend services for simulation-based systems using Python, focused on scalability.",
      "Implemented JWT authentication with secure payload validation and database checks.",
      "Built REST APIs and WebSocket-based real-time features using Redis for live data handling.",
      "Optimized system performance by resolving an InfluxDB write overload and improving logging efficiency.",
      "Developed features including scenario management, client configuration, and event monitoring.",
    ],
    stack: ["Python", "JWT", "Redis", "WebSocket", "InfluxDB"],
  },
  {
    company: "Ascent Business Technology",
    role: "Java Full Stack Developer & AI Engineer",
    location: "Gurgaon, India",
    start: "Jan 2024",
    end: "Feb 2026",
    current: false,
    points: [
      "Developed backend systems using Java, Spring Boot, and Microservices architecture.",
      "Designed and implemented REST APIs for enterprise applications.",
      "Built a GRC platform using Spring Boot, Angular, and MySQL.",
      "Implemented authentication using Keycloak (OAuth2, RBAC, SSO).",
      "Worked with JDBC, MySQL, PostgreSQL for database design and optimization.",
      "Developed an AI-based chatbot using LangChain4j, OpenAI APIs, and RAG architecture.",
      "Deployed applications using Docker, AWS, Azure with CI/CD pipelines.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "Keycloak", "Docker"],
  },
];

export const projects = [
  {
    name: "GRC Platform with AI Chatbot",
    description:
      "Enterprise system for compliance and risk management, with an integrated AI chatbot using RAG architecture for intelligent document search.",
    points: [
      "Developed enterprise system for compliance and risk management.",
      "Integrated AI chatbot using RAG architecture for intelligent document search.",
      "Implemented semantic search using FAISS and ChromaDB.",
    ],
    stack: ["Spring Boot", "Angular", "MySQL", "LangChain4j", "FAISS", "ChromaDB"],
  },
];

export const skills = [
  {
    category: "Languages & Backend",
    items: ["Java", "Python", "SQL", "Spring Boot", "Microservices", "REST APIs", "JDBC", "Frappe Framework"],
  },
  {
    category: "Frontend & Tools",
    items: ["JavaScript", "Angular", "HTML", "CSS", "Ajax", "jQuery", "Git", "Postman", "VS Code"],
  },
  {
    category: "Security & Cloud",
    items: ["JWT", "Keycloak", "OAuth2", "RBAC", "AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    category: "Databases & Others",
    items: ["MySQL", "PostgreSQL", "MariaDB", "Redis", "InfluxDB", "LangChain", "RAG Architecture"],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (AI)",
    school: "Amity University, Noida",
    year: "2025",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    school: "Dr. Bhimrao Ambedkar University, Uttar Pradesh",
    year: "2023",
  },
];
