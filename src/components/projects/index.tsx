import Image from 'next/image'
import { BsFileCode } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { Tag } from '../ui/tag'
import { TitleSection } from '../ui/titleSection'
import { Tools } from '../ui/tools'
import Link from 'next/link'

const projects = [
    {
        name: 'Financilux',
        imgUrl: 'image-01',
        tools: [
            'python', 'javascript', 'mongodb', 'python', 'javascript', 'mongodb',
        ]
    },
    {
        name: 'Wforce',
        imgUrl: 'image-02',
        tools: [
            'python', 'javascript', 'mongodb'
        ]
    },
    {
        name: 'Payarc',
        imgUrl: 'image-03',
        tools: [
            'python', 'javascript', 'mongodb', 'python', 'javascript', 'mongodb'
        ]
    },
    {
        name: 'AJStudio',
        imgUrl: 'image-04',
        tools: [
            'python', 'javascript', 'mongodb', 'HTML'
        ]
    },
]

export default function Projects() {
    return (
        <section id="projects" className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title='Portfólio' icon={BsFileCode} />
                    <TitleSection title='Projetos em ' span='destaque' />
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
                        {projects.map((project, index) => (
                            <a className='group' key={index} href={`/projects/${project.name}`}>
                                <div className='w-full overflow-hidden mb-6 rounded-3xl border border-neutral-600 group-hover:border-intense-blue transition-all duration-500'>
                                    <Image
                                        className='object-cover block'
                                        alt='Projeto'
                                        src={`/projects/${project.imgUrl}.jpg`}
                                        width={1000}
                                        height={1000}
                                    />
                                </div>
                                <div className='flex flex-wrap gap-4 mb-6'>
                                    {project.tools.map((tool, index) => (
                                        <Tools key={index} name={tool} />
                                    ))}
                                </div>
                                <h3 className='text-2xl group-hover:text-intense-blue transition-all duration-500'>{project.name}</h3>
                            </a>
                        ))}
                    </div>
                    <Link href='/'>
                        <button className="flex items-center text-xl uppercase px-8 py-2 bg-intense-blue rounded-full border-2 border-intense-blue hover:bg-transparent transition-all duration-500 hover:text-intense-blue">
                            <AiOutlinePlus size={30} className="mr-2" />
                            Ver mais
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}