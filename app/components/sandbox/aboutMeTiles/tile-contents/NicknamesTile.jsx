export default function Nicknames({revealContent}) {
  const nicknames = ["Chowder", "Chow-Mein", "Chewy", "Chow-Chow"]

  
  return (
    <div className={revealContent ? "flex flex-col items-start justify-center h-auto w-full mt-3" : "hidden"}>
      {nicknames.map((nickname, index) => (
        <div
          key={index}
          // className={`outline-red-500 hover:outline-none hover:bg-red-500 hover:text-white text-red-500 font-bold bg-black -outline-offset-4 outline outline-3 h-1/4 w-1/3 rounded-xl p-2`}
        >
          {nickname}
        </div>
      ))}
    </div>
  );
}