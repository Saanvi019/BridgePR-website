"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "backdrop-blur bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
  <Image
    src="/bridgepr.png"
    alt="BridgePR logo"
    width={45}
    height={30}
    className="rounded-full object-contain"
  />
  <span className="text-lg font-medium text-white tracking-tight">
    Bridge<span className="text-yellow-200">PR</span>
  </span>
</Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            href="#working"
            className="hidden md:block text-sm text-gray-300 hover:text-amber-200 transition"
          >
            Documentation
          </Link>

          <a
            href="https://github.com/apps/bridgepr"
            target="_blank"
            className="text-sm text-gray-300 hover:text-amber-200 transition"
          >
            GitHub
          </a>

          <a
            href="https://github.com/apps/bridgepr"
            target="_blank"
            className="rounded-md bg-green-900 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition"
          >
            Install
          </a>
        </div>
      </div>
    </nav>
  );
}
