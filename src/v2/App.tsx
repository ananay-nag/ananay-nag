/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll, useTransform } from "framer-motion";
import {
  Float,
  MeshDistortMaterial,
  Sphere,
  PerspectiveCamera,
  ContactShadows,
  Environment,
  Stars,
  Text as Text3D,
} from "@react-three/drei";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Cpu,
  Cloud,
  Code,
  Zap,
  Database,
  Terminal,
  Github,
  Chrome,
  PackageOpen,
  Mail,
  Linkedin,
  MailIcon,
  Package,
  Instagram,
} from "lucide-react";

import "./index.css"

// --- 3D INTERACTIVE NODES ---
function MetricNode({ position, value, label, color }: any) {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={1}
      position={position}
    >
      <Sphere args={[0.5, 64, 64]}>
        <MeshDistortMaterial color={color} speed={4} distort={0.3} />
      </Sphere>
      <Text3D
        position={[0, 1, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
      >
        {value}
      </Text3D>
      <Text3D
        position={[0, 0.75, 0]}
        fontSize={0.12}
        color="#94a3b8"
        maxWidth={1}
        anchorX="center"
      >
        {label}
      </Text3D>
    </Float>
  );
}

function TechScene() {
  return (
    <>
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1.5}
      />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
      {/* Cluster 1: Scale & Performance */}
      <MetricNode
        position={[-4, 2, -2]}
        value="50%"
        label="gRPC Latency Cut"
        color="#3b82f6"
      />{" "}
      [cite: 22]
      <MetricNode
        position={[-2, 0, -1]}
        value="8000+"
        label="Concurrent Users"
        color="#10b981"
      />{" "}
      [cite: 28]
      <MetricNode
        position={[-1, -0.8, -5]}
        value="200%"
        label="Traffic Increase"
        color="#8b5cf6"
      />{" "}
      [cite: 6]
      {/* Cluster 2: Automation (MobCoder & NexGen) */}
      <MetricNode
        position={[4, 2, -2]}
        value="90%"
        label="Manual Effort Reduc."
        color="#f59e0b"
      />{" "}
      [cite: 11]
      <MetricNode
        position={[3, 0.5, -1]}
        value="85%"
        label="Deploy Time Reduc."
        color="#ef4444"
      />{" "}
      [cite: 24]
      <MetricNode
        position={[5, -1, -2]}
        value="70%"
        label="Data Prep Speedup"
        color="#f59e0b"
      />{" "}
      [cite: 12]
      {/* Cluster 3: Quality & Reliability (Zeller) */}
      <MetricNode
        position={[0, 2, -3]}
        value="99%"
        label="Test Coverage"
        color="#10b981"
      />{" "}
      [cite: 17, 25]
      <MetricNode
        position={[1.5, 2.5, -4]}
        value="30%"
        label="Release Cycle Boost"
        color="#3b82f6"
      />{" "}
      [cite: 18]
      <MetricNode
        position={[-1.5, 2.5, -4]}
        value="75%"
        label="API Call Reduc."
        color="#8b5cf6"
      />{" "}
      [cite: 29]
      {/* Cluster 4: Data Magnitude (GoPerceptive) */}
      <MetricNode
        position={[0, -2.5, 0]}
        value="1M+"
        label="Data Points"
        color="#ec4899"
      />{" "}
      [cite: 57]
      <MetricNode
        position={[2, -3, -1]}
        value="50%"
        label="Collection Time Cut"
        color="#ef4444"
      />{" "}
      [cite: 58]
      <ContactShadows
        position={[0, -3.5, 0]}
        opacity={0.3}
        scale={15}
        blur={1}
      />
      <Environment preset="city" />
    </>
  );
}

const ExperienceCard = ({ title, company, period, highlights }: any) => (
  <div className="p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-blue-500/50 transition-all group hover:bg-slate-800">
    <div className="text-blue-500 font-mono text-xs mb-2">{period}</div>
    <h4 className="text-xl font-bold text-white group-hover:text-blue-400">
      {company}
    </h4>
    <p className="text-slate-500 text-sm mb-4 font-medium">{title}</p>
    <ul className="space-y-2 text-sm text-slate-400">
      {highlights.map((h: string, i: number) => (
        <li key={i} className="flex gap-2">
          <span className="text-blue-500">▹</span> {h}
        </li>
      ))}
    </ul>
  </div>
);

