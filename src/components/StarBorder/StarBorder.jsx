import React from "react";
import "./StarBorder.css";

const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "rgba(162, 89, 247, 1)",
  speed = "4s",
  children,
  ...rest
}) => {
  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div
        className="star-border-glow"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, transparent 0%, transparent 80%, ${color} 100%)`,
          animationDuration: speed,
        }}
      />
      <div className="star-border-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
