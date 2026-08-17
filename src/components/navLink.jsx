"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ link }) => {
  const pathname = usePathname();

  const isActive = pathname === link.url;

  return (
    <Link
      href={link.url}
      className="group relative px-1 py-2 text-sm font-medium tracking-wide text-neutral-700 transition-colors duration-300 hover:text-violet-600 lg:text-base"
    >
      {/* Text */}
      <span className="relative z-10">
        {link.title}
      </span>

      {/* Animated underline */}
      <motion.span
        initial={false}
        animate={{
          width: isActive ? "100%" : "0%",
        }}
        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400"
      />

      {/* Hover underline */}
      {!isActive && (
        <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
      )}

      {/* Small glow */}
      <span className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-violet-500/0 via-indigo-500/0 to-cyan-400/0 blur-xl transition-all duration-300 group-hover:from-violet-500/10 group-hover:via-indigo-500/10 group-hover:to-cyan-400/10" />
    </Link>
  );
};

export default NavLink;