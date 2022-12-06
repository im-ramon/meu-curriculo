interface ExperienceItemProps {
    // children: React.ReactNode;
    company: string;
    start: string;
    office: string;
    exit: string;
    skills: string;
}

function ExperienceItem({ company, exit, skills, start, office }: ExperienceItemProps) {
    return (
        <div className="pl-4 mb-4">
            <h2 className="strong mb-1"><strong>- {company}</strong></h2>
            <div className="border-l pl-2">
                <p><span className="font-medium">Período:</span> de {start} a {exit}</p>
                <p><span className="font-medium">Função: </span>{office}</p>
                <p className="font-medium text-justify">Atividades desenvolvidas: <span className="font-normal">{skills}</span></p>
            </div>
        </div>
    );
}

export default ExperienceItem;