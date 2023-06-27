import FloatButton from "@/components/FloatButton/FloatButton"
import AppBar from "@/components/Landing/AppBar"
import Features from "@/components/Landing/Features"
import Footer from "@/components/Landing/Footer"
import HeroSection from "@/components/Landing/HeroSection"
import Technologies from "@/components/Landing/Technologies"

export default function LandingPage() {
  return (
    <>
      <AppBar className="sticky inset-x-0 top-0 z-20 flex w-full items-center justify-between bg-transparent px-5 py-3 backdrop-blur-lg animate-in slide-in-from-top-full duration-500 md:my-5 " />
      {/* Hero section */}
      <HeroSection className="container py-10" />
      {/* Feats section */}
      <Features className="container py-20" />
      {/* Techs section */}
      <Technologies className="container py-20" />
      {/* Float buttons */}
      <FloatButton className="sticky bottom-0 left-0 p-5" />
      {/* Footer */}
      <Footer className="flex w-full items-end justify-end px-6 py-3 text-muted-foreground" />
    </>
  )
}
