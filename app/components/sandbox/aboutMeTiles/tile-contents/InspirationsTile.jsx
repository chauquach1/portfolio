export default function InspirationsTile({revealContent}) {
  const hobbies = ["KAWS", "Tech Meetups", "Music Festivals", "Video Games", "Anime"]

  return (
    <div className={revealContent ? "flex flex-grow flex-col items-start justify-center h-auto w-full mt-3" : "hidden"}>
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          // className={`outline-red-500 hover:outline-none hover:bg-red-500 hover:text-white text-red-500 font-bold bg-black -outline-offset-4 outline outline-3 h-1/4 w-1/3 rounded-xl p-2`}
        >
          {hobby}
        </div>
      ))}
    </div>
  );
}