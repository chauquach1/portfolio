import Tile from "./Tile";
export default function TileCollection() {
  return (
    <div className="flex flex-row flex-wrap items-start justify-around min-h-[1000px] w-full">
      <Tile outline="white" width="w-full" height="h-1/4" />
      <Tile outline="gray-500" width="w-2/3" height="h-1/4" />
      <Tile outline="red-500" width="w-1/3" height="h-1/4" />
      <Tile outline="pink-500" width="w-full" height="h-1/4" />
      <Tile outline="blue-500" width="w-1/3" height="h-1/4" />
      <Tile outline="purple-500" width="w-2/3" height="h-1/4" />
    </div>
  );
}