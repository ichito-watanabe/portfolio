"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type CommandItem = {
  label: string;
  href: string;
};

type CommandMenuProps = {
  items: CommandItem[];
  className?: string;
};

export function CommandMenu({ items, className = "" }: CommandMenuProps) {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (items.length === 0) {
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelectedIndex((current) => (current - 1 + items.length) % items.length);
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelectedIndex((current) => (current + 1) % items.length);
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        router.push(items[selectedIndex].href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, router, selectedIndex]);

  return (
    <ul className={`space-y-2 ${className}`} role="menu" aria-label="Project menu">
      {items.map((item, index) => {
        const isSelected = index === selectedIndex;
        return (
          <li key={item.href}>
            <button
              type="button"
              onMouseEnter={() => setSelectedIndex(index)}
              onFocus={() => setSelectedIndex(index)}
              onClick={() => router.push(item.href)}
              className="flex w-full items-center gap-2 rounded px-2 py-1 text-left hover:bg-white/10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
            >
              <span aria-hidden className="inline-block w-4">
                {isSelected ? "\u25B6" : ""}
              </span>
              <span>{item.label}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
