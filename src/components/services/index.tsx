import { LiaStreamSolid } from 'react-icons/lia'
import { Tag } from '../ui/tag'
import { TitleSection } from '../ui/titleSection'
import { AiOutlineApi, AiOutlineMobile } from 'react-icons/ai'
import { PiComputerTower } from 'react-icons/pi'
import { FiServer } from 'react-icons/fi'


const specializations = [
    {
        title: "Desenvolvimento de API",
        description: "Projetar, desenvolver e documentar APIs que permitam a comunicação entre aplicativos e sistemas diferentes.",
        icon: AiOutlineApi,
        amountProjects: 5,
    },
    {
        title: "Desenvolvimento Mobile",
        description: "Criar aplicativos móveis para plataformas como iOS e Android (usando Flutter).",
        icon: AiOutlineMobile,
        amountProjects: 12,
    },
    {
        title: "Arquitetura de Software",
        description: "Planejar e projetar a estrutura geral do sistema, garantindo escalabilidade, desempenho e modularidade.",
        icon: PiComputerTower,
        amountProjects: 7,
    },
    {
        title: "Desenvolvimento de Servidor e Banco de Dados",
        description: "Criar e manter a lógica de negócios, manipulação de dados, autenticação e autorização no servidor. Isso envolve trabalhar com linguagens como Java, Python, Node.js, etc., e bancos de dados como MySQL, PostgreSQL, MongoDB, entre outros.",
        icon: FiServer,
        amountProjects: 3,
    },
]

export default function Services() {
    return (
        <section className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title="Serviços" icon={LiaStreamSolid} />
                    <TitleSection title="Minhas " span="Especialidades" />
                    <div className='w-full flex flex-col justify-start gap-4'>
                        {specializations.map((specialization, index) => (
                            <div key={index} className='group p-10 border border-neutral-600 rounded-3xl flex items-start justify-between hover:border-intense-blue transition-all duration-500'>
                                <div className='w-11/12'>
                                    <h2 className='text-2xl mb-4 group-hover:text-intense-blue transition-all duration-500'>{specialization.title}</h2>
                                    <p className='mb-8'>{specialization.description}</p>
                                    <span className='text-xl'>{specialization.amountProjects} - Projetos</span>
                                </div>
                                <specialization.icon size={40} className="group-hover:text-intense-blue transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}