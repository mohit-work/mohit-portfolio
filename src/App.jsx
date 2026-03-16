import React, { useCallback, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Components
import Typewriter from "./Typewriter.jsx";
import DeveloperConsole from "./DeveloperConsole.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetail from "./ProjectDetail.jsx";

const ProjectTitle = ({ children }) => (
  <div className="mb-16 relative">
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-black text-white px-2 tracking-tighter"
    >
      {children}
    </motion.h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "120px" }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="h-1.5 bg-purple-600 mt-6 ml-2 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
    />
  </div>
);

const ContactTile = ({ title, value, icon, href }) => (
  <motion.a
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card p-10 rounded-3xl flex flex-col items-center text-center group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 text-purple-400">
      {icon}
    </div>
    <div className="space-y-2 relative z-10">
      <h3 className="text-sm font-black text-gray-500 uppercase tracking-[0.2em]">{title}</h3>
      <p className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{value}</p>
    </div>
  </motion.a>
);

const projects = [
  {
    title: "Attention-Augmented ECG Classification",
    description: "A robust hybrid CNN–LSTM framework with DWT denoising and SMOTE balancing for beat-level arrhythmia detection.",
    tech: "Python • PyTorch • CNN • LSTM • SMOTE • DWT",
    image: "ECG.png",
    github: "https://github.com/mohit-work/ecg-arrhythmia-classification",
    video: "ECG1.mp4",
    role: "Lead Research Engineer",
    duration: "6 Months",
    details: {
      category: "Deep Learning",
      challenge: "Addressing signal contamination (baseline wander/noise), morphological variability across patients, and severe inter-class imbalance in ECG datasets.",
      summary: "In this research, I developed a high-fidelity system for classifying heart arrhythmias from raw ECG signals. The core challenge was the extreme imbalance of heart-beat classes and the presence of significant signal contamination like baseline wander. I implemented a robust preprocessing pipeline using Discrete Wavelet Transform (DWT) for multi-resolution denoising and SMOTE to balance the minority classes. The classification engine is a hybrid deep learning model combining 1D-CNNs with Channel Attention to extract focal features, and a stacked LSTM layer to capture the temporal sequences of cardiac beats. This approach achieved a clinical-grade accuracy of 98.12% on the MIT-BIH dataset, demonstrating its potential for real-time cardiac monitoring.",
      solution: "Integrated Discrete Wavelet Transform (DWT) for multi-resolution denoising, R-peak centered segmentation, and SMOTE balancing. Developed a hierarchical 1D-CNN with Channel Attention recalibration and stacked LSTM for temporal dependencies.",
      stats: [
        { label: "Accuracy", value: "98.12%" },
        { label: "Inference", value: "<2ms" },
        { label: "Standard", value: "AAMI" }
      ],
      architecture: "Hybrid Attention-Augmented CNN–LSTM with SMOTE-DWT Preprocessing",
      visualResults: {
        type: "classification",
        accuracy: [0.3, 0.5, 0.7, 0.85, 0.92, 0.95, 0.97, 0.98, 0.9812],
        loss: [0.9, 0.7, 0.5, 0.3, 0.2, 0.15, 0.1, 0.08, 0.05],
        confusionMatrix: [
          [99.1, 0.2, 0.1, 0.4, 0.2],
          [1.5, 96.4, 1.2, 0.5, 0.4],
          [0.8, 0.5, 96.8, 1.4, 0.5],
          [2.1, 1.1, 3.4, 92.3, 1.1],
          [0.5, 0.2, 0.3, 0.6, 98.4]
        ]
      },
      deliverables: ["DWT Denoising Module", "Attention-CNN Feature Extractor", "Stacked LSTM Temporal Engine", "AAMI Standard Evaluation"]
    }
  },
  {
    title: "Multilingual Healthcare Assistant",
    description: "A Voice-Activated Multilingual Health Assistant leveraging fine-tuned LLaMA2 with LoRA/PEFT for real-time medical guidance.",
    tech: "Python • LLaMA2 • LoRA • PEFT • gTTS",
    image: "chat.png",
    github: "https://github.com/mohit-work/Medical_ChatBot",
    video: "chat1.mp4",
    role: "AI Research Engineer",
    duration: "4 Months",
    details: {
      category: "NLP / Speech AI",
      challenge: "Language barriers in healthcare significantly increase the risk of medical errors and physical harm, especially in linguistically diverse populations.",
      summary: "I designed and implemented a multilingual health assistance chatbot to bridge communication gaps in medical settings. The system leverages a Large Language Model (LLaMA2) which I fine-tuned using Parameter-Efficient Fine-Tuning (PEFT) with LoRA (Low-Rank Adaptation) on specialized medical datasets. This allows the model to provide accurate, context-aware health advice while minimizing computational overhead. To ensure accessibility for illiterate or visually impaired users, I integrated a speech-to-speech pipeline using gTTS (Google Text-to-Speech), allowing users to hear medical responses in their native language or convert their written queries into spoken words. The system supports multiple languages and maintains high BLEU scores for translation accuracy, making vital healthcare information more accessible.",
      solution: "Fine-tuned the aboonaji/llama2finetune-v2 model using LoRA and PEFT on a specialized medical corpus from Hugging Face. Integrated gTTS (Google Text-to-Speech) for natural-sounding auditory accessibility.",
      stats: [
        { label: "BLEU Score", value: "0.85" },
        { label: "Fine-Tuning", value: "LoRA" },
        { label: "VRAM Req", value: "<12GB" }
      ],
      visualResults: {
        type: "nlp",
        bleuScores: [
          { lang: "English", score: 1.0 },
          { lang: "Spanish", score: 0.89 },
          { lang: "French", score: 0.87 },
          { lang: "Hindi", score: 0.82 },
          { lang: "German", score: 0.88 }
        ],
        perplexityTrend: [120.5, 105.2, 95.8, 88.4, 84.1, 81.5, 80.45]
      },
      architecture: "LoRA-Fine-Tuned LLaMA2 with gTTS Speech Pipeline",
      deliverables: ["Fine-tuned LLM Model", "TTS Integration Module", "Multilingual Support Engine", "Accessibility-First Voice UI"]
    }
  },
  {
    title: "Enterprise Quiz System",
    description: "A comprehensive ASP.NET system for automated quiz creation, bulk Excel uploads, and multi-tier approval workflows.",
    tech: "ASP.NET • C# • MySQL • ClosedXML • Excel Interop",
    image: "quiz2.png",
    github: "https://github.com/mohit-work/Web-Based-Quiz-Management-and-Evaluation-System",
    video: "quiz1.mp4",
    role: "Full Stack Developer",
    duration: "4 Months",
    details: {
      category: "Enterprise Systems",
      challenge: "Scaling organizational assessments while maintaining a strict quality control/approval layer and handling heterogeneous bulk data uploads.",
      summary: "For this project, I engineered a robust, role-based enterprise platform for organizational assessments using the ASP.NET framework. The system follows a strict three-tier architecture (Presentation, Application, and Data) to ensure scalability and security. A key feature I developed is the multi-layer quiz approval workflow: Admins create or bulk-upload quizzes via a custom Excel parsing engine (using ClosedXML), which then undergo a rigorous review by a regulatory auditor before being published. I also implemented an automated evaluation engine that computes scores and generates detailed performance analytics for participants and administrators, while ensuring restricted access through session-based role management.",
      solution: "Architected a three-tier system leveraging ASP.NET Web Forms and MySQL. Implemented a hierarchical auditor layer for quiz approval and integrated ClosedXML for high-performance Excel parsing and bulk data ingestion.",
      stats: [
        { label: "Architecture", value: "3-Tier" },
        { label: "Audit Flow", value: "Enterprise" },
        { label: "Data Engine", value: "ClosedXML" }
      ],
      visualResults: {
        type: "system",
        traffic: [120, 850, 2200, 3500, 4800, 5200, 5100, 4500],
        responseTime: [280, 210, 160, 140, 125, 120, 118, 115]
      },
      architecture: "Three-Tier Role-Based Architecture (Admin/BIS/User)",
      deliverables: ["Excel Parsing Engine", "BIS Approval Workflow", "Automated Evaluation System", "Role-Based Analytics Dashboard"]
    }
  },
  {
    title: "Neuro-evolution Navigation",
    description: "A web-based autonomous driving framework using neuroevolutionary FFNN controllers optimized through genetic algorithms on real-world OSM data.",
    tech: "JavaScript • Neuroevolution • p5.js • OpenStreetMap • Genetic Algorithms",
    image: "car.png",
    github: "https://github.com/mohit-work/Evolutionary-Neural-Network-Driven-Autonomous-Vehicle-Simulation",
    video: "car1.mp4",
    role: "AI Research Engineer",
    duration: "5 Months",
    details: {
      category: "Robotics / Evolution",
      challenge: "Developing adaptive control mechanisms for dynamic environments without the need for large labeled datasets or gradient-based training.",
      summary: "NeuroDrive is a research project where I explored the application of evolutionary computation in autonomous vehicle control. Instead of using traditional reinforcement learning, I built a system that evolves neural network controllers using Genetic Algorithms (GA). I constructed a web-based simulation environment that translates real-world map data from Helsinki (OpenStreetMap) into a playable canvas. Each agent features a feedforward neural network that learns to interpret 32-ray LiDAR-inspired sensor inputs. Through thousands of generations involving selection, crossover, and mutation, the agents autonomously discovered optimal steering and acceleration strategies, measured by a fitness function that rewards progression and stability while penalizing collisions.",
      solution: "Implemented a neuroevolutionary framework where Feedforward Neural Networks (FFNN) are evolved using genetic operators (selection, crossover, mutation). Integrated LiDAR-inspired ray-casting for perception and real-world urban road geometry extracted from OpenStreetMap (Helsinki). Optimized fitness through a weighted multi-objective function: F(θ) = αD + γS - βC.",
      stats: [
        { label: "Optimization", value: "Genetic" },
        { label: "Convergence", value: "200 Gen" },
        { label: "Fitness Peak", value: "0.95" }
      ],
      visualResults: {
        type: "simulation",
        fitness: [0.05, 0.15, 0.42, 0.68, 0.82, 0.89, 0.92, 0.95],
        sensorRays: [
          { angle: -45, distance: 0.9 },
          { angle: -25, distance: 0.6 },
          { angle: 0, distance: 0.3 },
          { angle: 25, distance: 0.7 },
          { angle: 45, distance: 0.95 }
        ]
      },
      architecture: "Neuro-evolutionary Neural Control Framework (OSM-Based)",
      deliverables: ["LiDAR Ray-casting Module", "Genetic Parameter Optimizer", "OSM Map Parser (Helsinki)", "Interactive Evolutionary Dashboard"]
    }
  },
];

