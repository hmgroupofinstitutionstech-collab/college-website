import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centres content and applies the site's max width and horizontal padding. */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-container px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
