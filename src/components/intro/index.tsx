import Image from "next/image"
import { AiOutlineHome } from "react-icons/ai"
import { BsArrowDown } from "react-icons/bs"
import { Tag } from "../ui/tag"


export default function Intro() {
    return (
        <section id="intro" className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title="Introdução" icon={AiOutlineHome}/>
                    <h1 className="text-4xl lg:text-6xl leading-tight mb-10">Olá, eu sou o <span className="text-intense-blue">Pedro</span>, Desenvolvedor Back End e Mobile</h1>
                    <p className="max-w-md mb-8">Transformando linhas de código em experiências interativas, do servidor ao dispositivo móvel.</p>
                    <a href="#projects" className="relative flex items-center justify-center p-4 border border-neutral-600 rounded-full ml-auto mr-4">
                        <Image
                            className="animate-spin-slow"
                            src="/intro/meus-projetos.svg"
                            width={140}
                            height={140}
                            alt="Meus Projetos"
                        />
                        <BsArrowDown size={40} className="absolute" />
                    </a>
                    <div className="w-full flex gap-16 mt-12">
                        <div>
                            <h3 className="text-5xl text-intense-blue mb-4">+10</h3>
                            <p className="text-base uppercase">de experiência</p>
                        </div>
                        <div>
                            <h3 className="text-5xl text-intense-blue mb-4">+154</h3>
                            <p className="text-base uppercase">Projetos concluídos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}