// --- MAIN PAGE ---
function App() {
  // 1. Track the vertical scroll progress
  const { scrollYProgress } = useScroll();

  /** * 2. Advanced Mapping:
   * [0, 0.1, 1] -> The "Input" (0% scroll, 10% scroll, 100% scroll)
   * [1, 0.5, 0.5] -> The "Output" (100% opacity, 50% opacity, 50% opacity)
   * * Result: It dims quickly as you start scrolling, then stays at 0.5
   * for the entire rest of the page.
   */
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [1, 0.15, 0.15],
  );
  return (
    <div className="min-h-screen w-full bg-[#030712] text-slate-200">
      {/* Dynamic Background */}
      {/* 3. Wrap Canvas in a motion.div for dynamic dimming */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className="fixed inset-0 z-0 pointer-events-none"
      >
        <div className="fixed inset-0 z-0">
          <Canvas shadows dpr={[1, 2]}>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <Suspense fallback={null}>
              <TechScene />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center sticky top-0 backdrop-blur-md border-b border-white/5">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white uppercase">
              Ananya Nag
            </h1>
            <div className="flex items-center gap-2 text-[10px] font-mono text-blue-400 tracking-widest uppercase">
              <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              SDE III • Backend Specialist
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:ananaynag1994s@gmail.com"
              className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="h-screen flex items-center px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xm font-bold">
              5.5 Years in Full-Stack Engineering
            </span>
            <h2 className="text-6xl lg:text-8xl font-black text-white mt-4 mb-6 leading-none tracking-tighter">
              SCALING,
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-emerald-400 italic">
                RE-DESIGN,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-blue-400 italic">
                SYSTEMS.
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Crafting high-performance cloud-native microservices and modular
              monoliths that thrive under heavy load.
            </p>
            <span className="text-4xl text:bold text-sky-400 max-w-lg leading-relaxed">
              I transform architectural bottlenecks into scalable performance.
            </span>
          </motion.div>
        </section>

        {/* Work Grid */}
        <section className="py-24 px-6 lg:px-20 bg-black/20">
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-6">
            <Cpu className="text-blue-500" /> Engineering History
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ExperienceCard
              company="MobCoder Technologies"
              title="SDE III (Full Stack)"
              period="01/2026 - Present"
              highlights={[
                "Engineered serverless workflows using AWS Lambda, slashing manual operational effort by 90%.",
                "Architected a modular monolith from GraphQL endpoints, reducing service overhead by 60%.",
              ]}
            />
            <ExperienceCard
              company="Zeller"
              title="Sr. Full Stack Engineer"
              period="07/2024 - 12/2024"
              highlights={[
                "Optimized high-traffic Lambda and GraphQL APIs, achieving a 20% reduction in service downtime.",
                "Implemented rigorous CI/CD via GitHub Actions, accelerating production release cycles by 30%.",
              ]}
            />
            <ExperienceCard
              company="NexGen Tech Solutions"
              title="Sr. Software Engineer"
              period="07/2022 - 01/2024"
              highlights={[
                "Orchestrated gRPC implementation to cut system latency by 50% and boost performance by 40%.",
                "Designed decoupled microservices using EventBridge and Pulsar, increasing total throughput by 25%.",
              ]}
            />
            <ExperienceCard
              company="Appinventiv"
              title="Software Engineer"
              period="03/2021 - 07/2022"
              highlights={[
                "Developed real-time socket architectures supporting 8,000+ concurrent users for cab-booking systems.",
                "Integrated Google Maps APIs to optimize matchmaking, reducing total API consumption by 75%.",
              ]}
            />
            <ExperienceCard
              company="GoPerceptive LLP"
              title="MERN Stack Developer"
              period="07/2020 - 01/2021"
              highlights={[
                "Extracted and processed 1M+ data points using Puppeteer, cutting collection time by 50%.",
                "Built analytical dashboards that drove a 25% increase in user engagement through actionable insights.",
              ]}
            />
            <ExperienceCard
              company="LeewayHertz"
              title="MERN Stack Developer"
              period="05/2019 - 03/2020"
              highlights={[
                "Launched a blockchain-based rewards system that successfully mitigated fraud by 30%.",
                "Architected Node.js/AWS infrastructure supporting 5,000+ users while reducing costs by 15%.",
              ]}
            />
          </div>
        </section>

        {/* Technical Stack */}
        <TechStack />
        <ProjectsSection />

        {/* Footer */}
        <section className="py-20" id="contact">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center bg-white transparent bg-clip-text">
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
                  <Instagram className="w-6 h-6" />
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
                <a
                  href="https://discord.gg/ananay.nag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors transform hover:-translate-y-1 duration-300"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="p-12 text-center text-slate-600 text-[10px] font-mono tracking-widest uppercase">
          Optimized for performance • Ananya Nag • 2026
        </footer>
      </div>
    </div>
  );
}

export default App;

