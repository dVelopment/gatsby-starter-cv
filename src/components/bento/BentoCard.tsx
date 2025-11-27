import * as React from "react";
import { motion } from "motion/react";

type CardSize = "default" | "wide" | "tall" | "large";

interface BentoCardProps {
  children: React.ReactNode;
  size?: CardSize;
  className?: string;
  delay?: number;
  noPadding?: boolean;
}

const sizeClasses: Record<CardSize, string> = {
  default: "col-span-1 row-span-1",
  wide: "col-span-1 md:col-span-2 row-span-1",
  tall: "col-span-1 row-span-1 md:row-span-2",
  large: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
};

const BentoCard: React.FC<BentoCardProps> = ({
  children,
  size = "default",
  className = "",
  delay = 0,
  noPadding = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className={`
        ${sizeClasses[size]}
        bg-terminal
        rounded-[var(--radius-bento)]
        border border-steel
        transition-all duration-300 ease-out
        hover:border-matrix/50 hover:shadow-[0_0_30px_rgba(0,255,65,0.1)]
        hover:-translate-y-1
        ${noPadding ? "" : "p-5 md:p-6"}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;
