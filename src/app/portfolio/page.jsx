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
    background: "from-slate-700 via-slate-800 to-slate-950",
    badge: "border-slate-300/20 bg-slate-500/10 text-slate-200",
    glow: "bg-slate-500/15",
  },

  blue: {
    background: "from-slate-700 via-slate-800 to-slate-950",
    badge: "border-slate-300/20 bg-slate-500/10 text-slate-200",
    glow: "bg-slate-500/15",
  },

  cyan: {
    background: "from-slate-800 via-slate-900 to-slate-950",
    badge: "border-teal-300/20 bg-teal-500/10 text-teal-200",
    glow: "bg-teal-500/10",
  },

  indigo: {
    background: "from-slate-700 via-slate-800 to-slate-950",
    badge: "border-slate-300/20 bg-slate-500/10 text-slate-200",
    glow: "bg-slate-500/15",
  },
};

const PortfolioPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

 const x = useTransform(
  scrollYProgress,
  [0.16, 1],
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
          height: `${(items.length + 1) * 100}dvh`,
        }}
      >
        {/* =================================================
            INTRO
        ================================================== */}

        <div className="flex h-[calc(100dvh-5rem)] min-h-[520px] w-screen flex-col items-center justify-center px-5 text-center sm:px-6">
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
            className="mb-3 sm:mb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 sm:px-4 sm:py-2 sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-600" />
              My Portfolio
            </span>
          </motion.div>

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
            className="mb-3 text-sm text-neutral-500 sm:mb-4 sm:text-base md:text-lg"
          >
            A collection of things I&apos;ve built
          </motion.p>

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
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-teal-600 bg-clip-text text-transparent">
              My Works
            </span>
          </motion.h1>

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
            className="mt-5 h-1 rounded-full bg-gradient-to-r from-slate-700 to-teal-600 sm:mt-7"
          />

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
            className="mt-8 flex flex-col items-center gap-2 sm:mt-12"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
              Scroll
            </span>

            <span className="h-10 w-0.5 rounded-full bg-gradient-to-b from-slate-600 to-teal-500" />
          </motion.div>
        </div>

        {/* =================================================
            PROJECT PROGRESS
        ================================================== */}

        <div className="pointer-events-none absolute left-1/2 top-[calc(100dvh-5.5rem)] z-30 hidden -translate-x-1/2 items-center gap-3 sm:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
            Selected work
          </span>

          <div className="h-px w-16 bg-gradient-to-r from-slate-600 to-teal-500" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
            {String(items.length).padStart(2, "0")} projects
          </span>
        </div>

        {/* =================================================
            HORIZONTAL SCROLL
        ================================================== */}

        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">

            {/* =================================================
                PROJECT INTRO
            ================================================== */}

            <div className="relative flex h-screen w-screen shrink-0 items-center justify-center overflow-hidden bg-slate-950 px-5 text-white sm:px-6">
              <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-slate-500/15 blur-3xl" />

              <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

              <div className="relative z-10 text-center">
                <span className="mb-4 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300 sm:mb-5 sm:text-xs">
                  Explore
                </span>

                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                  Selected
                  <br />

                  <span className="bg-gradient-to-r from-slate-300 via-slate-200 to-teal-300 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>

                <p className="mt-5 text-sm text-neutral-400 sm:mt-6 sm:text-lg">
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
                  className="mt-8 text-3xl text-teal-300 sm:mt-10"
                >
                  →
                </motion.div>
              </div>
            </div>

            {/* =================================================
                PROJECTS
            ================================================== */}

            {items.map((item, index) => {
              const accent = accentStyles[item.accent];

              return (
                <div
                  key={item.id}
                  className={`relative flex h-dvh min-h-[620px] w-screen shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${accent.background} px-4 py-10 text-white sm:px-6 sm:py-14 md:min-h-0 md:px-12 md:py-20 lg:px-16 xl:px-24`}
                >
                  {/* Background glow */}

                  <div
                    className={`absolute -right-32 -top-32 h-96 w-96 rounded-full ${accent.glow} blur-3xl`}
                  />

                  <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

                  {/* Background grid */}

                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
                      backgroundSize: "42px 42px",
                      maskImage:
                        "linear-gradient(to bottom, black, transparent 80%)",
                    }}
                  />

                  {/* Project number */}

                  <span className="absolute left-4 top-20 text-6xl font-bold text-white/5 sm:left-8 sm:top-24 sm:text-8xl md:left-16 lg:text-9xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* =================================================
                      CONTENT
                  ================================================== */}

                  <div className="relative z-10 flex w-full max-w-[1500px] flex-col items-center justify-center gap-5 md:grid md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-24">

                    {/* IMAGE */}

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
                      className="order-2 w-full md:order-1"
                    >
                      <div className="group relative mx-auto w-full max-w-[94vw] sm:max-w-[720px] md:max-w-[650px] lg:max-w-[700px]">

                        <div
                          className={`absolute -inset-4 rounded-3xl ${accent.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                        />

                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/20 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:border-white/30 sm:aspect-video sm:rounded-3xl">
                          <Image
                            src={item.img}
                            alt={`${item.title} project preview`}
                            fill
                            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 78vw, 48vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />

                          <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md sm:bottom-4 sm:left-4 sm:text-xs">
                            Project Preview
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* PROJECT DETAILS */}

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
                      className="order-1 w-full text-center md:order-2 md:max-w-xl md:text-left"
                    >
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50 sm:mb-3 sm:text-xs">
                        Project {String(index + 1).padStart(2, "0")}
                      </p>

                      <h2 className="mx-auto max-w-3xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:mx-0 md:text-4xl lg:text-5xl xl:text-6xl">
                        {item.title}
                      </h2>

                      <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-white to-white/30 sm:mt-5 md:mx-0 md:w-14" />

                      <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-white/75 sm:text-sm sm:leading-6 md:mx-0 md:mt-6 md:text-base lg:text-lg lg:leading-8">
                        {item.desc}
                      </p>

                      {/* TECHNOLOGIES */}

                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 md:mt-7 md:text-xs">
                        Built with
                      </p>

                      <div className="mt-2 flex max-w-xl flex-wrap justify-center gap-2 md:justify-start">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm ${accent.badge}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* BUTTONS */}

                      <div className="mt-5 flex flex-wrap justify-center gap-3 md:mt-8 md:justify-start">

                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live demo for ${item.title}`}
                          className="group/button inline-flex min-h-11 items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                          <span>Live Demo</span>

                          <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                            ↗
                          </span>
                        </Link>

                        <Link
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open GitHub repository for ${item.title}`}
                          className="group/github inline-flex min-h-11 items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
                        >
                          <span>GitHub</span>

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

      <section className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-slate-50 px-5 py-20 text-center sm:px-6 sm:py-24">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative z-10">

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
            className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-xs"
          >
            Let&apos;s work together
          </motion.span>

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
            className="mt-5 max-w-5xl text-3xl font-bold tracking-tight text-slate-900 sm:mt-7 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Have a{" "}
            <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-teal-600 bg-clip-text text-transparent">
              project
            </span>{" "}
            in mind?
          </motion.h1>

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
            className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-7 sm:text-base sm:leading-8 md:text-lg"
          >
            I&apos;m always interested in learning, building new things, and
            working on interesting ideas.
          </motion.p>

          {/* =================================================
              CONTACT CIRCLE
          ================================================== */}

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
            className="relative mx-auto mt-8 h-52 w-52 sm:mt-10 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
          >

            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-slate-500/10 via-slate-400/10 to-teal-400/10 blur-3xl" />

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
              className="relative h-full w-full"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -105, 0 a 105,105 0 1,1 210,0 a 105,105 0 1,1 -210,0"
                />
              </defs>

              <text
                fill="#0f766e"
                fontSize="13"
                fontWeight="600"
                letterSpacing="2"
              >
                <textPath href="#circlePath">
                  WEB DEVELOPER • REACT • NEXT.JS • JAVASCRIPT •
                </textPath>
              </text>
            </motion.svg>

            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-slate-600 via-slate-700 to-teal-500 opacity-15 blur-2xl" />

            <Link
              href="/contact"
              aria-label="Contact Tufeeq Mushtaq"
              className="group absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-center text-[10px] font-semibold text-white shadow-[0_12px_35px_rgba(15,23,42,0.18)] transition-all duration-500 hover:scale-110 hover:border-transparent hover:bg-teal-700 hover:shadow-[0_15px_45px_rgba(15,118,110,0.25)] sm:h-20 sm:w-20 sm:text-sm md:h-24 md:w-24 lg:h-28 lg:w-28"
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