const TechStack = () => {
  const stack = [
    {
      cat: "Backend Core",
      tech: "Golang, Node.js, TypeScript, Express, NestJS",
      icon: <Code />,
      color: "blue",
    },
    {
      cat: "Cloud & DevOps",
      tech: "AWS (Lambda, EventBridge, StepFunction), Serverless, Kafka, Pulsar",
      icon: <Cloud />,
      color: "emerald",
    },
    {
      cat: "Persistence",
      tech: "DynamoDB, Redis, PostgreSQL, MongoDB, MySQL, S3",
      icon: <Database />,
      color: "purple",
    },
    {
      cat: "Architectural Patterns",
      tech: "Microservices, Modular Monoliths, gRPC, REST, GraphQL",
      icon: <Zap />,
      color: "orange",
    },
    {
      cat: "Next-Gen AI",
      tech: "Agentic AI, MCP Server, Prompt Engineering",
      icon: <Cpu />,
      color: "cyan",
    },
    {
      cat: "Others",
      tech: "Socket.io, Elasticsearch, Redis Pub/Sub, Reac",
      icon: <Terminal />,
      color: "pink",
    },
    {
      cat: "UI/UX",
      tech: "React, Redux, JSON, CSS3, HTML5, Tailwind",
      icon: <Code />,
      color: "pink",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Glows for Aesthetic */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-sm font-mono text-blue-400 tracking-[0.3em] uppercase mb-2">
            Technical Arsenal
          </h3>
          <h2 className="text-4xl font-black text-white italic">
            Core Stack & Engineering Domains
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stack.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] overflow-hidden hover:bg-slate-800"
            >
              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                <div className="text-[10px] uppercase text-slate-500 mb-3 tracking-[0.2em] font-bold">
                  {s.cat}
                </div>
                <div className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors leading-relaxed">
                  {s.tech}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const imageSrcBase = `/images/v2`;

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
     imageSrc: `${imageSrcBase}/univercel-new.png`,
  },
  {
    title: "go-set-mod",
    desc: "A simple yet powerful CLI tool to automate Go module initialization based on project structure. It ensures correct module naming using a predefined GitHub namespace and relative paths from the project root.",
    github: "https://github.com/ananay-nag/go-create-init-module",
    tech: ["Golang", "Linux", "Shell Script"],
    link: "https://go-set-mod.vercel.app/",
    type: "GITHUB",
     imageSrc: `${imageSrcBase}/go-set-mod-1.png`,
  },
  {
    title: "react-voice-recorder",
    desc: "A lightweight, customizable React voice recorder component with automatic audio compression.",
    github: "https://github.com/ananay-nag/react-voice-recorder",
    npm: "https://www.npmjs.com/package/@ananay-nag/react-voice-recorder",
    tech: ["ReactJS", "TypeScript", "NodeJS"],
    link: "",
    type: "NPM",
    imageSrc: `${imageSrcBase}/react-voice-recorder.png`,
  },
  {
    title: "react-voice-demo-app",
    desc: "This application is a dynamic interview questionnaire that allows users to submit responses to predefined questions using either text input or voice recordings. It provides a user-friendly interface for collecting interview responses with validation and submission functionality.",
    github: "https://github.com/ananay-nag/react-voice-demo-app",
    tech: ["ReactJS", "TypeScript", "NodeJS"],
    link: "https://react-voice-demo-app.vercel.app",
    type: "GITHUB",
    imageSrc: `${imageSrcBase}/github-new.webp`,
  },
  {
    title: "google-page-auto-scroll",
    desc: "Auto Scroll is a lightweight Chrome extension that automatically scrolls webpages and allows users to control the speed using a popup UI and right-click context menu. It also supports targeted scrolling for a selected section.",
    github: "https://github.com/ananay-nag/google-page-auto-scroll",
    tech: ["Manifest V3", "JavaScript", "HTML & CSS", "Chrome Extensions API"],
    link: "",
    type: "EXTENSION",
    imageSrc: `${imageSrcBase}/github-new.webp`,
  },
  {
    title: "web-device-info",
    desc: "Universal Web Device Information Library – works for JS, React, Angular, Vue3, Svelte.Detect screen size, orientation, diagonal, platform, language, online status in real-time across all major frameworks.",
    github: "https://github.com/ananay-nag/web-device-info",
    tech: [
      "React",
      "JavaScript",
      "HTML & CSS",
      "Angular",
      "ValilaJS",
      "VueJS",
      "Svelte",
    ],
    npm: "https://www.npmjs.com/package/@ananay-nag/web-device-info",
    linkz: "",
    type: "NPM",
    imageSrc: `${imageSrcBase}/web-device-infor.png`,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-sm font-mono text-blue-400 tracking-[0.3em] uppercase mb-2">
            Open Source
          </h3>
          <h2 className="text-4xl font-black text-white italic">
            Featured Engineering Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OpenProjects.map((project, i) => (
            <div
              key={i}
              className="glass-card group flex flex-col h-full rounded-2xl overflow-hidden hover:bg-slate-900"
            >
              {/* Project Image Header */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-blue-400 border border-white/10 uppercase">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <ProjectTypeSection project={project} />
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-auto text-blue-400 hover:text-blue-300 flex items-center gap-1 text-xs font-bold uppercase tracking-widest"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectTypeSection = (project: any) => {
  let { type, npm, link } = project.project || {};
  switch (type) {
    case "EXTENSION":
      return (
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-blue-400 transition-colors"
        >
          <Chrome size={20} />
        </a>
      );
    case "NPM":
      return (
        <a
          href={npm}
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-blue-400 transition-colors"
        >
          <PackageOpen size={20} />
        </a>
      );
  }
};
