interface MainConatainerProps {
    children: React.ReactNode
}

export default function MainConatainer({ children }: MainConatainerProps) {
    return (
        <div className="mb-8">
            {children}
        </div>
    );
}