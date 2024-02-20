import TypeWriter from "./TypeWriter"

export default function LoadIn() {
  return (
    <div className="fixed flex flex-col min-h-screen w-full bg-slate-900 z-50 top-0">
      <TypeWriter text="Hi there friend!" speed={80} initialDelay={300} />
    </div>
  )
}