import React from "react";
import { navigateTo } from "../utils/navigation";

export function LinkButton({ to, className = "", children, onClick }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        navigateTo(to);
      }}
    >
      {children}
    </button>
  );
}
