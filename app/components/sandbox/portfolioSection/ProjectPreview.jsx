import { motion, AnimatePresence } from "framer-motion";
import {useState, useEffect} from "react";
import PreviewNavBtn from "./PreviewNavBtn";

const btnClass = "z-10 absolute self-center w-[50px] h-full";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 2000 : -2000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 2000 : -2000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function ProjectPreview({previews}) {
  const [imgSrcs, setImgSrcs] = useState(previews.map((preview) => preview.src));
  const [[page, direction], setPage] = useState([0, 0]);
  const pages = previews.length;

  useEffect(() => {
    setImgSrcs(previews.map((preview) => preview.src));
    setPage([0, 0]);
  }, [previews]);


  const paginate = (newDirection) => {
    if (page + newDirection > -1 && page + newDirection < pages) {
      setPage([page + newDirection, newDirection]);
      return;
    }
  };
  
  return (
    <div className="relative flex flex-row overflow-y-hidden items-start justify-center w-full h-[500px] lg:min-w-[750px] rounded-2xl">
      <PreviewNavBtn role="prev" paginate={paginate} pages={pages} currPage={page} />
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={imgSrcs[page]}
          custom={direction}
          className="absolute rounded-2xl h-full mt-auto px-10 top-0"
          style={{ objectFit: "contain" }}
          alt="project preview"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <PreviewNavBtn role="next" paginate={paginate} pages={pages} currPage={page} />
    </div>
  );
}