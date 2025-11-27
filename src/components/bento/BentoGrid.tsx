import * as React from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ children, className = "" }) => {
  return (
    <section className={`w-full max-w-6xl mx-auto px-4 md:px-6 py-16 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {children}
      </div>
    </section>
  );
};

export default BentoGrid;
