import { motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="about"
      className="bg-dark-200 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          About <span className="text-purple">Me</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          Get to know more about my background and passion for software
          development.
        </p>

        <div className="flex flex-col items-center gap-12 md:items-start md:flex-row">
          <div className="overflow-hidden rounded-2xl md:w-1/2">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="h-full w-full object-cover"
              src={assets.profileImg}
              alt="Arpit Pal"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-2 md:p-8">
              <h3 className="mb-6 text-2xl font-semibold text-white">
                My Journey
              </h3>

              <p className="mb-6 leading-relaxed text-gray-300">
                I am a B.Tech IT graduate focused on software engineering and
                full-stack web development. I enjoy building practical web
                applications and solving problems using modern technologies.
              </p>

              <p className="mb-12 leading-relaxed text-gray-300">
                My experience includes working with React, Node.js, Express,
                MongoDB, and REST APIs through hands-on projects and a web
                development internship, where I also worked with debugging, Git,
                code reviews, and agile development practices.
              </p>

              <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2">
                {aboutInfo.map((data) => {
                  const Icon = data.icon;

                  return (
                    <div
                      key={data.title}
                      className="cursor-pointer rounded-2xl bg-dark-300 p-6 transition-transform duration-300 hover:-translate-y-2"
                    >
                      <div className="mb-4 text-4xl text-purple">
                        <Icon />
                      </div>

                      <h3 className="mb-3 text-xl font-semibold">
                        {data.title}
                      </h3>

                      <p className="text-gray-400">{data.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
