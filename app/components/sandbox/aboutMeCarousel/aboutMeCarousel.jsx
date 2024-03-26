"use client";
import Card from "./aboutMeCard";
// import NicknamesTile from "./tile-contents/NicknamesTile";
// import HobbiesTile from "./tile-contents/HobbiesTile";
// import InspirationsTile from "./tile-contents/InspirationsTile";
// import PetsTile from "./tile-contents/PetsTile";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const tiles = [
  {
    color: "gray-500",
    width: "w-2/3",
    label: "Inspirations",
    textColor: "gray",
    outlineColor: "gray",
    bgColor: `bg-gray-500 hover:bg-gray-500`,
    // content: InspirationsTile,
    contentProps: {
      /* Additional props for Hobbies if needed */
    },
  },
  {
    color: "red-500",
    width: "w-1/3",
    label: "Nicknames",
    textColor: "red",
    outlineColor: "red",
    bgColor: `bg-red-500 hover:bg-red-500`,
    // content: NicknamesTile,
    contentProps: {
      /* Additional props for Nicknames if needed */
    },
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
    color: "teal-700",
    width: "w-full",
    label: "Hobbies",
    textColor: "teal",
    outlineColor: "teal",
    bgColor: `bg-teal-700 hover:bg-teal-700`,
    // content: HobbiesTile,
    contentProps: {
      /* Additional props for Hobbies if needed */
    },
  },
  {
    color: "blue-500",
    width: "w-1/3",
    label: "Pets",
    textColor: "blue",
    outlineColor: "blue",
    bgColor: `bg-blue-500 hover:bg-blue-500`,
    // content: PetsTile,
    contentProps: {
      /* Additional props for Pets if needed */
    },
  },
  {
    color: "purple-500",
    width: "w-2/3",
    label: "Music",
    textColor: "purple",
    outlineColor: "purple",
    bgColor: `bg-purple-500 hover:bg-purple-500`,
  },
  {
    color: "orange-500",
    width: "w-2/3",
    label: "Zodiacs",
    textColor: "orange",
    outlineColor: "orange",
    bgColor: `bg-orange-500 hover:bg-orange-500`,
  },
];

export default function TileCollection() {
  const carouselRef = useRef(null)
  const cardsContainerRef = useRef(null)
  const initialPositions = [0, 1, 2, 3, 4, 5, 6];
  const [currPositions, setCurrPositions] = useState(initialPositions);
  const [activeCard, setActiveCard] = useState(3);


  const { scrollX } = useScroll({
    container: cardsContainerRef
  });

  useMotionValueEvent(scrollX, "change", (latest) => {
    console.log("Page scrollX: ", latest);
  });

  const { scrollXProgress } = useScroll({
    container: cardsContainerRef,
    axis: "x",
    offset: ["start end", "center", "end end"]
  })

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    console.log("Page scrollXProgress: ", latest);
  });


  const handleClick = () => {
    setActiveCard(currIndex)
    if (currIndex < 3) {
      console.log( 3-currIndex);
    } else {
      console.log( currIndex-3);
    }
  }

  useEffect(() => {
    console.log("activeCard", activeCard);
  }, [activeCard]);

  useEffect(() => {
    // Ensure the ref is current and the element exists
    if (cardsContainerRef.current) {
      const carousel = cardsContainerRef.current;
      // Calculate the midpoint of the scrollable width
      const midpoint = carousel.scrollWidth / 2 - carousel.offsetWidth / 2;
      // Scroll to the midpoint on the x-axis
      carousel.scrollTo(midpoint, 0);
    }
  }, []);

  return (
    <motion.div id="carousel" layout ref={carouselRef} className="flex flex-row overflow-scroll justify-center min-h-[400px] p-3 h-full">
      <motion.div id="cardsContainer" ref={cardsContainerRef} className="flex flex-row items-center overflow-scroll bg-black/20 mx-auto text-center justify-start">
        {/* {tiles.map((tile, index) => (
          <Card
            carouselRef={carouselRef}
            cardsContainerRef={cardsContainerRef}
            key={index}
            color={tile.color}
            width={tile.width}
            height={"h-1/4"}
            label={tile.label}
            textColor={`text-${tile.textColor}-500`}
            outlineColor={`outline-${tile.outlineColor}-500`}
            content={tile.content}
            contentProps={tile.contentProps}
            currIndex={index}
            setActiveCard={setActiveCard}
            // scrollXProgress={scrollXProgress}
          />
        ))} */}
          <Card
            carouselRef={carouselRef}
            color={"gray-500"}
            label={"Inspirations"}
            setActiveCard={setActiveCard}
            scrollXProgress={scrollXProgress}
            scrollX={scrollX}
          />
          <Card
            carouselRef={carouselRef}
            color={"red-500"}
            label={"Nicknames"}
            setActiveCard={setActiveCard}
            scrollXProgress={scrollXProgress}
            scrollX={scrollX}
          />
          <Card
            carouselRef={carouselRef}
            color={"pink-500"}
            label={"Travel"}
            setActiveCard={setActiveCard}
            scrollXProgress={scrollXProgress}
            scrollX={scrollX}
          />
          <Card
            cardsContainerRef={cardsContainerRef}
            carouselRef={carouselRef}
            color={"teal-700"}
            label={"Hobbies"}
            setActiveCard={setActiveCard}
            scrollXProgress={scrollXProgress}
            scrollX={scrollX}
          />
          <Card
            carouselRef={carouselRef}
            color={"blue-500"}
            label={"Pets"}
            setActiveCard={setActiveCard}
            scrollXProgress={scrollXProgress}
            scrollX={scrollX}
          />
          <Card
            carouselRef={carouselRef}
            color={"purple-500"}
            label={"Music"}
            setActiveCard={setActiveCard}
            scrollXProgress={scrollXProgress}
            scrollX={scrollX}
          />
          <Card
            carouselRef={carouselRef}
            color={"orange-500"}
            label={"Zodiacs"}
            setActiveCard={setActiveCard}
            scrollXProgress={scrollXProgress}
            scrollX={scrollX}
          />
      </motion.div>
    </motion.div>
  );
}
