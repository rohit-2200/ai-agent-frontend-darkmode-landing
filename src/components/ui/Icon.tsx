import {
  Phone,
  Calendar,
  Mail,
  Brain,
  Database,
  Shield,
  PhoneIncoming,
  Zap,
  CheckCircle,
  Video,
  MessageSquare,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Play,
  Mic,
  BarChart3,
  Users,
  Clock,
  Star,
  Check,
  ExternalLink,
  Sun,
  Moon,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  calendar: Calendar,
  mail: Mail,
  brain: Brain,
  database: Database,
  shield: Shield,
  'phone-incoming': PhoneIncoming,
  zap: Zap,
  'check-circle': CheckCircle,
  video: Video,
  'message-square': MessageSquare,
  'arrow-right': ArrowRight,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  menu: Menu,
  x: X,
  play: Play,
  mic: Mic,
  'bar-chart': BarChart3,
  users: Users,
  clock: Clock,
  star: Star,
  check: Check,
  sun:Sun,
  moon:Moon,
  'external-link': ExternalLink,
}

interface IconProps {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size = 24, className }: IconProps) {
  const LucideIcon = iconMap[name]
  if (!LucideIcon) return null
  return <LucideIcon size={size} className={className} />
}
