import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'
import { Button } from '../ui/Button'
import { PRICING_PLANS } from '../../utils/constants'
import { cn } from '../../utils/cn'

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof PRICING_PLANS)[number]
  index: number
}) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={cn(
        'relative glass-card p-8 flex flex-col',
        plan.highlighted && 'border-primary-500/40 bg-primary-500/5 scale-[1.02] lg:scale-105'
      )}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-semibold shadow-lg shadow-primary-500/25">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
        <p className="text-slate-600 dark:text-dark-400 text-sm">{plan.description}</p>
      </div>

      <div className="flex items-baseline gap-1 mb-8">
        <span className="font-display text-4xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
        {plan.period && <span className="text-slate-600 dark:text-dark-400 text-sm">{plan.period}</span>}
      </div>

      <Button variant={plan.highlighted ? 'primary' : 'secondary'} size="md" className="w-full mb-8">
        {plan.cta}
        <Icon name="arrow-right" size={16} />
      </Button>

      <ul className="space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="check" size={12} className="text-primary-600 dark:text-primary-400" />
            </div>
            <span className="text-sm text-slate-700 dark:text-dark-300">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-dark-950 dark:via-dark-900/50 dark:to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Pricing"
          title="Simple, Transparent"
          highlightedText="Pricing"
          description="Start free and scale as your team grows. No hidden fees, no long-term contracts."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-dark-500 text-sm">
            14-day free trial &bull; No credit card required &bull; Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  )
}