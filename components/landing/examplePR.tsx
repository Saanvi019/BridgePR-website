"use client";

import React from "react";
import Image from "next/image";
import {
  AlertTriangle,
  CheckCircle,
  MinusCircle,
} from "lucide-react";

const WarningExamples = () => {
  return (
    <section id="pr-types" className="w-full py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white">
            What a Bridge<span className="text-yellow-200">PR</span> warning looks like
          </h2>
          <p className="mt-4 text-gray-400">
            BridgePR comments directly on your pull request with clear,
            actionable context.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12 ">

          {/* Case 1 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center rounded-2xl border border-amber-200 p-8">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-green-400" />
                <h3 className="text-2xl font-extralight text-white">
                  Potential frontend impact detected
                </h3>
              </div>
              <p className="text-gray-400">
                When a backend response change affects data used in frontend
                code, BridgePR posts a warning on the pull request. It highlights
                the changed field and shows where it’s consumed.
              </p>
            </div>

            {/* Right */}
            <div className="relative w-full lg:w-[480px] h-[260px] md:h-[300px]">
              <Image
                src="/unsafePR.png"
                alt="BridgePR frontend impact warning"
                fill
                className="object-contain rounded-xl border border-black"
              />
            </div>
          </div>

          {/* Case 2 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center rounded-2xl border border-amber-200 p-8">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <h3 className="text-2xl font-light text-white">
                  Backend change is safe
                </h3>
              </div>
              <p className="text-gray-400">
                If a backend field changes but isn’t used anywhere in the
                frontend, BridgePR confirms that the change is safe to merge.
              </p>
            </div>

            {/* Right */}
            <div className="relative w-full lg:w-[480px] h-[260px] md:h-[300px]">
              <Image
                src="/prsafe.png"
                alt="BridgePR safe backend change"
                fill
                className="object-contain rounded-xl border border-black"
              />
            </div>
          </div>

          {/* Case 3 */}
          <div className="flex flex-col lg:flex-row gap-8 items-center rounded-2xl border border-amber-200 p-8">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <MinusCircle className="h-6 w-6 text-green-400" />
                <h3 className="text-2xl font-light text-white">
                  No action needed
                </h3>
              </div>
              <p className="text-gray-400">
                When a pull request doesn’t include any risky backend response
                changes, BridgePR stays silent and avoids adding noise.
              </p>
            </div>

            {/* Right */}
            <div className="relative w-full lg:w-[480px] h-[260px] md:h-[300px] flex items-center justify-center rounded-xl border border-black">
              <Image
                src="/nothingPR.png"
                alt="BridgePR safe backend change"
                fill
                className="object-contain rounded-xl border border-black"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WarningExamples;
