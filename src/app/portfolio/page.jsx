"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    title: "Climate Cast",
    desc: "A weather application that uses a weather API to display current weather information based on a location. It provides useful weather details through a clean and responsive interface.",
    img: "/projects/climate-cast.png",
    link: "https://weather-app-ten-jet-91.vercel.app/",
    github: "https://github.com/tufeeqmushtaqnahami/Weather-App",
    tags: ["HTML", "CSS", "JavaScript", "Weather API"],
    accent: "indigo",
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
    title: "To-Do App",
    desc: "A task management application built to practice CRUD operations, JavaScript state management, user interactions, and creating a simple and useful interface.",
    img: "/projects/todo.png",
    link: "https://to-do-app-omega-blush.vercel.app/",
    github: "https://github.com/tufeeqmushtaqnahami/To-Do-App",
    tags: ["HTML", "CSS", "JavaScript", "CRUD"],
    accent: "blue",
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
    background: "from-[#111827] via-[#172033] to-[#0b1120]",
    badge: "border-violet-300/20 bg-violet-400/10 text-violet-100",
    glow: "bg-violet-500/10",
  },

  blue: {
    background: "from-[#101827] via-[#162236] to-[#0a111f]",
    badge: "border-blue-300/20 bg-blue-400/10 text-blue-100",
    glow: "bg-blue-500/10",
  },

  cyan: {
    background: "from-[#0d1b20] via-[#10262c] to-[#09151a]",
    badge: "border-cyan-300/20 bg-cyan-400/10 text-cyan-100",
    glow: "bg-cyan-500/10",
  },

  indigo: {
    background: "from-[#111526] via-[#171d35] to-[#0a0f1f]",
    badge: "border-indigo-300/20 bg-indigo-400/10 text-indigo-100",
    glow: "bg-indigo-500/10",
  },
};

