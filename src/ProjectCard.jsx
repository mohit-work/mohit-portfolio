import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const ROTATION_RANGE = 22.5;
const HALF_ROTATION_RANGE = 22.5 / 2;

const ProjectCard = ({ project }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mX = (clientX - rect.left) * ROTATION_RANGE;
    const mY = (clientY - rect.top) * ROTATION_RANGE;
    const rX = (mY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mX / width - HALF_ROTATION_RANGE;
    x.set(rX);
    y.set(rY);
  }

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error("Video play failed:", err));
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      ref={ref}
      layoutId={`project-${project.title}`}
      onMouseMove={handleMouseMove}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
      onClick={() => project.onClick(project)}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative group h-[450px] w-full rounded-[2.5rem] bg-zinc-900 overflow-hidden border border-white/5 transition-all duration-700 ease-[0.16, 1, 0.3, 1] cursor-pointer hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-30 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute inset-0 z-0">
        <motion.img 
          layoutId={`image-${project.title}`}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-0 transition-all duration-1000 ease-[0.16, 1, 0.3, 1]"
        />
        
        {project.video && (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-[0.16, 1, 0.3, 1] pointer-events-none"
          />
        )}
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]">
          <motion.h3 
            layoutId={`title-${project.title}`}
            className="text-4xl font-black text-white tracking-tighter uppercase italic leading-[0.9]"
          >
            {project.title}
          </motion.h3>
          <div className="h-1.5 w-16 bg-purple-600 rounded-full mt-6 shadow-[0_0_15px_rgba(168,85,247,0.5)] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100 ease-[0.16, 1, 0.3, 1]" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
