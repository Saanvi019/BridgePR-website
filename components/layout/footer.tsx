"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/50 bg-black overflow-hidden">
      
      {/* Dot background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(rgba(255,255,128,0.19)_1px,transparent_1px)]"
        )}
      />

      {/* Radial fade mask */}
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Left */}
          <div>
            <Image
                src="/bridgepr.png"
                alt="BridgePR logo"
                width={45}
                height={30}
                className="rounded-full object-contain"
              />
            <h3 className="text-xl font-light text-white">Bridge<span className="text-yellow-200">PR</span></h3>
            <p className="mt-2 max-w-sm text-sm text-gray-400">
              Catch backend changes that may break your frontend <br/> before merge.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <span className="text-white font-medium text-lg">Product</span>
              <Link href="#installation" className="text-gray-400 hover:text-green-700 transition">
                Installation
              </Link>
              <Link href="#how-it-works" className="text-gray-400 hover:text-green-700 transition">
                How it works
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-white text-lg font-medium">Resources</span>
              <a
                href="https://github.com/apps/bridgepr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-700 transition"
              >
                GitHub App
              </a>
              
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} BridgePR. All rights reserved.
          </p>

          <p className="text-xs text-gray-400">
            Built for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
