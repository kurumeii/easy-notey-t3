import { type FramerVariant } from "@/types"
import { motion } from "framer-motion"

export function FadeDown({ children }: FramerVariant) {
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
      {children}
    </motion.div>
  )
}
