
interface ToolsProps {
    name: string;
}

export const Tools = ({ name }: ToolsProps) => {
    return (
        <div
            className={`uppercase px-3 py-2 rounded-full border bg-transparent hover:border-intense-blue hover:bg-intense-blue transition-all duration-500`}>
            <p className='text-sm'>{name}</p>
        </div>
    );
};
