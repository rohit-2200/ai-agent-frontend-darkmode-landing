import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'
import { FEATURES } from '../../utils/constants'

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number]
  index: number
}) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group glass-card-hover p-7 lg:p-8"
    >
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon name={feature.icon} size={22} className="text-white" />
      </div>

      <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
        {feature.title}
      </h3>
      <p className="text-slate-600 dark:text-dark-400 text-sm leading-relaxed">{feature.description}</p>

      <div className="mt-5 flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn more
        <Icon name="arrow-right" size={14} />
      </div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-dark-950 dark:via-dark-900/50 dark:to-dark-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Features"
          title="Everything You Need to"
          highlightedText="Automate Sales"
          description="From the first hello to the follow-up email, our AI agent handles every step of the sales conversation with precision."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}