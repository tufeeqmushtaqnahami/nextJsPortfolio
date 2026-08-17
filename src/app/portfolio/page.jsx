"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "GeminiFlix",
    desc: "A Netflix-inspired movie streaming application built with React. It uses the TMDB API to fetch movie information and includes movie categories, search functionality, authentication, responsive UI, and AI-powered movie recommendations.",
    img: "/projects/gemiflix.png",
    link: "https://gemi-flix.vercel.app/",
    github: "https://github.com/tufeeqmushtaqnahami/GemiFlix",
    tags: ["React", "TMDB API", "Redux", "Firebase", "Gemini"],
    accent: "violet",
  },
  {
    id: 2,
    title: "To-Do App",
    desc: "A task management application built to practice CRUD operations, JavaScript state management, user interactions, and creating a simple and useful interface.",
    img: "/projects/todo.png",
    link: "https://to-do-app-omega-blush.vercel.app/",
    github: "https://github.com/tufeeqmushtaqnahami/To-Do-App",
    tags: ["HTML", "CSS", "JavaScript", "CRUD"],
    accent: "blue",
  },
  {
    id: 3,
    title: "BMI Calculator",
    desc: "A responsive BMI calculator that allows users to enter their height and weight and calculate their Body Mass Index through a simple and easy-to-use interface.",
    img: "/projects/bmi.png",
    link: "https://bmi-calculator-tufeeq.vercel.app/",
    github: "https://github.com/tufeeqmushtaqnahami/BMI-Calculator",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "cyan",
  },
  {
    id: 4,
    title: "Climate Cast",
    desc: "A weather application that uses a weather API to display current weather information based on a location. It provides useful weather details through a clean and responsive interface.",
    img: "/projects/climate-cast.png",
    link: "https://weather-app-ten-jet-91.vercel.app/",
    github: "https://github.com/tufeeqmushtaqnahami/Weather-App",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    accent: "indigo",
  },
  {
    id: 5,
    title: "BMW Website",
    desc: "A BMW-inspired website focused on creating a clean automotive interface with modern layouts, responsive design, visual presentation, and interactive frontend elements.",
    img: "/projects/bmw.png",
    link: "https://bmw-one.vercel.app/",
    github: "https://github.com/tufeeqmushtaqnahami/BMW",
    tags: ["HTML", "CSS", "JavaScript", "UI Design"],
    accent: "blue",
  },
];

const accentStyles = {
  violet: {
    background:
      "from-violet-600 via-indigo-600 to-slate-950",
    badge:
      "border-violet-300/30 bg-violet-500/10 text-violet-200",
    glow:
      "bg-violet-500/20",
  },

  blue: {
    background:
      "from-blue-600 via-indigo-600 to-slate-950",
    badge:
      "border-blue-300/30 bg-blue-500/10 text-blue-200",
    glow:
      "bg-blue-500/20",
  },

  cyan: {
    background:
      "from-cyan-600 via-blue-600 to-slate-950",
    badge:
      "border-cyan-300/30 bg-cyan-500/10 text-cyan-200",
    glow:
      "bg-cyan-500/20",
  },

  indigo: {
    background:
      "from-indigo-600 via-violet-600 to-slate-950",
    badge:
      "border-indigo-300/30 bg-indigo-500/10 text-indigo-200",
    glow:
      "bg-indigo-500/20",
  },
};

const PortfolioPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(items.length * 100) / (items.length + 1)}%`]
  );

  return (
    <motion.main
      className="h-full bg-white text-neutral-900"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
    >
      {/* =====================================================
          PROJECT SECTION
      ====================================================== */}

      <section
        ref={ref}
        className="relative"
        style={{
          height: `${(items.length + 1) * 100}vh`,
        }}
      >
        {/* ==================== INTRO TITLE ==================== */}

        <div className="flex h-[calc(100vh-5rem)] w-screen flex-col items-center justify-center px-6 text-center">

          {/* Small label */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-500" />
              My Portfolio
            </span>
          </motion.div>

          {/* Subtitle */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mb-4 text-base text-neutral-500 sm:text-lg"
          >
            A collection of things I&apos;ve built
          </motion.p>

          {/* Main title */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
          >
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              My Works
            </span>
          </motion.h1>

          {/* Decorative line */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: 80,
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            className="mt-7 h-1 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
          />

          {/* Scroll hint */}

          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="mt-12 flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Scroll
            </span>

            <span className="h-10 w-[2px] rounded-full bg-gradient-to-b from-violet-500 to-cyan-400" />
          </motion.div>
        </div>

        {/* =====================================================
            HORIZONTAL SCROLL
        ====================================================== */}

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          <motion.div
            style={{ x }}
            className="flex"
          >

            {/* ==================== INTRO SLIDE ==================== */}

            <div className="relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden bg-neutral-950 px-6 text-white">

              {/* Background glow */}

              <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />

              <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

              <div className="relative z-10 text-center">

                <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
                  Explore
                </span>

                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                  Selected
                  <br />

                  <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>

                <p className="mt-6 text-base text-neutral-400 sm:text-lg">
                  Scroll horizontally to explore my work
                </p>

                <motion.div
                  animate={{
                    x: [0, 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.8,
                    ease: "easeInOut",
                  }}
                  className="mt-10 text-3xl text-violet-400"
                >
                  →
                </motion.div>

              </div>
            </div>

            {/* ==================== PROJECTS ==================== */}

            {items.map((item, index) => {

              const accent = accentStyles[item.accent];

              return (
                <div
                  className={`relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${accent.background} px-5 py-20 text-white sm:px-8 md:px-12 lg:px-16 xl:px-24`}
                  key={item.id}
                >

                  {/* Background decoration */}

                  <div
                    className={`absolute -right-32 -top-32 h-96 w-96 rounded-full ${accent.glow} blur-3xl`}
                  />

                  <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                  {/* Project number */}

                  <div className="absolute left-6 top-24 text-7xl font-bold text-white/5 sm:left-10 sm:text-8xl md:left-16 lg:text-9xl">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Main project content */}

                  <div className="relative z-10 grid w-full max-w-[1500px] items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-24">

                    {/* ==================== IMAGE ==================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -60,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: false,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="order-2 md:order-1"
                    >

                      <div className="group relative mx-auto w-full max-w-[650px]">

                        {/* Glow */}

                        <div className="absolute -inset-4 rounded-3xl bg-white/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

                        {/* Image frame */}

                        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/20 bg-black/20 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:border-white/40 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)]">

                          <Image
                            src={item.img}
                            alt={`${item.title} project`}
                            fill
                            sizes="(max-width: 768px) 90vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Image overlay */}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                          {/* Preview label */}

                          <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                            Project Preview
                          </div>

                        </div>
                      </div>
                    </motion.div>

                    {/* ==================== DETAILS ==================== */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        x: 60,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: false,
                        amount: 0.3,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1,
                      }}
                      className="order-1 md:order-2"
                    >

                      {/* Project number */}

                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                        Project {String(index + 1).padStart(2, "0")}
                      </p>

                      {/* Title */}

                      <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                        {item.title}
                      </h2>

                      {/* Accent line */}

                      <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-white to-white/30" />

                      {/* Description */}

                      <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base lg:text-lg lg:leading-8">
                        {item.desc}
                      </p>

                      {/* Tags */}

                      <div className="mt-7 flex max-w-xl flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${accent.badge}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Buttons */}

                      <div className="mt-8 flex flex-wrap gap-3">

                        {/* LIVE DEMO */}

                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/button inline-flex items-center gap-3 overflow-hidden rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-neutral-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                          <span>
                            Live Demo
                          </span>

                          <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                            ↗
                          </span>
                        </Link>

                        {/* GITHUB */}

                        <Link
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/github inline-flex items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
                        >
                          <span>
                            GitHub
                          </span>

                          <span className="transition-transform duration-300 group-hover/github:translate-x-1">
                            ↗
                          </span>
                        </Link>

                      </div>

                    </motion.div>
                  </div>
                </div>
              );
            })}

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 text-center">

        {/* Background decoration */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative z-10">

          {/* Small label */}

          <motion.span
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="inline-block rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700"
          >
            Let&apos;s work together
          </motion.span>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="mt-7 max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Have a{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              project
            </span>{" "}
            in mind?
          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-8 text-neutral-500 sm:text-lg"
          >
            I&apos;m always interested in learning, building new things, and
            working on interesting ideas.
          </motion.p>

          {/* ==================== ROTATING CIRCLE ==================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="relative mx-auto mt-12 h-64 w-64 sm:h-80 sm:w-80 md:h-[400px] md:w-[400px]"
          >

            {/* Rotating text */}

            <motion.svg
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity,
              }}
              viewBox="0 0 300 300"
              className="h-full w-full"
            >

              <defs>

                <path
                  id="circlePath"
                  d="M 150, 150 m -105, 0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0"
                />

              </defs>

              <text
                fill="#6366f1"
                fontSize="13"
                fontWeight="600"
                letterSpacing="2"
              >
                <textPath href="#circlePath">
                  WEB DEVELOPER • REACT • NEXT.JS • JAVASCRIPT •
                </textPath>
              </text>

            </motion.svg>

            {/* Center glow */}

            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 opacity-20 blur-2xl" />

            {/* Contact button */}

            <Link
              href="/contact"
              className="group absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-950 text-center text-xs font-semibold text-white shadow-xl transition-all duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-violet-600 hover:via-indigo-500 hover:to-cyan-400 hover:shadow-[0_15px_45px_rgba(124,58,237,0.3)] sm:h-24 sm:w-24 sm:text-sm md:h-28 md:w-28"
            >
              <span className="transition-transform duration-300 group-hover:scale-105">
                Contact Me
              </span>
            </Link>

          </motion.div>
        </div>
      </section>

    </motion.main>
  );
};

export default PortfolioPage;