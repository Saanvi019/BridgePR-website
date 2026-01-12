"use client";

import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Install the GitHub App",
    description:
      "Install BridgePR directly from GitHub with a single click. There is no setup, no configuration files, and no changes required in your codebase. Once installed, BridgePR is connected to your repositories and ready to listen for pull request activity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <Image
          src="/install1.jpeg"
          alt="Install BridgePR GitHub App"
          width={800}
          height={500}
          className="rounded-xl border border-white/10"
        />
      </div>
    ),
  },
  {
    title: "Select repositories",
    description:
      "Choose which repositories BridgePR should monitor. You stay in full control of where the app runs, and you can add or remove repositories at any time from GitHub’s app settings. BridgePR only operates on repositories you explicitly allow.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <Image
          src="/select.jpeg"
          alt="Select repositories"
          width={800}
          height={500}
          className="rounded-xl border border-white/10"
        />
      </div>
    ),
  },
  {
    title: "Open a pull request",
    description:
      "Once installed, BridgePR automatically listens to pull request events in your repository. There are no commands to run, no checks to trigger, and nothing new for your team to remember. Developers continue working exactly as they do today.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <Image
          src="/pullrequest.png"
          alt="Open a pull request"
          width={800}
          height={500}
          className="rounded-xl border border-white/10"
        />
      </div>
    ),
  },
  {
    title: "Get warned before merge",
    description:
      "When a backend response change may impact frontend usage, BridgePR analyzes the pull request and leaves a clear, human-readable comment directly on the PR. This gives reviewers early visibility into cross-layer risks before the change is merged.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-black">
        <Image
          src="/final.png"
          alt="BridgePR warning comment"
          width={800}
          height={500}
          className="rounded-xl border border-white/10"
        />
      </div>
    ),
  },
];

export function InstallationSticky() {
  return (
    <section
      id="installation"
      className="px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-white">
          Install Bridge<span className="text-yellow-200">PR</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Install once. BridgePR works automatically on every pull request.
        </p>
      </div>

      <div className="max-w-6xl mx-auto font-light">
        <StickyScroll content={content} />
      </div>

      
    </section>
  );
}
