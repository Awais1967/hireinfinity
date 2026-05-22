import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { LinkButton } from "../common/ui/LinkButton";
import { heroMatches, heroTrustPoints } from "../constants/mockData";
import { BottomLandingSections } from "./home/BottomLandingSections";
import { HeroComparisonSection } from "./home/HeroComparisonSection";
import { HiringComparisonSection } from "./home/HiringComparisonSection";
import { PricingSection } from "./home/PricingSection";
import { ProcessRoadmapSection } from "./home/ProcessRoadmapSection";
import { RepresentativeProfilesSection } from "./home/RepresentativeProfilesSection";
import { ValueCardsSection } from "./home/ValueCardsSection";

function HeroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
      <div className="absolute -left-7 top-0 hidden h-20 w-3 bg-white/60 lg:block" />
      <div className="mb-2 pl-0 font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-400 sm:pl-1">
        Sample matches ready to board
      </div>

      <div className="space-y-4">
        {heroMatches.map((match, index) => (
          <div
            key={match.title}
            className={`rounded-xl border bg-white px-5 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-all ${
              index === 0 ? "border-blue-200" : "border-slate-200"
            } ${index === 1 ? "sm:ml-4" : index === 2 ? "sm:ml-8" : ""}`}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="rounded border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-[#0052FF]">
                {match.type}
              </span>
              <span className="whitespace-nowrap font-mono text-[11px] font-medium text-slate-400">{match.exp}</span>
            </div>
            <h3 className="font-display text-base font-bold leading-snug text-slate-950 sm:text-lg">{match.title}</h3>
            <p className="mt-1 font-mono text-xs font-medium text-slate-500">{match.price}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {match.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] font-medium text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="bg-[#f5f6f8]">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center lg:col-span-7">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#0052FF]">
            <Sparkles className="h-3.5 w-3.5" />
            US Registered firm · SOC2 compliance ready
          </span>
          <h1 className="mt-7 max-w-4xl font-display text-5xl font-black leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            <span className="block">Senior engineers.</span>
            <span className="block text-[#0052FF]">Ready in 5 days.</span>
            <span className="block">70% less than a US hire.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 sm:text-xl">
            Stop waiting 90 days or paying $20k recruiter markups. Access vetted senior developers who work 100% in your US hours. Start risk-free with a 2-week trial.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              to="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#0052FF] px-8 py-4 font-display text-sm font-bold text-white shadow-[0_10px_20px_rgba(0,82,255,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#0646d9]"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              to="/engineers"
              className="inline-flex min-h-14 items-center justify-center rounded-md border border-slate-200 bg-white px-8 py-4 font-display text-sm font-bold text-slate-950 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-[#0052FF]"
            >
              View Vetted Profiles
            </LinkButton>
          </div>

          <div className="mt-10 flex max-w-4xl flex-wrap gap-x-8 gap-y-3">
            {heroTrustPoints.map((point) => (
              <div key={point} className="inline-flex items-center gap-2 font-mono text-[11px] font-medium text-slate-500">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroPanel />
        </div>
      </section>
      <HeroComparisonSection />
      <ProcessRoadmapSection />
      <RepresentativeProfilesSection />
      <ValueCardsSection />
      <PricingSection />
      <HiringComparisonSection />
      <BottomLandingSections />
    </div>
  );
}
