import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/variants"
import { type FramerVariant } from "@/types"
import { motion } from "framer-motion"

export function FadeUp({ children, className }: FramerVariant) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.div className={className} variants={FADE_UP_ANIMATION_VARIANTS}>
        {children}
      </motion.div>
    </motion.div>
  )
}
