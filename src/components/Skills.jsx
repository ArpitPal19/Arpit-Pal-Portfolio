import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="skills"
      className="bg-dark-100 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          My <span className="text-purple">Skills</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Technologies I use to build web applications and solve problems.
        </p>

        <div className="mx-auto grid grid-cols-1 gap-8 text-white md:grid-cols-2 lg:grid-cols-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className={`rounded-2xl bg-dark-300 p-6 transition duration-300 hover:-translate-y-2 lg:col-span-2 ${
                  index === 3
                    ? "lg:col-start-2"
                    : index === 4
                      ? "lg:col-start-4"
                      : ""
                }`}
              >
                <div className="mb-4 flex items-center">
                  <Icon className="mr-6 h-12 w-12 text-purple" />
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                </div>

                <p className="mb-4 text-gray-400">{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-dark-400 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
