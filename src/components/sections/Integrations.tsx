import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'
import { INTEGRATIONS } from '../../utils/constants'

function IntegrationCard({
  integration,
  index,
}: {
  integration: (typeof INTEGRATIONS)[number]
  index: number
}) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
      className="glass-card-hover p-5 flex items-center gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-slate-200/70 dark:border-dark-700/50 flex items-center justify-center flex-shrink-0 group-hover:border-primary-500/30 transition-colors">
        <Icon name={integration.icon} size={22} className="text-primary-600 dark:text-primary-400" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-white truncate">{integration.name}</h4>
        <p className="text-xs text-slate-600 dark:text-dark-400 mt-0.5">{integration.description}</p>
      </div>
      <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 flex-shrink-0">
        {integration.category}
      </span>
    </motion.div>
  )
}

export function Integrations() {
  const { ref, inView } = useScrollAnimation()

  return (
    <section id="integrations" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-dark-950 transition-colors duration-300" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.10] dark:opacity-20 [background-size:18px_18px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Integrations"
          title="Connects With Your"
          highlightedText="Existing Stack"
          description="Built on the Model Context Protocol (MCP) for seamless, secure integrations. Add new tools without touching your codebase."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {INTEGRATIONS.map((integration, i) => (
            <IntegrationCard key={integration.name} integration={integration} index={i} />
          ))}
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 lg:p-10 gradient-border max-w-4xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-xl shadow-primary-500/20">
                <Icon name="zap" size={36} className="text-white" />
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
                Powered by Model Context Protocol
              </h3>
              <p className="text-slate-600 dark:text-dark-400 leading-relaxed">
                MCP standardizes how our AI agent connects to external tools, making the system modular and future-proof.
                Adding a new integration is as simple as defining a new tool — the agent automatically learns how to use
                it in conversation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}