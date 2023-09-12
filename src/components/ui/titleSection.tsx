interface TitleSectionProps {
    title: string;
    span: string
}

export const TitleSection = ({ title, span }: TitleSectionProps) => {
    return (
        <h2 className="text-3xl leading-snug lg:leading-snug lg:text-5xl mb-8">
            {title} <span className="text-intense-blue">{span}</span>
        </h2>
    )
}