import { useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";

interface SettingsProps {
    onClose: () => void
    isOpen: boolean;
    onUpdateBackground: (videoSrc: string) => void;
    videoSrc: string;
}

export default function Settings({ onClose, isOpen, onUpdateBackground, videoSrc }: SettingsProps) {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            onUpdateBackground(videoSrc);
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen, onUpdateBackground, videoSrc]);

    const handleBackgroundClick = (videoSrc: string) => {
        console.log("Updating background with:", videoSrc);
        onUpdateBackground(videoSrc);
        onClose(); 
        // Salvar o vídeo selecionado no localStorage
    localStorage.setItem('backgroundVideo', videoSrc);
    };
    
    return (
        <div className="z-50 fixed top-0 left-0 h-screen flex justify-end w-full">
            <div className="-z-10 absolute top-0 left-0 w-full h-full bg-neutral-900 opacity-90"></div>
            <div className="w-full h-full md:w-4/5 p-10 border-l border-l-neutral-300 shadow-lg bg-neutral-900">
                <button onClick={onClose} className="absolute top-8 right-8 text-white">
                    <VscChromeClose size={30} />
                </button>
                <h2 className="text-3xl">Configurações</h2>
                <div>
                    <p className="my-4">Cores</p>
                    <div className="flex space-x-4 mt-10 mb-20">
                        <button className="bg-red-500 flex items-center justify-center p-4 rounded-full"></button>
                        <button className="bg-blue-500 flex items-center justify-center p-4 rounded-full"></button>
                        <button className="bg-green-500 flex items-center justify-center p-4 rounded-full"></button>
                        <button className="bg-yellow-500 flex items-center justify-center p-4 rounded-full"></button>
                    </div>
                    <p className="my-4">Backgrounds</p>
                    <div className="flex flex-col items-center justify-start md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-10 mb-20">
                        <button
                            className="border border-neutral-300 flex items-center justify-center py-2 px-4 rounded-full"
                            onClick={() => handleBackgroundClick("/background/background-video-01.mp4")}
                        >
                            Abstract 3D Animation - 01
                        </button>
                        <button
                            className="border border-neutral-300 flex items-center justify-center py-2 px-4 rounded-full"
                            onClick={() => handleBackgroundClick("/background/background-video-02.mp4")}
                        >
                            Abstract 3D Animation - 02
                        </button>
                        <button
                            className="border border-neutral-300 flex items-center justify-center py-2 px-4 rounded-full"
                            onClick={() => handleBackgroundClick("/background/background-video-03.mp4")}
                        >
                            Water Waves
                        </button>
                        
                        <button
                            className="border border-neutral-300 flex items-center justify-center py-2 px-4 rounded-full"
                            onClick={() => handleBackgroundClick("/background/background-video-05.mp4")}
                        >
                            Galaxy Space
                        </button>
                        <button
                            className="border border-neutral-300 flex items-center justify-center py-2 px-4 rounded-full"
                            onClick={() => handleBackgroundClick("/background/background-video-06.mp4")}
                        >
                            Fire Sun
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}