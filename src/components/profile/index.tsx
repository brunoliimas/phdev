import Image from "next/image"
import { BiLogoInstagram, BiLogoLinkedin, BiLogoGithub, BiLogoWhatsapp } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

export default function Profile() {
    return (
        <>
            <div className="mt-20 lg:mt-0 w-full flex flex-col items-center justify-center lg:fixed lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:max-w-sm border border-neutral-600 rounded-3xl p-8">
                <div className="w-full flex justify-between mb-9">
                    <Image
                        src="/profile/logo_PHDev.svg"
                        width={120}
                        height={28}
                        alt="PH.Dev"
                    />
                    <span className="max-w-[150px] text-right">Back End e Mobile Developer</span>
                </div>
                <div className="w-full flex justify-center items-center max-w-xs bg-intense-blue p-4 rounded-3xl mb-8">
                    <Image
                        src="/profile/avatar.png"
                        width={200}
                        height={200}
                        alt="avatar"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-3xl mb-2">Pedro Henrique</h2>
                    <h2 className="text-2xl mb-8">São Paulo/SP</h2>
                    <p className="text-sm mb-6 opacity-50">© 2023 PH.Dev - Todos os direitos reservados</p>
                </div>
                <ul className="flex justify-center gap-2 mb-8">
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://www.instagram.com/_pedroshenrique_" target="_blank" rel="noopener noreferrer">
                            <BiLogoInstagram size={24} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://www.linkedin.com/in/hnrqpdr/" target="_blank" rel="noopener noreferrer">
                            <BiLogoLinkedin size={24} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://github.com/C4st3ll4n" target="_blank" rel="noopener noreferrer">
                            <BiLogoGithub size={24} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://wa.me/5511980348798" target="_blank" rel="noopener noreferrer">
                            <BiLogoWhatsapp size={24} />
                        </a>
                    </li>
                </ul>
                <button className="group px-6 py-2 bg-intense-blue rounded-full border-2 border-intense-blue hover:bg-transparent transition-all duration-500">
                    <a className="flex text-base items-center uppercase group-hover:text-intense-blue transition-all duration-500" href="https://wa.me/5511980348798" target="_blank" rel="noopener noreferrer">
                        <FiMail size={16} className="mr-2" />
                        Contato
                    </a>
                </button>
            </div>
        </>
    )
}