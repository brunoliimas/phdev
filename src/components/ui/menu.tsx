import Link from "next/link"
import { AiOutlineHome } from "react-icons/ai"
import { BsPerson, BsBriefcase, BsFileCode } from "react-icons/bs"
import { LiaStreamSolid } from "react-icons/lia"
import { PiShapes } from "react-icons/pi"

const links = [
    {
        icon: AiOutlineHome,
        href: 'intro'
    },
    {
        icon: BsPerson,
        href: 'about'
    },
    {
        icon: BsBriefcase,
        href: 'resume'
    },
    {
        icon: LiaStreamSolid,
        href: 'services'
    },
    {
        icon: PiShapes,
        href: 'skills'
    },
    {
        icon: BsFileCode,
        href: 'projects'
    },
]


export const Menu = () => {
    return (
        <nav className="hidden lg:block bg-neutral-900 px-4 py-8 rounded-full border border-neutral-600 z-50 fixed right-6 top-1/2 -translate-y-1/2">
            <ul className="flex flex-col gap-6">
                {links.map((link, index) => (
                    <li key={index} className="hover:text-intense-blue transition-all duration-500">
                        <Link href={`#${link.href}`}>
                            <link.icon size={30} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
} 