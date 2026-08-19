"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  {
    name: "HTML",
    category: "Frontend",
    description:
      "HTML provides the structure and semantic foundation of modern web pages.",
    use: "I use HTML to create clean, accessible, and well-structured web pages.",
  },
  {
    name: "CSS",
    category: "Frontend",
    description:
      "CSS is used to style websites and create responsive visual layouts.",
    use: "I use CSS for layouts, responsive design, animations, and visual styling.",
  },
  {
    name: "JavaScript",
    category: "Programming",
    description:
      "JavaScript adds logic, interactivity, and dynamic behaviour to websites.",
    use: "I use JavaScript for application logic, APIs, events, and interactive interfaces.",
  },
  {
    name: "TypeScript",
    category: "Programming",
    description:
      "TypeScript adds static typing to JavaScript and helps create safer, maintainable code.",
    use: "I use TypeScript to make React and Next.js applications easier to maintain.",
  },
  {
    name: "React",
    category: "Frontend Library",
    description:
      "React is a component-based library for building interactive user interfaces.",
    use: "I use React to create reusable components and dynamic web applications.",
  },
  {
    name: "Next.js",
    category: "React Framework",
    description:
      "Next.js is a React framework for building modern production-ready applications.",
    use: "I use Next.js for routing, SEO, optimized rendering, and modern web applications.",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    description:
      "Tailwind CSS is a utility-first CSS framework for creating custom interfaces.",
    use: "I use Tailwind CSS to build responsive layouts and polished interfaces quickly.",
  },
  {
    name: "Redux Toolkit",
    category: "State Management",
    description:
      "Redux Toolkit is the recommended way to manage complex shared state in React.",
    use: "I use Redux Toolkit when application state needs to be shared across multiple components.",
  },
  {
    name: "Firebase",
    category: "Backend / Services",
    description:
      "Firebase provides authentication, databases, hosting, and other cloud services.",
    use: "I use Firebase for authentication and backend services in web applications.",
  },
  {
    name: "Python",
    category: "Programming",
    description:
      "Python is a versatile programming language used across many areas of development.",
    use: "I use Python for programming, data analysis, and experimentation.",
  },
  {
    name: "NumPy",
    category: "Data Science",
    description:
      "NumPy is a Python library designed for numerical computing.",
    use: "I use NumPy for numerical operations and array-based data processing.",
  },
  {
    name: "Pandas",
    category: "Data Science",
    description:
      "Pandas is a Python library for working with structured and tabular data.",
    use: "I use Pandas for data cleaning, transformation, and data analysis.",
  },
  {
    name: "Git",
    category: "Development Tool",
    description:
      "Git is a distributed version-control system for tracking code changes.",
    use: "I use Git to manage project history, branches, and development workflows.",
  },
  {
    name: "GitHub",
    category: "Development Platform",
    description:
      "GitHub is a platform for hosting Git repositories and collaborating on projects.",
    use: "I use GitHub to store projects, manage repositories, and showcase my work.",
  },
  {
    name: "VS Code",
    category: "Development Tool",
    description:
      "VS Code is a powerful and extensible source-code editor.",
    use: "I use VS Code as my primary development environment.",
  },
  {
    name: "Vite",
    category: "Build Tool",
    description:
      "Vite is a fast modern development and build tool for frontend applications.",
    use: "I use Vite for fast development and building React applications.",
  },
  {
    name: "Axios",
    category: "API Tool",
    description:
      "Axios is a JavaScript library used to make HTTP requests.",
    use: "I use Axios to communicate with APIs and retrieve application data.",
  },
  {
    name: "REST APIs",
    category: "Web Technology",
    description:
      "REST APIs allow frontend applications to communicate with backend services.",
    use: "I use REST APIs to fetch, send, and manage application data.",
  },
];

/* =========================================================
   JOURNEY
========================================================= */

