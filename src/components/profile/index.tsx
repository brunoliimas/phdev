"use client";
import { client } from "@/lib/apollo";
import { GET_PROFILE_QUERY } from '@/queries';
import { UserData } from '@/queries/types';
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import Settings from "../settings";
import { Background } from "../ui/background";




export default function Profile() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [backgroundVideo, setBackgroundVideo] = useState<string>("/background/background-video-01.mp4");

    const openSettings = () => {
        setIsSettingsOpen(true);
    };

    useEffect(() => {
        // Verificar se existe um vídeo no localStorage
        const cachedVideoSrc = localStorage.getItem('backgroundVideo');

        if (cachedVideoSrc) {
            // Use o vídeo do localStorage como fundo
            setBackgroundVideo(cachedVideoSrc);
        }
    }, []);

    useEffect(() => {
        client
            .query({
                query: GET_PROFILE_QUERY,
            })
            .then((response) => {
                const { data } = response;
                console.log(data);
                console.log(data.profiles[0].photo.url);

                setUserData(data.profiles[0]);
            });
    }, []);

    if (!userData) return (
        <div className="w-full flex justify-center">
            <AiOutlineLoading3Quarters size={50} className="animate-spin" />
        </div>
    );

    return (
        <>
            <Background videoSrc={backgroundVideo} />
            <div className="mt-20 lg:mt-0 w-full flex flex-col items-center justify-center lg:fixed lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:max-w-sm border border-neutral-600 rounded-3xl p-8">

                <button onClick={openSettings} className="absolute -top-1 -left-1 bg-neutral-900 border border-neutral-600 p-1 rounded-full animate-spin-slow">
                    <IoMdSettings size={24} />
                </button>

                <div className="w-full flex justify-between mb-9">
                    <Image
                        src="/profile/logo_PHDev.svg"
                        width={120}
                        height={28}
                        alt="PH.Dev"
                    />
                    <span className="max-w-[150px] text-right">
                    {userData.position}
                    </span>
                </div>
                <div className="flex justify-center items-center max-w-xs bg-intense-blue p-4 pb-0 rounded-3xl mb-8">
                    <Image
                        src={userData.photo.url}
                        width={200}
                        height={200}
                        alt={userData.name}
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-3xl mb-2">{userData.name}</h2>
                    <h2 className="text-2xl mb-8">{userData.city}</h2>
                    <p className="text-sm mb-6 opacity-50">
                        © 2023 PH.Dev - Todos os direitos reservados
                    </p>
                </div>
                <ul className="flex justify-center gap-2 mb-8">
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a
                            className="group-hover:text-intense-blue transition-all duration-500"
                            href="https://www.instagram.com/_pedroshenrique_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BiLogoInstagram size={24} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a
                            className="group-hover:text-intense-blue transition-all duration-500"
                            href="https://www.linkedin.com/in/hnrqpdr/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BiLogoLinkedin size={24} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a
                            className="group-hover:text-intense-blue transition-all duration-500"
                            href="https://github.com/C4st3ll4n"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BiLogoGithub size={24} />
                        </a>
                    </li>
                    <li className="border-2 border-neutral-600  rounded-full p-4 group hover:border-intense-blue transition-all duration-500">
                        <a
                            className="group-hover:text-intense-blue transition-all duration-500"
                            href="https://wa.me/5511980348798"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <BiLogoWhatsapp size={24} />
                        </a>
                    </li>
                </ul>
                <button className="group px-6 py-2 bg-intense-blue rounded-full border-2 border-intense-blue hover:bg-transparent transition-all duration-500">
                    <a
                        className="flex text-base items-center uppercase group-hover:text-intense-blue transition-all duration-500"
                        href="https://wa.me/5511980348798"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiMail size={16} className="mr-2" />
                        Contato
                    </a>
                </button>
            </div>
            {isSettingsOpen && (
                <Settings
                    videoSrc={backgroundVideo}
                    isOpen={isSettingsOpen}
                    onClose={() => setIsSettingsOpen(false)}
                    onUpdateBackground={(videoSrc) => {
                        setBackgroundVideo(videoSrc);
                    }}
                />
            )}
        </>
    );
}
