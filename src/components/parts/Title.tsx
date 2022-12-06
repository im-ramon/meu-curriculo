interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return <h1 className="text-md font-medium mb-4 border-b py-1 pl-2"><span className="text-lg">▪</span> {title}</h1>;
}