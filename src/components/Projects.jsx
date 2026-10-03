import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="projects"
      className="bg-dark-200 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          My <span className="text-purple">Projects</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          A selection of my recent work.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
