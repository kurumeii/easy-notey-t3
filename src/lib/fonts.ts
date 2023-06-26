import {
  Roboto_Mono as FontMono,
  Roboto as FontSans,
  Inconsolata as FontSerif,
} from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
})

const fontMono = FontMono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
})

const fontSerif = FontSerif({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  weight: ["400", "500", "700"],
})

const nextFonts = `${fontSans.variable} ${fontMono.variable} ${fontSerif.variable}`

export default nextFonts
