import { ReactNode } from "react";

type WindowProps = {
  children: ReactNode;
  className?: string;
};

export function Window({ children, className = "" }: WindowProps) {
  return (
    <section
      className={`w-full max-w-4xl rounded-xl border-2 border-white bg-black/95 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.2)] md:p-8 ${className}`}
    >
      {children}
    </section>
  );
}
