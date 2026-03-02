import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { Icon } from '../ui/Icon'
import { Button } from '../ui/Button'

export function CTA() {
  const { ref, inView } = useScrollAnimation()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section id="demo" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-dark-950 dark:to-dark-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-10 lg:p-16 gradient-border text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6">
            <Icon name="zap" size={14} />
            Start in under 5 minutes
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
            Ready to Transform Your <span className="gradient-text">Sales Pipeline?</span>
          </h2>

          <p className="text-lg text-slate-600 dark:text-dark-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Join thousands of sales teams already using AI to book more meetings, qualify leads faster, and close deals
            around the clock.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/70 dark:bg-dark-800/50 border border-slate-200 dark:border-dark-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all text-sm"
              />
              <Button variant="primary" size="lg" type="submit">
                Get Started
                <Icon name="arrow-right" size={18} />
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-8 max-w-md mx-auto"
            >
              <Icon name="check-circle" size={20} className="text-emerald-500 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 font-medium">Thanks! We&apos;ll be in touch shortly.</span>
            </motion.div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 dark:text-dark-500 text-xs">
            <span className="flex items-center gap-1.5">
              <Icon name="check" size={12} className="text-emerald-500 dark:text-emerald-400" />
              14-day free trial
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check" size={12} className="text-emerald-500 dark:text-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="check" size={12} className="text-emerald-500 dark:text-emerald-400" />
              Setup in minutes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}