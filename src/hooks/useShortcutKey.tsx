import { useEffect } from "react"

export default function useShortcutKey(
  keyName: string,
  callBackFn: () => void
) {
  useEffect(() => {
    const keyDown = (e: KeyboardEvent) => {
      const cmdKey = e.ctrlKey || e.metaKey
      if (cmdKey && e.key === keyName) {
        e.preventDefault()
        callBackFn()
      }
    }
    document.addEventListener("keydown", keyDown)
    return () => document.removeEventListener("keydown", keyDown)
  }, [callBackFn, keyName])
}
