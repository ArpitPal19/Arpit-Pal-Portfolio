const ProjectCard = ({ title, description, image, tech = [], demo, code }) => {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-dark-300 transition duration-300 hover:-translate-y-2">
      <img
        src={image}
        alt={`${title} project`}
        className="h-60 w-full object-cover"
        loading="lazy"
      />

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>

        <p className="mb-4 flex-1 text-gray-300">{description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-dark-400 px-3 py-1 text-sm text-gray-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {demo && demo !== "#" && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-purple px-4 py-2 text-center font-medium text-white transition duration-300 hover:opacity-90"
            >
              Live Demo
            </a>
          )}

          {code && code !== "#" && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-purple px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-purple/20"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
