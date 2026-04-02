export interface NavItem {
  label: string
  href: string
  sectionId: string
}

export interface Feature {
  icon: string
  title: string
  description: string
  gradient: string
}

export interface Step {
  number: string
  title: string
  description: string
  icon: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
}

export interface Integration {
  name: string
  category: string
  icon: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

export interface FAQ {
  question: string
  answer: string
}
