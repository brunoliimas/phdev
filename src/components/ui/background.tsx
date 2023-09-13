import React, { useEffect, useState } from "react";


interface BackgroundProps {
    videoSrc: string;
}


export const Background = ({ videoSrc }: BackgroundProps) => {
    const [currentVideoSrc, setCurrentVideoSrc] = useState(videoSrc);

    useEffect(() => {
        setCurrentVideoSrc(videoSrc);
    }, [videoSrc]);

    return (
        <video
            muted
            autoPlay
            loop
            className="fixed top-0 left-0 object-cover w-full h-full -z-50 opacity-20"
            src={currentVideoSrc}
        >
            {/* <source src={currentVideoSrc} type="video/mp4" /> */}
        </video>
    );
};