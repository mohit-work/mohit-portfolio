import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ArchitectureMap = ({ type }) => {
  const animations = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  };

  if (type === "nlp") {
    return (
      <svg viewBox="0 0 800 200" className="w-full h-full">
        {/* Nodes */}
        <motion.rect {...animations} x="50" y="70" width="120" height="60" rx="10" className="fill-purple-500/10 stroke-purple-500/30" />
        <motion.rect {...animations} x="250" y="50" width="140" height="100" rx="10" className="fill-blue-500/10 stroke-blue-500/30" />
        <motion.rect {...animations} x="480" y="70" width="120" height="60" rx="10" className="fill-white/5 stroke-white/20" />
        <motion.rect {...animations} x="650" y="70" width="100" height="60" rx="30" className="fill-purple-500/20 stroke-purple-500/50" />
        
        {/* Texts */}
        <text x="110" y="105" textAnchor="middle" className="text-xs fill-white/50 uppercase font-bold tracking-widest">Audio In</text>
        <text x="320" y="105" textAnchor="middle" className="text-xs fill-white/80 uppercase font-bold tracking-widest text-center">LLaMA2 (LoRA)</text>
        <text x="540" y="105" textAnchor="middle" className="text-xs fill-white/50 uppercase font-bold tracking-widest">Logic/gTTS</text>
        <text x="700" y="105" textAnchor="middle" className="text-xs fill-white/50 uppercase font-bold tracking-widest">Speech</text>
        
        {/* Connectors */}
        {[170, 390, 600].map((x, i) => (
          <motion.path 
            key={i}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: i * 0.2, duration: 1 }}
            d={`M ${x} 100 L ${x + 80} 100`} 
            className="stroke-white/10 fill-none" 
            markerEnd="url(#arrow)" 
          />
        ))}
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="3" markerHeight="3" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" className="fill-white/20" />
          </marker>
        </defs>
      </svg>
    );
  }

  if (type === "system") {
    return (
      <svg viewBox="0 0 800 200" className="w-full h-full">
         {/* Layers Labels */}
         <text x="50" y="30" className="text-[10px] fill-white/20 uppercase font-bold tracking-widest">Presentation</text>
         <text x="50" y="100" className="text-[10px] fill-white/20 uppercase font-bold tracking-widest">Application</text>
         <text x="50" y="170" className="text-[10px] fill-white/20 uppercase font-bold tracking-widest">Data</text>
         
         {/* Roles (Presentation) */}
         <motion.rect {...animations} x="100" y="40" width="80" height="40" rx="4" className="fill-purple-500/10 stroke-purple-500/30" />
         <motion.rect {...animations} x="360" y="40" width="80" height="40" rx="4" className="fill-blue-500/10 stroke-blue-500/30" />
         <motion.rect {...animations} x="620" y="40" width="80" height="40" rx="4" className="fill-white/5 stroke-white/20" />
         
         <text x="140" y="65" textAnchor="middle" className="text-[10px] fill-white/80 uppercase font-black">Admin</text>
         <text x="400" y="65" textAnchor="middle" className="text-[10px] fill-white/80 uppercase font-black">Auditor (Review)</text>
         <text x="660" y="65" textAnchor="middle" className="text-[10px] fill-white/80 uppercase font-black">Participant</text>
         
         {/* Logic (Application) */}
         <motion.rect {...animations} x="200" y="110" width="400" height="40" rx="4" className="fill-white/5 stroke-white/10" />
         <text x="400" y="135" textAnchor="middle" className="text-[10px] fill-white/80 uppercase font-bold tracking-widest">ASP.NET Core / ClosedXML Engine</text>
         
         {/* Database (Data) */}
         <motion.path {...animations} d="M 370 170 L 430 170 L 430 195 L 370 195 Z" className="fill-green-500/10 stroke-green-500/30" />
         <text x="400" y="185" textAnchor="middle" className="text-[8px] fill-white/40 uppercase font-bold">MySQL</text>
         
         {/* Flow Connectors */}
         <path d="M 180 60 L 360 60" className="stroke-purple-500/30 stroke-dasharray-[4,2] fill-none" />
         <path d="M 440 60 L 620 60" className="stroke-blue-500/30 stroke-dasharray-[4,2] fill-none" />
         <path d="M 140 80 L 140 110" className="stroke-white/10 fill-none" />
         <path d="M 400 80 L 400 110" className="stroke-white/10 fill-none" />
         <path d="M 660 80 L 660 110" className="stroke-white/10 fill-none" />
         <path d="M 400 150 L 400 170" className="stroke-white/10 fill-none" />
      </svg>
    );
  }

  if (type === "simulation") {
    return (
      <svg viewBox="0 0 800 200" className="w-full h-full">
         {/* Map Processing Layer */}
         <g transform="translate(40, 40)">
            <motion.rect {...animations} width="100" height="50" rx="8" className="fill-blue-500/10 stroke-blue-500/30" />
            <text x="50" y="25" textAnchor="middle" className="text-[8px] fill-white/80 uppercase font-bold">OSM Parser</text>
            <text x="50" y="38" textAnchor="middle" className="text-[6px] fill-white/30 lowercase italic">(Helsinki Data)</text>
         </g>
         
         <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            d="M 140 65 L 180 65" 
            className="stroke-white/10 fill-none" 
         />

         {/* NN Topology Section */}
         <g transform="translate(180, 20)">
           <text x="80" y="0" className="text-[6px] fill-purple-400 uppercase font-mono">FFNN Genome Encoding</text>
           {/* Input Layer */}
           {[30, 60, 90, 120, 150].map((y, i) => (
             <motion.circle key={`in-${i}`} {...animations} cx="30" cy={y} r="5" className="fill-blue-500/30 stroke-blue-500/50" />
           ))}
           {/* Hidden Layer */}
           {[45, 75, 105, 135].map((y, i) => (
             <motion.circle key={`hid-${i}`} {...animations} cx="90" cy={y} r="6" className="fill-purple-500/30 stroke-purple-500" />
           ))}
           {/* Output Layer */}
           {[60, 120].map((y, i) => (
             <motion.circle key={`out-${i}`} {...animations} cx="150" cy={y} r="8" className="fill-green-500/40 stroke-green-500" />
           ))}
           {/* Synapses */}
           <path d="M 35 60 L 85 45 M 35 120 L 85 135 M 95 75 L 142 60 M 95 105 L 142 120" className="stroke-white/10 fill-none" />
         </g>

         {/* Fitness Formula Box */}
         <g transform="translate(400, 70)">
            <motion.rect {...animations} width="160" height="60" rx="12" className="fill-white/5 stroke-white/10" />
            <text x="80" y="20" textAnchor="middle" className="text-[8px] fill-purple-400 uppercase font-bold">Evolutionary Objective</text>
            <text x="80" y="42" textAnchor="middle" className="text-[10px] fill-white font-mono">F(θ) = αD + γS - βC</text>
         </g>

         {/* Connectors to Cycle */}
         <path d="M 330 95 L 400 95" className="stroke-white/10 fill-none" />
         <path d="M 560 95 L 620 95" className="stroke-white/10 fill-none" />

         {/* Genetic Cycle Section */}
         <g transform="translate(700, 100)">
           <motion.circle 
             initial={{ rotate: 0 }}
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             r="45" className="fill-none stroke-purple-500/20 stroke-dasharray-[5,5]" 
           />
           <circle r="4" className="fill-purple-500 animate-pulse" />
           <text y="70" textAnchor="middle" className="text-[7px] fill-white/40 uppercase tracking-widest leading-none">
             Generation Cycle
             <tspan x="0" dy="10" className="text-[5px] fill-white/10">Selection / Crossover / Mutation</tspan>
           </text>
         </g>
      </svg>
    )
  }

  // Default: ML Pipeline (ECG)
  return (
    <svg viewBox="0 0 800 200" className="w-full h-full">
      <motion.rect {...animations} x="20" y="70" width="100" height="60" rx="8" className="fill-white/5 stroke-white/10" />
      <motion.rect {...animations} x="150" y="60" width="120" height="80" rx="8" className="fill-purple-500/10 stroke-purple-500/30" />
      <motion.rect {...animations} x="300" y="70" width="100" height="60" rx="8" className="fill-blue-500/10 stroke-blue-500/30" />
      <motion.rect {...animations} x="430" y="50" width="120" height="100" rx="8" className="fill-purple-500/20 stroke-purple-500/50" />
      <motion.rect {...animations} x="580" y="70" width="100" height="60" rx="8" className="fill-white/5 stroke-white/10" />
      <motion.rect {...animations} x="700" y="80" width="80" height="40" rx="20" className="fill-purple-500/40 stroke-purple-500" />
      
      <text x="70" y="105" textAnchor="middle" className="text-[8px] fill-white/30 uppercase font-bold">Raw ECG</text>
      <text x="210" y="105" textAnchor="middle" className="text-[8px] fill-white/60 uppercase font-bold">DWT/SMOTE</text>
      <text x="350" y="105" textAnchor="middle" className="text-[8px] fill-white/60 uppercase font-bold">1D CNN</text>
      <text x="490" y="105" textAnchor="middle" className="text-[8px] fill-white/60 uppercase font-bold">Attention</text>
      <text x="630" y="105" textAnchor="middle" className="text-[8px] fill-white/60 uppercase font-bold">LSTM</text>
      <text x="740" y="105" textAnchor="middle" className="text-[8px] fill-white font-bold">Beat</text>
    </svg>
  );
};

