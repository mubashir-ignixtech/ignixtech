import { Job } from "@/types/constantTypes"
import { Palette, Code, Smartphone, Bug, Server, Shield, Zap, Target, Users, Clock, Award, HeadphonesIcon, Search, Lightbulb, Rocket, Eye, Heart, Globe, Sparkles, Wallet, GraduationCap, Laptop, Coffee, Plane, PartyPopper, Goal, Users2 } from "lucide-react"

import { 
  // UI/UX
  SiReact, SiFigma, SiTypescript, SiTailwindcss, SiNextdotjs, SiFramer, SiStorybook,
  // Software Dev
  SiNodedotjs, SiPython, SiGo, SiGraphql, SiPostgresql, SiMongodb, SiRedis,
  // Mobile
  SiFlutter, SiSwift, SiKotlin, SiFirebase, SiApple, SiAndroid, SiSqlite,
  // QA
  SiSelenium, SiCypress, SiApachejmeter, SiGrafana, SiPostman, SiJest, SiAppium,
  // DevOps
  SiDocker, SiKubernetes, SiTerraform, SiGithubactions, SiGit, SiGooglecloud,
  // Cyber
  SiOwasp, SiBurpsuite, SiCloudflare, SiAuth0, SiKalilinux, SiVault, SiWireguard,

  SiOpenai, SiLangchain, SiChatwoot, SiZapier, SiN8N
} from "react-icons/si";
import { 
  FaPalette, FaCode, FaMobileAlt, FaBug, FaServer, FaShieldAlt ,FaRobot, FaCogs
} from "react-icons/fa";
import { LiaAdobe, LiaAmazon } from "react-icons/lia";
import { VscAzure } from "react-icons/vsc";


export const siteConfig = {
  name: "Ignixtech",
  description: "Engineering the Digital Future",
  links: {
    calendly: "https://calendly.com/rizwan-ignixtech",
  }
}

