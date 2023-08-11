import { Tag } from "../ui/tag"
import { TitleSection } from "../ui/titleSection"
import { BsBriefcase } from 'react-icons/bs'

const styleBefore = "before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:rounded-full before:bg-neutral-300 hover:before:bg-intense-blue before:transition-all before:duration-500"
const styleAfter = "after:absolute after:left-[6px] after:top-3 after:w-px after:h-full after:bg-neutral-100 after:-z-10 after:opacity-10"

const resumeData = {
    experiences: [
        {
            companyName: "Twitter",
            occupation: "Desenvolvedor Back End",
            level: "Júnior",
            startDate: "Junho de 2020",
            endDate: "Junho de 2021",
        },
        {
            companyName: "Facebook",
            occupation: "Desenvolvedor Back End",
            level: "Pleno",
            startDate: "Julho de 2021",
            endDate: "Julho de 2022",
        },
        {
            companyName: "Google",
            occupation: "Desenvolvedor Back End",
            level: "Sênior",
            startDate: "Agosto de 2022",
            endDate: "Atual",
        },
    ],
    education: [
        {
            schoolName: "USP",
            graduation: "Ciências da Computação",
            level: "Bacharelado",
            startDate: "Fevereiro de 2016",
            endDate: "Dezembro de 2020",
        },
        {
            schoolName: "Fiap",
            graduation: "Software Architecture",
            level: "Pós Graduação",
            startDate: "Fevereiro de 2021",
            endDate: "Dezembro de 2023",
        },
    ]

}


export default function Resume() {
    return (
        <section className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title="Currículo" icon={BsBriefcase} />
                    <TitleSection title="Educação e " span="Experiência" />
                    <div className="mb-20">
                        {resumeData.education.map((course, index) => (
                            <div key={index} className={`pl-16 pb-10 group relative ${styleBefore} ${styleAfter}`}>
                                <span className="block mb-4 group-hover:text-intense-blue transition-all duration-500">
                                    {course.startDate} - {course.endDate}
                                </span>
                                <h2 className="text-2xl mb-2">
                                    {course.graduation} - <span className="group-hover:text-intense-blue transition-all duration-500">
                                        {course.level}
                                    </span>
                                </h2>
                                <p className="opacity-50">
                                    {course.schoolName}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mb-10">
                        {resumeData.experiences.map((experience, index) => (
                            <div key={index} className={`pl-16 pb-10 group relative ${styleBefore} ${styleAfter}`}>
                                <span className="block mb-4 group-hover:text-intense-blue transition-all duration-500">
                                    {experience.startDate} - {experience.endDate}
                                </span>
                                <h2 className="text-2xl mb-2">
                                    {experience.occupation} - <span className="group-hover:text-intense-blue transition-all duration-500">
                                        {experience.level}
                                    </span>
                                </h2>
                                <p className="opacity-50">
                                    {experience.companyName}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}