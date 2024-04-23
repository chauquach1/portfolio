export default function ProjectTags({project}) {
  const tags = project.tags;
  const tagColors = {
    type:"bg-orange-500",
    responsibilities: "bg-stone-800",
    languages: "bg-teal-700",
    frontend: "bg-[#9D7C56]",
    backend: "bg-stone-700",
    database: "bg-[#6B8662]",
    auth: "bg-[#836FAE]",
  };

  return (
    <div className="w-full h-full flex flex-col gap-6">
      {Object.entries(tags).map(([key, value]) => (
        <div key={key} className="flex flex-row gap-2">
          <h1 className="text-sm">{key}:</h1>
          <ul className="font-mono flex flex-row gap-3">
            {value.map((tag, index) => (
              <li className={`${tagColors[key]} w-max px-3 py-1 rounded-full text-xs`} key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}