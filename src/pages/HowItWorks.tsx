import { HowItWorks as HowItWorksSection } from "../components/sections/HowItWorks";

export default function HowItWorks() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          See how the AI agent captures, qualifies, and books leads
        </p>
      </section>

      <HowItWorksSection />
    </div>
  );
}