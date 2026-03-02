import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { SectionHeading } from '../ui/SectionHeading'
import { Icon } from '../ui/Icon'

type TabKey = 'overview' | 'calls' | 'performance'

const TABS: { key: TabKey; label: string; icon: string }[] = [
  { key: 'overview', label: 'Overview', icon: 'bar-chart' },
  { key: 'calls', label: 'Recent Calls', icon: 'phone' },
  { key: 'performance', label: 'Performance', icon: 'zap' },
]

function MetricCard({
  label,
  value,
  change,
  icon,
  positive,
}: {
  label: string
  value: string
  change: string
  icon: string
  positive: boolean
}) {
  return (
    <div className="glass-card p-5 group hover:border-primary-500/30 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
          <Icon name={icon} size={18} className="text-primary-400" />
        </div>
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            positive
              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
              : 'bg-red-500/10 text-red-600 dark:text-red-400'
          }`}
        >
          {change}
        </span>
      </div>
      <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
      <p className="text-slate-600 dark:text-dark-400 text-sm mt-1">{label}</p>
    </div>
  )
}

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data)
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 80}`)
    .join(' ')

  return (
    <svg viewBox="0 0 100 100" className="w-full h-16" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,100 ${points} 100,100`} fill={`url(#gradient-${color})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function OverviewTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard label="Calls Today" value="147" change="+23%" icon="phone" positive />
        <MetricCard label="Meetings Booked" value="34" change="+18%" icon="calendar" positive />
        <MetricCard label="Emails Sent" value="89" change="+31%" icon="mail" positive />
        <MetricCard label="Avg Response" value="0.7s" change="-12%" icon="clock" positive />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-slate-900 dark:text-white">Calls This Week</h4>
            <span className="text-xs text-emerald-600 dark:text-emerald-400">+23% vs last week</span>
          </div>
          <MiniChart data={[30, 45, 35, 60, 80, 65, 90]} color="#6366f1" />
          <div className="flex justify-between mt-2 text-[10px] text-slate-500 dark:text-dark-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
        <div className="glass-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-slate-900 dark:text-white">Conversion Rate</h4>
            <span className="text-xs text-emerald-600 dark:text-emerald-400">+5.2% vs last week</span>
          </div>
          <MiniChart data={[20, 25, 22, 35, 30, 42, 48]} color="#06b6d4" />
          <div className="flex justify-between mt-2 text-[10px] text-slate-500 dark:text-dark-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function CallsTab() {
  const calls = [
    { name: 'Sarah Chen', company: 'TechCorp', duration: '4:23', outcome: 'Meeting Booked', status: 'success' },
    { name: 'Marcus Rivera', company: 'GrowthLabs', duration: '3:45', outcome: 'Follow-up Sent', status: 'info' },
    { name: 'Emily Watson', company: 'ScaleUp Inc', duration: '2:10', outcome: 'Qualified Lead', status: 'success' },
    { name: 'James Park', company: 'DataFlow', duration: '5:02', outcome: 'Meeting Booked', status: 'success' },
    { name: 'Lisa Thompson', company: 'CloudBase', duration: '1:45', outcome: 'Not Interested', status: 'neutral' },
    { name: 'David Kim', company: 'AIVentures', duration: '3:30', outcome: 'Call Back Later', status: 'info' },
  ]

  return (
    <div className="glass-card overflow-hidden">
      <div className="grid grid-cols-5 gap-4 px-5 py-3 bg-slate-100/70 dark:bg-dark-800/50 text-xs text-slate-600 dark:text-dark-400 font-medium">
        <span>Contact</span>
        <span>Company</span>
        <span>Duration</span>
        <span>Outcome</span>
        <span className="text-right">Actions</span>
      </div>

      {calls.map((call, i) => (
        <div
          key={i}
          className="grid grid-cols-5 gap-4 px-5 py-3.5 border-t border-slate-200/70 dark:border-dark-800/30 hover:bg-slate-100/60 dark:hover:bg-dark-800/20 transition-colors items-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-xs font-semibold text-slate-700 dark:text-dark-200">
              {call.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <span className="text-sm text-slate-900 dark:text-white truncate">{call.name}</span>
          </div>
          <span className="text-sm text-slate-700 dark:text-dark-300 truncate">{call.company}</span>
          <span className="text-sm text-slate-600 dark:text-dark-400 font-mono">{call.duration}</span>
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full w-fit ${
              call.status === 'success'
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                : call.status === 'info'
                ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                : 'bg-slate-200/70 dark:bg-dark-600/50 text-slate-600 dark:text-dark-400'
            }`}
          >
            {call.outcome}
          </span>
          <div className="flex justify-end">
            <button className="text-slate-500 hover:text-primary-600 dark:text-dark-500 dark:hover:text-primary-400 transition-colors">
              <Icon name="external-link" size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function PerformanceTab() {
  const metrics = [
    { label: 'Call Pickup Rate', value: 94, color: 'bg-primary-500' },
    { label: 'Lead Qualification Rate', value: 78, color: 'bg-accent-500' },
    { label: 'Meeting Conversion', value: 62, color: 'bg-emerald-500' },
    { label: 'Email Open Rate', value: 85, color: 'bg-amber-500' },
    { label: 'Customer Satisfaction', value: 95, color: 'bg-violet-500' },
  ]

  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-6">Agent Performance Metrics</h4>
        <div className="space-y-5">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-700 dark:text-dark-300">{metric.label}</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">{metric.value}%</span>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.value}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={`h-full rounded-full ${metric.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            4.8<span className="text-sm text-slate-600 dark:text-dark-400">/5</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-dark-400 mt-1">Avg. Quality Score</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            98<span className="text-sm text-slate-600 dark:text-dark-400">%</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-dark-400 mt-1">Uptime</p>
        </div>
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-slate-900 dark:text-white">
            720<span className="text-sm text-slate-600 dark:text-dark-400">ms</span>
          </p>
          <p className="text-xs text-slate-600 dark:text-dark-400 mt-1">Avg. Latency</p>
        </div>
      </div>
    </div>
  )
}

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview')
  const { ref, inView } = useScrollAnimation()

  const tabContent: Record<TabKey, React.ReactNode> = {
    overview: <OverviewTab />,
    calls: <CallsTab />,
    performance: <PerformanceTab />,
  }

  return (
    <section id="dashboard" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-dark-950 dark:via-dark-900/30 dark:to-dark-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Dashboard"
          title="Real-Time Insights at"
          highlightedText="Your Fingertips"
          description="Monitor every call, track conversion rates, and optimize your AI agent's performance with our comprehensive analytics dashboard."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl overflow-hidden gradient-border">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200/70 dark:border-dark-700/50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1 bg-slate-100/70 dark:bg-dark-800/50 rounded-lg p-1">
                {TABS.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all ${
                      activeTab === tab.key
                        ? 'bg-primary-500/20 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-slate-600 dark:text-dark-400 hover:text-slate-900 dark:hover:text-dark-200'
                    }`}
                  >
                    <Icon name={tab.icon} size={14} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-dark-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </div>
            </div>

            <div className="p-6">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tabContent[activeTab]}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}