import React from "react";

interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg";
  as?: React.ElementType;
}

const gapMap = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

const colsMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-4 lg:grid-cols-6",
  12: "grid-cols-12",
};

export function Grid({
  children,
  className = "",
  cols = 12,
  gap = "md",
  as: Component = "div",
}: GridProps) {
  return (
    <Component
      className={`grid ${colsMap[cols]} ${gapMap[gap]} ${className}`}
    >
      {children}
    </Component>
  );
}
