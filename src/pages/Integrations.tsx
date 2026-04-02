import { Integrations as IntegrationsSection } from "../components/sections/Integrations";

export default function Integrations() {
  return (
    <div className="pt-24">
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold">Integrations</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Connect with the tools your sales team already uses
        </p>
      </section>

      <IntegrationsSection />
    </div>
  );
}