const journey = [
  {
    side: "left",
    title: "Bachelor's in Information Technology",
    description:
      "Completed my Bachelor's degree in Information Technology from Cluster University Srinagar with a 7.0 CGPA, building a strong foundation in programming, web development, databases, and computer science.",
    status: "Completed",
    category: "Cluster University Srinagar",
  },
  {
    side: "right",
    title: "Web Development",
    description:
      "Building responsive web applications and working with modern technologies such as React, Next.js, Tailwind CSS, JavaScript, and TypeScript.",
    status: "Ongoing",
    category: "Web Development",
  },
  {
    side: "left",
    title: "Projects & Practice",
    description:
      "Learning through practical projects, experimenting with different technologies, and continuously improving my problem-solving and development skills.",
    status: "Ongoing",
    category: "Personal Projects",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const sectionHeadingVariants = {
  hidden: {
    x: -70,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: {
    x: -60,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.1,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   ABOUT PAGE
========================================================= */

const AboutPage = () => {
  const containerRef = useRef(null);
  const skillRef = useRef(null);
  const experienceRef = useRef(null);

  const [selectedSkill, setSelectedSkill] = useState(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const isSkillRefInView = useInView(skillRef, {
    margin: "-100px",
    once: false,
  });

  const isExperienceRefInView = useInView(experienceRef, {
    margin: "-100px",
    once: false,
  });

  return (
    <motion.div
      className="h-full bg-slate-50 text-slate-900"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
    >
      <div
        ref={containerRef}
        className="relative h-full overflow-x-hidden overflow-y-auto scroll-smooth"
      >
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* Teal glow */}

          <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-teal-500/5 blur-3xl" />

          {/* Slate glow */}

          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-slate-500/5 blur-3xl" />

          {/* Secondary teal glow */}

          <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-teal-400/5 blur-3xl" />

          {/* Slate center glow */}

          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-slate-400/5 blur-3xl" />

          {/* Subtle grid */}

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
            }}
          />
        </div>

        {/* =====================================================
            MAIN
        ====================================================== */}

        <div className="min-h-full lg:flex">
          {/* ===================================================
              CONTENT
          ==================================================== */}

          <div className="flex w-full flex-col gap-16 px-5 py-20 sm:gap-20 sm:px-8 sm:py-24 md:gap-24 md:px-12 md:py-28 lg:w-2/3 lg:gap-28 lg:px-16 lg:py-32 xl:w-1/2 xl:px-24 2xl:px-32">
            {/* =================================================
                BIOGRAPHY
            ================================================== */}

            <section className="flex flex-col gap-10 sm:gap-12">
              {/* PROFILE IMAGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="group relative w-fit"
              >
                {/* Glow */}

                <div className="absolute -inset-4 rounded-full bg-linear-to-r from-slate-500/15 via-slate-400/10 to-teal-400/15 opacity-60 blur-xl transition-all duration-500 group-hover:opacity-100" />

                {/* Gradient border */}

                <div className="relative rounded-full bg-linear-to-br from-slate-700 via-slate-800 to-teal-600 p-0.75 shadow-[0_20px_60px_rgba(15,118,110,0.14)]">
                  <Image
                    src="/projects/aboutImage.png"
                    alt="Tufeeq Mushtaq"
                    width={260}
                    height={260}
                    priority
                    className="h-36 w-36 rounded-full border-2 border-white object-cover transition-transform duration-500 group-hover:scale-105 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-60 lg:w-60 xl:h-64 xl:w-64"
                  />
                </div>
              </motion.div>

              {/* HEADING */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={sectionHeadingVariants}
              >
                <h1 className="group relative w-fit text-2xl font-bold tracking-tight sm:text-3xl">
                  <span className="bg-linear-to-r from-slate-700 via-slate-800 to-teal-600 bg-clip-text text-transparent">
                    BIOGRAPHY
                  </span>

                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-slate-700 to-teal-600 transition-all duration-500 group-hover:w-full" />
                </h1>

                <div className="mt-4 h-1 w-12 rounded-full bg-linear-to-r from-slate-700 to-teal-600" />
              </motion.div>

              {/* BIO */}

              <motion.div
                initial="hidden"
                animate="visible"
                variants={contentVariants}
                className="flex max-w-2xl flex-col gap-5"
              >
                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  Hi, I&apos;m Tufeeq Mushtaq, a Bachelor of Information
                  Technology graduate from Cluster University Srinagar with a
                  7.0 CGPA. I have a strong interest in technology,
                  programming, and problem solving, and I enjoy turning ideas
                  into clean, responsive, and functional digital experiences.
                </p>

                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  My primary focus is web development, where I work with
                  technologies such as HTML, CSS, JavaScript, React, Next.js,
                  Tailwind CSS, and Redux Toolkit. I also have experience with
                  Python, APIs, Git, GitHub, and Firebase.
                </p>

                <p className="text-base leading-8 text-slate-600 sm:text-lg">
                  I believe the best way to learn technology is by building.
                  Through personal projects and continuous practice, I aim to
                  improve my development skills, write cleaner code, and create
                  better user experiences.
                </p>
              </motion.div>

              {/* EDUCATION */}

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
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-teal-50 p-5 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-[0_15px_40px_rgba(15,118,110,0.10)] sm:p-6"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-slate-700 via-slate-600 to-teal-600" />

                <div className="flex flex-col gap-2 pl-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">
                    Education
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    Bachelor&apos;s in Information Technology
                  </h3>

                  <p className="text-sm font-medium text-slate-500">
                    Cluster University Srinagar
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      Graduated
                    </span>

                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                      7.0 CGPA
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* QUOTE */}

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
                  delay: 0.5,
                  duration: 0.6,
                }}
                className="relative max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-r from-slate-50 via-white to-teal-50 p-5 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-[0_15px_40px_rgba(15,118,110,0.10)]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-slate-700 via-slate-600 to-teal-600" />

                <p className="pl-3 text-sm font-medium italic leading-7 text-slate-600 sm:text-base">
                  &quot;Learn, build, improve, and keep moving forward.&quot;
                </p>
              </motion.div>

              <ScrollIndicator />
            </section>

            {/* =================================================
                SKILLS
            ================================================== */}

            <section
              ref={skillRef}
              className="flex flex-col gap-10 sm:gap-12"
            >
              <motion.div
                initial="hidden"
                animate={isSkillRefInView ? "visible" : "hidden"}
                variants={sectionHeadingVariants}
              >
                <h2 className="group relative w-fit text-2xl font-bold tracking-tight sm:text-3xl">
                  <span className="bg-linear-to-r from-slate-700 via-slate-800 to-teal-600 bg-clip-text text-transparent">
                    SKILLS
                  </span>

                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-slate-700 to-teal-600 transition-all duration-500 group-hover:w-full" />
                </h2>

                <div className="mt-4 h-1 w-12 rounded-full bg-linear-to-r from-slate-700 to-teal-600" />

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  Click any technology to learn what it is and how I use it.
                </p>
              </motion.div>

              {/* SKILLS */}

              <motion.div
                initial="hidden"
                animate={isSkillRefInView ? "visible" : "hidden"}
                variants={contentVariants}
                className="flex max-w-3xl flex-wrap gap-3"
              >
                {skills.map((skill) => {
                  const isSelected =
                    selectedSkill?.name === skill.name;

                  return (
                    <motion.button
                      key={skill.name}
                      type="button"
                      onClick={() =>
                        setSelectedSkill(
                          isSelected ? null : skill
                        )
                      }
                      whileHover={{
                        y: -5,
                        scale: 1.04,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className={`group relative overflow-hidden rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        isSelected
                          ? "border-teal-400 bg-teal-50 text-teal-700 shadow-[0_10px_30px_rgba(15,118,110,0.14)]"
                          : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-teal-300 hover:text-teal-700 hover:shadow-[0_10px_30px_rgba(15,118,110,0.10)]"
                      }`}
                    >
                      <span className="absolute inset-0 scale-0 rounded-xl bg-linear-to-r from-slate-500/5 via-slate-400/5 to-teal-500/10 transition-transform duration-300 group-hover:scale-100" />

                      <span className="relative z-10 flex items-center gap-2">
                        {skill.name}

                        <span
                          className={`text-xs transition-all duration-300 ${
                            isSelected
                              ? "rotate-45 opacity-100"
                              : "opacity-40 group-hover:opacity-100"
                          }`}
                        >
                          +
                        </span>
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>

              {/* SKILL DETAILS */}

              {selectedSkill && (
                <motion.div
                  key={selectedSkill.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="relative max-w-2xl overflow-hidden rounded-2xl border border-teal-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,118,110,0.10)] sm:p-7"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-linear-to-b from-slate-700 via-slate-600 to-teal-600" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full bg-linear-to-r from-slate-100 to-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
                        {selectedSkill.category}
                      </span>

                      <h3 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
                        {selectedSkill.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedSkill(null)}
                      aria-label="Close skill details"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500 transition-all hover:rotate-90 hover:bg-teal-50 hover:text-teal-700"
                    >
                      ×
                    </button>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                    {selectedSkill.description}
                  </p>

                  <div className="mt-5 rounded-xl bg-linear-to-r from-slate-50 via-white to-teal-50 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-teal-700">
                      How I use it
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {selectedSkill.use}
                    </p>
                  </div>
                </motion.div>
              )}

              <ScrollIndicator />
            </section>

            {/* =================================================
                MY JOURNEY
            ================================================== */}

            <section
              ref={experienceRef}
              className="flex flex-col gap-10 pb-32 sm:gap-12 sm:pb-40"
            >
              <motion.div
                initial="hidden"
                animate={
                  isExperienceRefInView
                    ? "visible"
                    : "hidden"
                }
                variants={sectionHeadingVariants}
              >
                <h2 className="group relative w-fit text-2xl font-bold tracking-tight sm:text-3xl">
                  <span className="bg-linear-to-r from-slate-700 via-slate-800 to-teal-600 bg-clip-text text-transparent">
                    MY JOURNEY
                  </span>

                  <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-slate-700 to-teal-600 transition-all duration-500 group-hover:w-full" />
                </h2>

                <div className="mt-4 h-1 w-12 rounded-full bg-linear-to-r from-slate-700 to-teal-600" />

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                  A look at my education, development journey, and practical
                  experience.
                </p>
              </motion.div>

              {/* TIMELINE */}

              <motion.div
                initial="hidden"
                animate={
                  isExperienceRefInView
                    ? "visible"
                    : "hidden"
                }
                variants={contentVariants}
                className="relative"
              >
                {/* Timeline */}

                <div className="absolute bottom-0 left-1/2 top-0 hidden w-0.5 -translate-x-1/2 rounded-full bg-linear-to-b from-slate-600 via-slate-500 to-teal-600 md:block" />

                <div className="flex flex-col gap-8 md:gap-0">
                  {journey.map((item) => (
                    <div
                      key={item.title}
                      className="relative flex flex-col md:min-h-57.5 md:flex-row md:items-start"
                    >
                      {/* LEFT */}

                      <div className="w-full md:w-5/12">
                        {item.side === "left" && (
                          <JourneyCard item={item} />
                        )}
                      </div>

                      {/* CENTER */}

                      <div className="hidden w-2/12 justify-center md:flex">
                        <div className="relative z-10">
                          <motion.div
                            whileHover={{
                              scale: 1.4,
                            }}
                            className="h-5 w-5 rounded-full border-4 border-white bg-linear-to-r from-slate-700 to-teal-600 shadow-[0_0_20px_rgba(15,118,110,0.35)]"
                          />
                        </div>
                      </div>

                      {/* RIGHT */}

                      <div className="w-full md:w-5/12">
                        {item.side === "right" && (
                          <JourneyCard item={item} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>
          </div>

          {/* =================================================
              BRAIN
          ================================================== */}

          <div className="pointer-events-none hidden lg:sticky lg:top-0 lg:block lg:h-screen lg:w-1/3 xl:w-1/2">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   SCROLL INDICATOR
========================================================= */

const ScrollIndicator = () => {
  return (
    <motion.div
      animate={{
        y: [0, 8, 0],
        opacity: [0.35, 1, 0.35],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="flex justify-center sm:justify-start"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={42}
        height={42}
        className="drop-shadow-[0_0_10px_rgba(15,118,110,0.18)]"
      >
        <path
          d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
          stroke="#334155"
          strokeWidth="1.5"
        />

        <path
          d="M12 6V14"
          stroke="#0f766e"
          strokeWidth="1.5"
        />

        <path
          d="M15 11L12 14L9 11"
          stroke="#14b8a6"
          strokeWidth="1.5"
        />
      </svg>
    </motion.div>
  );
};

/* =========================================================
   JOURNEY CARD
========================================================= */

const JourneyCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-[0_15px_45px_rgba(15,118,110,0.10)] sm:p-6"
    >
      {/* Decorative glow */}

      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal-500/5 blur-2xl transition-all duration-500 group-hover:bg-teal-500/10" />

      <h3 className="relative z-10 text-base font-semibold text-slate-900 transition-colors duration-300 group-hover:text-teal-700 sm:text-lg">
        {item.title}
      </h3>

      <p className="relative z-10 mt-3 text-sm leading-7 text-slate-500">
        {item.description}
      </p>

      <div className="relative z-10 mt-5">
        <span className="inline-flex rounded-full bg-linear-to-r from-slate-100 to-teal-50 px-3 py-1 text-xs font-semibold text-teal-700">
          {item.status}
        </span>
      </div>

      <span className="relative z-10 mt-3 inline-block rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors duration-300 group-hover:bg-teal-50 group-hover:text-teal-700">
        {item.category}
      </span>

      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-slate-700 via-slate-600 to-teal-600 transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

export default AboutPage;