export const contactDetails = {
    email: "contact@ignixtech.ca",
    phone: "+1 (902) 707-6161",
    address: "299 Gary Martin Drive Bedford, Halifax, NS, Canada B4B 2E9",
    mapLink: "https://maps.app.goo.gl/kJD8FZBTDUuDtGiVA",
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export const homeContent = {
  hero: {
    badge: "Engineering the Digital Future",
    heading1: "Ignite Your Ideas",
    heading2: "Transform Your Future",
    description: "We revolutionize industries with dynamic digital solutions, tailored to meet contemporary demands and drive impactful transformations for businesses of all sectors.",
    stats: [
      { value: "50+", label: "Projects" },
      { value: "30+", label: "Clients" },
      { value: "7+", label: "Years" },
      { value: "15+", label: "Experts" },
    ]
  },
  aboutPreview: {
    badge: "About Us",
    heading: "From Concept to Impact, We Ignite It All",
    description: "At Ignixtech, we are passionate about transforming innovative ideas into powerful digital solutions. With a team of experienced developers, designers, and strategists, we deliver excellence at every step.",
    highlights: [
      "User-Centric Design Approach",
      "Scalable & Secure Solutions",
      "Agile Development Process",
      "24/7 Support & Maintenance",
      "Industry Best Practices",
      "Continuous Innovation",
    ],
    stats: [
      { value: "100%", label: "Client Satisfaction" },
      { value: "50+", label: "Projects Completed" },
      { value: "7+", label: "Years of Experience" },
      { value: "24/7", label: "Support Available" },
    ],
    ceoQuote: {
      quote: "At Ignixtech, we believe in transforming visions into reality through innovation and excellence.",
      initials: "RS",
      name: "Rizwan Saieed",
      title: "Co-Founder & CEO",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHuc5hwC0TCVQ/profile-displayphoto-shrink_200_200/B4DZQ2WZejHYAc-/0/1736078629044?e=1776297600&v=beta&t=tT1LE3ohvhfFfFKN2wKrT8V7hJ2fNs_u0MH-UjIxe3w"
    }
  },
  servicesPreview: {
    badge: "Services",
    title: "Unleash Your Potential With Our Tailored Solutions",
    description: "Comprehensive tech solutions for your every need, from design to deployment and beyond.",
    services: [
      {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centric design solutions with wireframing, prototyping, visual design, and usability testing.",
        features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      },
      {
        icon: Code,
        title: "Software Development",
        description: "Custom software and web application development tailored to your business needs.",
        features: ["Custom Software", "Web Apps", "API Integration", "Scalable Solutions"],
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for Android and iOS platforms.",
        features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"],
      },
      {
        icon: Bug,
        title: "Quality Assurance",
        description: "Comprehensive testing services including manual, functional, automation, and performance testing.",
        features: ["Manual Testing", "Automation", "Performance", "Security Testing"],
      },
      {
        icon: Server,
        title: "DevOps",
        description: "Infrastructure as code, CI/CD pipeline implementation, and monitoring solutions.",
        features: ["CI/CD Pipelines", "Cloud Infrastructure", "Monitoring", "Deployment Automation"],
      },
      {
        icon: Shield,
        title: "Cybersecurity",
        description: "Penetration testing, red teaming, and endpoint security to protect your digital assets.",
        features: ["Penetration Testing", "Red Teaming", "Endpoint Security", "Compliance"],
      },
    ]
  },
  whyChooseUs: {
    badge: "Why Choose Us",
    title: "Everything You Need to Succeed",
    description: "We combine technical excellence with strategic thinking to deliver solutions that drive real business value.",
    benefits: [
      {
        icon: Zap,
        title: "Fast Delivery",
        description: "Agile methodology ensures quick turnaround without compromising on quality.",
      },
      {
        icon: Target,
        title: "Tailored Solutions",
        description: "Custom-built solutions designed specifically for your unique business requirements.",
      },
      {
        icon: Users,
        title: "Expert Team",
        description: "Skilled professionals with deep expertise across multiple technologies and domains.",
      },
      {
        icon: Clock,
        title: "On-Time Delivery",
        description: "Committed to meeting deadlines with transparent communication throughout.",
      },
      {
        icon: Award,
        title: "Quality Assured",
        description: "Rigorous testing and QA processes to ensure bug-free, reliable software.",
      },
      {
        icon: HeadphonesIcon,
        title: "24/7 Support",
        description: "Round-the-clock support and maintenance to keep your systems running smoothly.",
      },
    ]
  },
  process: {
    badge: "Our Process",
    title: "How to Get Started",
    description: "Trusted by industry leaders - a simple, proven process designed to deliver results.",
    steps: [
      {
        number: "01",
        icon: Search,
        title: "Schedule Consultation",
        description: "Discuss your needs with our expert team today and get started on your digital transformation journey.",
      },
      {
        number: "02",
        icon: Lightbulb,
        title: "Tailored Strategy",
        description: "Receive a customized plan designed for success, aligned with your business goals and industry requirements.",
      },
      {
        number: "03",
        icon: Rocket,
        title: "Seamless Execution",
        description: "Our team delivers high-quality solutions on time, ensuring smooth deployment and ongoing support.",
      },
    ]
  },
  cta: {
    badge: "Start Your Project",
    title1: "Have a Project in Mind?",
    title2: "Let's Get Started!",
    description: "Transform your ideas into reality with our expert team. From concept to launch, we're here to help you build something extraordinary.",
    tags: ["Free Consultation", "No Commitment", "Expert Guidance"]
  },
  techStack:{
    badge: "Technology Stack",
    title: "Engineering Excellence Meets Modern Tech",
    description: "We build resilient, secure, and scalable digital products using battle-tested frameworks and modern cloud infrastructure.",
    footerMessage: "Don't see your preferred technology? Our team is highly adaptable and continuously expanding our expertise to meet complex architectural needs.",
    tabs: [
      {
        id: "frontend",
        label: "Frontend",
        description: "Delivering highly responsive, accessible, and performant user interfaces that drive engagement and conversions.",
        features: [
          "Single Page Applications (SPA)", 
          "Server-Side Rendering (SSR)", 
          "Micro-Frontends", 
          "Web Accessibility (a11y)", 
          "State Management", 
          "Core Web Vitals Optimization"
        ],
        coreTech: [
          { name: "React", icon: "SiReact", color: "#61DAFB" },
          { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
          { name: "Vue.js", icon: "SiVuedotjs", color: "#4FC08D" },
          { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
          { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06B6D4" },
        ]
      },
      {
        id: "backend",
        label: "Backend",
        description: "Architecting secure, high-throughput server-side applications and APIs designed to scale seamlessly with your user base.",
        features: [
          "Microservices Architecture", 
          "RESTful & GraphQL APIs", 
          "Event-Driven Systems", 
          "Real-time Websockets", 
          "Role-Based Access Control (RBAC)", 
          "Serverless Computing"
        ],
        coreTech: [
          { name: "Node.js", icon: "SiNodedotjs", color: "#339933" },
          { name: "Python", icon: "SiPython", color: "#3776AB" },
          { name: "Go", icon: "SiGo", color: "#00ADD8" },
          { name: ".NET", icon: "SiDotnet", color: "#512BD4" },
          { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
        ]
      },
      {
        id: "mobile",
        label: "Mobile",
        description: "Crafting native and cross-platform mobile experiences that feel fluid, intuitive, and perfectly integrated with device hardware.",
        features: [
          "Cross-Platform Development", 
          "Native iOS & Android", 
          "Offline-First Architecture", 
          "Push Notification Pipelines", 
          "Biometric Authentication", 
          "App Store Deployment"
        ],
        coreTech: [
          { name: "React Native", icon: "SiReact", color: "#61DAFB" },
          { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
          { name: "Swift", icon: "SiSwift", color: "#F05138" },
          { name: "Kotlin", icon: "SiKotlin", color: "#7F52FF" },
          { name: "Android", icon: "SiAndroid", color: "#3DDC84" },
        ]
      },
      {
        id: "database",
        label: "Data & Storage",
        description: "Designing optimized database schemas and caching layers for complex queries, high availability, and absolute data integrity.",
        features: [
          "Relational Database Design", 
          "NoSQL Data Modeling", 
          "In-Memory Caching", 
          "Data Warehousing", 
          "Automated Backups", 
          "Vector Databases (AI)"
        ],
        coreTech: [
          { name: "PostgreSQL", icon: "SiPostgresql", color: "#4169E1" },
          { name: "MongoDB", icon: "SiMongodb", color: "#47A248" },
          { name: "Redis", icon: "SiRedis", color: "#DC382D" },
          { name: "MySQL", icon: "SiMysql", color: "#4479A1" },
          { name: "Supabase", icon: "SiSupabase", color: "#3ECF8E" },
        ]
      },
      {
        id: "cloud",
        label: "Cloud & DevOps",
        description: "Automating deployments and managing cloud infrastructure to ensure zero-downtime releases and rapid disaster recovery.",
        features: [
          "Infrastructure as Code (IaC)", 
          "Continuous Integration (CI/CD)", 
          "Container Orchestration", 
          "Cloud Migration Strategy", 
          "Load Balancing", 
          "24/7 Monitoring & Alerting"
        ],
        coreTech: [
          { name: "AWS", icon: "LiaAmazon", color: "#FF9900" },
          { name: "Azure", icon: "VscAzure", color: "#0078D4" },
          { name: "Docker", icon: "SiDocker", color: "#2496ED" },
          { name: "Kubernetes", icon: "SiKubernetes", color: "#326CE5" },
          { name: "Terraform", icon: "SiTerraform", color: "#844FBA" },
        ]
      },
      {
        id: "ai",
        label: "AI & Automation",
        description: "Integrating intelligent workflows and language models to automate operations, analyze data, and enhance user experiences.",
        features: [
          "LLM Integration", 
          "Custom AI Chatbots", 
          "Workflow Automation", 
          "Retrieval-Augmented Generation (RAG)", 
          "Predictive Analytics", 
          "Data Scraping & Structuring"
        ],
        coreTech: [
          { name: "OpenAI", icon: "SiOpenai", color: "#121212" },
          { name: "Hugging Face", icon: "SiHuggingface", color: "#FFD21E" },
          { name: "TensorFlow", icon: "SiTensorflow", color: "#FF6F00" },
          { name: "LangChain", icon: "SiLangchain", color: "#121212" },
          { name:"Chatwoot", icon:"SiChatwoot", color:"#3199d9ff"},
          { name:"Claude", icon:"SiClaude", color:"#FF6F00"}
        ]
      }
    ]
  }
}

export const aboutContent = {
  hero: {
    badge: "About Ignixtech",
    heading1: "We Ignite Innovation &",
    heading2: " Transform Businesses",
    description: "Ignixtech is a forward-thinking technology company dedicated to delivering cutting-edge digital solutions that empower businesses to thrive in the modern era."
  },
  mission: {
    title: "Our Story",
    story: [
      "Founded with a vision to bridge the gap between innovative ideas and technological excellence, Ignixtech has grown into a trusted partner for businesses seeking digital transformation.",
      "Our journey began with a simple belief: that technology should empower, not complicate. This philosophy drives everything we do, from our approach to software development to how we engage with our clients.",
      "Today, we are proud to have helped numerous businesses across various industries achieve their digital goals, delivering solutions that are not just functional but transformative."
    ],
    cards: [
      {
        icon: Target,
        title: "Our Mission",
        description: "To deliver innovative digital solutions that empower businesses to achieve their goals and drive meaningful impact in their industries.",
      },
      {
        icon: Eye,
        title: "Our Vision",
        description: "To be the leading technology partner for businesses worldwide, known for excellence, innovation, and unwavering commitment to client success.",
      },
      {
        icon: Heart,
        title: "Our Values",
        description: "Integrity, Innovation, Excellence, and Client-Centricity form the foundation of everything we do at Ignixtech.",
      },
    ]
  },
  team: {
    badge: "Our Team",
    title: "Meet the Leadership",
    description: "Dedicated professionals committed to delivering excellence.",
    members: [
      {
        name: "Rizwan Saieed",
        role: "Co-Founder & CEO",
        bio: "Visionary leader driving innovation and excellence at Ignixtech.",
        initials: "RS",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHuc5hwC0TCVQ/profile-displayphoto-shrink_200_200/B4DZQ2WZejHYAc-/0/1736078629044?e=1776297600&v=beta&t=tT1LE3ohvhfFfFKN2wKrT8V7hJ2fNs_u0MH-UjIxe3w",
        linkedin: "https://www.linkedin.com/in/rizwan-saieed-mohammed-saieed-891b211a2/",
        twitter: "#",
      }
      // {
      //   name: "Muhammad Raza Aslam",
      //   role: "Chief Technology Officer",
      //   bio: "Architect of scalable solutions with deep technical expertise.",
      //   initials: "RA",
      //   image:"https://media.licdn.com/dms/image/v2/C4D03AQHMYRUGFgl2ug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1645974837983?e=1776297600&v=beta&t=zLMN7OLvdvHiPKovcZW_fo4nmlRLizDNMjfXAlLeo2I",
      //   linkedin: "https://www.linkedin.com/in/muhammad-raza-aslam-21882b75/",
      //   twitter: "#",
      // }
    ]
  },
  values: {
    badge: "Our Values",
    title: "What Drives Us",
    description: "Our core values shape our culture and guide our approach to every project.",
    list: [
      {
        icon: Lightbulb,
        title: "Innovation",
        description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
      },
      {
        icon: Users,
        title: "Collaboration",
        description: "We believe in working closely with our clients, treating their goals as our own.",
      },
      {
        icon: Shield,
        title: "Integrity",
        description: "Honesty and transparency are at the core of all our business relationships.",
      },
      {
        icon: Zap,
        title: "Excellence",
        description: "We strive for excellence in every project, delivering quality that exceeds expectations.",
      },
      {
        icon: Globe,
        title: "Global Mindset",
        description: "We embrace diversity and think globally while acting locally for our clients.",
      },
      {
        icon: Award,
        title: "Client Success",
        description: "Our success is measured by the success of our clients and the impact we create together.",
      },
    ]
  }
}


export const serviceVisuals = [
  {
    bg: "bg-[#fff4d1] dark:bg-amber-900/20",
    accentText: "text-amber-600 dark:text-amber-400",
    stat: { value: "100+", label: "Designs Delivered" },
    icons: [
      { Icon: SiFigma, color: "#F24E1E", label: "Figma" },
      { Icon: SiFramer, color: "#0055FF", label: "Framer" },
      { Icon: LiaAdobe, color: "#FF61F6", label: "Adobe XD" },
      { Icon: SiStorybook, color: "#FF4785", label: "Storybook" },
      { Icon: SiReact, color: "#61DAFB", label: "React" },
      { Icon: SiNextdotjs, color: "#000000", label: "Next.js" },
      { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind" },
      { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
    ],
  },
  {
    bg: "bg-[#dcfce7] dark:bg-emerald-900/20",
    accentText: "text-emerald-600 dark:text-emerald-400",
    stat: { value: "200+", label: "APIs Shipped" },
    icons: [
      { Icon: SiNodedotjs, color: "#339933", label: "Node.js" },
      { Icon: SiPython, color: "#3776AB", label: "Python" },
      { Icon: SiGo, color: "#00ADD8", label: "Go" },
      { Icon: SiGraphql, color: "#E10098", label: "GraphQL" },
      { Icon: SiPostgresql, color: "#4169E1", label: "PostgreSQL" },
      { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
      { Icon: SiRedis, color: "#DC382D", label: "Redis" },
      { Icon: SiDocker, color: "#2496ED", label: "Docker" },
    ],
  },
  {
    bg: "bg-[#f0f4ff] dark:bg-slate-800/40",
    accentText: "text-blue-600 dark:text-blue-400",
    stat: { value: "50+", label: "Apps Published" },
    icons: [
      { Icon: SiReact, color: "#61DAFB", label: "React Native" },
      { Icon: SiFlutter, color: "#02569B", label: "Flutter" },
      { Icon: SiSwift, color: "#F05138", label: "Swift" },
      { Icon: SiKotlin, color: "#7F52FF", label: "Kotlin" },
      { Icon: SiApple, color: "#999999", label: "iOS" },
      { Icon: SiAndroid, color: "#3DDC84", label: "Android" },
      { Icon: SiFirebase, color: "#FFCA28", label: "Firebase" },
      { Icon: SiSqlite, color: "#003B57", label: "SQLite" },
    ],
  },
  {
    bg: "bg-[#fef0f0] dark:bg-rose-900/20",
    accentText: "text-rose-600 dark:text-rose-400",
    stat: { value: "99.9%", label: "Bug Detection Rate" },
    icons: [
      { Icon: SiCypress, color: "#17202C", label: "Cypress" },
      { Icon: SiSelenium, color: "#43B02A", label: "Selenium" },
      { Icon: SiAppium, color: "#660066", label: "Appium" },
      { Icon: SiJest, color: "#C21325", label: "Jest" },
      { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
      { Icon: SiApachejmeter, color: "#D24939", label: "JMeter" },
      { Icon: SiGrafana, color: "#F46800", label: "Grafana" },
    ],
  },
  {
    bg: "bg-[#f0f9ff] dark:bg-sky-900/20",
    accentText: "text-sky-600 dark:text-sky-400",
    stat: { value: "99.99%", label: "Uptime SLA" },
    icons: [
      { Icon: LiaAmazon, color: "#FF9900", label: "AWS" },
      { Icon: VscAzure, color: "#0078D4", label: "Azure" },
      { Icon: SiGooglecloud, color: "#4285F4", label: "GCP" },
      { Icon: SiKubernetes, color: "#326CE5", label: "Kubernetes" },
      { Icon: SiTerraform, color: "#844FBA", label: "Terraform" },
      { Icon: SiGithubactions, color: "#2088FF", label: "GH Actions" },
      { Icon: SiDocker, color: "#2496ED", label: "Docker" },
      { Icon: SiGit, color: "#F05032", label: "Git" },
    ],
  },
  {
    bg: "bg-[#f5f0ff] dark:bg-violet-900/20",
    accentText: "text-violet-600 dark:text-violet-400",
    stat: { value: "0", label: "Known Breaches" },
    icons: [
      { Icon: SiKalilinux, color: "#557C94", label: "Kali Linux" },
      { Icon: SiBurpsuite, color: "#FF6633", label: "Burp Suite" },
      { Icon: SiOwasp, color: "#000000", label: "OWASP" },
      { Icon: SiAuth0, color: "#EB5424", label: "Auth0" },
      { Icon: SiCloudflare, color: "#F38020", label: "Cloudflare" },
      { Icon: SiVault, color: "#000000", label: "HashiCorp" },
      { Icon: SiWireguard, color: "#88171A", label: "WireGuard" },
    ],
  },
  {
    bg: "bg-[#e0e7ff] dark:bg-indigo-900/20",
    accentText: "text-indigo-600 dark:text-indigo-400",
    stat: { value: "5M+", label: "Tasks Automated" },
    icons: [
      { Icon: SiOpenai, color: "#121212", label: "OpenAI" },
      { Icon: FaRobot, color: "#0042DA", label: "Typebot" },
      { Icon: FaCogs, color: "#FF5722", label: "OpenClaw" },
      { Icon: SiChatwoot, color: "#0042DA", label: "Chatwoot" },
      { Icon: SiLangchain, color: "#121212", label: "LangChain" },
      { Icon: SiN8N, color: "#FF6D5A", label: "n8n" },
      { Icon: SiZapier, color: "#FF4A00", label: "Zapier" }
    ],
  }
];

export const servicesContent = {
  hero: {
    badge: "Our Services",
    heading1: "Tailored Solutions for",
    heading2: " Every Tech Need",
    description: "From design to deployment, we offer comprehensive services to help your business thrive in the digital landscape."
  },
  list: [
    {
      id: "uiux",
      icon: FaPalette,
      title: "Design & Frontend",
      description: "Create stunning, intuitive interfaces that delight users and drive engagement. Our design process focuses on deep user research and crafting experiences that convert.",
      features: [
        "User Journey Mapping & Research",
        "High-Fidelity Interactive Prototyping",
        "WCAG Accessibility Compliance",
        "Design Systems & Component Libraries",
        "A/B Testing & Usability Analysis",
        "Responsive & Mobile-First Design",
      ],
    },
    {
      id: "software",
      icon: FaCode,
      title: "Software Development",
      description: "Build powerful, highly scalable software solutions tailored to your unique business logic. We use modern architecture patterns to deliver robust, enterprise-grade applications.",
      features: [
        "Custom Full-Stack Development",
        "Microservices Architecture",
        "REST & GraphQL API Engineering",
        "Legacy System Modernization",
        "Cloud-Native Scalability",
        "Real-Time Data Processing",
      ],
    },
    {
      id: "mobile",
      icon: FaMobileAlt,
      title: "Mobile App Development",
      description: "Reach your customers wherever they are with native and cross-platform mobile applications that deliver exceptional, fluid hardware-integrated experiences.",
      features: [
        "iOS (Swift) & Android (Kotlin) Native",
        "React Native & Flutter Cross-Platform",
        "Offline-First Architecture",
        "App Store Optimization (ASO)",
        "IoT & Bluetooth Hardware Integration",
        "Automated Push Notification Pipelines",
      ],
    },
    {
      id: "qa",
      icon: FaBug,
      title: "Quality Assurance",
      description: "Ensure your software performs flawlessly under pressure. We integrate rigorous automated and manual testing pipelines to catch edge cases before your users do.",
      features: [
        "Automated E2E & Integration Testing",
        "Performance, Load & Stress Testing",
        "CI/CD Pipeline QA Integration",
        "Cross-Browser & Device Compatibility",
        "Security Vulnerability Scanning",
        "Comprehensive Regression Testing",
      ],
    },
    {
      id: "devops",
      icon: FaServer,
      title: "Cloud & DevOps",
      description: "Accelerate your development cycles and guarantee maximum uptime. We design resilient cloud infrastructures and automated CI/CD pipelines for zero-downtime deployments.",
      features: [
        "Infrastructure as Code (Terraform/IaC)",
        "Automated CI/CD Pipeline Setup",
        "Docker & Kubernetes Orchestration",
        "Multi-Cloud & Hybrid Deployments",
        "Advanced Telemetry & Observability",
        "Site Reliability Engineering (SRE)",
      ],
    },
    {
      id: "cybersecurity",
      icon: FaShieldAlt,
      title: "Cybersecurity & Compliance",
      description: "Protect your digital assets with enterprise-grade security protocols. We identify zero-day vulnerabilities and implement strict regulatory compliance frameworks to keep your data locked down.",
      features: [
        "Advanced Penetration Testing & Red Teaming",
        "SOC2, HIPAA & GDPR Compliance Implementation",
        "Zero-Trust Network Architecture",
        "Data Encryption & Key Management (KMS)",
        "Automated Threat Modeling & Scanning",
        "24/7 Incident Response Planning",
      ],
    },
    {
      id: "ai-automation",
      icon: FaRobot,
      title: "AI & Automation",
      description: "Integrate intelligent workflows and custom language models to automate operations and enhance customer engagement. We build tailored AI solutions that supercharge your business efficiency.",
      features: [
        "Custom LLM & API Integrations",
        "Intelligent Chatbots (Typebot & premierpsw)",
        "Advanced Data Scraping (OpenClaw)",
        "Automated Business Workflows (n8n, Zapier)",
        "Retrieval-Augmented Generation (RAG)",
        "Predictive Analytics & Data Structuring",
      ],
    },
  ]
};

export const careersContent = {
  hero: {
    badge: "Careers at Ignixtech",
    heading1: "Build the Future",
    heading2: " With Us",
    description: "Join a team of passionate innovators dedicated to creating impactful digital solutions. We are always looking for talented individuals who share our vision."
  },
  culture: {
    badge: "Our Culture",
    title: "Why Join Ignixtech?",
    description: "More than just a workplace - we are a community of innovators, creators, and problem-solvers.",
    points: [
      {
        icon: Lightbulb,
        title: "Innovation First",
        description: "We encourage creative thinking and embrace new ideas. Every team member has the opportunity to contribute to groundbreaking projects.",
      },
      {
        icon: Users,
        title: "Collaborative Environment",
        description: "Work alongside talented professionals in a supportive, team-oriented culture where knowledge sharing is valued.",
      },
      {
        icon: Rocket,
        title: "Growth Opportunities",
        description: "We invest in your professional development with training, mentorship, and clear career progression paths.",
      },
      {
        icon: Heart,
        title: "Work-Life Balance",
        description: "Flexible working arrangements and a culture that respects your personal time and well-being.",
      },
    ]
  },
  benefits: {
    badge: "Benefits",
    title: "Perks of Working With Us",
    description: "We take care of our team with comprehensive benefits designed to support your well-being and growth.",
    list: [
      {
        icon: Wallet,
        title: "Competitive Salary",
        description: "Market-leading compensation packages with regular reviews.",
      },
      {
        icon: Clock,
        title: "Flexible Hours",
        description: "Work when you are most productive with flexible scheduling.",
      },
      {
        icon: Users2,
        title: "Client Collaboration",
        description: "Develop strong communication and teamwork skills through direct client engagement.",
      },
      {
        icon: GraduationCap,
        title: "Learning Budget",
        description: "Annual budget for courses, conferences, and certifications.",
      },
      {
        icon: Coffee,
        title: "Team Events",
        description: "Regular team building activities and social events.",
      },
      {
        icon: Plane,
        title: "Paid Time Off",
        description: "Generous vacation policy to recharge and explore.",
      },
      {
        icon: PartyPopper,
        title: "Performance Bonus",
        description: "Reward for exceptional work and achievements.",
      },
      {
        icon: Goal,
        title: "Career Growth",
        description: "Opportunities for professional development and advancement.",
      }
    ]
  }
}

export const contactContent = {
  hero: {
    badge: "Contact Us",
    heading1: "Let's Build Something",
    heading2: " Amazing Together",
    description: "Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help transform your ideas into reality."
  },
  info: {
    title: "Get in Touch",
    businessHours: {
      title: "Business Hours",
      description: "We are available",
      value: "Mon - Fri, 9AM - 6PM EST"
    },
    mapAddress: "299 Gary Martin Drive Bedford, Halifax, NS, Canada B4B 2E9"
  },
  faq: {
    title: "Frequently Asked Questions",
    list: [
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and scope. A simple web application typically takes 4–6 weeks, while enterprise-grade platforms or mobile apps may take 10–16 weeks. We always provide a detailed timeline estimate during discovery before work begins.",
      },
      {
        question: "Do you offer ongoing support and maintenance?",
        answer: "Absolutely. We offer tiered maintenance plans covering bug fixes, security patches, performance monitoring, and feature enhancements. Our support team is available 24/7 for critical issues, and all clients receive a dedicated account manager.",
      },
      {
        question: "What is your development process?",
        answer: "We follow an Agile Scrum methodology with 2-week sprints. Each sprint includes planning, development, QA, and a demo session so you always see real progress. We use tools like Jira and Confluence to keep you fully informed.",
      },
      {
        question: "How much does a project cost?",
        answer: "Pricing depends on the project's scope, complexity, and team size required. We offer three engagement models: Fixed Bid (ideal for well-defined projects), Dedicated Team (for ongoing product work), and Hourly (for flexible, smaller tasks). Book a free consultation and we'll provide a transparent quote.",
      },
      {
        question: "Do you sign NDAs and protect our intellectual property?",
        answer: "Yes, 100%. We sign Non-Disclosure Agreements before any project discussion begins. All code, designs, and deliverables created during the engagement are fully owned by you upon final payment. We never reuse client IP across projects.",
      },
      {
        question: "Can you work with our existing tech stack?",
        answer: "Yes. Our engineers are proficient across a wide range of technologies — from legacy systems like PHP and .NET to modern stacks like Next.js, Python, Flutter, and cloud-native infrastructure. We adapt to your environment rather than forcing you to change.",
      },
      {
        question: "How many revision rounds are included?",
        answer: "Our Fixed Bid projects include two rounds of revisions per milestone at no extra cost. For UI/UX design, we include three rounds of design revisions. Additional changes beyond these are billed transparently at an agreed hourly rate.",
      },
      {
        question: "What happens after the project launches?",
        answer: "We provide a 30-day post-launch warranty period for all projects, during which any bugs or defects are fixed at no charge. After that, we offer a range of ongoing retainer packages to keep your product healthy, secure, and evolving.",
      },
      {
        question: "How do you handle communication and project transparency?",
        answer: "We assign a dedicated Project Manager to every engagement. You'll receive weekly progress reports, have access to our project management tools in real-time, and join regular sprint review calls. We believe radical transparency is key to successful partnerships.",
      },
    ]
  },
  form: {
    title: "Send us a Message",
    successTitle: "Message Sent!",
    successDescription: "Thank you for reaching out. We'll get back to you within 24 hours.",
    buttonText: "Send Message",
    buttonRetry: "Send Another Message"
  }
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Junior HR Associate",
    department: "HR",
    location: "Gulberg, Lahore",
    type: "Full-time",
    description: "We are looking for a motivated and detail-oriented Junior HR Associate to join our HR team. This role is ideal for fresh graduates or individuals with up to 6 months of experience who are passionate about HR, employee engagement, and organizational development. You will support day-to-day HR operations and contribute to creating a positive employee experience.",
    requirements: [
      "Bachelor’s degree in HR, Business Administration, Management, Psychology, or related field",
      "Strong communication and interpersonal skills",
      "Good organizational and time management abilities",
      "Basic understanding of HR functions (recruitment, onboarding, documentation, etc.)",
      "Proficient in MS Office (Word, Excel, PowerPoint)",
      "Ability to maintain confidentiality and professionalism",
      "Eager to learn and grow within the HR field",
      "Proficient in English"
    ],
    applyLink: "https://forms.gle/F3nxVe1P8We2iG5S6"
  }
]


