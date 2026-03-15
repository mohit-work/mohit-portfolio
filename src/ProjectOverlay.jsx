import React from "react";
import { motion } from "framer-motion";

const ProjectOverlay = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden"
    >
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />

      {/* Content Card */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl h-full max-h-[90vh] glass rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border-white/10"
      >
        {/* Visual Side */}
        <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-white/5">
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r" />
          
          <button 
            onClick={onClose}
            className="absolute top-6 left-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors md:hidden"
          >
            ✕
          </button>
        </div>

        {/* Info Side */}
        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar bg-black/40">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-purple-500 font-mono text-xs uppercase tracking-widest mb-2">Project Case Study</p>
              <h2 className="text-4xl font-bold">{project.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="hidden md:flex w-12 h-12 rounded-full glass items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Architecture & Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.split("•").map((t, i) => (
                  <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                    {t.trim()}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">The Challenge</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.details?.challenge || "Solving complex engineering constraints with high-performance algorithms and scalable design principles."}
              </p>
            </section>

            <section className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
              <h3 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">The Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.details?.solution || "Implemented a modular, event-driven architecture that optimized resource allocation and increased processing speed by 40%."}
              </p>
            </section>

            <div className="flex gap-4 pt-8 border-t border-white/5">
               <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 py-4 text-center rounded-xl bg-white text-black font-bold hover:bg-white/90 transition-all">View Codebase</a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectOverlay;
