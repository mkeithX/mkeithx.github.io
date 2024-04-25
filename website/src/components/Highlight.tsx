import React, { type ReactNode } from "react";

export default function Highlight({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}): JSX.Element {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: "20px",
        color: "#fff",
        padding: "10px",
      }}
    >
      {children}
    </span>
  );
}
