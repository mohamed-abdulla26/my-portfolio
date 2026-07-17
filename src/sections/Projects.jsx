import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space mt-20 scroll-mt-16 md:mt-30"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent sm:mt-12" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="pointer-events-none fixed left-0 top-0 z-50 hidden h-56 w-80 rounded-lg object-cover shadow-lg lg:block"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
