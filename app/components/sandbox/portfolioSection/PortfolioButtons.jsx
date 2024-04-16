export default function PortfolioButtons() {
  return (
    <div
      id="buttons-container"
      className="w-full min-h-[100px] my-[50px] flex flex-row items-center justify-end gap-10 border-1 border-white/20"
    >
      {buttons.map((button, index) => (
        <button key={index} className={btnClass}>
          {button}
        </button>
      ))}
    </div>
  );
}