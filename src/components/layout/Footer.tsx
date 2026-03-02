import { Icon } from '../ui/Icon'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Changelog', href: '#' },
    { label: 'Documentation', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#demo' },
    { label: 'Partners', href: '#' },
  ],
  Resources: [
    { label: 'Help Center', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Security', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-dark-950 border-t border-slate-200/70 dark:border-dark-800/50 transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Icon name="mic" size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Sales<span className="text-primary-600 dark:text-primary-400">Agent</span>
                <span className="text-accent-600 dark:text-accent-400">.ai</span>
              </span>
            </a>

            <p className="text-slate-600 dark:text-dark-400 text-sm leading-relaxed mb-6 max-w-xs">
              The autonomous AI sales representative that conducts human-like conversations, books meetings, and closes deals 24/7.
            </p>

            <div className="flex items-center gap-3">
              {['star', 'star', 'star', 'star', 'star'].map((_, i) => (
                <Icon key={i} name="star" size={16} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-slate-600 dark:text-dark-400 text-sm ml-1">4.9/5 rating</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-slate-200/70 dark:border-dark-800/50 my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-dark-500 text-sm">
            &copy; {new Date().getFullYear()} SalesAgent.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}