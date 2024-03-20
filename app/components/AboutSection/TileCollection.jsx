import Tile from "./Tile";
import Nicknames from "./tile-contents/Nicknames";
import Hobbies from "./tile-contents/Hobbies";

export default function TileCollection() {
  const tiles = [
    {
      color: "teal-700",
      width: "w-full",
      height: "h-1/4",
      label: "Hobbies",
      textColor: "teal",
      outlineColor: "teal",
      bgColor: `bg-teal-700 hover:bg-teal-700`,
      content: Hobbies,
      contentProps: { /* Additional props for Hobbies if needed */ }
    },
    {
      color: "gray-500",
      width: "w-2/3",
      height: "h-1/4",
      label: "Inspirations",
      textColor: "gray",
      outlineColor: "gray",
      bgColor: `bg-gray-500 hover:bg-gray-500`,
    },
    {
      color: "red-500",
      width: "w-1/3",
      height: "h-1/4",
      label: "Nicknames",
      textColor: "red",
      outlineColor: "red",
      bgColor: `bg-red-500 hover:bg-red-500`,
      content: Nicknames,
      contentProps: { /* Additional props for Nicknames if needed */ }
    },
    {
      color: "pink-500",
      width: "w-full",
      height: "h-1/4",
      label: "Travel",
      textColor: "pink",
      outlineColor: "pink",
      bgColor: `bg-pink-500 hover:bg-pink-500`,
    },
    {
      color: "blue-500",
      width: "w-1/3",
      height: "h-1/4",
      label: "Pets",
      textColor: "blue",
      outlineColor: "blue",
      bgColor: `bg-blue-500 hover:bg-blue-500`,
    },
    {
      color: "purple-500",
      width: "w-2/3",
      height: "h-1/4",
      label: "Music",
      textColor: "purple",
      outlineColor: "purple",
      bgColor: `bg-purple-500 hover:bg-purple-500`,
    },
  ];

  return (
    <div className="flex flex-row flex-wrap items-start justify-around min-h-[1000px] w-full">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          color={tile.color}
          width={tile.width}
          height={tile.height}
          label={tile.label}
          textColor={`text-${tile.textColor}-500`}
          outlineColor={`outline-${tile.outlineColor}-500`}
          content={tile.content}
          contentProps={tile.contentProps}
        />
      ))}
    </div>
  );
}
