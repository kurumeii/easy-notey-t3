import { cn } from "@/lib/utils"
import Link from "next/link"

const Footer = ({ className }: { className?: string }) => {
  return (
    <>
      <footer className={cn(className)}>
        <p>
          Made by{" "}
          <Link
            className="underline decoration-2 hover:text-primary hover:decoration-primary"
            target="_blank"
            href="https://github.com/kurumeii"
          >
            Hoang anh
          </Link>{" "}
        </p>
      </footer>
    </>
  )
}

export default Footer
