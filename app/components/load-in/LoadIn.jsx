"use client"
import TypeWriter from "./TypeWriter"
import {useState, useEffect, use} from "react";
import IntroCard from "../IntroCard";
import { motion } from "framer-motion"

export default function LoadIn() {
  return (
    <motion.div
      className={`fixed flex flex-col min-h-dvh w-full z-20 bg-gray-950`}
      animate={{ opacity: "0"}}
      transition={{ duration: 1, delay: 3}}
    >
    </motion.div>
  );
}