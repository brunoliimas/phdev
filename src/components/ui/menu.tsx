'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { VscMenu, VscChromeClose } from "react-icons/vsc"
import { BsPerson, BsBriefcase, BsFileCode } from "react-icons/bs"
import { LiaStreamSolid } from "react-icons/lia"
import { PiShapes } from "react-icons/pi"
import { motion, AnimatePresence, stagger } from 'framer-motion'


interface LinkItem {
    icon: React.ElementType;
    label: string;
    href: string;
    click?: () => void; 
}

const navLinks: LinkItem[] = [
    {
        icon: AiOutlineHome,
        label: "Introdução",
        href: "intro",
    },
    {
        icon: BsPerson,
        label: "Sobre",
        href: "about",
    },
    {
        icon: BsBriefcase,
        label: "Currículo",
        href: "resume",
    },
    {
        icon: LiaStreamSolid,
        label: "Serviços",
        href: "services",
    },
    {
        icon: PiShapes,
        label: "Habilidades",
        href: "skills",
    },
    {
        icon: BsFileCode,
        label: "Projetos",
        href: "projects",
    },
];

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prevOpen) => !prevOpen);
    };

    const menuVars = {
        initial: {
            scaleX: 0,
        },
        animate: {
            scaleX: 1,
            transition: {
                duration: .5,
                ease: [.12, 0, .39, 0]
            }
        },
        exit: {
            scaleX: 0,
            transition: {
                delay: .5,
                duration: .5,
                ease: [.12, 1, .39, 1]
            }
        }
    };
    const containerVars = {
        initial: {
            transition: {
                staggerChildren: .09,
                staggerDirection: -1
            },
        },
        open: {
            transition: {
                delayChildren: .3,
                staggerChildren: .09,
                staggerDirection: 1
            },
        }
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);



    return (
        <>
            <nav className="hidden lg:block bg-neutral-900 px-4 py-8 rounded-full border border-neutral-600 z-40 fixed right-6 top-1/2 -translate-y-1/2">
                <ul className="flex flex-col gap-6">
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-neutral-300 hover:text-intense-blue transition-all duration-500">
                            <Link href={`#${link.href}`}>
                                <link.icon size={30} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button
                className={`bg-intense-blue p-3 border border-neutral-600 rounded-full fixed top-4 right-4 lg:hidden ${menuOpen ? 'hidden' : 'block'}`}
                onClick={toggleMenu}>
                <VscMenu size={25} />
            </button>
            <AnimatePresence>
                {menuOpen && (
                    <>
                        <motion.div
                            variants={menuVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed right-0 top-0 origin-right w-full h-full bg-intense-blue bg-opacity-50 z-40"></motion.div>
                        <motion.nav
                            variants={menuVars}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className={`fixed top-0 right-0 origin-right flex justify-start w-4/5 h-full bg-neutral-900 py-20 px-10 z-50`}>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col gap-8">
                                {navLinks.map((link, index) => (
                                    <div key={index} className="overflow-hidden flex justify-start">
                                        <MobileNavLink icon={link.icon} label={link.label} href={link.href} click={toggleMenu} />
                                    </div>
                                ))}
                            </motion.div>

                            <button className="absolute top-8 right-8 text-white" onClick={toggleMenu}>
                                <VscChromeClose size={30} />
                            </button>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

        </>
    )
}

const mobileNavLinkVars = {
    initial: {
        x: "100vw",
        transition: {
            duration: .5,
            ease: [.37, 0, .63, 1]
        }
    }, open: {
        x: 0,
        transition: {
            duration: .7,
            ease: [0, .55, .45, 1]
        }
    }
}
const MobileNavLink = ({ label, icon, href, click }: LinkItem) => {
    const IconComponent = icon;
    return (
        <motion.div
            variants={mobileNavLinkVars}
            className="p-2">
            <Link href={`#${href}`} className="font-victor text-2xl flex hover:text-intense-blue transition-all duration-500" onClick={click}>
                <IconComponent size={30} className="mr-4" />  {label}
            </Link>
        </motion.div>
    )
}