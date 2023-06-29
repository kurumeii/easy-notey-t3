import { type Color } from "@prisma/client"

export const available_colors: Array<{
  color: Color
  text: string
}> = [
  { color: "darkGray", text: "Dark gray" },
  { color: "green", text: "Green" },
  { color: "lightGray", text: "Light gray" },
  { color: "red", text: "Red" },
  { color: "sky", text: "Sky" },
  { color: "violet", text: "Violet" },
  { color: "yellow", text: "Yellow" },
]
