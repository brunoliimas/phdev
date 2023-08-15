import { PiShapes } from 'react-icons/pi'
import {
    BiLogoPython,
    BiLogoJavascript,
    BiLogoFlutter,
    BiLogoTypescript,
    BiLogoPostgresql,
    BiLogoDocker,
    BiLogoFirebase,
    BiLogoJava
} from 'react-icons/bi'
import { Tag } from '../ui/tag'
import { TitleSection } from '../ui/titleSection'

const technologies = [
    {
        name: 'Python',
        icon: BiLogoPython,
    },
    {
        name: 'Javascript',
        icon: BiLogoJavascript,
    },
    {
        name: 'Flutter',
        icon: BiLogoFlutter,
    },
    {
        name: 'Typescript',
        icon: BiLogoTypescript,
    },
    {
        name: 'Postgresql',
        icon: BiLogoPostgresql,
    },
    {
        name: 'Docker',
        icon: BiLogoDocker,
    },
    {
        name: 'Firebase',
        icon: BiLogoFirebase,
    },
    {
        name: 'Java',
        icon: BiLogoJava,
    },
]

export default function Skills() {
    return (
        <section className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title='Habilidades' icon={PiShapes} />
                    <TitleSection title='Minhas ' span='Habilidades' />
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        {technologies.map((technology, index) => (
                            <div key={index} className='group flex flex-col items-center justify-center border border-neutral-600 hover:border-intense-blue transition-all duration-500 p-8 rounded-full'>
                                <technology.icon size={60} />
                                <span className='mt-2 group-hover:text-intense-blue transition-all duration-500'>{technology.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}