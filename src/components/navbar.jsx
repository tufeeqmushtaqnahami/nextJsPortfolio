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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  /* =====================================================
      HAMBURGER ANIMATIONS
  ====================================================== */

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

  /* =====================================================
      MOBILE MENU ANIMATION
  ====================================================== */

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
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: 40,
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

  /* =====================================================
      SOCIAL HOVER
  ====================================================== */

  const socialVariants = {
    initial: {
      y: 0,
      scale: 1,
    },

    hover: {
      y: -4,
      scale: 1.08,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full">

      {/* =====================================================
          DESKTOP / MAIN NAVBAR
      ====================================================== */}

      <div className="mx-auto w-full max-w-[1800px] px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div
          className="
            mt-3
            flex
            h-[64px]
            items-center
            justify-between
            rounded-2xl
            border
            border-slate-200/80
            bg-white/90
            px-4
            shadow-[0_10px_40px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
            transition-all
            duration-300
            sm:mt-4
            sm:h-[68px]
            sm:px-5
            md:h-[72px]
            md:px-6
          "
        >

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden w-1/3 items-center md:flex">
            <div className="flex items-center gap-2 lg:gap-3">
              {links.map((link) => (
                <div
                  key={link.title}
                  className="rounded-xl px-1 py-1"
                >
                  <NavLink link={link} />
                </div>
              ))}
            </div>
          </nav>

          {/* =================================================
              LOGO
          ================================================== */}

          <div
            className="
              flex
              flex-1
              items-center
              justify-center
              md:w-1/3
              md:flex-none
            "
          >
            <Link
              href="/"
              aria-label="Tufeeq home"
              className="
                group
                relative
                flex
                items-center
                overflow-hidden
                rounded-xl
                bg-slate-950
                p-[2px]
                shadow-[0_6px_20px_rgba(15,23,42,0.18)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_10px_30px_rgba(15,118,110,0.18)]
              "
            >

              {/* Teal gradient border */}

              <span
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-slate-700
                  via-slate-800
                  to-teal-600
                  opacity-90
                "
              />

              <span
                className="
                  relative
                  flex
                  items-center
                  overflow-hidden
                  rounded-[10px]
                  bg-slate-950
                  p-0.5
                "
              >
                <span
                  className="
                    px-2.5
                    py-1.5
                    text-sm
                    font-bold
                    tracking-tight
                    text-white
                    sm:px-3
                    sm:text-base
                  "
                >
                  Tufeeq
                </span>

                <span
                  className="
                    flex
                    h-7
                    min-w-[58px]
                    items-center
                    justify-center
                    rounded-lg
                    bg-white
                    px-2
                    text-sm
                    font-bold
                    text-slate-950
                    transition-all
                    duration-300
                    group-hover:bg-slate-100
                    sm:h-8
                    sm:min-w-[64px]
                    sm:text-base
                  "
                >
                  .dev
                </span>
              </span>
            </Link>
          </div>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="hidden w-1/3 items-center justify-end md:flex">
            <div className="flex items-center gap-2.5 lg:gap-3">

              {/* GitHub */}

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
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    transition-all
                    duration-300
                    hover:border-teal-200
                    hover:bg-teal-50
                    hover:shadow-[0_8px_25px_rgba(15,118,110,0.12)]
                    lg:h-11
                    lg:w-11
                  "
                >
                  <Image
                    src="/projects/github.png"
                    alt="GitHub"
                    width={22}
                    height={22}
                    className="
                      h-5
                      w-5
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      lg:h-[22px]
                      lg:w-[22px]
                    "
                  />
                </Link>
              </motion.div>

              {/* LinkedIn */}

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
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    transition-all
                    duration-300
                    hover:border-teal-200
                    hover:bg-teal-50
                    hover:shadow-[0_8px_25px_rgba(15,118,110,0.12)]
                    lg:h-11
                    lg:w-11
                  "
                >
                  <Image
                    src="/projects/linkedin.png"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                    className="
                      h-5
                      w-5
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      lg:h-[22px]
                      lg:w-[22px]
                    "
                  />
                </Link>
              </motion.div>

            </div>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <div className="flex w-10 items-center justify-end md:hidden">
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="
                relative
                z-[110]
                flex
                h-10
                w-10
                flex-col
                items-center
                justify-center
                gap-[5px]
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                outline-none
                transition-all
                duration-300
                hover:border-teal-200
                hover:bg-teal-50
              "
            >
              <motion.span
                variants={topVariants}
                animate={open ? "opened" : "closed"}
                className="
                  block
                  h-[3px]
                  w-7
                  origin-center
                  rounded-full
                  bg-slate-950
                "
              />

              <motion.span
                variants={centerVariants}
                animate={open ? "opened" : "closed"}
                className="
                  block
                  h-[3px]
                  w-5
                  rounded-full
                  bg-slate-950
                "
              />

              <motion.span
                variants={bottomVariants}
                animate={open ? "opened" : "closed"}
                className="
                  block
                  h-[3px]
                  w-7
                  origin-center
                  rounded-full
                  bg-slate-950
                "
              />
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="
              fixed
              inset-0
              z-[105]
              flex
              min-h-screen
              w-full
              flex-col
              items-center
              justify-center
              overflow-hidden
              bg-slate-950
              px-6
              text-white
            "
          >

            {/* =================================================
                MOBILE BACKGROUND
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                -left-32
                top-20
                h-80
                w-80
                rounded-full
                bg-slate-500/15
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-32
                right-0
                h-96
                w-96
                rounded-full
                bg-teal-500/10
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]
              "
            />

            {/* Subtle grid */}

            <div
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* =================================================
                MOBILE LOGO
            ================================================== */}

            <div
              className="
                absolute
                left-4
                top-6
                z-[110]
                sm:left-8
                sm:top-8
              "
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                aria-label="Tufeeq home"
                className="
                  group
                  relative
                  flex
                  items-center
                  overflow-hidden
                  rounded-xl
                  p-[2px]
                  shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                "
              >

                {/* Teal gradient border */}

                <span
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-slate-500
                    via-slate-400
                    to-teal-400
                  "
                />

                <span
                  className="
                    relative
                    flex
                    items-center
                    overflow-hidden
                    rounded-[10px]
                    bg-white
                  "
                >
                  <span
                    className="
                      px-2.5
                      py-1.5
                      text-sm
                      font-bold
                      text-slate-950
                    "
                  >
                    Tufeeq
                  </span>

                  <span
                    className="
                      rounded-lg
                      bg-slate-950
                      px-3
                      py-1.5
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    .dev
                  </span>
                </span>
              </Link>
            </div>

            {/* =================================================
                MOBILE NAVIGATION
            ================================================== */}

            <nav className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
              {links.map((link) => (
                <motion.div
                  key={link.title}
                  variants={itemVariants}
                >
                  <Link
                    href={link.url}
                    onClick={() => setOpen(false)}
                    className="
                      group
                      relative
                      block
                      text-4xl
                      font-semibold
                      tracking-tight
                      text-white
                      transition-all
                      duration-300
                      hover:text-teal-300
                      sm:text-5xl
                      md:text-6xl
                    "
                  >
                    {link.title}

                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-[2px]
                        w-0
                        rounded-full
                        bg-gradient-to-r
                        from-slate-300
                        to-teal-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* =================================================
                MOBILE SOCIAL LINKS
            ================================================== */}

            <div className="absolute bottom-8 flex items-center gap-4 sm:bottom-10">

              {/* GitHub */}

              <Link
                href="https://github.com/tufeeqmushtaqnahami"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="GitHub"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/15
                  bg-white/5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-teal-400/50
                  hover:bg-teal-500/10
                "
              >
                <Image
                  src="/projects/github.png"
                  alt="GitHub"
                  width={22}
                  height={22}
                  className="
                    object-contain
                    invert
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </Link>

              {/* LinkedIn */}

              <Link
                href="https://www.linkedin.com/in/tufeeq-mushtaq-024b7a1b9/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                aria-label="LinkedIn"
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/15
                  bg-white/5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-teal-400/50
                  hover:bg-teal-500/10
                "
              >
                <Image
                  src="/projects/linkedin.png"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                  className="
                    object-contain
                    invert
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;