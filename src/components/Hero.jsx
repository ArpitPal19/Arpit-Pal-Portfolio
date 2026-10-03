import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="flex min-h-screen items-center bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] px-6 pb-16 pt-20"
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-12 md:flex-row">
        <div className="mb-10 md:mb-0 md:w-1/2">
          <p className="mb-3 text-lg font-medium text-purple">
            Software Engineer | MERN Stack Developer
          </p>

          <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
            Hi, I'm <span className="text-purple">Arpit Pal</span>
          </h1>

          <h2 className="typewriter mb-6 text-2xl font-semibold text-white md:text-4xl">
            Full Stack Developer
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-300">
            I build responsive full-stack web applications using React, Node.js,
            Express.js, and MongoDB, with a focus on clean code, practical
            problem-solving, and user-friendly experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-purple px-6 py-3 font-medium text-white transition duration-300 hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-purple px-6 py-3 font-medium text-white transition duration-300 hover:bg-purple/20"
            >
              Contact Me
            </a>

            <a
              href="/Arpit_Resume5.pdf"
              download="Arpit_Pal_Resume.pdf"
              className="rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition duration-300 hover:bg-white/10"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center md:w-1/2">
          <div className="relative h-64 w-64 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70" />

            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative z-10 h-64 w-64 rounded-full object-cover md:h-80 md:w-80"
              src={assets.profileImg}
              alt="Arpit Pal profile"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
