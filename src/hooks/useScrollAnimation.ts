import { useInView } from 'react-intersection-observer'

interface UseScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-50px',
  } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  return { ref, inView }
}
