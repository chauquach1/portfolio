import AboutMeAccordion from "../components/sandbox/aboutMeAccordion/AboutMeAccordion";
import PurpleBlob from "../components/blobs/purple-blob";
import PeachBlob from "../components/blobs/peach-blob";

export default function WhatIDoBlobs() {
  return (
    <>
      <div
        id="what-i-do-block"
        className="flex flex-col bg-[#c9ccbb] justify-between items-end min-h-screen gap-3 w-full pt-[50px] rounded-t-[50px]"
      >
        <h1 className="text-9xl font-bold text-white/30 translate-x-12 self-center">
          What I Do.
        </h1>
        <div
          id="blob-container"
          className="relative justify-start justify-self-end items-start flex-grow overflow-hidden h-full w-full"
        >
          {/* <div id="purple-blob-container" className="flex flex-row min-h-full overflow-x-visible w-full  justify-start items-start ">
            <PurpleBlob />
          </div>
          <div id="peach-blob-container" className="relative grid col-span-1 row-span-1 min-h-full  w-full overflow-x-visible   justify-end items-end ">
            <PeachBlob />
          </div> */}
          <div
            id="purple-blob-container"
            className="w-full h-[1000px]"
            // style={{
            //   backgroundImage: `url(/app/components/blobs/purple-blob.jsx)`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <PurpleBlob />
            <PeachBlob />
          </div>
        </div>
      </div>
    </>
  );
}