import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'
import { STEPS } from '../../utils/constants'

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[number]
  index: number
  isLast: boolean
}) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="relative flex gap-6 lg:gap-8"
    >
      <div className="flex flex-col items-center">
        <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
          <Icon name={step.icon} size={24} className="text-white" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary-500/40 to-slate-200/70 dark:to-dark-700/20 mt-4" />
        )}
      </div>

      <div className="pb-14 lg:pb-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-primary-600 dark:text-primary-400 font-mono text-sm font-bold">{step.number}</span>
          <h3 className="font-display text-xl lg:text-2xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
        </div>
        <p className="text-slate-600 dark:text-dark-400 leading-relaxed max-w-md">{step.description}</p>
      </div>
    </motion.div>
  )
}

function ArchitectureDiagram() {
  const { ref, inView } = useScrollAnimation()

  const colorClass: Record<string, string> = {
    blue: 'text-blue-600 dark:text-blue-400',
    emerald: 'text-emerald-600 dark:text-emerald-400',
    purple: 'text-purple-600 dark:text-purple-400',
    amber: 'text-amber-600 dark:text-amber-400',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="glass-card p-6 lg:p-8 rounded-3xl"
    >
      <div className="text-center mb-8">
        <span className="text-xs font-mono text-primary-600 dark:text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full">
          SYSTEM ARCHITECTURE
        </span>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 glass-card p-4 text-center group hover:border-violet-500/30 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-violet-500/20 flex items-center justify-center">
              <Icon name="phone" size={18} className="text-violet-500 dark:text-violet-400" />
            </div>
            <p className="text-xs font-medium text-slate-900 dark:text-white">Customer Call</p>
            <p className="text-[10px] text-slate-500 dark:text-dark-500 mt-1">Twilio / Vapi</p>
          </div>

          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Icon name="arrow-right" size={20} className="text-slate-400 dark:text-dark-500" />
          </motion.div>

          <div className="flex-1 glass-card p-4 text-center group hover:border-cyan-500/30 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <Icon name="mic" size={18} className="text-cyan-500 dark:text-cyan-400" />
            </div>
            <p className="text-xs font-medium text-slate-900 dark:text-white">Voice Pipeline</p>
            <p className="text-[10px] text-slate-500 dark:text-dark-500 mt-1">STT / TTS</p>
          </div>

          <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
            <Icon name="arrow-right" size={20} className="text-slate-400 dark:text-dark-500" />
          </motion.div>

          <div className="flex-1 glass-card p-4 text-center group hover:border-amber-500/30 transition-colors">
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Icon name="brain" size={18} className="text-amber-500 dark:text-amber-400" />
            </div>
            <p className="text-xs font-medium text-slate-900 dark:text-white">LLM Brain</p>
            <p className="text-[10px] text-slate-500 dark:text-dark-500 mt-1">GPT-4o / Claude</p>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <Icon name="chevron-down" size={24} className="text-primary-600 dark:text-primary-400" />
          </motion.div>
        </div>

        <div className="glass-card p-5 border border-primary-500/20 bg-primary-500/5">
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-primary-600 dark:text-primary-400 tracking-wider">MCP SERVER</span>
            <p className="text-[10px] text-slate-600 dark:text-dark-400 mt-1">Model Context Protocol</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: 'calendar', label: 'Calendar', color: 'blue' },
              { icon: 'mail', label: 'Email', color: 'emerald' },
              { icon: 'database', label: 'CRM', color: 'purple' },
              { icon: 'users', label: 'Context', color: 'amber' },
            ].map((tool) => (
              <div
                key={tool.label}
                className="text-center p-2 rounded-lg bg-slate-100/70 dark:bg-dark-800/50 hover:bg-slate-200/70 dark:hover:bg-dark-700/50 transition-colors"
              >
                <Icon name={tool.icon} size={16} className={`mx-auto mb-1 ${colorClass[tool.color]}`} />
                <p className="text-[10px] text-slate-600 dark:text-dark-300">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-dark-950 transition-colors duration-300" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.10] dark:opacity-30 [background-size:18px_18px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="From Call to Close in"
          highlightedText="Four Steps"
          description="Our AI agent handles the entire sales conversation flow — from the moment a prospect calls to the final follow-up email."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            {STEPS.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} isLast={i === STEPS.length - 1} />
            ))}
          </div>

          <div className="lg:sticky lg:top-32">
            <ArchitectureDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}