import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DeveloperConsole = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to M_P_SYSTEM v1.0" },
    { type: "output", text: "Available: whoami, skills, resume, social, coffee, clear" },
    { type: "output", text: "Type 'help' for the full list of commands." }
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.toLowerCase().trim();
      let response = "";

      switch (cmd) {
        case "skills":
          response = "Languages: C++, Python, Java, JavaScript, SQL\nFrameworks: React, ASP.NET Core, PyTorch\nTools: Docker, Git, Redis";
          break;
        case "whoami":
          response = "Mohit Anand Pitchika. Tech Analyst @ KPMG | Computer Science @ VIT. Passionate about scalable AI and high-performance systems.";
          break;
        case "social":
          response = "GitHub: @Mohit-Anand-Pitchika | LinkedIn: /in/mohit-anand-pitchika";
          window.open("https://linkedin.com", "_blank");
          break;
        case "resume":
          response = "Triggering resume download... (Simulation)";
          // Mock download trigger
          const link = document.createElement("a");
          link.href = "/Mohit_Anand_Resume.pdf";
          link.download = "Mohit_Anand_Resume.pdf";
          link.click();
          break;
        case "coffee":
          response = "☕ One cup of virtual coffee on the way!";
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "help":
          response = "Available: whoami, skills, resume, social, clear, help";
          break;
        default:
          response = `Unknown command: ${cmd}. Type 'help' for options.`;
      }

      setHistory([...history, { type: "input", text: input }, { type: "output", text: response }]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 glass rounded-2xl overflow-hidden shadow-2xl mb-4 border border-white/10"
          >
            <div className="bg-white/5 px-4 py-3 flex justify-between items-center border-b border-white/10">
              <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Utility Terminal</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto font-mono text-[10px] space-y-2 bg-black/60 custom-scrollbar">
              {history.map((item, i) => (
                <div key={i} className={item.type === "input" ? "text-purple-400" : "text-gray-400"}>
                  {item.type === "input" ? "> " : ""}{item.text}
                </div>
              ))}
              <div className="flex items-center gap-1">
                <span className="text-purple-400">{">"}</span>
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-none outline-none w-full text-white"
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full glass flex items-center justify-center text-white shadow-xl hover:bg-white/10 transition-colors border border-white/20"
      >
        {isOpen ? (
           <span className="text-xs font-mono">CLOSE</span>
        ) : (
          <div className="flex gap-1 items-center">
             <div className="w-1 h-1 rounded-full bg-purple-500 animate-pulse" />
             <span className="text-[10px] font-mono font-bold tracking-tighter">CMD</span>
          </div>
        )}
      </motion.button>
    </div>
  );
};

export default DeveloperConsole;
