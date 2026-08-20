"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.main
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="relative h-[calc(100dvh-6rem)] overflow-hidden bg-slate-50 text-slate-900"
    >
      {/* ==================== BACKGROUND ==================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_15%_25%,rgba(15,118,110,0.06),transparent_28%),radial-gradient(circle_at_85%_75%,rgba(51,65,85,0.06),transparent_30%)]" />

      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* ==================== BACKGROUND GLOW ==================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Slate glow */}

        <div className="absolute -left-32 top-1/3 h-64 w-64 rounded-full bg-slate-500/5 blur-3xl sm:h-80 sm:w-80" />

        {/* Teal glow */}

        <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl sm:h-96 sm:w-96" />
      </div>

      {/* ==================== MAIN CONTAINER ==================== */}

      <div
        className="
          relative mx-auto flex h-full w-full max-w-[1600px]
          flex-col
          px-5
          sm:px-8
          md:px-10
          lg:flex-row
          lg:items-center
          lg:px-12
          xl:px-20
          2xl:px-28
        "
      >
        {/* =====================================================
            IMAGE SECTION
        ====================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            flex h-auto w-full
            items-center justify-center
            pt-8
            lg:h-full lg:w-[42%] lg:pt-0
          "
        >
          {/* ==================== IMAGE WRAPPER ==================== */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              h-57.5 w-57.5
              sm:h-65 sm:w-65
              md:h-72.5 md:w-72.5
              lg:h-85 lg:w-85
              xl:h-100 xl:w-100
              2xl:h-110 2xl:w-110
            "
          >
            {/* ==================== SOFT GLOW ==================== */}

            <div
              className="
                absolute -inset-5
                rounded-full
                bg-linear-to-r
                from-slate-500/15
                via-slate-400/10
                to-teal-400/15
                blur-3xl
              "
            />

            {/* ==================== GRADIENT BORDER ==================== */}

            <div
              className="
                absolute -inset-0.75
                rounded-full
                bg-linear-to-br
                from-slate-700
                via-slate-800
                to-teal-600
              "
            />

            {/* ==================== IMAGE ==================== */}

            <div
              className="
                absolute inset-1
                overflow-hidden
                rounded-full
                border-4
                border-white
                bg-white
                shadow-[0_20px_55px_rgba(15,23,42,0.14)]
              "
            >
              <Image
                src="/projects/profile3.png"
                alt="Tufeeq Mushtaq"
                fill
                priority
                sizes="
                  (max-width: 640px) 180px,
                  (max-width: 768px) 215px,
                  (max-width: 1024px) 255px,
                  (max-width: 1280px) 315px,
                  (max-width: 1536px) 375px,
                  420px
                "
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-700
                  ease-out
                  hover:scale-105
                "
              />
            </div>

            {/* ==================== TEAL DOT ==================== */}

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -left-2
                top-1/4
                h-2.5
                w-2.5
                rounded-full
                bg-teal-600
                shadow-[0_0_18px_rgba(15,118,110,0.55)]
                sm:-left-3
                sm:h-3
                sm:w-3
              "
            />

            {/* ==================== SLATE DOT ==================== */}

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-2
                bottom-1/4
                h-2.5
                w-2.5
                rounded-full
                bg-slate-500
                shadow-[0_0_18px_rgba(71,85,105,0.45)]
                sm:-right-3
                sm:h-3
                sm:w-3
              "
            />
          </motion.div>
        </motion.section>

        {/* =====================================================
            TEXT SECTION
        ====================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: "easeOut",
          }}
          className="
            flex
            h-[62%]
            w-full
            min-w-0
            items-center
            justify-center
            text-center
            lg:h-full
            lg:w-[58%]
            lg:justify-start
            lg:pl-8
            lg:text-left
            xl:pl-12
          "
        >
          <div className="w-full max-w-155 min-w-0">
            {/* ==================== LABEL ==================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.5,
              }}
              className="mb-3 sm:mb-4"
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  bg-slate-100
                  px-3
                  py-1.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-slate-700
                  sm:px-4
                  sm:py-2
                  sm:text-xs
                "
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-600" />

                Welcome to my portfolio
              </span>
            </motion.div>

            {/* ==================== TITLE ==================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="
                text-[2rem]
                font-extrabold
                leading-[1.04]
                tracking-tight
                sm:text-[2.5rem]
                md:text-[3rem]
                lg:text-[3.1rem]
                xl:text-[3.7rem]
                2xl:text-[4.1rem]
              "
            >
              Hi, I&apos;m{" "}
              <span
                className="
                  bg-linear-to-r
                  from-slate-700
                  via-slate-800
                  to-teal-600
                  bg-clip-text
                  text-transparent
                "
              >
                Tufeeq Mushtaq.
              </span>

              <br />

              <span className="text-slate-900">
                I Build for the Web.
              </span>
            </motion.h1>

            {/* ==================== ROLE ==================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
                duration: 0.5,
              }}
              className="
                mt-3
                text-[11px]
                font-semibold
                leading-5
                text-slate-700
                sm:text-sm
                md:text-base
                lg:mt-4
                lg:text-base
                xl:text-lg
              "
            >
              <span>Frontend Developer</span>

              <span className="mx-1.5 text-teal-700 sm:mx-2">
                |
              </span>

              <span>React</span>

              <span className="mx-1.5 text-slate-500 sm:mx-2">
                |
              </span>

              <span>Next.js</span>

              <span className="mx-1.5 text-teal-600 sm:mx-2">
                |
              </span>

              <span>JavaScript</span>
            </motion.p>

            {/* ==================== DESCRIPTION ==================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              className="
                mx-auto
                mt-3
                max-w-142.5
                text-[11px]
                leading-5
                text-slate-500
                sm:text-sm
                sm:leading-6
                md:text-base
                md:leading-7
                lg:mx-0
                lg:mt-4
                lg:text-[15px]
                xl:text-base
              "
            >
              I am a B.Sc. IT graduate and Web Developer with a strong focus on
              building modern, responsive, and user-friendly web applications.
              Passionate about problem-solving and clean code, I specialize in
              the modern JavaScript ecosystem, specifically utilizing React,
              Next.js, and Tailwind CSS to deliver seamless digital experiences.
            </motion.p>

            {/* ==================== BUTTONS ==================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.05,
                duration: 0.6,
              }}
              className="
                mt-5
                flex
                items-center
                justify-center
                gap-3
                sm:mt-6
                lg:justify-start
              "
            >
              {/* ==================== VIEW MY WORK ==================== */}

              <Link
                href="/portfolio"
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  bg-slate-950
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_30px_rgba(15,118,110,0.22)]
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-linear-to-r
                    from-slate-700
                    via-slate-800
                    to-teal-600
                    transition-transform
                    duration-500
                    group-hover:translate-x-0
                  "
                />

                <span className="relative z-10 flex items-center gap-2">
                  View My Work

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>

              {/* ==================== DOWNLOAD RESUME ==================== */}

              <a
                href="/projects/Tufeeq.Resume.pdf"
                download
                className="
                  group
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-100
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-teal-300
                  hover:bg-teal-50
                  hover:text-teal-700
                  hover:shadow-[0_10px_25px_rgba(15,118,110,0.10)]
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                <span className="flex items-center gap-2">
                  Download Resume

                  <span className="transition-transform duration-300 group-hover:translate-y-1">
                    ↓
                  </span>
                </span>
              </a>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Homepage;