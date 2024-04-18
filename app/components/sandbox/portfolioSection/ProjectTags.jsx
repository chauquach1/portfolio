export default function ProjectTags({project}) {
  const tags = project.tags;

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {Object.entries(tags).map(([key, value]) => (
        <div key={key} className="flex flex-col gap-1">
          <h1 className="">{key}</h1>
          <ul className="font-mono flex flex-row gap-3">
            {value.map((tag, index) => (
              <li className="bg-black w-max px-3 py-1 rounded-full text-sm" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}