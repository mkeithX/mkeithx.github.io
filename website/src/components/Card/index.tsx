import React, { CSSProperties, ReactNode } from "react";
import clsx from "clsx";
interface CardProps {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  shadow?: "lw" | "md" | "tl";
}

const Card: React.FC<CardProps> = ({ className, style, children, shadow }) => {
  const cardShadow = shadow ? `item shadow--${shadow}` : "";
  return (
    <div className={clsx("card", className, cardShadow)} style={style}>
      {children}
    </div>
  );
};
export default Card;