const PortfolioPage = () => {
  return (
    <motion.main
      className="min-h-screen w-full overflow-x-hidden bg-[#080b12] text-white"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
    >
      {/* =====================================================
          MY WORKS INTRO
      ====================================================== */}

      <section className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#080b12] px-5 text-center sm:px-6">
        {/* Premium background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-15%] top-[-10%] h-125 w-125 rounded-full bg-slate-500/10 blur-[120px]" />

          <div className="absolute bottom-[-15%] right-[-10%] h-137.5 w-137.5 rounded-full bg-teal-500/10 blur-[130px]" />

          <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/3.5 blur-[150px]" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
              maskImage:
                "linear-gradient(to bottom, black, transparent 80%)",
            }}
          />
        </div>

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 shadow-lg backdrop-blur-md sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
              My Portfolio
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 text-sm text-slate-400 sm:text-base md:text-lg"
          >
            A collection of things I&apos;ve built
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="bg-linear-to-r from-white via-slate-200 to-teal-300 bg-clip-text text-transparent">
              My Works
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-6 h-1 rounded-full bg-linear-to-r from-slate-300 to-teal-400"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-7 max-w-xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7"
          >
            Explore a selection of projects where I&apos;ve combined
            design, development, APIs, and modern web technologies.
          </motion.p>

          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
            className="mt-10 flex flex-col items-center gap-2 sm:mt-14"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500 sm:text-xs">
              Scroll
            </span>

            <span className="h-10 w-px rounded-full bg-linear-to-b from-slate-500 to-teal-400" />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS SECTION
      ====================================================== */}

      <section className="relative w-full overflow-hidden bg-[#0a0f18]">
        {/* Overall project background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[10%] h-125 w-125 rounded-full bg-indigo-500/4.5 blur-[140px]" />

          <div className="absolute right-[-10%] top-[35%] h-137.5 w-137.5 rounded-full bg-teal-500/4.5 blur-[150px]" />

          <div className="absolute bottom-[5%] left-[20%] h-112.5 w-112.5 rounded-full bg-blue-500/3.5 blur-[140px]" />
        </div>

        {/* Project intro */}
        <div className="relative flex min-h-[75dvh] w-full items-center justify-center overflow-hidden bg-linear-to-br from-[#0b1220] via-[#101827] to-[#080d17] px-5 text-center sm:px-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-indigo-500/10 blur-[110px]" />

            <div className="absolute bottom-[-15%] right-[-10%] h-96 w-96 rounded-full bg-teal-500/10 blur-[110px]" />

            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="relative z-10">
            <span className="mb-5 inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-teal-300/70 sm:mb-6 sm:text-xs">
              Featured Projects
            </span>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Selected
              <br />
              <span className="bg-linear-to-r from-slate-100 via-white to-teal-300 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="mx-auto mt-6 h-px w-20 bg-linear-to-r from-transparent via-teal-400 to-transparent" />

            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              A closer look at some of the projects I&apos;ve designed and
              developed.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="mt-9 flex justify-center text-3xl text-teal-300 md:hidden"
            >
              ↓
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="mt-9 hidden justify-center text-2xl text-teal-300 md:flex"
            >
              ↓
            </motion.div>
          </div>
        </div>

        {/* =================================================
            PROJECT CARDS
        ================================================== */}

        <div className="relative w-full">
          {items.map((item, index) => {
            const accent = accentStyles[item.accent];

            return (
              <div
                key={item.id}
                className={`relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-linear-to-br ${accent.background} px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16 xl:px-24`}
              >
                {/* Ambient background glows */}
                <div
                  className={`pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full ${accent.glow} blur-[100px]`}
                />

                <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/2.5 blur-[100px]" />

                {/* Subtle grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                    maskImage:
                      "linear-gradient(to bottom, black, transparent 90%)",
                  }}
                />

                {/* Large project number */}
                <span className="pointer-events-none absolute left-4 top-10 select-none text-7xl font-bold tracking-tighter text-white/3.5 sm:left-8 sm:top-16 sm:text-8xl md:left-16 md:text-9xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Project content */}
                <div className="relative z-10 flex w-full max-w-375 flex-col items-center justify-center gap-10 md:grid md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-24">
                  {/* IMAGE */}
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.7 }}
                    className="order-1 w-full"
                  >
                    <div className="group relative mx-auto w-full max-w-[94vw] sm:max-w-180 md:max-w-162.5 lg:max-w-175">
                      <div
                        className={`absolute -inset-5 rounded-4xl ${accent.glow} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`}
                      />

                      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 sm:aspect-video sm:rounded-3xl">
                        <Image
                          src={item.img}
                          alt={`${item.title} project preview`}
                          fill
                          sizes="(max-width: 640px) 94vw, (max-width: 1024px) 78vw, 48vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-70" />

                        <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-xl sm:bottom-4 sm:left-4 sm:text-xs">
                          Project Preview
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* PROJECT DETAILS */}
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="order-2 w-full text-center md:max-w-xl md:text-left"
                  >
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40 sm:text-xs">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:mx-0 md:text-5xl lg:text-6xl">
                      {item.title}
                    </h2>

                    <div className="mx-auto mt-4 h-px w-14 bg-linear-to-r from-white/70 to-transparent md:mx-0 md:w-16" />

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7 md:mx-0 md:mt-6 md:text-lg md:leading-8">
                      {item.desc}
                    </p>

                    {/* TECHNOLOGIES */}
                    <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 md:mt-8 md:text-xs">
                      Built with
                    </p>

                    <div className="mt-3 flex max-w-xl flex-wrap justify-center gap-2 md:justify-start">
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
                    <div className="mt-6 flex flex-wrap justify-center gap-3 md:mt-8 md:justify-start">
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo for ${item.title}`}
                        className="group/button inline-flex min-h-11 items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
                        className="group/github inline-flex min-h-11 items-center gap-3 rounded-xl border border-white/15 bg-white/6 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10"
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
        </div>
      </section>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f5f7fa] px-5 py-20 text-center sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-3xl" />

        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm sm:px-4 sm:py-2 sm:text-xs"
          >
            Let&apos;s work together
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-5xl text-3xl font-bold tracking-tight text-slate-900 sm:mt-7 sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Have a{" "}
            <span className="bg-linear-to-r from-slate-700 via-slate-800 to-teal-600 bg-clip-text text-transparent">
              project
            </span>{" "}
            in mind?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:mt-7 sm:text-base sm:leading-8 md:text-lg"
          >
            I&apos;m always interested in learning, building new things, and
            working on interesting ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto mt-8 h-52 w-52 sm:mt-10 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96"
          >
            <div className="absolute -inset-6 rounded-full bg-linear-to-r from-slate-500/10 via-slate-400/10 to-teal-400/10 blur-3xl" />

            <motion.svg
              animate={{ rotate: 360 }}
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

            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-slate-600 via-slate-700 to-teal-500 opacity-15 blur-2xl" />

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