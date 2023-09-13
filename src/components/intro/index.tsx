'use client'
import Image from "next/image"
import { AiOutlineHome, AiOutlineLoading3Quarters } from "react-icons/ai"
import { BsArrowDown } from "react-icons/bs"
import { Tag } from "../ui/tag"
import { IntroData } from "@/queries/types"
import { GET_INTRO_QUERY } from "@/queries"
import { useEffect, useState } from "react"
import { client } from "@/lib/apollo"
import { useSpring, animated } from '@react-spring/web'



export default function Intro() {
    const [introData, setIntroData] = useState<IntroData | null>(null);
    useEffect(() => {
        client
            .query({
                query: GET_INTRO_QUERY,
            })
            .then((response) => {
                const { data } = response;
                setIntroData(data.introductions[0]);
            });
    }, []);



    const yearsExperienceAnimation = useSpring({
        from: { number: 0 },
        to: { number: introData?.years_experience },
        config: { duration: 1300 },
    });
    const finishedProjectsAnimation = useSpring({
        from: { number: 0 },
        to: { number: introData?.finished_projects },
        config: { duration: 1000 },
    });



    if (!introData) return (
        <div className="w-full flex justify-center">
            <AiOutlineLoading3Quarters size={50} className="animate-spin" />
        </div>
    );



    return (
        <section id="intro" className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title="Introdução" icon={AiOutlineHome} />
                    <h1 className="text-4xl lg:text-6xl leading-tight lg:leading-tight mb-10">{introData.title} <span className="text-intense-blue">{introData.span}</span>, {introData.position}</h1>
                    <p className="max-w-md mb-8">{introData.description}</p>
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
                            <animated.h3 className="text-3xl md:text-5xl text-intense-blue mb-4">
                                {yearsExperienceAnimation.number.to((value) => Math.floor(value))}
                            </animated.h3>
                            <p className="text-sm md:text-base uppercase">anos de experiência</p>
                        </div>
                        <div>
                            <animated.h3 className="text-3xl md:text-5xl text-intense-blue mb-4">
                                {finishedProjectsAnimation.number.to((value) => Math.floor(value))}
                            </animated.h3>
                            <p className="text-sm md:text-base uppercase">Projetos concluídos</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}