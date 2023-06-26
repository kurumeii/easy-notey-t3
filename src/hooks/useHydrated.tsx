import { useEffect, useState } from "react"

export default function useHydrated() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    mounted,
  }
}
