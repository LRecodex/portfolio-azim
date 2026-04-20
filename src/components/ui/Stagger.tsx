import React from "react";
import { motion } from "framer-motion";

type StaggerProps = {
  children: React.ReactNode;
  active?: boolean;
};

export default function Stagger({ children, active }: StaggerProps) {
  const items = React.Children.toArray(children);

  return (
    <motion.div
      initial="hidden"
      animate={active ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08, delayChildren: 0.08 },
        },
      }}
      className="space-y-4"
    >
      {items.map((child, index) => (
        <motion.div
          key={`stagger-${index}`}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
