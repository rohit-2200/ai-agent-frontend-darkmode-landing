import { Features as FeaturesSection } from "../components/sections/Features"

export default function Features() {
  return (
    <div className="pt-24">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold">Features</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Explore the full capabilities of your AI sales agent, from instant lead engagement to automated qualification and meeting booking.
        </p>
      </section>

      <FeaturesSection />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-slate-200 dark:border-dark-800 p-6 bg-white/60 dark:bg-dark-900/40">
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Instant Lead Response
              </h3>
              <p className="text-slate-600 dark:text-dark-300">
                Respond to inbound leads immediately so your team never loses high-intent visitors due to slow follow-up.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-dark-800 p-6 bg-white/60 dark:bg-dark-900/40">
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Smart Qualification
              </h3>
              <p className="text-slate-600 dark:text-dark-300">
                Automatically ask relevant questions, qualify prospects, and pass only the best opportunities to your sales team.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-dark-800 p-6 bg-white/60 dark:bg-dark-900/40">
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                Meeting Booking
              </h3>
              <p className="text-slate-600 dark:text-dark-300">
                Book meetings with qualified leads and reduce manual back-and-forth through automated scheduling flows.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}