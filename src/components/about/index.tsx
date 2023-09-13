'use client'
import { client } from "@/lib/apollo";
import { GET_ABOUT_QUERY } from "@/queries";
import { AboutData } from '@/queries/types';
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsPerson } from 'react-icons/bs';
import { Tag } from "../ui/tag";
import { TitleSection } from "../ui/titleSection";


export default function About() {
    const [aboutData, setAboutData] = useState<AboutData | null>(null);

    useEffect(() => {
        client
            .query({
                query: GET_ABOUT_QUERY,
            })
            .then((response) => {
                const { data } = response;
                setAboutData(data.abouts[0]);
            });
    }, []);

    if (!aboutData) return (
        <div className="w-full flex justify-center">
            <AiOutlineLoading3Quarters size={50} className="animate-spin" />
        </div>
    );

    return (
        <section id="about" className="w-full my-20">
            <div className="container">
                <div className="flex flex-col items-start">
                    <Tag title='Sobre' icon={BsPerson} />
                    <TitleSection title={aboutData.title} span={aboutData.span} />
                    <p className="max-w-3xl mb-4">{aboutData.description}</p>
                </div>
            </div>
        </section>
    )
}