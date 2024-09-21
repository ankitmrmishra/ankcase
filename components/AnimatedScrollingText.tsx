"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollingTextProps {
  prefix?: string;
  suffix?: string;
  items: string[];
  adjectives: string[];
  itemInterval?: number;
  adjectiveInterval?: number;
  itemColor?: string;
  adjectiveColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

export default function ScrollingText({
  prefix = "Make your",
  suffix = "look 10x",
  items,
  adjectives,
  itemInterval = 3000,
  adjectiveInterval = 2500,
  itemColor = "text-blue-500",
  adjectiveColor = "text-blue-600",
  fontSize = "text-4xl md:text-6xl",
  fontWeight = "font-bold",
}: ScrollingTextProps) {
  const [currentItem, setCurrentItem] = useState(0);
  const [currentAdjective, setCurrentAdjective] = useState(0);

  useEffect(() => {
    const itemTimer = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % items.length);
    }, itemInterval);

    const adjectiveTimer = setInterval(() => {
      setCurrentAdjective((prevAdj) => (prevAdj + 1) % adjectives.length);
    }, adjectiveInterval);

    return () => {
      clearInterval(itemTimer);
      clearInterval(adjectiveTimer);
    };
  }, [items, adjectives, itemInterval, adjectiveInterval]);

  const animationProps = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.3 },
  };

  return (
    <span className={`${fontSize} ${fontWeight} text-black`}>
      {prefix}{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={items[currentItem]}
          className={`${itemColor} inline-block`}
          {...animationProps}
        >
          {items[currentItem]}
        </motion.span>
      </AnimatePresence>{" "}
      {suffix}{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={adjectives[currentAdjective]}
          className={`${adjectiveColor} inline-block`}
          {...animationProps}
        >
          {adjectives[currentAdjective]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
