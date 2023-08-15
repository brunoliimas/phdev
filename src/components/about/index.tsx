import { Tag } from "../ui/tag"
import { TitleSection } from "../ui/titleSection"
import { BsPerson } from 'react-icons/bs'

export default function About() {
    return (
        <section id="about" className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title='Sobre' icon={BsPerson} />
                    <TitleSection title="Todo grande projeto começa com uma " span="história ainda melhor" />
                    <p className="max-w-3xl mb-4">Ao longo dos últimos 8 anos, trilhei minha jornada como desenvolvedor Back End e Mobile com paixão inabalável. Minha trajetória inclui colaborações remotas com agências renomadas, consultorias estratégicas para startups promissoras e parcerias frutíferas com talentosos colegas na criação de produtos digitais voltados tanto para o mercado corporativo quanto para o consumidor final. Minha confiança tranquila impulsiona meu constante desejo de aprimorar minhas habilidades, enquanto minha curiosidade inata me guia na exploração contínua de soluções inovadoras. Encaro cada desafio de desenvolvimento como uma oportunidade para aprimorar minhas habilidades, sempre focado em elevar meu domínio técnico, um linha de código de cada vez.</p>
                </div>
            </div>
        </section>
    )
}