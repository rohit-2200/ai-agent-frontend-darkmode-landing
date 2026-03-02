import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { STATS } from '../../utils/constants'

function AnimatedCounter({ value, suffix }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/\D/g, ''))

  useEffect(() => {
    if (isNaN(numericValue)) return

    let start = 0
    const end = numericValue
    const duration = 2000
    const stepTime = duration / end

    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= end) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [numericValue])

  const displayValue = isNaN(numericValue) ? value : count.toString()

  return (
    <span>
      {value.startsWith('< ') && '< '}
      {displayValue}
      {suffix}
    </span>
  )
}

function VoiceWaveform() {
  return (
    <div className="flex items-center gap-1 h-8">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-gradient-to-t from-primary-500 to-accent-400 rounded-full"
          animate={{
            height: [8, Math.random() * 28 + 8, 8],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.5,
            repeat: Infinity,
            delay: i * 0.05,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

function ConversationPreview() {
  const messages = [
    { type: 'agent', text: 'Hi Sarah! This is Alex from TechSolutions. How are you today?' },
    { type: 'customer', text: "Hi Alex, I'm doing well! I've been looking into sales automation tools." },
    { type: 'agent', text: "That's great to hear! Could I ask what's your biggest challenge with your current sales process?" },
    { type: 'customer', text: 'Honestly, we spend too much time on manual follow-ups and scheduling.' },
    { type: 'action', text: 'Checking calendar availability...' },
    { type: 'agent', text: "I completely understand. Would you like to see a demo? I have slots open tomorrow at 2 PM or Thursday at 10 AM." },
  ]

  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount < messages.length) {
      const timer = setTimeout(() => {
        setVisibleCount((c) => c + 1)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [visibleCount, messages.length])

  return (
    <div className="space-y-3">
      {messages.slice(0, visibleCount).map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className={
            msg.type === 'agent'
              ? 'flex gap-3 items-start'
              : msg.type === 'action'
              ? 'flex justify-center'
              : 'flex gap-3 items-start justify-end'
          }
        >
          {msg.type === 'agent' && (
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Icon name="mic" size={12} className="text-white" />
            </div>
          )}
          {msg.type === 'action' ? (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-amber-600 dark:text-amber-400 text-xs font-medium">{msg.text}</span>
            </div>
          ) : (
            <div
              className={`px-3.5 py-2 rounded-2xl text-sm max-w-[75%] ${
                msg.type === 'agent'
                  ? 'bg-slate-200/70 text-slate-900 dark:bg-dark-700/80 dark:text-dark-100 rounded-tl-sm'
                  : 'bg-primary-600/20 text-primary-700 dark:text-primary-100 border border-primary-500/20 rounded-tr-sm'
              }`}
            >
              {msg.text}
            </div>
          )}
          {msg.type === 'customer' && (
            <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-dark-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-semibold text-slate-700 dark:text-dark-200">
              SC
            </div>
          )}
        </motion.div>
      ))}
      {visibleCount < messages.length && (
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex gap-2 items-center text-slate-500 dark:text-dark-500 text-xs pl-10"
        >
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-dark-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-dark-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-dark-500" />
          </div>
          Agent is typing...
        </motion.div>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-dark-950 transition-colors duration-300" />
      <div className="absolute inset-0 hidden dark:block bg-hero-pattern" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] dark:opacity-40 [background-size:36px_36px]" />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/15 rounded-full blur-[128px] animate-pulse-slow animate-delay-200" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Powered by MCP Protocol
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] mb-6">
              Your AI Sales Rep That <span className="gradient-text">Never Sleeps</span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-600 dark:text-dark-300 leading-relaxed mb-10 max-w-lg">
              Autonomous voice conversations that qualify leads, book meetings, and close deals &mdash; 24/7. Powered by
              advanced LLMs and the Model Context Protocol.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button variant="primary" size="lg" href="#demo">
                Start Free Trial
                <Icon name="arrow-right" size={20} />
              </Button>
              <Button variant="secondary" size="lg" href="#how-it-works">
                <Icon name="play" size={18} />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {['SC', 'MR', 'EW', 'JD'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-950 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-xs font-semibold text-slate-700 dark:text-dark-200"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} name="star" size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-dark-400 text-sm mt-0.5">
                  Trusted by <span className="text-slate-900 dark:text-white font-medium">2,500+</span> sales teams
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass-card p-1 rounded-3xl gradient-border">
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200/70 dark:border-dark-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100/70 dark:bg-dark-800/50 text-slate-600 dark:text-dark-400 text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Conversation
                </div>
                <div className="w-16" />
              </div>

              <div className="p-5 min-h-[380px] max-h-[420px] overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200/70 dark:border-dark-700/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center animate-glow">
                      <Icon name="mic" size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Alex - AI Agent</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-400">Active call &bull; 2:34</p>
                    </div>
                  </div>
                  <VoiceWaveform />
                </div>

                <ConversationPreview />
              </div>

              <div className="px-5 py-3 border-t border-slate-200/70 dark:border-dark-700/50 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-dark-500">
                  <Icon name="zap" size={12} className="text-amber-400" />
                  MCP Tools Active
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-slate-600 dark:text-dark-400">
                    <Icon name="calendar" size={12} />
                    Calendar
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 dark:text-dark-400">
                    <Icon name="mail" size={12} />
                    Email
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 dark:text-dark-400">
                    <Icon name="database" size={12} />
                    CRM
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-20 glass-card px-3 py-2 flex items-center gap-2 shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Icon name="check-circle" size={16} className="text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-900 dark:text-white">Meeting Booked</p>
                <p className="text-[10px] text-slate-600 dark:text-dark-400">Google Calendar</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-24 glass-card px-3 py-2 flex items-center gap-2 shadow-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-primary-500/20 flex items-center justify-center">
                <Icon name="mail" size={16} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-900 dark:text-white">Follow-up Sent</p>
                <p className="text-[10px] text-slate-600 dark:text-dark-400">via Gmail</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="glass-card p-6 text-center group hover:border-primary-500/30 transition-all duration-300"
            >
              <p className="font-display text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-slate-600 dark:text-dark-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}