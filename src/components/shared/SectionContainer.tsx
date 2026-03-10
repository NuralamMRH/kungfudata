import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fluid?: boolean;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = "",
  id,
  fluid = false,
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div
        className={`${fluid ? "px-4 md:px-8" : "container mx-auto px-4 md:px-8 max-w-7xl"}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
