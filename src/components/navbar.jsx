"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

/* =========================================================
   LOGO
========================================================= */

const Logo = ({ onClick, dark = false }) => {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Tufeeq home"
      className="group flex items-center gap-2"
    >
      {/* Logo mark */}

      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-950 shadow-[0_6px_20px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_28px_rgba(13,148,136,0.25)] sm:h-10 sm:w-10">
        <span className="absolute inset-0 bg-linear-to-br from-slate-700 via-slate-900 to-teal-600 opacity-95" />

        <span className="absolute inset-px rounded-[11px] border border-white/10" />

        <span className="relative z-10 text-lg font-black tracking-tighter text-white sm:text-xl">
          T
        </span>

        <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.9)]" />
      </span>

      {/* Wordmark */}

      <span
        className={`flex items-center text-[15px] font-bold tracking-tight sm:text-base ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        <span>{`Tufeeq`}</span>

        <span className="ml-0.5 text-teal-400">.dev</span>
      </span>
    </Link>
  );
};

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [open, setOpen] = useState(false);

  /* =======================================================
     HAMBURGER
  ======================================================== */

  const topVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },

    opened: {
      rotate: 45,
      y: 5,
      backgroundColor: "#ffffff",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
      x: 0,
    },

    opened: {
      opacity: 0,
      x: 20,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },

    opened: {
      rotate: -45,
      y: -5,
      backgroundColor: "#ffffff",
    },
  };

  /* =======================================================
     MOBILE MENU
  ======================================================== */

  const menuVariants = {
    closed: {
      x: "100%",
    },

    opened: {
      x: 0,
      transition: {
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
        when: "beforeChildren",
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: 35,
      opacity: 0,
    },

    opened: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  /* =======================================================
     SOCIAL
  ======================================================== */

  const socialVariants = {
    initial: {
      y: 0,
      scale: 1,
    },

    hover: {
      y: -4,
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-100 w-full">
      {/* ===================================================
          DESKTOP / NORMAL NAVBAR
      ==================================================== */}

      <div className="mx-auto w-full max-w-7xl px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mt-3 flex h-16 items-center rounded-2xl border border-slate-200/80 bg-white/90 px-4 shadow-[0_10px_40px_rgba(15,23,42,0.07)] backdrop-blur-2xl transition-all duration-300 sm:mt-4 sm:h-17 sm:px-5 md:h-18 md:px-6">
          {/* Desktop links */}

          <nav className="hidden w-1/3 items-center md:flex">
            <div className="flex items-center gap-3 lg:gap-5">
              {links.map((link) => (
                <div key={link.title}>
                  <NavLink link={link} />
                </div>
              ))}
            </div>
          </nav>

          {/* Desktop logo */}

          <div className="flex flex-1 items-center justify-center md:w-1/3 md:flex-none">
            <Logo />
          </div>

          {/* Desktop socials */}

          <div className="hidden w-1/3 items-center justify-end md:flex">
            <div className="flex items-center gap-2">
              <motion.div
                variants={socialVariants}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href="https://github.com/tufeeqmushtaqnahami"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-teal-200 hover:bg-teal-50 hover:shadow-[0_8px_25px_rgba(13,148,136,0.12)] lg:h-11 lg:w-11"
                >
                  <Image
                    src="/projects/github.png"
                    alt="GitHub"
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110 lg:h-5.5 lg:w-5.5"
                  />
                </Link>
              </motion.div>

              <motion.div
                variants={socialVariants}
                initial="initial"
                whileHover="hover"
              >
                <Link
                  href="https://www.linkedin.com/in/tufeeq-mushtaq-024b7a1b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 transition-all duration-300 hover:border-teal-200 hover:bg-teal-50 hover:shadow-[0_8px_25px_rgba(13,148,136,0.12)] lg:h-11 lg:w-11"
                >
                  <Image
                    src="/projects/linkedin.png"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                    className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-110 lg:h-5.5 lg:w-5.5"
                  />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile hamburger */}

          <div className="flex w-10 items-center justify-end md:hidden">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-110 flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-xl border border-slate-200 bg-slate-50 outline-none transition-all duration-300 hover:border-teal-200 hover:bg-teal-50"
            >
              <motion.span
                variants={topVariants}
                animate={open ? "opened" : "closed"}
                className="block h-0.75 w-7 origin-center rounded-full bg-slate-950"
              />

              <motion.span
                variants={centerVariants}
                animate={open ? "opened" : "closed"}
                className="block h-0.75 w-5 rounded-full bg-slate-950"
              />

              <motion.span
                variants={bottomVariants}
                animate={open ? "opened" : "closed"}
                className="block h-0.75 w-7 origin-center rounded-full bg-slate-950"
              />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE FULLSCREEN MENU
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-105 flex h-dvh w-full flex-col overflow-hidden bg-slate-950 text-white md:hidden"
          >
            {/* =================================================
                BACKGROUND
            ================================================== */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(13,148,136,0.12),transparent_42%)]" />

            <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-slate-600/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

            {/* Subtle grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            {/* =================================================
                TOP BAR
            ================================================== */}

            <div className="relative z-20 flex items-center justify-between px-5 pt-6 sm:px-8 sm:pt-8">
              {/* Logo */}

              <Logo
                dark
                onClick={() => setOpen(false)}
              />

              {/* Close button */}

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-teal-400/40 hover:bg-teal-500/10"
              >
                <span className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 block h-0.75 w-5 -translate-y-1/2 rotate-45 rounded-full bg-white transition-colors group-hover:bg-teal-300" />

                  <span className="absolute left-0 top-1/2 block h-0.75 w-5 -translate-y-1/2 -rotate-45 rounded-full bg-white transition-colors group-hover:bg-teal-300" />
                </span>
              </button>
            </div>

            {/* =================================================
                CENTER CONTENT
            ================================================== */}

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-4">
              {/* Small label */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.3,
                }}
                className="mb-7 flex items-center gap-2 sm:mb-9"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.8)]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-white/40 sm:text-[9px]">
                  Explore
                </span>
              </motion.div>

              {/* Navigation */}

              <nav className="flex flex-col items-center">
                {links.map((link, index) => (
                  <motion.div
                    key={link.title}
                    variants={itemVariants}
                    className="mb-3 last:mb-0 sm:mb-4"
                  >
                    <Link
                      href={link.url}
                      onClick={() => setOpen(false)}
                      className="group relative flex items-center gap-3 text-[2.4rem] font-semibold leading-none tracking-[-0.04em] text-white transition-colors duration-300 hover:text-teal-300 sm:text-5xl"
                    >
                      {/* Number */}

                      <span className="text-[9px] font-medium tracking-[0.15em] text-white/20 transition-colors duration-300 group-hover:text-teal-400 sm:text-[10px]">
                        0{index + 1}
                      </span>

                      {/* Title */}

                      <span>{link.title}</span>

                      {/* Arrow */}

                      <span className="translate-x-0 text-lg text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal-400 sm:text-xl">
                        ↗
                      </span>

                      {/* Underline */}

                      <span className="absolute -bottom-2 left-7 h-0.5 w-0 rounded-full bg-linear-to-r from-slate-300 to-teal-400 transition-all duration-300 group-hover:w-[calc(100%-28px)]" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* =================================================
                  SOCIAL LINKS
              ================================================== */}

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
                  delay: 0.55,
                  duration: 0.35,
                }}
                className="mt-10 flex items-center gap-3 sm:mt-12"
              >
                <Link
                  href="https://github.com/tufeeqmushtaqnahami"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  aria-label="GitHub"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-teal-500/10"
                >
                  <Image
                    src="/projects/github.png"
                    alt="GitHub"
                    width={21}
                    height={21}
                    className="object-contain invert transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/tufeeq-mushtaq-024b7a1b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  aria-label="LinkedIn"
                  className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-teal-500/10"
                >
                  <Image
                    src="/projects/linkedin.png"
                    alt="LinkedIn"
                    width={21}
                    height={21}
                    className="object-contain invert transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </motion.div>
            </div>

            {/* =================================================
                BOTTOM
            ================================================== */}

            <div className="relative z-10 flex items-center justify-center px-5 pb-7 sm:pb-9">
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-slate-500" />

                <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-white/25">
                  Tufeeq.dev
                </span>

                <span className="h-1 w-1 rounded-full bg-teal-500" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;