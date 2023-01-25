import ExperienceItem from "./parts/ExperienceItem";
import MainConatainer from "./parts/MainContainer";
import ProjetctItem from "./parts/ProjetctItem";
import Title from "./parts/Title";

export default function Main() {
    return (
        <>
            <main className="col-span-full text-sm md:text-md md:col-span-8 p-8">
                <MainConatainer>
                    <Title title="Objetivo" />
                    <p className="pl-4 text-justify">Aos 25, quase um terço de minha vida foram dedicados à carreira militar, onde pude galgar a graduação de 3º Sargento do Exército Brasileiro. Hoje, na busca de novas oportunidades, aproveito os ensinamentos e competências agregados em oito anos passados nessa instituição de grande credibilidade. A hierarquia, disciplina, capacidade de gerir pessoas e trabalhar, concomitantemente, próximo aos meus superiores e subordinados hierárquicos, atuando como um elo entre eles, são habilidades que serão dificilmente adquiridas em outra entidade.</p>
                </MainConatainer>

                <MainConatainer>
                    <Title title="Formação acadêmica" />
                    <p className="pl-4">Graduado em <strong>Análise e Desenvolvimento de Sistemas</strong></p>
                    <p className="pl-4">Universidade Salvador - JUN/22</p>
                </MainConatainer>

                <MainConatainer>
                    <Title title="Principais projetos" />
                    <ProjetctItem
                        title="Let's"
                        linkText="Google Play [em teste fechado]"
                        linkHref="https://play.google.com/store/apps/details?id=com.app.lets"
                        githubLink="https://github.com/im-ramon/lets"
                        description="Aplicativo para Android, desenvolvido sob demanda, com a finilidade de ajudar o usário a romper com maus hábitos."
                    />
                    <ProjetctItem
                        title="App Exame de Pagamento"
                        linkText="www.examedepagamento.com.br"
                        linkHref="https://examedepagamento.com.br/"
                        githubLink="https://github.com/im-ramon/examedepagamento"
                        description="Sistema simplificado para auditoria de pagamento, desenvolvido com a finalidade de auxiliar todos que desenvolvem a atividade de exame de pagamento de pessoal, no âmbito do Exército Brasileiro."
                    />
                    <ProjetctItem
                        title="Vipera"
                        githubLink="https://github.com/im-ramon/vipera"
                        description="Aplicação Desktop (Linux/ Windows), desenvolvida sob demanda, para gerenciar o fluxo de vistantes em ambiantes controlados."
                    />
                </MainConatainer>

                <MainConatainer>
                    <Title title="Tecnologias com experiência comprovada em projetos" />
                    <div className="pl-4">
                        <span>React/ Next.JS, React Native, PHP/ Laravel, Bootstrap, TailwindCSS, Sass, Mysql, Docker, Photoshop.</span>
                    </div>
                </MainConatainer>

                <MainConatainer>
                    <Title title="Experiência profissional" />
                    <ExperienceItem
                        company="Exército Brasileiro"
                        start="MAR/2015"
                        exit="FEV/2023"
                        office="3º Sargento | Pagamento de pessoal Veterano e Pensionistas"
                        skills="Preparar, calcular, fazer o fechamento da folha de pagamento de pessoal Veterano e Penionistas da organização militar, além de atividades inerentes à carreira militar."
                    />

                    <ExperienceItem
                        company="Atrium Construções e Empreendimentos"
                        start="FEV/2014"
                        exit="FEV/2015"
                        office="Auxiliar administrativo"
                        skills="Auxiliar nas atividades administrativas no setor de recursos humanos."
                    />
                </MainConatainer>
            </main>
        </>
    );
}