import AppBar from "@/components/Landing/AppBar"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <>
      <section className="h-screen w-full">
        <AppBar
          className={cn(
            "container sticky flex items-center justify-between bg-transparent py-3 backdrop-blur-xl transition-all md:top-5 md:w-11/12 md:rounded-3xl md:border md:border-border"
          )}
        />
      </section>
    </>
  )
}
