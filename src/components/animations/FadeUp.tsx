"use client";

import { motion, Variants, HTMLMotionProps } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
}

export default function FadeUp({ children, ...props }: FadeUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      {...props}
    >
      {children}
    </motion.div>
  );
}
