"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CommandMenu } from "@/components/CommandMenu";
import { Typewriter } from "@/components/Typewriter";
import { Window } from "@/components/Window";
import { projectsByDateDesc } from "@/lib/projects";

const introText = "Welcome to Ichito Portfolio";
const profileImagePath = "/images/profile_img.png";
const MIN_IMAGE_SIZE = 80;
const MAX_IMAGE_SIZE = 440;
const HEADER_GAP = 16;
const IMAGE_SCALE = 0.75;

export default function Home() {
  const menuItems = projectsByDateDesc.map((project) => ({
    label: project.title,
    href: `/projects/${project.slug}`,
  }));

  const headerRef = useRef<HTMLDivElement | null>(null);
  const titleMeasureRef = useRef<HTMLParagraphElement | null>(null);
  const [imageSize, setImageSize] = useState(MIN_IMAGE_SIZE);

  useEffect(() => {
    const updateImageSize = () => {
      const headerEl = headerRef.current;
      const titleEl = titleMeasureRef.current;

      if (!headerEl || !titleEl) {
        return;
      }

      const headerWidth = headerEl.getBoundingClientRect().width;
      const titleWidth = titleEl.getBoundingClientRect().width;
      const available = Math.floor(headerWidth - titleWidth - HEADER_GAP);
      const baseSize = Math.max(MIN_IMAGE_SIZE, Math.min(MAX_IMAGE_SIZE, available));
      const nextSize = Math.max(MIN_IMAGE_SIZE, Math.floor(baseSize * IMAGE_SCALE));

      setImageSize(nextSize);
    };

    updateImageSize();

    const observer = new ResizeObserver(updateImageSize);
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    window.addEventListener("resize", updateImageSize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateImageSize);
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-8">
      <Window>
        <div ref={headerRef} className="relative mb-4 flex items-start justify-between gap-4">
          <p
            ref={titleMeasureRef}
            aria-hidden
            className="pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap text-2xl md:text-3xl"
          >
            {introText}
          </p>

          <div className="min-w-0 flex-1">
            <Typewriter text={introText} speedMs={65} className="text-2xl md:text-3xl" />
          </div>

          <div
            className="relative shrink-0 overflow-hidden rounded border border-white/50"
            style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
          >
            <Image
              src={profileImagePath}
              alt="Profile photo"
              fill
              sizes={`${imageSize}px`}
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-4 text-sm md:text-base">Select a command to view each experience.</p>
        <section className="mt-8 border-t border-white/40 pt-4 space-y-3">
          <h2 className="text-base md:text-lg">自己紹介</h2>
          <p className="text-sm leading-relaxed md:text-base">
            こんにちは！2025年2月現在、長岡技術科学大学4年です。春からそのまま大学院に進学します。
          </p>
          <p className="text-sm leading-relaxed md:text-base">
            地元は長野県の諏訪市という場所で，幼少期からダンスを習っていました！
            。地元と変わらないような町並みの大学に進学し1人の友人（現在は学生の傍らクラフトビールと珈琲のお店をやっています．．．）と出会い，漠然と何か熱中できることをやりたい！と感じ，その友人とイベントの開催などを行ってきました！
            そして現在では僕がその友人にもらったように周りの大切な人にも行動する「きっかけ」を生み出していきたいと思っています！
          </p>
          <p className="text-sm leading-relaxed md:text-base">
            今はAIやLLM、自然言語処理を中心に勉強中です。コンペに出たり、長期インターンで点群による体積管理システムほとんど1人で要件定義から実装まで設計したり、
            思いついたらとりあえず手を動かすタイプです。
          </p>
          <p className="text-sm leading-relaxed md:text-base">
            自分が誰かの行動の「きっかけ」になれたら，その人の人生を少しでも楽しいものにできたら．自分に「きっかけ」をくれた友人のようになれたらいいなと思っています．
          </p>
          <div className="rounded border border-white/40 px-3 py-2">
            <p className="text-sm md:text-base">モットー：「きっかけ」を作る！</p>
          </div>
        </section>
        <div className="mt-8 border-t border-white/40 pt-4">
          <p className="mb-2 text-sm">Choose your command</p>
          <CommandMenu items={menuItems} />
        </div>

        <section className="mt-8 border-t border-white/40 pt-4">
          <p className="mb-3 text-sm">Projects</p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projectsByDateDesc.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden rounded border border-white/40 hover:bg-white/5"
                >
                  <div className="relative w-full border-b border-white/30 aspect-video">
                    <Image
                      src={project.mainImagePath ?? "/images/placeholder.svg"}
                      alt={`${project.title} thumbnail`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-3 py-2">
                    <p className="text-sm">{project.title}</p>
                    {project.dateLabel ? (
                      <p className="mt-1 text-xs text-white/80">{project.dateLabel}</p>
                    ) : null}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Window>
    </main>
  );
}
