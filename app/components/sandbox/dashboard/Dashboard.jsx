export default function Dashboard() {
  return (
    <section
    id="skills"
    className="w-full flex flex-row flex-wrap lg:flex-nowrap justify-start h-screen my-4 p-4 gap-6 text-white rounded-2xl "
  >
    <div className=" h-4 lg:h-full w-1/3">
      <h1 className="text-center text-3xl">Tools</h1>
    </div>

    <div className="grid grid-cols-12 grid-rows-4 h-3/4 w-3/4 justify-center rounded-3xl">
      <div className="col-span-full row-span-2 justify-center rounded-3xl bg-slate-900 items-center rounded-br-none"></div>
      <div className="col-span-3 row-span-2 justify-start bg-transparent items-center ">
        <div className="rounded-3xl rounded-tr-none bg-slate-900 items-center w-full h-full ">
          <div className="h-full w-full rounded-3xl bg-black pr-2 pt-2">
            <div className="h-full w-full rounded-3xl bg-red-400/20 p-1"></div>
          </div>
        </div>
      </div>
      <div className=" z-10 col-span-9 row-span-2 justify-center rounded-b-3xl bg-slate-900 items-center"></div>
    </div>
  </section>
  )
}