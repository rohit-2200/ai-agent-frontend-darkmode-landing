import type { NavItem, Feature, Step, Stat, PricingPlan, Integration, Testimonial, FAQ } from '../types'

export const NAV_ITEMS = [
  { label: 'Home', href: '/', sectionId: 'home' },
  { label: 'Features', href: '/features', sectionId: 'features' },
  { label: 'How It Works', href: '/how-it-works', sectionId: 'how-it-works' },
  { label: 'Integrations', href: '/integrations', sectionId: 'integrations' },
  { label: 'Pricing', href: '/pricing', sectionId: 'pricing' },
]

export const STATS: Stat[] = [
  { value: '300', suffix: '%', label: 'Increase in Meetings Booked' },
  { value: '24', suffix: '/7', label: 'Autonomous Availability' },
  { value: '< 1', suffix: 's', label: 'Average Response Time' },
  { value: '95', suffix: '%', label: 'Customer Satisfaction Rate' },
]

export const FEATURES: Feature[] = [
  {
    icon: 'phone',
    title: 'Natural Voice Conversations',
    description: 'Ultra-low latency voice pipeline powered by advanced STT/TTS engines. Your AI agent sounds human, responds instantly, and handles interruptions naturally.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: 'calendar',
    title: 'Smart Calendar Management',
    description: 'Seamlessly checks availability, books meetings, and generates Google Meet links. Integrated directly with Google Calendar via MCP protocol.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: 'mail',
    title: 'Automated Follow-up Emails',
    description: 'Sends personalized follow-up emails with meeting summaries, resources, and next steps. Never let a lead go cold again.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: 'brain',
    title: 'Intelligent Lead Qualification',
    description: 'Uses a state-machine workflow to qualify leads through natural conversation. Asks the right questions and scores intent in real-time.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: 'database',
    title: 'CRM Integration',
    description: 'Automatically updates your CRM with call outcomes, lead status, and conversation notes. Works with Salesforce, HubSpot, and more.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: 'shield',
    title: 'Enterprise-Grade Security',
    description: 'Built on the Model Context Protocol for standardized, secure tool access. OAuth2 authentication for all integrations with full audit logging.',
    gradient: 'from-indigo-500 to-violet-500',
  },
]

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Customer Calls In',
    description: 'A prospect calls your dedicated number. The Vapi voice pipeline picks up instantly with ultra-low latency, ensuring zero wait time.',
    icon: 'phone-incoming',
  },
  {
    number: '02',
    title: 'AI Understands Intent',
    description: 'Speech is transcribed in real-time via Deepgram. The LLM analyzes the conversation context, qualifies the lead, and determines the right action.',
    icon: 'brain',
  },
  {
    number: '03',
    title: 'Actions Execute via MCP',
    description: 'Need to book a meeting? The MCP Server routes tool calls to Google Calendar, Gmail, or your CRM — all happening seamlessly in the background.',
    icon: 'zap',
  },
  {
    number: '04',
    title: 'Deal Moves Forward',
    description: 'The customer gets a calendar invite, a follow-up email, and your CRM is updated. The entire interaction is logged for your sales team.',
    icon: 'check-circle',
  },
]

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$99',
    period: '/month',
    description: 'Perfect for small teams getting started with AI sales.',
    features: [
      'Up to 500 calls/month',
      'Google Calendar integration',
      'Basic email follow-ups',
      'Lead qualification',
      'Standard voice quality',
      'Email support',
    ],
    highlighted: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'For growing teams that need full automation power.',
    features: [
      'Up to 5,000 calls/month',
      'Full Google Workspace integration',
      'Advanced email sequences',
      'CRM integration (Salesforce/HubSpot)',
      'Premium voice quality',
      'Custom conversation flows',
      'Analytics dashboard',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large-scale operations.',
    features: [
      'Unlimited calls',
      'All Professional features',
      'Custom MCP tool development',
      'Dedicated voice models',
      'Multi-language support',
      'SLA guarantees',
      'Dedicated success manager',
      'On-premise deployment option',
    ],
    highlighted: false,
    cta: 'Contact Sales',
  },
]

export const INTEGRATIONS: Integration[] = [
  { name: 'Google Calendar', category: 'Scheduling', icon: 'calendar', description: 'Real-time availability & booking' },
  { name: 'Gmail', category: 'Email', icon: 'mail', description: 'Automated follow-up emails' },
  { name: 'Salesforce', category: 'CRM', icon: 'database', description: 'Lead & deal management' },
  { name: 'HubSpot', category: 'CRM', icon: 'database', description: 'Contact & pipeline tracking' },
  { name: 'Google Meet', category: 'Video', icon: 'video', description: 'Auto-generated meeting links' },
  { name: 'Twilio', category: 'Telephony', icon: 'phone', description: 'Voice call infrastructure' },
  { name: 'Slack', category: 'Notifications', icon: 'message-square', description: 'Real-time team alerts' },
  { name: 'Zapier', category: 'Automation', icon: 'zap', description: 'Connect 5,000+ apps' },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Our meeting bookings increased 3x in the first month. The AI agent handles calls so naturally that customers don\'t realize they\'re not speaking to a human.',
    author: 'Sarah Chen',
    role: 'VP of Sales',
    company: 'TechCorp',
    avatar: 'SC',
  },
  {
    quote: 'The MCP integration is genius. Adding new tools is incredibly simple, and the agent automatically knows how to use them in conversation.',
    author: 'Marcus Rivera',
    role: 'CTO',
    company: 'GrowthLabs',
    avatar: 'MR',
  },
  {
    quote: 'We replaced our entire SDR team\'s outbound calling with this agent. The qualification accuracy is remarkable and our pipeline has never been healthier.',
    author: 'Emily Watson',
    role: 'Head of Revenue',
    company: 'ScaleUp Inc',
    avatar: 'EW',
  },
]

export const FAQS: FAQ[] = [
  {
    question: 'How natural does the AI voice sound?',
    answer: 'Our agent uses state-of-the-art TTS engines like ElevenLabs with ultra-low latency (~700ms response time). The voice is virtually indistinguishable from a human sales representative, complete with natural pauses and intonation.',
  },
  {
    question: 'What is the Model Context Protocol (MCP)?',
    answer: 'MCP is a standardized protocol for connecting AI models to external tools and data sources. It allows our agent to securely access your calendar, email, and CRM through a unified interface, making the system modular and easy to extend.',
  },
  {
    question: 'Can I customize the conversation flow?',
    answer: 'Yes. The agent follows a configurable state machine with stages like greeting, qualification, value proposition, objection handling, and call-to-action. You can customize each stage, the qualifying questions, and the knowledge base it draws from.',
  },
  {
    question: 'How does the CRM integration work?',
    answer: 'The agent connects to your CRM via the MCP Server and automatically updates lead status, logs call summaries, and records customer responses after each interaction. It supports Salesforce, HubSpot, and custom CRM solutions.',
  },
  {
    question: 'Is my data secure?',
    answer: 'All integrations use OAuth2 authentication with enterprise-grade encryption. The MCP protocol ensures standardized, auditable tool access. Your data never leaves your infrastructure — the agent only accesses what it needs through secure API calls.',
  },
]
