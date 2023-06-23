import { useMediaQuery } from "react-responsive"

const breakpoints = {
  sm: "640px",

  md: "768px",

  lg: "1024px",

  xl: "1280px",

  "2xl": "1536px",
}

export default function useResponsive() {
  const sm = useMediaQuery({
    maxDeviceWidth: breakpoints.sm,
  })
  const md = useMediaQuery({
    maxDeviceWidth: breakpoints.md,
  })

  const lg = useMediaQuery({
    maxDeviceWidth: breakpoints.lg,
  })

  const xl = useMediaQuery({
    maxDeviceWidth: breakpoints.xl,
  })

  const xxl = useMediaQuery({
    maxDeviceWidth: breakpoints["2xl"],
  })

  return {
    screen: {
      sm,
      md,
      lg,
      xl,
      "2xl": xxl,
    },
  }
}
