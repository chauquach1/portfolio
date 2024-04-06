"use client";
import Card from "./highlightCard";
// import NicknamesTile from "./tile-contents/NicknamesTile";
// import HobbiesTile from "./tile-contents/HobbiesTile";
// import InspirationsTile from "./tile-contents/InspirationsTile";
// import PetsTile from "./tile-contents/PetsTile";
import { useState, useEffect, useRef, use } from "react";
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
  const [items, setItems] = useState([...tiles]);
  const [currPositions, setCurrPositions] = useState(initialPositions);




  // const handleClick = () => {
  //   setActiveCard(currIndex)
  //   if (currIndex < 3) {
  //     console.log( 3-currIndex);
  //   } else {
  //     console.log( currIndex-3);
  //   }
  // }

  // useEffect(() => {
  //   setCardsContainerWidth(cardsContainerRef.current.clientWidth);
  //   console.log("cardsContainer resize" , cardsContainerRef.current.clientWidth);
  // }, [cardsContainerRef.current.clientWidth]);

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

  // const handleClick = () => {
  //   console.log("cardsContainerWidth", cardsContainerWidth);
  // }


  return (
    <motion.div id="carousel" layout ref={carouselRef} 
      className="flex flex-row overflow-x-scroll self-start justify-start h-[400px] sm:h-[380px] w-full bg-white/30"
    >
      <motion.div id="cardsContainer" ref={cardsContainerRef}  
        className="flex flex-row min-w-[200%] items-center bg-black/20 text-center justify-start"
      >
        {items.map((tile, index) => (
          <Card
            carouselRef={carouselRef}
            cardsContainerRef={cardsContainerRef}
            key={index}
            id={`${tile.label}-${index}`}
            color={tile.color}
            width={tile.width}
            height={"h-1/4"}
            label={tile.label}
            textColor={`text-${tile.textColor}-500`}
            outlineColor={`outline-${tile.outlineColor}-500`}
            content={tile.content}
            contentProps={tile.contentProps}
            currIndex={index}
            // setActiveCard={setActiveCard}
          />
        ))}

      </motion.div>
    </motion.div>
  );
}
