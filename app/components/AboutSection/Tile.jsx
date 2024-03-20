export default function Tile({ outline, height, width, children}) {
  return <div className={`outline-${outline} -outline-offset-4 outline outline-3 ${height} ${width} rounded-xl`}>{children}</div>;
}