import { Job } from "@/types/constantTypes"
import { Palette, Code, Smartphone, Bug, Server, Shield, Zap, Target, Users, Clock, Award, HeadphonesIcon, Search, Lightbulb, Rocket, Eye, Heart, Globe, Sparkles, Wallet, GraduationCap, Laptop, Coffee, Plane, PartyPopper, Goal } from "lucide-react"

export const siteConfig = {
  name: "IgnixTech",
  description: "Engineering the Digital Future",
  links: {
    calendly: "https://calendly.com/rizwan-ignixtech",
  }
}

export const contactDetails = {
    email: "contact@ignixtech.ca",
    phone: "+1 (902) 707-6161",
    address: "299 Gary Martin Drive Bedford, Halifax, NS, Canada B4B 2E9",
    mapLink: "https://www.google.com/maps/place/299+Gary+Martin+Dr,+Bedford,+NS+B4B+2E9,+Canada/data=!4m2!3m1!1s0x4b5989808ea44b81:0x4ce22e7f81c7bc9?sa=X&ved=1t:242&ictx=111",
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
    description: "At IgnixTech, we are passionate about transforming innovative ideas into powerful digital solutions. With a team of experienced developers, designers, and strategists, we deliver excellence at every step.",
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
      quote: "At IgnixTech, we believe in transforming visions into reality through innovation and excellence.",
      initials: "RS",
      name: "Rizwan Saieed",
      title: "Co-Founder & CEO"
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
  techStack: {
    badge: "Technology",
    title: "Our Technology Stack",
    description: "We leverage cutting-edge technologies to build scalable, secure, and high-performance solutions.",
    categories: {
      frontend: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "TypeScript"],
      backend: ["Node.js", "Python", "Java", "Go", ".NET", "PHP"],
      mobile: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"],
      cloud: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      database: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
      tools: ["Git", "Jenkins", "GitHub Actions", "Figma", "Jira", "Confluence"],
    },
    icons: {
      frontend: "💻",
      backend: "⚙️",
      mobile: "📱",
      cloud: "☁️",
      database: "🗄️",
      tools: "🛠️",
    },
    footerMessage: "Our diverse technology portfolio ensures we can recommend and implement the perfect solution for your unique business needs and requirements."
  }
}

export const aboutContent = {
  hero: {
    badge: "About IgnixTech",
    heading1: "We Ignite Innovation &",
    heading2: " Transform Businesses",
    description: "IgnixTech is a forward-thinking technology company dedicated to delivering cutting-edge digital solutions that empower businesses to thrive in the modern era."
  },
  mission: {
    title: "Our Story",
    story: [
      "Founded with a vision to bridge the gap between innovative ideas and technological excellence, IgnixTech has grown into a trusted partner for businesses seeking digital transformation.",
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
        description: "Integrity, Innovation, Excellence, and Client-Centricity form the foundation of everything we do at IgnixTech.",
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
        bio: "Visionary leader driving innovation and excellence at IgnixTech.",
        initials: "RS",
        linkedin: "https://www.linkedin.com/in/rizwan-saieed-mohammed-saieed-891b211a2/",
        twitter: "#",
      },
      {
        name: "Muhammad Raza Aslam",
        role: "Chief Technology Officer",
        bio: "Architect of scalable solutions with deep technical expertise.",
        initials: "RA",
        linkedin: "https://www.linkedin.com/in/muhammad-raza-aslam-21882b75/",
        twitter: "#",
      }
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
      icon: Palette,
      title: "UI/UX Design",
      description: "Create stunning, intuitive interfaces that delight users and drive engagement. Our design process focuses on understanding your users and crafting experiences that convert.",
      features: [
        "User-Centric Design",
        "Wireframing and Prototyping",
        "Visual Design",
        "Interaction Design",
        "Usability Testing",
        "Design Systems",
      ],
    },
    {
      id: "software",
      icon: Code,
      title: "Software Development",
      description: "Build powerful, scalable software solutions tailored to your unique business requirements. We use modern technologies and best practices to deliver robust applications.",
      features: [
        "Custom Software Development",
        "Web Application Development",
        "API Development & Integration",
        "Enterprise Solutions",
        "Legacy System Modernization",
        "Cloud-Native Applications",
      ],
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Reach your customers wherever they are with native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS Development (Swift)",
        "Android Development (Kotlin)",
        "React Native Apps",
        "Flutter Development",
        "App Store Optimization",
        "Mobile App Maintenance",
      ],
    },
    {
      id: "qa",
      icon: Bug,
      title: "Quality Assurance",
      description: "Ensure your software performs flawlessly with comprehensive testing services. We catch bugs before your users do, guaranteeing reliable and high-quality products.",
      features: [
        "Manual Testing",
        "Functional Testing",
        "Automation Testing",
        "Performance Testing",
        "Security Testing",
        "Regression Testing",
      ],
    },
    {
      id: "devops",
      icon: Server,
      title: "DevOps",
      description: "Accelerate your development cycles and improve deployment reliability with our DevOps expertise. We help you build efficient, automated pipelines.",
      features: [
        "Infrastructure as Code (IaC)",
        "CI/CD Pipeline Implementation",
        "Monitoring and Logging",
        "Cloud Infrastructure Setup",
        "Container Orchestration",
        "Site Reliability Engineering",
      ],
    },
    {
      id: "cybersecurity",
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security services. We identify vulnerabilities and implement robust security measures to keep your business safe.",
      features: [
        "Penetration Testing",
        "Red Teaming",
        "Endpoint Security",
        "Security Audits",
        "Compliance Implementation",
        "Incident Response",
      ],
    },
  ]
}

export const careersContent = {
  hero: {
    badge: "Careers at IgnixTech",
    heading1: "Build the Future",
    heading2: " With Us",
    description: "Join a team of passionate innovators dedicated to creating impactful digital solutions. We are always looking for talented individuals who share our vision."
  },
  culture: {
    badge: "Our Culture",
    title: "Why Join IgnixTech?",
    description: "More than just a workplace - we are a community of innovators, creators, and problem-solvers.",
    points: [
      {
        icon: Sparkles,
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
        icon: Laptop,
        title: "Remote Work",
        description: "Work from anywhere with our remote-first culture.",
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
        answer: "Project timelines vary based on scope, but most projects take 4-12 weeks from start to delivery.",
      },
      {
        question: "Do you offer ongoing support?",
        answer: "Yes! We offer comprehensive maintenance and support packages for all our clients.",
      },
      {
        question: "What is your development process?",
        answer: "We follow an agile methodology with regular sprints, demos, and continuous communication.",
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

export const jobs: Job[] = []
