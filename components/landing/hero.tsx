"use client";

import React from "react";
import Link from "next/link";
import { WavyBackground } from "../ui/wavy-background";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black">
      <WavyBackground className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl  text-white leading-tight">
          Detect breaking backend changes before they
          <span className="text-yellow-200 "> hit your frontend</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-white-500 font-light">
          BridgePR analyzes backend API changes in pull requests and warns
          when frontend code depends on them, before they reach production.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/documentation"
            className="rounded-lg bg-green-900 text-lg  px-6 py-3   text-white hover:bg-green-700 transition"
          >
            How ?
          </Link>

          <a
            href="https://github.com/apps/bridgepr"
            target="_blank"
            className="rounded-lg border border-amber-300/50 px-6 py-3 text-lg text-white hover:bg-white/10 transition"
          >
            Why ?
          </a>
        </div>

      </WavyBackground>
    </section>
  );
}
