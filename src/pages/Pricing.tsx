import { Pricing as PricingSection } from "../components/sections/Pricing";

export default function Pricing() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Simple pricing for modern sales teams
        </p>
      </section>

      <PricingSection />
    </div>
  );
}