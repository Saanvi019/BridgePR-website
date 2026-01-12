"use client";
import { GitPullRequest, Database, Monitor, AlertTriangle } from "lucide-react";
import React from "react";

const HowItWorksSection = () => {
  return (
    <section className="w-full py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        
        {/* Heading */}
        <div className="text-center font-sans  max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white">
            How Bridge<span className="text-yellow-200">PR</span> works
          </h2>
          <p className="mt-4 text-gray-400">
            BridgePR quietly monitors your pull requests and flags risky backend
            changes before they break the frontend.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
              <GitPullRequest className="h-6 w-6 text-amber-200" />
            </div>
            <h3 className="text-lg font-medium text-white">
              Pull request detected
            </h3>
            <p className="text-sm text-gray-400">
              When a pull request is opened or updated, BridgePR automatically
              starts analyzing the changes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
              <Database className="h-6 w-6 text-amber-200" />
            </div>
            <h3 className="text-lg font-medium text-white">
              Backend changes analyzed
            </h3>
            <p className="text-sm text-gray-400">
              BridgePR looks for risky backend response changes such as removed,
              renamed, or nullable fields.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
              <Monitor className="h-6 w-6 text-amber-200" />
            </div>
            <h3 className="text-lg font-medium text-white">
              Frontend usage checked
            </h3>
            <p className="text-sm text-gray-400">
              If a backend field changes, BridgePR checks frontend files to see
              where that data is being used.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80">
              <AlertTriangle className="h-6 w-6 text-amber-200" />
            </div>
            <h3 className="text-lg font-medium text-white">
              Warning before merge
            </h3>
            <p className="text-sm text-gray-400">
              When a potential issue is found, BridgePR comments directly on the
              pull request before the code is merged.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
