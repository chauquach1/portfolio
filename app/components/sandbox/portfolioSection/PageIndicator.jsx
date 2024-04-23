export default function PageIndicator({currPage, previews, paginate}) {

  const newPage = (newPage) => {
    paginate(newPage - currPage);
  }

  return (<div className="absolute z-50 flex flex-row justify-center w-full h-max bottom-0">
    {previews.map((preview, index) => {
      return <button key={index} className={`w-4 h-4 rounded-full ${currPage === index ? "bg-white" : "bg-white/50"} m-2`} onClick={() => {newPage(index)}}></button>
    })}
  </div>)
}