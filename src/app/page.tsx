import About from "@/components/about"
import Footer from "@/components/footer"
import Intro from "@/components/intro"
import Profile from "@/components/profile"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Services from "@/components/services"
import Skills from "@/components/skills"
import { Background } from "@/components/ui/background"
import { Menu } from "@/components/ui/menu"



export default function Home() {
  return (
    <>
      {/* <Background /> */}
      <Menu />
      <Profile />
      <div className="lg:ml-[410px] lg:mr-20">
        <Intro />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
