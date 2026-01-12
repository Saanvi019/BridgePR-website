"use client";

import React from "react";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function ProblemsSection() {
  return (
    <section id="problems" className="px-6 py-24 md:px-12 lg:px-40">
       <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-sans font-light text-white">
          What Bridge<span className="text-yellow-200">PR</span> solves
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Common problems teams face when backend changes silently impact frontend code.
        </p>
      </div>

       <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-120 xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-white/60 dark:text-neutral-400" />}
        title="Silent frontend breakages"
        description="Backend changes often merge cleanly while frontend code breaks later in production. These failures are hard to trace and easy to miss during review."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-white/60 dark:text-neutral-400" />}
        title="No visibility into API contracts"
        description="Teams rarely know which frontend files depend on specific backend fields. Small response changes can have wide impact."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-white/60 dark:text-neutral-400" />}
        title="PR reviews miss integration impact"
        description="Code reviews focus on logic, not how backend changes affect frontend usage across the repo."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-white/60 dark:text-neutral-400" />}
        title="Fear-driven backend changes"
        description="Developers avoid improving APIs because they're unsure what might break. This slows refactors and increases technical debt."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-white/60 dark:text-neutral-400" />}
        title="No early warning system"
        description="Most teams find out about frontend breakages after merge. There's no automated signal at PR time."
      />
    </ul>
    </section>
    
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-56 list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col  gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-light text-balance text-white md:text-xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans font-extralight text-sm/[1.125rem] text-white/60 md:text-sm/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
