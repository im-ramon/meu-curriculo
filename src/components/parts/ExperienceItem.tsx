interface ExperienceItemProps {
    // children: React.ReactNode;
    company: string;
    start: string;
    office: string;
    exit?: string;
    skills: string[];
}

function ExperienceItem({ company, exit, skills, start, office }: ExperienceItemProps) {
    return (
        <div className="pl-4 mb-4">
            <h2 className="strong mb-1"><strong>- {company}</strong></h2>
            <div className="border-l pl-2">
                <p><span className="font-medium">Período:</span> de {start} {exit ? `a ${exit}` : 'até o momento'}</p>
                <p><span className="font-medium">Função: </span>{office}</p>
                <p className="font-medium text-justify">Atividades desenvolvidas:
                    <div className="font-normal pl-4"> 
                        {skills.map((skill, index) => (
                            <>
                                <span key={index} className="font-normal">▪ {skill} </span>
                                <br />
                            </>
                        ))}
                    </div>
                </p>
            </div>
        </div>
    );
}

export default ExperienceItem;