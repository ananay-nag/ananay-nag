import { useEffect, useState } from "react";
import {
  Database,
  Server,
  Code2,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cloud,
  Terminal,
  Menu,
  X,
  Globe,
  PackageOpen,
  Cpu,
  Layers,
  Webhook,
  GitBranch,
  Search,
  Calendar,
  Briefcase,
  ChevronRight,
  FileJson,
  Package,
  Link,
  Chrome,
  MailIcon,
} from "lucide-react";

import { motion } from "framer-motion";
import ExperienceTimeline from "./Experience";

const SkillLevel = {
  BEGINNER: { color: "bg-blue-500/20 text-blue-400", label: "Beginner" },
  INTERMEDIATE: {
    color: "bg-yellow-500/20 text-yellow-400",
    label: "Intermediate",
  },
  EXPERT: { color: "bg-orange-500/20 text-orange-400", label: "Expert" },
  ADVANCED: { color: "bg-green-500/20 text-green-400", label: "Advanced" },
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Zeller",
      position: "Sr. Software Engineer (Full Stack)",
      period: "July 2024 - Dec 2024",
      responsibilities: [
        "Engaged in backend services to manage lambda and GraphQL API's",
        "Developed test cases for pre-deployment validation",
        "Github action flow for deployment and PR validations",
      ],
      technologies: [
        "Node",
        "TypeScript",
        "React",
        "MongoDB",
        "AWS",
        "Serverless",
        "DynamoDB",
        "GraphQL",
        "Docker",
      ],
    },
    {
      company: "Nexgen IOT Solutions | Viewlift ",
      position: "Sr. Software Engineer (Full Stack)",
      period: "July 2022 - Jan 2024",
      responsibilities: [
        "API V1 to V2 upgrade: 40% performance increase.",
        "gRPC implementation: 50% API latency reduction.",
        "Event-Driven Architecture (AWS EventBridge, Pulsar) design.",
        "Collaborated on system updates and feature development.",
      ],
      technologies: [
        "Node",
        "Golang",
        "AWS",
        "Serverless",
        "DynamoDB",
        "MongoDB",
        "React",
        "gRPC",
        "Elasticsearch",
        "Docker",
      ],
    },
    {
      company: "Appinventive Technologies",
      position: "Software Engineer",
      period: "Mar 2021 - July 2022",
      responsibilities: [
        "Real-time mobile sockets (cab booking, etc.).",
        "Google Maps API: optimized 1-call matchmaking.",
        "Blockchain-based secure cab booking.",
        "MongoDB & Firebase for geolocation/fencing.",
      ],
      technologies: [
        "Node",
        "AWS",
        "Socket",
        "PostgreSQL",
        "MongoDB",
        "gRPC",
        "Elasticsearch",
        "Firebase",
        "React",
        "Redux",
      ],
    },
    {
      company: "GoPerceptive LLP",
      position: "MERN Stack Developer",
      period: "July 2020 - Jan 2021",
      responsibilities: [
        "FMCG data scraping & reporting.",
        "Optimized scraper (Puppeteer, Node.js, MongoDB): 50% time reduction.",
        "Analytical dashboard (React, Redux, Tailwind, MUI).",
      ],
      technologies: [
        "Node",
        "Express",
        "AWS",
        "MongoDB",
        "React",
        "Redux",
        "HTML",
        "CSS",
        "Puppeteer",
        "S3",
        "EC2",
      ],
    },
    {
      company: "Leewayhertz Technologies",
      position: "MERN Stack Developer",
      period: " May 2019 - Mar 2020",
      responsibilities: [
        "Developed coin-based employee recognition system.",
        "Implemented secure transactions with Sawtooth blockchain.",
        "Created REST APIs and interactive dashboards.",
        "Architected scalable apps (MERN, AWS).",
      ],
      technologies: [
        "Node.js",
        "AWS",
        "Express",
        "MongoDB",
        "React",
        "Redux",
        "HTML",
        "CSS3",
        "S3",
        "EC2",
        "Hyperledger Sawtooth",
        "Docker",
        "Blockchain",
      ],
    },
  ];

  const menuItems = [
    { name: "About", href: "#", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Experience", href: "#experience", icon: Calendar },
    { name: "Projects", href: "#projects", icon: Layers },
    { name: "Open Source", href: "#opensource", icon: GitBranch },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const OpenProjects = [
    {
      title: "universal-client",
      desc: "A TypeScript‑first, plugin‑driven library for seamless, configuration‑driven communication with multi-protocol services — optimized for modern service architectures and high‑performance apps.",
      github: "https://github.com/ananay-nag/universal-client",
      npm: "https://www.npmjs.com/package/@ananay-nag/universal-client",
      tech: [
        "TypeScript",
        "NodeJS",
        "gRPC",
        "Socket.io",
        "Kafka-JS",
        "AMQP",
        "WebSocket",
      ],
      link: "https://universal-client-doc.vercel.app/",
      type: "NPM",
      imageSrc: "/src/images/univercel-new.png",
    },
    {
      title: "go-set-mod",
      desc: "A simple yet powerful CLI tool to automate Go module initialization based on project structure. It ensures correct module naming using a predefined GitHub namespace and relative paths from the project root.",
      github: "https://github.com/ananay-nag/go-create-init-module",
      tech: ["Golang", "Linux", "Shell Script"],
      link: "https://go-set-mod.vercel.app/",
      type: "GITHUB",
      imageSrc: "/src/images/go-set-mod-1.png",
    },
    {
      title: "react-voice-recorder",
      desc: "A lightweight, customizable React voice recorder component with automatic audio compression.",
      github: "https://github.com/ananay-nag/react-voice-recorder",
      npm: "https://www.npmjs.com/package/@ananay-nag/react-voice-recorder",
      tech: ["ReactJS", "TypeScript", "NodeJS"],
      link: "",
      type: "NPM",
      imageSrc: "/src/images/github-new.webp"
    },
    {
      title: "react-voice-demo-app",
      desc: "This application is a dynamic interview questionnaire that allows users to submit responses to predefined questions using either text input or voice recordings. It provides a user-friendly interface for collecting interview responses with validation and submission functionality.",
      github: "https://github.com/ananay-nag/react-voice-demo-app",
      tech: ["ReactJS", "TypeScript", "NodeJS"],
      link: "https://react-voice-demo-app.vercel.app",
      type: "GITHUB",
      imageSrc: "/src/images/github-new.webp",
    },

    {
      title: "google-page-auto-scroll",
      desc: "Auto Scroll is a lightweight Chrome extension that automatically scrolls webpages and allows users to control the speed using a popup UI and right-click context menu. It also supports targeted scrolling for a selected section.",
      github: "https://github.com/ananay-nag/google-page-auto-scroll",
      tech: [
        "Manifest V3",
        "JavaScript",
        "HTML & CSS",
        "Chrome Extensions API",
      ],
      link: "",
      type: "EXTENSION",
      imageSrc: "/src/images/github-new.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-gray-800/70 p-3 rounded-full border border-gray-700 hover:bg-gray-700/70 transition-colors shadow-lg hover:shadow-green-500/20"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ duration: 0.4 }}
          className="absolute top-16 right-4 w-64 bg-gray-900/95 border border-gray-700 rounded-lg backdrop-blur-md shadow-xl"
        >
          <ul className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.href.replace("#", "") === activeSection;
              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-2"
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-300 group
                              ${
                                isActive
                                  ? "bg-green-500/20 text-green-400"
                                  : "text-gray-300 hover:bg-gray-700/50 hover:text-green-400"
                              }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? "text-green-400" : ""
                      }`}
                    />
                    <span>{item.name}</span>
                    <ChevronRight
                      className={`w-4 h-4 ml-auto opacity-0 transform -translate-x-2 transition-all duration-300 
                                           ${
                                             isActive
                                               ? "opacity-100 translate-x-0"
                                               : "group-hover:opacity-100 group-hover:translate-x-0"
                                           }`}
                    />
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </nav>

      {/* Hero Header */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-gray-900/60 p-8 rounded-lg border border-gray-700 shadow-2xl backdrop-blur-md"
            >
              <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Profile */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green-400/30 shadow-lg shadow-green-400/20"
                >
                  <img
                    src="https://gravatar.com/avatar/5d0b79e45a8b711da626f05cbf5ba83d?size=256"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* About */}
                <div className="flex-1 text-center md:text-left">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    ANANYA NAG
                  </motion.h1>

                  <h2 className="text-xl md:text-2xl font-semibold mb-6 text-green-400">
                    Impact-Driven{" "}
                    <strong className="text-white">
                      Sr. Software Engineer
                    </strong>
                  </h2>
                  <h2 className="text-xl md:text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                    Open To Work (Let's talk new Opportunity)
                  </h2>
                  <div className="text-gray-300 mb-8 text-lg leading-relaxed">
                    <p className="mb-4">
                      I engineer digital experiences that drive tangible
                      business outcomes. My approach is rooted in crafting
                      scalable, performant, and future-proof solutions,
                      leveraging the latest technologies to deliver exceptional
                      value. 5 Years of experience in industry.
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
                    <a
                      href="#projects"
                      className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md hover:shadow-green-400/30 transform hover:scale-105"
                    >
                      See My Impact →
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md transform hover:scale-105"
                    >
                      Let's Collaborate
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1w2zwJL3e32fwQ8mSMqRY2nCDnW2cSXdU/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white hover:bg-green-600 text-green-600 hover:text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md transform hover:scale-105"
                    >
                      View Resume
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Technical Skills Section */}
      <section className="py-20 relative overflow-hidden" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Programming",
                skills: [
                  { name: "Node.js", level: SkillLevel.ADVANCED, icon: Server },

                  {
                    name: "GoLang",
                    level: SkillLevel.INTERMEDIATE,
                    icon: Globe,
                  },
                  { name: "TypeScript", level: SkillLevel.EXPERT, icon: Code2 },
                  { name: "JavaScript", level: SkillLevel.ADVANCED, icon: Cpu },
                  { name: "Express", level: SkillLevel.EXPERT, icon: Server },
                ],
              },
              {
                title: "Databases",
                skills: [
                  {
                    name: "MongoDB",
                    level: SkillLevel.ADVANCED,
                    icon: Database,
                  },
                  { name: "MySQL", level: SkillLevel.ADVANCED, icon: Database },
                  {
                    name: "DynamoDB",
                    level: SkillLevel.INTERMEDIATE,
                    icon: Database,
                  },
                  { name: "Redis", level: SkillLevel.EXPERT, icon: Database },
                  {
                    name: "PostgreSQL",
                    level: SkillLevel.INTERMEDIATE,
                    icon: Database,
                  },
                ],
              },
              {
                title: "Cloud & Architecture",
                skills: [
                  { name: "AWS", level: SkillLevel.ADVANCED, icon: Cloud },
                  {
                    name: "Microservices",
                    level: SkillLevel.ADVANCED,
                    icon: Layers,
                  },
                  {
                    name: "Serverless/Lambda",
                    level: SkillLevel.ADVANCED,
                    icon: Cloud,
                  },
                  {
                    name: "Socket.io",
                    level: SkillLevel.EXPERT,
                    icon: Webhook,
                  },
                  {
                    name: "Elasticsearch",
                    level: SkillLevel.INTERMEDIATE,
                    icon: Search,
                  },
                ],
              },
              {
                title: "API & Testing",
                skills: [
                  {
                    name: "REST API",
                    level: SkillLevel.ADVANCED,
                    icon: Webhook,
                  },
                  { name: "GraphQL", level: SkillLevel.EXPERT, icon: FileJson },
                  {
                    name: "Postman",
                    level: SkillLevel.ADVANCED,
                    icon: Terminal,
                  },
                  {
                    name: "gRPC",
                    level: SkillLevel.INTERMEDIATE,
                    icon: Layers,
                  },
                  { name: "React", level: SkillLevel.EXPERT, icon: Code2 },
                ],
              },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 border border-gray-700 rounded-xl p-6 hover:bg-gray-700/40 transition-all"
              >
                <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`${skill.level.color} p-4 rounded-lg flex items-center gap-3`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceTimeline experiences={experiences} />

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Zeller",
                url: "https://myzeller.com/",
                image:
                  "https://www.myzeller.com/hs-fs/hubfs/T2%20and%20POS%20Lite%20Imagery/Pricing-Terminal%202-v1.jpg?width=3183&height=1701&name=Pricing-Terminal%202-v1.jpg",
                tech: [
                  "Node",
                  "Typescript",
                  "React",
                  "MongoDB",
                  "AWS",
                  "Serverless",
                  "DynamoDB",
                  "GraphQL",
                  "Docker",
                ],
              },
              {
                title: "TaxiCoin",
                url: "https://taxicoin.app/",
                image:
                  "https://appmarketingnews.io/wp-content/uploads/2023/03/Group-1062-1024x883.jpg",
                tech: [
                  "Node",
                  "AWS",
                  "Socket",
                  "PostgreSQL",
                  "MongoDB",
                  "gRPC",
                  "Elasticsearch",
                  "Firebase",
                  "React",
                  "Redux",
                  "HTML",
                ],
              },
              {
                title: "MyOutdoorTV",
                url: "https://www.myoutdoortv.com/",
                image:
                  "https://m.media-amazon.com/images/M/MV5BY2FkZTk3OTMtNGZiYy00Y2Y4LWI3NWItMGViYTVhNzQwZWYxXkEyXkFqcGc@._V1_QL75_UX500_CR0,2,500,281_.jpg",
                tech: [
                  "Node",
                  "GraphQL",
                  "AWS",
                  "GoLang",
                  "Serverless",
                  "DynamoDB",
                  "gRPC",
                  "ElasticSearch",
                  "Docker",
                ],
              },
              {
                title: "Hoichoi",
                url: "https://www.hoichoi.tv/",
                image: "https://m.media-amazon.com/images/I/918vKsKIuXL.png",
                tech: [
                  "Node",
                  "GraphQL",
                  "AWS",
                  "GoLang",
                  "Serverless",
                  "DynamoDB",
                  "gRPC",
                  "ElasticSearch",
                  "Docker",
                ],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-card rounded-xl overflow-hidden border border-gray-700"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors mb-4 inline-block"
                  >
                    {project.url} <ExternalLink className="w-4 h-4 inline" />
                  </a>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-gray-900/50" id="opensource">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Open Source Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
            {OpenProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 border border-gray-700 p-6 rounded-xl hover:bg-gray-700/40 transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                  {project.type === "NPM" && (
                    <a
                      href={project.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <PackageOpen className="w-5 h-5" /> NPM
                    </a>
                  )}
                  {project.type === "EXTENSION" && (
                    <a
                      href={""}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <Chrome className="w-5 h-5" /> Chrome
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors"
                    >
                      <Link className="w-5 h-5" /> {project.link}
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            Connect
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-8 mb-12">
              <a
                href="mailto:ananyanag1994s@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
              >
                <Mail className="w-6 h-6" />
                ananyanag1994s@gmail.com
              </a>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-8">
              <a
                href="https://www.instagram.com/chaurasiya.anu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.npmjs.com/~ananay-nag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
              >
                <Package className="w-6 h-6" />
                NPM
              </a>
              <a
                href="https://discord.gg/ananay.nag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
              >
                Discord
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ananaynag1994s@gmail.com&su=Discussion About New Opportunity and Idea&body="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
              >
                <MailIcon className="w-6 h-6" />
                Gmail
              </a>
              <a
                href="https://github.com/ananay-nag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ananay-nag/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2025. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
