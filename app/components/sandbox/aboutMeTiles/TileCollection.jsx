"use client";
import Tile from "./Tile";
import NicknamesTile from "./tile-contents/NicknamesTile";
import HobbiesTile from "./tile-contents/HobbiesTile";
import InspirationsTile from "./tile-contents/InspirationsTile";
import PetsTile from "./tile-contents/PetsTile";

export default function TileCollection() {
  const tiles = [
    {
      color: "teal-700",
      width: "w-full",
      label: "Hobbies",
      textColor: "teal",
      outlineColor: "teal",
      bgColor: `bg-teal-700 hover:bg-teal-700`,
      content: HobbiesTile,
      contentProps: { /* Additional props for Hobbies if needed */ }
    },
    {
      color: "gray-500",
      width: "w-2/3",
      label: "Inspirations",
      textColor: "gray",
      outlineColor: "gray",
      bgColor: `bg-gray-500 hover:bg-gray-500`,
      content: InspirationsTile,
      contentProps: { /* Additional props for Hobbies if needed */ }
    },
    {
      color: "red-500",
      width: "w-1/3",
      label: "Nicknames",
      textColor: "red",
      outlineColor: "red",
      bgColor: `bg-red-500 hover:bg-red-500`,
      content: NicknamesTile,
      contentProps: { /* Additional props for Nicknames if needed */ }
    },
    {
      color: "pink-500",
      width: "w-full",
      label: "Travel",
      textColor: "pink",
      outlineColor: "pink",
      bgColor: `bg-pink-500 hover:bg-pink-500`,
    },
    {
      color: "blue-500",
      width: "w-1/3",
      label: "Pets",
      textColor: "blue",
      outlineColor: "blue",
      bgColor: `bg-blue-500 hover:bg-blue-500`,
      content: PetsTile,
      contentProps: { /* Additional props for Pets if needed */ }
    },
    {
      color: "purple-500",
      width: "w-2/3",
      label: "Music",
      textColor: "purple",
      outlineColor: "purple",
      bgColor: `bg-purple-500 hover:bg-purple-500`,
    },
  ];

  return (
    <div className="flex flex-row flex-grow flex-wrap items-start justify-around w-full">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          color={tile.color}
          width={tile.width}
          height={"h-1/4"}
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
