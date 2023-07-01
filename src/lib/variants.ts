import { type Variants } from "framer-motion"

export const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
}
export const FADE_DOWN_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
}
export const PULLUP_VARIANT: Variants = {
  initial: { y: 100, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: i * 1,
    },
  }),
}
export const WORD_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
}
export const MULTIDIRECTION_SLIDE_VARIANTS: Variants = {
  hidden: { opacity: 0, x: "-25vw" },
  visible: { opacity: 1, x: 0 },
  right: { opacity: 0, x: "25vw" },
}
export const APPEAR_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.5 },
  },
}
