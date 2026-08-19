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
      className="group relative px-1 py-2 text-sm font-medium tracking-wide text-slate-700 transition-colors duration-300 hover:text-teal-700 lg:text-base"
    >
      <span className="relative z-10">{link.title}</span>

      <motion.span
        initial={false}
        animate={{
          width: isActive ? "100%" : "0%",
        }}
        className="absolute bottom-0 left-0 h-0.5 rounded-full bg-linear-to-r from-slate-700 via-slate-600 to-teal-600"
      />

      {!isActive && (
        <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-linear-to-r from-slate-700 via-slate-600 to-teal-600 transition-all duration-300 group-hover:w-full" />
      )}

      <span className="absolute inset-0 -z-10 rounded-lg bg-linear-to-r from-slate-500/0 via-slate-500/0 to-teal-500/0 blur-xl transition-all duration-300 group-hover:from-slate-500/10 group-hover:via-slate-500/10 group-hover:to-teal-500/10" />
    </Link>
  );
};

export default NavLink;