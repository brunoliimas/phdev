import About from "@/components/about"
import Intro from "@/components/intro"
import Profile from "@/components/profile"
import Resume from "@/components/resume"
import Services from "@/components/services"
import { Background } from "@/components/ui/background"





export default function Home() {
  return (
    <>
      <Background />
      <Profile />
      <div className="ml-[410px]">
        <Intro />
        <About />
        <Resume />
        <Services />
      </div>
    </>
  )
}
