'use client'
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { AiOutlineHome } from "react-icons/ai"
import { VscMenu, VscChromeClose } from "react-icons/vsc"
import { BsPerson, BsBriefcase, BsFileCode } from "react-icons/bs"
import { LiaStreamSolid } from "react-icons/lia"
import { PiShapes } from "react-icons/pi"
import { gsap } from "gsap"


interface LinkItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

const links: LinkItem[] = [
    {
        icon: AiOutlineHome,
        label: "Home",
        href: "intro",
    },
    {
        icon: BsPerson,
        label: "About",
        href: "about",
    },
    {
        icon: BsBriefcase,
        label: "Resume",
        href: "resume",
    },
    {
        icon: LiaStreamSolid,
        label: "Services",
        href: "services",
    },
    {
        icon: PiShapes,
        label: "Skills",
        href: "skills",
    },
    {
        icon: BsFileCode,
        label: "Projects",
        href: "projects",
    },
];

export const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const overflowRef = useRef(null);

    const tlNav = gsap.timeline();

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";

            tlNav
                .from(overflowRef.current, {
                    duration: 1,
                    xPercent: 130,
                    ease: "power3.out",
                })
                .from(navRef.current, {
                    duration: 1,
                    xPercent: 130,
                    delay: -1,
                    ease: "power3.out",
                })

        } else {
            document.body.style.overflow = "";

            tlNav.to(navRef.current, {
                duration: 10,
                xPercent: 130,
                ease: "power3.inOut",
            });
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="hidden lg:block bg-neutral-900 px-4 py-8 rounded-full border border-neutral-600 z-50 fixed right-6 top-1/2 -translate-y-1/2">
                <ul className="flex flex-col gap-6">
                    {links.map((link, index) => (
                        <li key={index} className="text-neutral-300 hover:text-intense-blue transition-all duration-500">
                            <Link href={`#${link.href}`}>
                                <link.icon size={30} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className={`bg-neutral-900 p-3 border border-neutral-600 rounded-full fixed top-4 right-4 md:hidden ${menuOpen ? 'hidden' : 'block'}`} onClick={toggleMenu}>
                <VscMenu size={25} />
            </button>
            {menuOpen &&
                <>
                    <div ref={overflowRef} className="w-full h-full fixed right-0 top-0 bg-intense-blue bg-opacity-50 z-40"></div>
                    <nav ref={navRef}
                        className={`fixed top-0 right-0 w-4/5 h-full bg-neutral-900 p-10 z-50`}
                    >
                        <ul className="flex flex-col gap-10">
                            {links.map((link, index) => (
                                <li key={index}
                                    className="text-neutral-300 hover:text-intense-blue transition-all duration-500">
                                    <Link href={`#${link.href}`} onClick={toggleMenu} className="flex items-center">
                                        <link.icon size={30} className="mr-4" /> {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className="absolute top-8 right-8 text-white" onClick={toggleMenu}>
                            <VscChromeClose size={30} />
                        </button>
                    </nav>
                </>
            }
        </>
    )
}
