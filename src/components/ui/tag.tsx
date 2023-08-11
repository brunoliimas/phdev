
interface TagProps {
    title: string;
    icon: React.ElementType; // Alteração feita aqui
}

export const Tag = ({ title, icon: Icon }: TagProps) => {
    return (
        <div className="flex items-center justify-center py-2 px-5 mb-12 border border-neutral-600 rounded-full">
            <Icon className="mr-2" /> {/* Alteração feita aqui */}
            <span>{title}</span>
        </div>
    );
};