const skills = [
  "Deep Learning", "Neuro-evolution", "Adaptive Control", "Python", "PyTorch", "C++",
  "ASP.NET", "React", "JavaScript", "System Design"
];

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // 3D Tilt & Light Tracking for Portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-350, 350], [8, -8]), { stiffness: 45, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-350, 350], [-8, 8]), { stiffness: 45, damping: 25 });
  const glowX = useSpring(useTransform(x, [-350, 350], [-30, 30]), { stiffness: 45, damping: 25 });
  const glowY = useSpring(useTransform(y, [-350, 350], [-30, 30]), { stiffness: 45, damping: 25 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const particlesInit = useCallback(async (engine) => {
    try {
      await loadFull(engine);
    } catch (error) {
      console.error("Particles initialization failed:", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      <div className="bg-mesh" />
      <div className="noise" />
      <DeveloperConsole />

      {/* Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-full flex gap-8 text-xs font-bold uppercase tracking-widest">
        <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
        <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
        <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
        <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pt-20 gap-12">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="flex-1 space-y-12 z-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 text-xs font-black uppercase tracking-[0.2em] text-purple-400"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                Available for Innovation
              </motion.div>

              <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter leading-[0.8] text-white">
                MOHIT ANAND<br />
                <span className="text-gradient">PITCHIKA</span>
              </h1>
            </div>

            <p className="text-2xl md:text-3xl text-gray-400 max-w-2xl font-light leading-snug">
              <span className="text-white font-medium italic underline decoration-purple-500/50 underline-offset-8">Software Engineer</span> focused on designing
              <span className="text-white font-medium italic underline decoration-blue-500/50 underline-offset-8"> scalable software systems</span>,
              <span className="text-white font-medium italic underline decoration-purple-500/50 underline-offset-8"> high-performance architectures</span>, and
              <span className="text-white font-medium italic underline decoration-blue-500/50 underline-offset-8"> intelligent AI technologies</span>.
            </p>

            <div className="flex flex-wrap gap-8 pt-6">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-10 py-5 bg-white text-black font-black rounded-2xl flex items-center gap-4 transition-all shadow-2xl hover:shadow-white/20"
              >
                SELECTED WORK
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView()}
                className="px-10 py-5 glass text-white font-black rounded-2xl border border-white/10 transition-all hover:bg-white/10 uppercase tracking-widest"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

          {/* Organic Hologram Portrait side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="flex-1 relative group w-full max-w-[600px] lg:max-w-none perspective-2000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* High-Intensity Dynamic Light Source */}
            <motion.div
              style={{ x: glowX, y: glowY }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.4)_0%,transparent_60%)] blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            />

            {/* 3D Hologram Container */}
            <motion.div
              style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
              }}
              className="relative z-10"
            >
              <div
                className="relative group/hologram cursor-default"
                style={{
                  maskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at 50% 45%, black 40%, rgba(0,0,0,0.5) 70%, transparent 95%)'
                }}
              >
                {/* Chromatic Aberration Layers (RGB Split on Hover) */}
                <img
                  src="PP.png"
                  alt="Mohit Anand Pitchika"
                  className="relative z-20 w-full h-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.2)] filter brightness-110 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                />
                <img
                  src="PP.png"
                  alt=""
                  className="absolute inset-0 z-10 w-full h-auto opacity-0 group-hover:opacity-50 group-hover:translate-x-1 filter blur-[1px] hue-rotate-[90deg] transition-all duration-700 pointer-events-none mix-blend-screen"
                />
                <img
                  src="PP.png"
                  alt=""
                  className="absolute inset-0 z-10 w-full h-auto opacity-0 group-hover:opacity-50 group-hover:-translate-x-1 filter blur-[1px] hue-rotate-[-90deg] transition-all duration-700 pointer-events-none mix-blend-screen"
                />

                {/* Subtle Tech Grid / Scanline Filter */}
                <div className="absolute inset-0 z-30 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-1000 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,4px_100%]" />

                {/* Grounding Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/40 to-transparent z-40" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-40 scroll-mt-20">
          <ProjectTitle>SELECTED WORK</ProjectTitle>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={{ ...project, onClick: () => setSelectedProject(project) }}
              />
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-40">
          <ProjectTitle>ENGINEERING STACK</ProjectTitle>
          <div className="bento-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-[3rem] p-12 flex flex-col justify-between"
            >
              <div className="space-y-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">Engineering<br />Versatility</h3>
                <p className="text-xl text-gray-400 leading-relaxed font-light">
                  I excel at building comprehensive digital solutions from the ground up. My expertise spans cloud-native architectures, high-concurrency systems, and the latest trends in Full-Stack and AI-driven development.
                </p>
              </div>
              <div className="pt-10 flex gap-4">
                <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-white/50">FULL-STACK SYSTEMS</span>
                <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-white/50">MODERN AI & CLOUD</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-2 glass-card rounded-[2.5rem] p-10 flex items-center justify-between group"
            >
              <div className="space-y-3">
                <p className="text-xs font-black text-purple-500 uppercase tracking-[0.3em]">Academic Core</p>
                <h3 className="text-3xl font-black text-white italic">VIT Chennai</h3>
                <p className="text-lg text-gray-400 font-light tracking-wide uppercase">Computer Science Engineering</p>
              </div>
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-1 md:col-span-2 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between"
            >
              <h4 className="text-5xl font-black text-gradient italic">Software<br />Engineering</h4>
              <p className="text-xs text-gray-400 font-black tracking-[0.2em] uppercase">Core Strength</p>
            </motion.div>
          </div>
        </section>

        {/* Career Elevation Section */}
        <section id="career" className="py-40">
          <ProjectTitle>PROFESSIONAL FOOTPRINT</ProjectTitle>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[4rem] p-16 relative overflow-hidden group border border-white/10"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg className="w-64 h-64 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-3.577 0l-.727-2.903a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l2.146 2.146a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-2.146-2.146a2 2 0 00-.547-1.022l.477-2.387a2 2 0 011.414-1.96l2.903-.727a2 2 0 010-3.577l-2.903-.727a2 2 0 01-1.414-1.96l-.477-2.387a2 2 0 00.547-1.022l2.146 2.146a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-2.146 2.146a2 2 0 001.022.547l2.387.477a2 2 0 001.96-1.414l.727-2.903a2 2 0 013.577 0l.727 2.903a2 2 0 001.96 1.414l2.387-.477a2 2 0 001.022-.547l-2.146-2.146a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l2.146 2.146a2 2 0 00.547 1.022l-.477 2.387a2 2 0 01-1.414 1.96l-2.903.727a2 2 0 010 3.577l2.903.727a2 2 0 011.414 1.96l.477 2.387a2 2 0 00-.547 1.022l-2.146-2.146a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l2.146-2.146z" /></svg>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
              <div className="space-y-4">
                <span className="px-6 py-2 rounded-full bg-purple-500/20 text-purple-400 text-xs font-black tracking-[0.3em] uppercase italic">SUMMER INTERNSHIP</span>
                <h3 className="text-6xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">Gas Authority of<br />India Limited</h3>
                <div className="flex items-center gap-4 text-gray-500 font-bold tracking-widest text-sm uppercase">
                  <span>MAY 2025 &ndash; JUL 2025</span>
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="text-blue-400">ASP.NET Web Forms &bull; MySQL</span>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="Mr._Mohit_Anand_Pitchika_Summer_Vocational_Training_Certificate[1].pdf"
                target="_blank"
                className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black rounded-3xl tracking-widest uppercase italic shadow-2xl hover:shadow-white/10 transition-all"
              >
                <span>Verification Proof</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-10">
                  Engineered a complex, enterprise-grade system for high-performance quiz and evaluation management.
                <div className="space-y-8">
                  {[
                    "Built a scalable, role-based quiz management system with secure admin, user, and reviewer access control.",
                    "Implemented quiz creation modules supporting manual input and Excel upload with real-time data validation."
                  ].map((bullet, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-4 shrink-0 group-hover:scale-150 transition-transform" />
                      <p className="text-gray-300 text-lg font-light leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                {[
                  "Developed features like countdown-based timed quizzes, auto-evaluation, and detailed user performance tracking.",
                  "Designed interactive admin dashboards to monitor quiz lifecycle, approval workflows, and analytics reports."
                ].map((bullet, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-4 shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-300 text-lg font-light leading-relaxed">{bullet}</p>
                  </div>
                ))}
                <div className="pt-8 flex flex-wrap gap-3">
                  {["C#", "Excel Interop", "ClosedXML", "HTML", "Data Validation"].map((tag, i) => (
                    <span key={i} className="px-5 py-2 rounded-xl bg-white/5 border border-white/5 text-[10px] font-black text-gray-500 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Professional Impact Section (New) */}
        <section id="impact" className="py-40">
          <ProjectTitle>Professional Impact & Leadership</ProjectTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Achievements & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] p-12 space-y-10"
            >
              <div>
                <p className="text-xs font-black text-purple-500 uppercase tracking-[0.3em] mb-4">Benchmarks</p>
                <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-8">Achievements &<br />Certifications</h3>

                <div className="space-y-8">
                  {[
                    { title: "IEEE YESIST 2024 Finalist", subtitle: "International Hackathon", type: "AWARD", href: "Yesist.pdf" },
                    { title: "Dev’s House Finalist (Rank 6)", subtitle: "National Hackathon by GDSC", type: "AWARD", href: "DEV's House.png" },
                    { title: "Oracle Certified GenAI Professional", subtitle: "OCI 2024 Certification", type: "CERT", href: "oracle.pdf" },
                    { title: "Microsoft Certified Azure AI 900", subtitle: "AI Fundamentals", type: "CERT", href: "AI_900.pdf" }
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href || "#"}
                      target="_blank"
                      className="flex justify-between items-center group cursor-pointer border-b border-white/5 pb-6 last:border-0 last:pb-0 block"
                    >
                      <div>
                        <h4 className="text-xl font-black text-white group-hover:text-purple-400 transition-colors uppercase italic tracking-tighter leading-none">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-light mt-2">{item.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black px-3 py-1 rounded bg-white/5 border border-white/10 text-white/30 tracking-widest">{item.type}</span>
                        {item.href && <svg className="w-5 h-5 text-white/10 group-hover:text-white/50 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Leadership & Volunteering */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-12 right-12 w-24 h-24 rounded-full border-2 border-dashed border-white/5 opacity-20 group-hover:rotate-180 transition-transform duration-[3000ms]" />
              <div className="relative z-10">
                <p className="text-xs font-black text-blue-500 uppercase tracking-[0.3em] mb-4">Leadership</p>
                <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-2">Principal Secretary</h3>
                <p className="text-2xl text-gray-400 font-light mb-8 italic">NSS, VIT Chennai</p>

                <div className="space-y-6">
                  <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 space-y-3">
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      Led and coordinated a 200+ member volunteer force to deliver large-scale social impact initiatives. Represented VIT Chennai at nationally prestigious programs including the National Integration Camp and the Tamil Nadu Republic Day Parade.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-center">
                      <h5 className="text-3xl font-black text-gradient">1K+</h5>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Impacted</p>
                    </div>
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-center">
                      <h5 className="text-3xl font-black text-gradient">NIC</h5>
                      <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">National Rep</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-10 flex gap-4">
                <span className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs font-black uppercase tracking-widest text-white/50 italic">Community Leadership</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-40">
          <ProjectTitle>CONNECT</ProjectTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactTile
              title="LinkedIn"
              value="mohitanand14"
              icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
              href="https://www.linkedin.com/in/mohitanand14/"
            />
            <ContactTile
              title="GitHub"
              value="mohit-work"
              icon={<svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
              href="https://github.com/mohit-work"
            />
            <ContactTile
              title="Email"
              value="pitchikamohitanand@gmail.com"
              icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pitchikamohitanand@gmail.com"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 glass-card p-16 rounded-[4rem] text-center space-y-10 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-30" />
            <div className="relative z-10 space-y-8">
              <h3 className="text-5xl font-black text-white tracking-tighter italic uppercase">Looking for<br />an Engineer?</h3>
              <p className="text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Available for high-impact engineering roles, full-stack collaborations, or technical ventures that push the boundaries of digital architecture.
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center pt-6">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="Mohit_Resume.pdf"
                  download
                  className="px-12 py-6 bg-white text-black font-black rounded-[2rem] transition-all shadow-2xl hover:shadow-white/20 uppercase tracking-[0.2em] italic"
                >
                  DOWNLOAD R&Eacute;SUM&Eacute;
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pitchikamohitanand@gmail.com"
                  className="px-12 py-6 glass text-white font-black rounded-[2rem] border border-white/10 transition-all hover:bg-white/10 uppercase tracking-[0.2em] italic"
                >
                  REQUEST BRIEF
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <footer className="py-24 text-center border-t border-white/5 bg-black/80 backdrop-blur-3xl">
        <p className="text-gray-500 text-sm font-black tracking-[0.5em] uppercase">MOHIT ANAND PITCHIKA &bull; SOFTWARE ENGINEERING</p>
      </footer>
    </div>
  );
};

export default App;