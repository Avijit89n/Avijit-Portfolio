import React from "react";
import { useInView } from "react-intersection-observer";

const Animation = ({ children, className = "", animation = "fade-up" }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`
        opacity-0
        ${inView ? `animate-${animation}` : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Animation;
