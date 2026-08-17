"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const text = "Say Hello";
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);
    setSending(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setSending(false);

          if (form.current) {
            form.current.reset();
          }
        },
        () => {
          setError(true);
          setSending(false);
        }
      );
  };

  return (
    <motion.main
      initial={{ y: "-100vh" }}
      animate={{ y: "0%" }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="relative h-[calc(100vh-72px)] w-full overflow-hidden bg-slate-50 text-slate-900"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Violet glow */}
        <div className="absolute -left-32 -top-20 h-64 w-64 rounded-full bg-violet-500/[0.08] blur-[90px] sm:h-80 sm:w-80" />

        {/* Cyan glow */}
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/[0.07] blur-[100px] sm:h-96 sm:w-96" />

        {/* Indigo glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/[0.025] blur-[100px] sm:h-[450px] sm:w-[450px]" />

        {/* Subtle radial effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.025),transparent_60%)]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1800px] items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid w-full grid-cols-1 items-center gap-5 sm:gap-6 md:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16 2xl:gap-20">
          
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <section className="flex min-w-0 flex-col justify-center text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-violet-700 sm:px-4 sm:py-2 sm:text-[10px]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-600 sm:h-2 sm:w-2" />
                Get in touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-4 text-5xl font-bold leading-[0.9] tracking-[-0.05em] sm:mt-5 sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.05,
                  }}
                  className="inline-block bg-gradient-to-r from-violet-700 via-indigo-600 to-cyan-500 bg-clip-text text-transparent"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}

              <motion.span
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 12,
                  delay: 0.9,
                }}
                className="ml-2 inline-block"
              >
                👋
              </motion.span>
            </motion.h1>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mx-auto mt-4 h-1 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 lg:mx-0 sm:mt-5"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="mx-auto mt-4 max-w-md text-xs leading-5 text-slate-500 sm:mt-5 sm:text-sm sm:leading-6 md:text-base lg:mx-0"
            >
              Have a question, project idea, or just want to connect?
              Send me a message and let&apos;s build something meaningful
              together.
            </motion.p>

            {/* =================================================
                INFO CARDS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mx-auto mt-5 grid w-full max-w-md grid-cols-2 gap-2 sm:mt-6 sm:gap-3 lg:mx-0"
            >
              {/* Developer */}
              <div className="group rounded-xl border border-slate-200 bg-white/80 p-2.5 text-left shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_12px_30px_rgba(124,58,237,0.1)] sm:rounded-2xl sm:p-3.5">
                <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-violet-50 text-sm transition-transform duration-300 group-hover:scale-110 sm:mb-2 sm:h-9 sm:w-9 sm:text-base">
                  💻
                </div>
                <p className="text-[10px] font-bold text-slate-900 sm:text-xs">
                  Web Developer
                </p>
                <p className="mt-0.5 text-[8px] leading-3.5 text-slate-500 sm:text-[10px] sm:leading-4">
                  Modern & responsive web experiences.
                </p>
              </div>

              {/* Ideas */}
              <div className="group rounded-xl border border-slate-200 bg-white/80 p-2.5 text-left shadow-[0_8px_25px_rgba(15,23,42,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_12px_30px_rgba(6,182,212,0.1)] sm:rounded-2xl sm:p-3.5">
                <div className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-sm transition-transform duration-300 group-hover:scale-110 sm:mb-2 sm:h-9 sm:w-9 sm:text-base">
                  🚀
                </div>
                <p className="text-[10px] font-bold text-slate-900 sm:text-xs">
                  Open to Ideas
                </p>
                <p className="mt-0.5 text-[8px] leading-3.5 text-slate-500 sm:text-[10px] sm:leading-4">
                  Always interested in learning and building.
                </p>
              </div>
            </motion.div>

            {/* Desktop indicator */}
            <div className="mt-5 hidden items-center gap-2 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span className="ml-2 text-[9px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Let&apos;s connect
              </span>
            </div>
          </section>

          {/* =================================================
              RIGHT SIDE — FORM
          ================================================== */}

          <section className="flex min-w-0 justify-center lg:justify-end">
            <motion.form
              ref={form}
              onSubmit={sendEmail}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:rounded-3xl sm:p-5 md:p-6 lg:p-7 xl:p-8"
            >
              {/* Form glows */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-500/[0.07] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-cyan-400/[0.06] blur-3xl" />

              {/* Top gradient */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400" />

              <div className="relative z-10">
                {/* Form heading */}
                <div className="mb-4 sm:mb-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-violet-600 sm:text-[10px]">
                    Contact
                  </p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
                    Let&apos;s talk.
                  </h2>
                  <p className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs sm:leading-5">
                    Tell me a little about your idea or project.
                  </p>
                </div>

                {/* =================================================
                    NAME
                ================================================== */}
                <div className="mb-3.5 sm:mb-4">
                  <label htmlFor="user_name" className="mb-1.5 block text-[10px] font-semibold text-slate-800 sm:text-xs">
                    Your name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-violet-200 hover:bg-white focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  />
                </div>

                {/* =================================================
                    EMAIL
                ================================================== */}
                <div className="mb-3.5 sm:mb-4">
                  <label htmlFor="user_email" className="mb-1.5 block text-[10px] font-semibold text-slate-800 sm:text-xs">
                    Email address
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="example@email.com"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-indigo-200 hover:bg-white focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                  />
                </div>

                {/* =================================================
                    MESSAGE
                ================================================== */}
                <div className="mb-3.5 sm:mb-4">
                  <label htmlFor="user_message" className="mb-1.5 block text-[10px] font-semibold text-slate-800 sm:text-xs">
                    Your message
                  </label>
                  <textarea
                    id="user_message"
                    name="user_message"
                    rows={3}
                    required
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs leading-5 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-cyan-200 hover:bg-white focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm sm:leading-6"
                  />
                </div>

                {/* =================================================
                    SIGNATURE
                ================================================== */}
                <div className="mb-4 flex items-center justify-between border-t border-slate-100 pt-3 sm:mb-5 sm:pt-4">
                  <div>
                    <p className="text-[9px] text-slate-400 sm:text-[10px]">
                      Regards,
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold text-slate-800 sm:text-xs">
                      Tufeeq Mushtaq
                    </p>
                  </div>

                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-600 via-indigo-500 to-cyan-400 p-[2px] shadow-[0_6px_18px_rgba(79,70,229,0.18)] sm:h-9 sm:w-9">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-xs">
                      👋
                    </div>
                  </div>
                </div>

                {/* =================================================
                    SEND BUTTON
                ================================================== */}
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={!sending ? { y: -2 } : {}}
                  whileTap={!sending ? { scale: 0.98 } : {}}
                  className="group relative w-full overflow-hidden rounded-lg bg-slate-950 px-5 py-3 text-xs font-semibold text-white shadow-[0_10px_25px_rgba(15,23,42,0.16)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(79,70,229,0.25)] disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-xl sm:py-3.5 sm:text-sm"
                >
                  {/* Gradient hover */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-700 via-indigo-600 to-cyan-500 transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {sending ? (
                      <>
                        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* =================================================
                    SUCCESS
                ================================================== */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-center text-[10px] font-semibold text-emerald-700 sm:rounded-xl sm:text-xs"
                  >
                    ✓ Your message has been sent successfully!
                  </motion.div>
                )}

                {/* =================================================
                    ERROR
                ================================================== */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-[10px] font-semibold text-red-600 sm:rounded-xl sm:text-xs"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </div>
            </motion.form>
          </section>
        </div>
      </div>
    </motion.main>
  );
};

export default ContactPage;