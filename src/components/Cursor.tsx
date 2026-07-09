"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Checa se o elemento ou um pai dele é interativo
      const isInteractive = target.tagName.toLowerCase() === 'a' || 
                            target.tagName.toLowerCase() === 'button' || 
                            target.closest('a') || 
                            target.closest('button');
                            
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: "#1C1C1C",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "#F4F3EF",
      mixBlendMode: "difference" as const,
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] hidden lg:block"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
    />
  );
}
