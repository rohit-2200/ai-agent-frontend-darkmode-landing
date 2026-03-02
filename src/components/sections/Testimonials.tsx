import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'
import { TESTIMONIALS } from '../../utils/constants'

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number]
  index: number
}) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      className="glass-card-hover p-7 lg:p-8 flex flex-col"
    >
      <div className="flex items-center gap-1 mb-5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Icon key={i} name="star" size={16} className="text-amber-400 fill-amber-400" />
        ))}
      </div>

      <blockquote className="text-slate-700 dark:text-dark-200 leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-5 border-t border-slate-200/70 dark:border-dark-800/50">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center text-sm font-semibold text-slate-900 dark:text-white">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-slate-900 dark:text-white">{testimonial.author}</p>
          <p className="text-xs text-slate-600 dark:text-dark-400">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-dark-950 dark:via-dark-900/30 dark:to-dark-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Loved by Sales Teams"
          highlightedText="Everywhere"
          description="See what industry leaders are saying about transforming their sales process with AI."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <TestimonialCard key={testimonial.author} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}