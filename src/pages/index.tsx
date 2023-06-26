import AppBar from "@/components/Landing/AppBar"
import Features from "@/components/Landing/Features"
import HeroSection from "@/components/Landing/HeroSection"

export default function LandingPage() {
  return (
    <>
      <div className="h-screen w-full ">
        <AppBar className="sticky inset-x-0 top-0 z-20 flex w-full items-center justify-between bg-transparent px-5 py-3 backdrop-blur-lg animate-in slide-in-from-top-full duration-500 md:my-5 md:rounded-3xl" />
        {/* Hero section */}
        <HeroSection className="container py-10" />
        {/* Feats section */}
        <Features className="container py-16" />
      </div>
    </>
  )
}
