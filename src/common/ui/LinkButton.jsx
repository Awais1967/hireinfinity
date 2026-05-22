import React from "react";
import { motion } from "framer-motion";
import { navigateTo } from "../utils/navigation";

export function LinkButton({ to, className = "", children, onClick, ...props }) {
  return (
    <motion.button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        navigateTo(to);
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
