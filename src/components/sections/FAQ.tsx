import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'
import { FAQS } from '../../utils/constants'

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const { ref, inView } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-card overflow-hidden"
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between p-6 text-left group">
        <h3 className="font-display text-base font-medium text-slate-900 dark:text-white pr-6 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
          {faq.question}
        </h3>
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isOpen
              ? 'bg-primary-500/20 rotate-180'
              : 'bg-slate-100 dark:bg-dark-800 group-hover:bg-slate-200 dark:group-hover:bg-dark-700'
          }`}
        >
          <Icon
            name="chevron-down"
            size={16}
            className={isOpen ? 'text-primary-500 dark:text-primary-400' : 'text-slate-500 dark:text-dark-400'}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-slate-600 dark:text-dark-400 leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-dark-950 transition-colors duration-300" />
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.10] dark:opacity-20 [background-size:18px_18px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked"
          highlightedText="Questions"
          description="Everything you need to know about our AI Sales Agent platform."
        />

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}