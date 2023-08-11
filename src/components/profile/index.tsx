import Image from "next/image"
import { BiLogoInstagram, BiLogoLinkedin, BiLogoGithub, BiLogoWhatsapp } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

export default function Profile() {
    return (
        <>
            <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-sm w-full border border-neutral-600 rounded-3xl p-10">
                <div className="w-full flex justify-between mb-9">
                    <Image
                        src="/profile/logo_PHDev.svg"
                        width={120}
                        height={28}
                        alt="PH.Dev"
                    />
                    <span className="max-w-[150px] text-right">Back End e Mobile Developer</span>
                </div>
                <div className="bg-intense-blue p-4 rounded-3xl mb-11">
                    <Image
                        src="/profile/avatar.png"
                        width={250}
                        height={250}
                        alt="avatar"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-3xl mb-2">Pedro Henrique</h2>
                    <h2 className="text-2xl mb-8">São Paulo/SP</h2>
                    <p className="text-sm mb-6 opacity-50">© 2023 PH.Dev - Todos os direitos reservados</p>
                </div>
                <ul className="flex gap-2 mb-8">
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <BiLogoInstagram size={30} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <BiLogoLinkedin size={30} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <BiLogoGithub size={30} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a className="group-hover:text-intense-blue transition-all duration-500" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <BiLogoWhatsapp size={30} />
                        </a>
                    </li>
                </ul>
                <button className="group px-8 py-2 bg-intense-blue rounded-full border-2 border-intense-blue hover:bg-transparent transition-all duration-500">
                    <a className="flex items-center text-xl uppercase group-hover:text-intense-blue transition-all duration-500" href="http://" target="_blank" rel="noopener noreferrer">
                        <FiMail size={30} className="mr-2" />
                        Contato
                    </a>
                </button>
            </div>
        </>
    )
}