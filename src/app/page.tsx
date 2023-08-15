import About from "@/components/about"
import Intro from "@/components/intro"
import Profile from "@/components/profile"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Services from "@/components/services"
import Skills from "@/components/skills"
import { Background } from "@/components/ui/background"





export default function Home() {
  return (
    <>
      <Background />
      <Profile />
      <div className="lg:ml-[410px]">
        <Intro />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
      </div>
    </>
  )
}
