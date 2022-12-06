interface ProjetctItemProps {
    // children: React.ReactNode;
    title: string;
    linkHref?: string;
    linkText?: string;
    description: string;
    githubLink?: string;
}

function ProjetctItem({ title, linkHref, linkText, githubLink, description }: ProjetctItemProps) {
    return (
        <div className="pl-4 mb-4">
            <h2 className="strong mb-1"><strong>- {title}</strong></h2>
            <div className="border-l pl-2">
                {linkHref && <h3><span className="font-medium">Link:</span> <a href={linkHref} target="_blank">{linkText}</a> </h3>}
                {githubLink && <h3><span className="font-medium">Repositório:</span> <a href={githubLink} target="_blank">{githubLink.replace('https://', '')}</a></h3>}
                <p className="font-medium text-justify">Descrição: <span className="font-normal">{description}</span></p>
            </div>
        </div>
    );
}

export default ProjetctItem;