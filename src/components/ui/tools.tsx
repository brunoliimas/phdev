
interface ToolsProps {
    name: string;
}

export const Tools = ({ name }: ToolsProps) => {
    return (
        <div
            className={`flex items-center justify-center uppercase px-3 py-1 rounded-full border bg-transparent hover:border-intense-blue hover:bg-intense-blue transition-all duration-500`}>
            <p className='text-[10px]'>{name}</p>
        </div>
    );
};
