import { motion } from "framer-motion";
import { workData } from "../assets/assets";

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="experience"
      className="bg-dark-100 py-20"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-white">
          Work <span className="text-purple">Experience</span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-center text-gray-400">
          My professional journey so far.
        </p>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-12 text-white">
            {workData.map((data) => (
              <div
                key={`${data.company}-${data.role}`}
                className="relative pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-purple md:pl-12"
              >
                <div className="absolute left-[-0.5rem] top-0 h-6 w-6 rounded-full bg-purple" />

                <div className="rounded-2xl bg-dark-300 p-6">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-xl font-semibold">{data.role}</h3>

                    <span className="w-fit rounded-full bg-purple/20 px-3 py-1 text-xs text-purple md:text-sm">
                      {data.duration}
                    </span>
                  </div>

                  <p className="mb-2 text-gray-400">{data.company}</p>

                  <p className="text-gray-300">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
