import { Fragment } from "react"
import { Icons } from "../Icons/Icons"

type Feats = {
  title: string
  description: string
  icons: (typeof Icons)[keyof typeof Icons]
}

const feats: Array<Feats> = [
  {
    title: "Github flavored markdown",
    description:
      "The best flavor of Markdown! The GFM spec is supported by text editor and Markdown renderer for note previews.",
    icons: Icons.markdown,
  },
  {
    title: "Auto-saving",
    description:
      "Changes to your notes are automatically saved to backend, meaning you'll never need to worry about losing your work.",
    icons: Icons.save,
  },
  {
    title: "Tags keep notes tidy",
    description:
      "With tagging system, it allows for effortlessly grouping, organizing, and searching through your notes - regardless if you have 5 or 5000!",
    icons: Icons.tags,
  },
  {
    title: "Preview",
    description:
      "Preview with a fully rendered version of your changing content as you type.",
    icons: Icons.preview,
  },
  {
    title: "Keyboard shortcuts",
    description:
      "Fully accessibility at its core. This allows user for speedy shortcut keyboard throughout the entire app.",
    icons: Icons.keyboard,
  },
  {
    title: "Easy searching",
    description:
      "A sensible and easy-to-use search tool for quickly browse your collection and find the note you're looking for. just simple as that!",
    icons: Icons.search,
  },
]

const Features = ({ className }: { className?: string }) => {
  return (
    <section id="features" className={className}>
      <div className="mx-auto space-y-3 px-6">
        <h2 className="font-semibold text-primary">Features</h2>
        <p className="text-3xl font-extrabold md:text-4xl">
          Only the essentials
        </p>
        <p className="max-w-3xl text-muted-foreground">
          with a sleek, yet minimal UI and a condensed feature set to help you
          avoid distractions and maximize the productivity.
        </p>
        <div className="grid gap-5 pt-12 md:grid-cols-2 lg:grid-cols-3">
          {feats.map((f) => (
            <Fragment key={f.title}>
              <div className="relative flex flex-col items-start gap-3.5 overflow-clip rounded-lg bg-muted px-6 pb-16 pt-6 text-muted-foreground drop-shadow-md transition-colors md:border-2 md:border-transparent md:pb-8 md:hover:border-primary">
                <div className="absolute -bottom-0 -right-0 opacity-50 md:relative md:block md:opacity-100">
                  <f.icons className="h-10 w-10" />
                </div>
                <h3 className="z-10 text-xl font-bold ">{f.title}</h3>
                <p className="z-10 ">{f.description}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