const ProjectDetail = ({ project, onClose }) => {
  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      layoutId={`project-${project.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black overflow-y-auto custom-scrollbar"
    >
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 px-8 py-6 flex justify-between items-center glass">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span className="text-sm font-medium uppercase tracking-widest">Back to Portfolio</span>
          </button>
          <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-tighter text-white/30 hover:text-white transition-colors">Source Code</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="px-8 md:px-20 py-20 flex flex-col md:flex-row gap-12 items-center border-b border-white/5 bg-gradient-to-b from-purple-500/5 to-transparent">
          <div className="md:w-1/2">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-purple-500 font-mono text-xs uppercase tracking-[0.3em] mb-4"
            >
              Technical Case Study
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tighter"
            >
              {project.title}
            </motion.h1>
            <div className="flex flex-wrap gap-2">
              {project.tech.split("•").map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white/50">
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4 }}
             className="md:w-1/2 aspect-video rounded-3xl overflow-hidden glass border-white/5 shadow-2xl relative"
          >
            {project.video ? (
              <video 
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-60"
              />
            ) : (
              <motion.img 
                layoutId={`image-${project.title}`}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-60"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </header>

        {/* Statistics Grid */}
        <section className="px-8 md:px-20 py-16 grid grid-cols-2 md:grid-cols-3 gap-8 border-b border-white/5">
           {project.details.stats.map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="p-8 rounded-[2rem] glass bg-white/[0.01] border-white/5"
             >
                <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-4">{stat.label}</p>
                <p className="text-4xl font-bold tracking-tighter">{stat.value}</p>
             </motion.div>
           ))}
        </section>

        {/* Content Body */}
        <main className="px-8 md:px-20 py-32 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-8 space-y-32">
            <section>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-purple-500" />
                The Challenge
              </h2>
              <p className="text-2xl text-gray-400 leading-relaxed font-light">
                {project.details.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-purple-500" />
                Project Methodology
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed font-normal bg-white/[0.02] p-8 rounded-3xl border border-white/5">
                {project.details.summary}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-purple-500" />
                Technical Architecture
              </h2>
              <div className="p-10 rounded-[3rem] glass border-white/5 bg-white/[0.02]">
                <div className="mb-12">
                  <p className="text-xs uppercase tracking-widest text-purple-400 mb-2">Core Pattern</p>
                  <h3 className="text-2xl font-bold text-white">{project.details.architecture}</h3>
                </div>
                
                <div className="aspect-[21/9] w-full relative bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center p-8">
                   <ArchitectureMap type={project.details.visualResults.type} />
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/5">
                   <p className="text-gray-400 leading-relaxed text-lg">
                      {project.details.solution}
                   </p>
                </div>
              </div>
            </section>

            {/* Visual Analysis Section */}
            {project.details.visualResults && (
              <section className="space-y-12">
                <div className="flex justify-between items-end">
                  <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="w-8 h-px bg-purple-500" />
                    Visual Analysis
                  </h2>
                  <span className="text-[10px] py-1 px-3 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 uppercase tracking-widest leading-none">
                    {project.details.category || "Research Metrics"}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* LEFT COLUMN: Main Domain Chart */}
                  <div className="p-8 rounded-3xl glass border-white/5 bg-white/[0.02] flex flex-col">
                    {project.details.visualResults.type === "nlp" ? (
                      <>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-8 flex justify-between">
                          Multilingual BLEU Scores
                          <span className="text-purple-400">Score Range: [0.0 - 1.0]</span>
                        </h3>
                        <div className="space-y-4 flex-1">
                          {project.details.visualResults.bleuScores.map((item, i) => (
                            <div key={i} className="space-y-1">
                              <div className="flex justify-between text-[10px] uppercase tracking-tighter text-gray-500">
                                <span>{item.lang}</span>
                                <span>{(item.score * 100).toFixed(1)}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden flex items-center relative">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${item.score * 100}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                />
                                {/* Ticks */}
                                {[0, 0.25, 0.5, 0.75, 1].map(tick => (
                                  <div key={tick} className="absolute h-full w-px bg-white/10" style={{ left: `${tick * 100}%` }} />
                                ))}
                              </div>
                              </div>
                          ))}
                          <div className="flex justify-between text-[10px] text-white/40 pt-2 uppercase font-mono font-bold">
                            <span>0.0</span>
                            <span>0.25</span>
                            <span>0.50</span>
                            <span>0.75</span>
                            <span>1.0</span>
                          </div>
                        </div>
                      </>
                    ) : project.details.visualResults.type === "system" ? (
                      <>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-8 flex justify-between">
                          Traffic Load Simulation
                          <span className="text-blue-400">Req/sec (Normalized)</span>
                        </h3>
                        <div className="aspect-video relative pt-4 pr-4">
                          <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                            {/* Y Axis */}
                            <line x1="0" y1="0" x2="0" y2="200" stroke="white" strokeOpacity="0.1" />
                            <text x="-5" y="10" textAnchor="end" className="text-[10px] fill-white/40 font-bold">6k</text>
                            <text x="-5" y="100" textAnchor="end" className="text-[10px] fill-white/40 font-bold">3k</text>
                            <text x="-5" y="195" textAnchor="end" className="text-[10px] fill-white/40 font-bold">0</text>
                            <text x="-35" y="100" textAnchor="middle" className="text-[10px] fill-white/50 uppercase font-black -rotate-90">Concurrent Users</text>

                            {/* X Axis */}
                            <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeOpacity="0.1" />
                            <text x="0" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">0h</text>
                            <text x="200" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">12h</text>
                            <text x="400" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">24h</text>
                            <text x="200" y="235" textAnchor="middle" className="text-[10px] fill-white/50 uppercase font-black">Time Duration (24h Cycle)</text>

                            <motion.path
                              initial={{ pathLength: 0, opacity: 0 }}
                              whileInView={{ pathLength: 1, opacity: 1 }}
                              transition={{ duration: 2 }}
                              d={`M 0 180 L 50 160 L 100 120 L 150 40 L 200 20 L 300 30 L 400 60 L 400 200 L 0 200 Z`}
                              fill="url(#gradient-blue)"
                              fillOpacity="0.1"
                              stroke="#3b82f6"
                              strokeWidth="2"
                            />
                            <defs>
                              <linearGradient id="gradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-8 flex justify-between">
                          {project.details.visualResults.type === "simulation" ? "Evolution Progress" : "Training Performance"}
                          <span className="text-purple-400">
                            Metric Scale: [0 - 1.0]
                          </span>
                        </h3>
                        <div className="aspect-video relative pt-4 pr-4">
                           <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                              {/* Grid lines */}
                              {[0, 1, 2, 3, 4].map(i => (
                                <line key={i} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="white" strokeOpacity="0.05" />
                              ))}
                              
                              {/* Y Axis */}
                              <line x1="0" y1="0" x2="0" y2="200" stroke="white" strokeOpacity="0.1" />
                               <text x="-5" y="10" textAnchor="end" className="text-[10px] fill-white/40 font-bold">1.0</text>
                               <text x="-5" y="105" textAnchor="end" className="text-[10px] fill-white/40 font-bold">0.5</text>
                               <text x="-5" y="195" textAnchor="end" className="text-[10px] fill-white/40 font-bold">0.0</text>
                               <text x="-35" y="100" textAnchor="middle" className="text-[10px] fill-white/50 uppercase font-black -rotate-90">
                                 {project.details.visualResults.type === "simulation" ? "Fitness Score" : "Accuracy / Loss"}
                               </text>

                              {/* X Axis */}
                              <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeOpacity="0.1" />
                              <text x="0" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">0</text>
                              <text x="200" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">
                                {project.details.visualResults.type === "simulation" ? "500" : "50"}
                              </text>
                              <text x="400" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">
                                {project.details.visualResults.type === "simulation" ? "1000" : "100"}
                              </text>
                              <text x="200" y="235" textAnchor="middle" className="text-[10px] fill-white/50 uppercase font-black">
                                {project.details.visualResults.type === "simulation" ? "Generations" : "Epochs"}
                              </text>

                              <motion.path
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                d={`M 0 180 ${ (project.details.visualResults.accuracy || project.details.visualResults.fitness).map((v, i) => 
                                  `L ${i * (400 / ((project.details.visualResults.accuracy || project.details.visualResults.fitness).length - 1))} ${180 - v * 150}`
                                ).join(" ")}`}
                                fill="none"
                                stroke="#a855f7"
                                strokeWidth="3"
                              />
                              {project.details.visualResults.loss && (
                                <motion.path
                                  initial={{ pathLength: 0 }}
                                  whileInView={{ pathLength: 1 }}
                                  transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                                  d={`M 0 20 ${project.details.visualResults.loss.map((v, i) => 
                                    `L ${i * (400 / (project.details.visualResults.loss.length - 1))} ${20 + v * 150}`
                                  ).join(" ")}`}
                                  fill="none"
                                  stroke="#3b82f6"
                                  strokeWidth="3"
                                  strokeDasharray="4 2"
                                />
                              )}
                           </svg>
                        </div>
                      </>
                    )}
                  </div>

                  {/* RIGHT COLUMN: Secondary Domain Viz */}
                  <div className="p-8 rounded-3xl glass border-white/5 bg-white/[0.02] flex flex-col">
                    {project.details.visualResults.type === "nlp" ? (
                      <>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-8">Model Perplexity Trend</h3>
                        <div className="aspect-video relative pt-4 pr-4">
                           <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                              {/* Y Axis */}
                              <line x1="0" y1="0" x2="0" y2="200" stroke="white" strokeOpacity="0.1" />
                              <text x="-5" y="10" textAnchor="end" className="text-[10px] fill-white/40 font-bold">150</text>
                              <text x="-5" y="105" textAnchor="end" className="text-[10px] fill-white/40 font-bold">75</text>
                              <text x="-5" y="195" textAnchor="end" className="text-[10px] fill-white/40 font-bold">0</text>
                              <text x="-35" y="100" textAnchor="middle" className="text-[10px] fill-white/50 uppercase font-black -rotate-90">Perplexity</text>

                              {/* X Axis */}
                              <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeOpacity="0.1" />
                              <text x="0" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">Start</text>
                              <text x="400" y="215" textAnchor="middle" className="text-[10px] fill-white/40 font-bold">Converged</text>
                              <text x="200" y="235" textAnchor="middle" className="text-[10px] fill-white/50 uppercase font-black">Fine-tuning Steps</text>

                              <motion.path 
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 1.5 }}
                                d={`M 0 20 ${project.details.visualResults.perplexityTrend.map((v, i) => 
                                  `L ${i * (400/(project.details.visualResults.perplexityTrend.length-1))} ${200 - (v/150)*180}`
                                ).join(" ")}`}
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth="2"
                              />
                           </svg>
                        </div>
                      </>
                    ) : project.details.visualResults.type === "simulation" ? (
                      <>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-8">Agent Sensor Array</h3>
                        <div className="aspect-square flex flex-col items-center justify-center relative">
                          <div className="w-4 h-4 rounded-full bg-purple-500 absolute z-10" />
                          <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                            <circle cx="100" cy="100" r="80" stroke="white" strokeOpacity="0.05" fill="none" />
                            <circle cx="100" cy="100" r="40" stroke="white" strokeOpacity="0.05" fill="none" />
                            
                            {/* Direction Labels */}
                            <text x="100" y="10" textAnchor="middle" className="text-[10px] fill-white/50 uppercase font-bold tracking-widest">FRONT (0°)</text>
                            <text x="195" y="100" textAnchor="start" className="text-[10px] fill-white/50 uppercase font-bold tracking-widest">RIGHT (90°)</text>
                            <text x="5" y="100" textAnchor="end" className="text-[10px] fill-white/50 uppercase font-bold tracking-widest">LEFT (-90°)</text>

                            {project.details.visualResults.sensorRays.map((ray, i) => (
                              <motion.line
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                x1="100" y1="100"
                                x2={100 + Math.cos((ray.angle - 90) * Math.PI / 180) * 80 * ray.distance}
                                y2={100 + Math.sin((ray.angle - 90) * Math.PI / 180) * 80 * ray.distance}
                                stroke={ray.distance < 0.3 ? "#ef4444" : "#22c55e"}
                                strokeWidth="2"
                                strokeDasharray="2 1"
                              />
                            ))}
                          </svg>
                          <div className="mt-4 text-[8px] text-white/20 uppercase tracking-widest text-center">
                            Ray-casting distance normalized to max sensor reach
                          </div>
                        </div>
                      </>
                    ) : project.details.visualResults.type === "system" ? (
                      <>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-8">API Latency Distribution</h3>
                        <div className="flex-1 flex flex-col">
                          <div className="flex-1 flex items-end justify-between h-40 gap-2 relative pt-8 pr-4 border-l border-b border-white/10">
                             {/* Y Labels */}
                             <div className="absolute left-[-20px] top-0 bottom-0 flex flex-col justify-between text-[6px] text-white/20 pointer-events-none">
                               <span>High</span>
                               <span>Freq</span>
                               <span>Low</span>
                             </div>

                             {project.details.visualResults.responseTime.map((val, i) => (
                               <motion.div
                                 key={i}
                                 initial={{ height: 0 }}
                                 whileInView={{ height: `${(1 - val/400) * 100}%` }}
                                 transition={{ delay: i * 0.05 }}
                                 className="flex-1 bg-white/5 border-t border-blue-500/50 relative group"
                               >
                                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] opacity-0 group-hover:opacity-100 transition-opacity bg-black border border-white/10 px-1 rounded z-10">
                                   {val}ms
                                 </div>
                               </motion.div>
                             ))}
                          </div>
                          <div className="flex justify-between text-[8px] text-white/20 pt-2 uppercase font-mono">
                            <span>0ms</span>
                            <span>Target Latency Bucket</span>
                            <span>400ms</span>
                          </div>
                          <div className="mt-4 text-[8px] text-white/30 uppercase text-center tracking-widest">
                            Response Time (ms) vs Distribution Density
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30 mb-8">Confusion Matrix (AAMI)</h3>
                        <div className="flex-1 flex flex-col">
                          <div className="grid grid-cols-5 gap-1.5 aspect-square relative border border-white/5 p-2 bg-black/20">
                             {/* Axis Labels */}
                             <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] uppercase tracking-widest text-white/50 font-black">Actual Class</div>
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-white/50 font-black">Predicted Class</div>

                             {project.details.visualResults.confusionMatrix.map((row, i) => (
                               row.map((val, j) => (
                                 <motion.div
                                   key={`${i}-${j}`}
                                   initial={{ opacity: 0, scale: 0.8 }}
                                   whileInView={{ opacity: 1, scale: 1 }}
                                   transition={{ delay: (i * 5 + j) * 0.01 }}
                                   className="rounded-md flex items-center justify-center text-[10px] font-bold"
                                   style={{
                                     background: `rgba(168, 85, 247, ${val / 100})`,
                                     border: val > 90 ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.05)",
                                     color: val > 50 ? "white" : "rgba(255,255,255,0.3)"
                                   }}
                                 >
                                   {val.toFixed(0)}
                                 </motion.div>
                               ))
                             ))}
                          </div>
                          <div className="mt-4 flex justify-between text-[6px] text-white/10 uppercase font-bold tracking-tighter px-4">
                            <span>NORMAL</span>
                            <span>S.V.B</span>
                            <span>V-BEAT</span>
                            <span>FUSION</span>
                            <span>UNKNOWN</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </section>
            )}
          </div>

          <aside className="md:col-span-4 space-y-8">
            <div className="sticky top-32 space-y-8">
              {/* Project Metadata */}
              <div className="p-10 rounded-[2.5rem] glass border-white/5 bg-white/[0.02]">
                 <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-8">Role & Duration</h3>
                <div className="space-y-6 mb-8">
                  <div>
                     <p className="text-xs uppercase tracking-widest text-purple-400 mb-1">My Role</p>
                    <p className="text-xl font-medium text-white">{project.role}</p>
                  </div>
                  <div>
                     <p className="text-xs uppercase tracking-widest text-purple-400 mb-1">Project Timeline</p>
                    <p className="text-xl font-medium text-white">{project.duration}</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-white/5">
                   <p className="text-xs uppercase tracking-widest text-white/40 mb-4">Core Competencies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split("•").map((t, i) => (
                       <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-white/40 uppercase tracking-tighter">
                        {t.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="p-10 rounded-[2.5rem] glass border-purple-500/20 bg-purple-500/5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-8">Key Deliverables</h3>
                <ul className="space-y-6">
                  {project.details.deliverables.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                      <span className="text-gray-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Inquiry Block */}
              <div className="p-10 rounded-[2.5rem] glass border-white/10">
                 <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Technical Inquiry</h3>
                 <p className="text-sm text-gray-500 leading-relaxed mb-6">Interested in the implementation details or technical documentation?</p>
                 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pitchikamohitanand@gmail.com" target="_blank" rel="noreferrer" className="block text-center py-4 rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all uppercase text-xs tracking-widest">Request Brief</a>
              </div>
            </div>
          </aside>
      </main>

        {/* Footer Navigation */}
        <footer className="px-8 md:px-20 py-20 border-t border-white/5 text-center">
            <button 
              onClick={onClose}
              className="px-12 py-5 rounded-full glass border-white/10 hover:border-purple-500/50 transition-all text-sm font-bold tracking-[0.2em] uppercase"
            >
              Continue Exploring Portfolio
            </button>
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
