"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  text: string;
  speedMs?: number;
  className?: string;
  onComplete?: () => void;
};

export function Typewriter({
  text,
  speedMs = 70,
  className = "",
  onComplete,
}: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const completionNotifiedRef = useRef(false);

  useEffect(() => {
    if (index >= text.length) {
      if (!completionNotifiedRef.current) {
        completionNotifiedRef.current = true;
        onComplete?.();
      }

      return;
    }

    const timer = window.setTimeout(() => {
      setIndex((current) => current + 1);
    }, speedMs);

    return () => window.clearTimeout(timer);
  }, [index, onComplete, speedMs, text]);

  const displayText = text.slice(0, index);
  const isTyping = index < text.length;

  return (
    <p className={className}>
      <span>{displayText}</span>
      {isTyping ? <span className="ml-1 inline-block animate-pulse">|</span> : null}
    </p>
  );
}
