export default function ProjectSummary({ project }) {
  return (
    <div className="w-full h-full flex flex-col gap-3 text-2xl">
      <div>
        <h1>About</h1>
        <p className="italic text-white/50 text-medium">{project.description}</p>
      </div>
      <div>
        <h1>Features</h1>
        <ul className="flex flex-col gap-2 text-white/50 text-medium">
          {project.features.map((feature, index) => (
            <li key={index}>
              {"- "}
              {feature.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
