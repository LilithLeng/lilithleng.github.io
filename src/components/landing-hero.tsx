import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import FadeUp from "@/animation/fade-up";

import Image from "next/image";

import profileImg from "@/public/images/profile.png";

export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
    >
      <div className="flex flex-col items-center md:flex-row md:items-center">
        <div className="w-full md:w-2/3">
          <div className="mx-auto max-w-7xl">
            <AnimatePresence>
              <FadeUp key="title-main" duration={0.6}>
                <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                  Lilith Leng
                </h1>
                <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                  Data Analyst
                </span>
              </FadeUp>
              <FadeUp key="description" duration={0.6} delay={0.2}>
                <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                  Making data mean more. <br />
                  From messy data to clear insights. Using{" "}
                  <span className="font-semibold text-accent">
                    Python
                  </span>,{" "}
                  <span className="font-semibold text-accent">SQL</span>, and{" "}
                  <span className="font-semibold text-accent">Power BI</span>, I
                  explore datasets, uncover patterns, and turn analysis into
                  decisions.
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-8 flex w-full justify-center md:mt-0 md:w-1/3 md:justify-center">
          <FadeUp key="home-image" duration={0.6}>
            <div className="aspect-square w-1/2 overflow-hidden rounded-full md:w-3/4">
              <Image
                src={profileImg}
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="profile image"
                unoptimized
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </motion.section>
  );
}
