import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { cn } from '../../utils/cn'

interface SectionHeadingProps {
  badge?: string
  title: string
  highlightedText?: string
  description?: string
  centered?: boolean
}

export function SectionHeading({
  badge,
  title,
  highlightedText,
  description,
  centered = true,
}: SectionHeadingProps) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('max-w-3xl mb-16', centered && 'mx-auto text-center')}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 animate-pulse" />
          {badge}
        </span>
      )}

      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
        {title}{' '}
        {highlightedText && (
          <span className="gradient-text">{highlightedText}</span>
        )}
      </h2>

      {description && (
        <p className="text-lg text-slate-600 dark:text-dark-400 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  )
}