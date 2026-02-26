"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  text: string;
  speedMs?: number;
  className?: string;
};

export function Typewriter({ text, speedMs = 70, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIndex((current) => current + 1);
    }, speedMs);

    return () => window.clearTimeout(timer);
  }, [index, speedMs, text]);

  const displayText = useMemo(() => text.slice(0, index), [index, text]);

  return (
    <p className={className}>
      <span>{displayText}</span>
      <span className="ml-1 inline-block animate-pulse">|</span>
    </p>
  );
}
