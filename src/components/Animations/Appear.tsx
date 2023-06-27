import { VARIANTS } from "@/lib/variants"
import { type FramerVariant } from "@/types"
import { motion } from "framer-motion"

export function Appear({ children, className }: FramerVariant) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      className={className}
      variants={VARIANTS.APPEAR_VARIANTS}
    >
      {children}
    </motion.div>
  )
}
