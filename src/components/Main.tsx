import ExperienceItem from "./parts/ExperienceItem";
import MainConatainer from "./parts/MainContainer";
import ProjetctItem from "./parts/ProjetctItem";
import Title from "./parts/Title";

export default function Main() {
    return (
        <>
            <main className="col-span-full text-sm md:text-md md:col-span-8 p-8">
                {/* <MainConatainer>
                    <Title title="Objetivo" />
                    <p className="pl-4 text-justify">Aos 25, quase um terço de minha vida foram dedicados à carreira militar, onde pude galgar a graduação de 3º Sargento do Exército Brasileiro. Hoje, na busca de novas oportunidades, aproveito os ensinamentos e competências agregados em oito anos passados nessa instituição de grande credibilidade. A hierarquia, disciplina, capacidade de gerir pessoas e trabalhar, concomitantemente, próximo aos meus superiores e subordinados hierárquicos, atuando como um elo entre eles, são habilidades que serão dificilmente adquiridas em outra entidade.</p>
                </MainConatainer> */}

                <MainConatainer>
                    <Title title="Formação acadêmica" />
                    <p className="pl-4">- Graduação em <strong>Análise e Desenvolvimento de Sistemas</strong></p>
                    <p className="pl-4">UNIFACS (Universidade Salvador) - JUN/22</p>
                    <br />
                    <p className="pl-4">- Pós-graduação em <strong>Engenharia de Software com Métodos Ágeis</strong></p>
                    <p className="pl-4">Universidade Cruzeiro do Sul - JUN/24</p>
                    <br />
                    <p className="pl-4">- Pós-graduação em <strong>Engenharia e Arquitetura de Software</strong></p>
                    <p className="pl-4">FIA (Fundação Instituto de Administração) - Conclusão prevista para FEV/26</p>
                </MainConatainer>

                <MainConatainer>
                    <Title title="Formações complementares" />
                    <p className="pl-4">- Fundamentos da LGPD - Escola Nacional de Administração Pública - MAR/22</p>
                    <p className="pl-4">- Introduction to Cybersecurity - Cisco Network Academy - ABR/24</p>
                    <p className="pl-4">- Curso Básico de Inteligência de Imagens para a Segurança - LOGOS – Inteligência e Planejamento Estratégico - NOV/24</p>
                    <p className="pl-4">- Elaboração de Protocolos e Procedimentos - LOGOS – Inteligência e Planejamento Estratégico - OUT/24</p>
                </MainConatainer>

                <MainConatainer>
                    <Title title="Competências Técnicas" />
                    <p className="pl-4">
                        <strong>Sistemas de Segurança: </strong>
                        CFTV IP, VMS, controle de acesso e alarmes.
                    </p>
                    <p className="pl-4">
                        <strong>Análise de Risco: </strong>
                        identificação de vulnerabilidades físicas e tecnológicas, gestão de incidentes e causa raiz.
                    </p>
                    <p className="pl-4">
                        <strong>Cibersegurança aplicada à segurança física: </strong>
                        proteção de dispositivos IoT, LGPD, compliance e tratamento de imagens.
                    </p>
                    <p className="pl-4">
                        <strong>Tecnologia: </strong>
                        desenvolvimento Full Stack, Power BI, Excel avançado, redes e infraestrutura básica.
                    </p>
                    <p className="pl-4">
                        <strong>Gestão: </strong>
                        liderança de equipes, elaboração de relatórios executivos e implantação de treinamentos.
                    </p>
                </MainConatainer>

                <MainConatainer>
                    <Title title="Experiência profissional" />
                    <ExperienceItem
                        company="Acelen"
                        start="FEV/2023"
                        office="Analista de Segurança"
                        skills={
                            [
                                "Condução das atividades de campo na implantação do Projeto de Segurança Eletrônica (CFTV IP, controle de acesso, e Software auxiliares) na Refinaria",
                                "Realização de treinamentos sobre tecnologia, destinados ao Centro de Comunicação, Comando e Controle da refinaria.",
                                "Gestão da manutenção dos dispositivos e garantia de conformidade dos softwares de segurança pós-implantação.",
                                "Auditoria e análise de imagens de CFTV; suporte técnico em investigações de incidentes e elaboração de relatórios conclusivos.",
                                "Criação e manutenção de dashboards (Power BI) e relatórios gerenciais para consolidação de indicadores de segurança (KPIs/KRIs) e suporte à tomada de decisão executiva.",
                                "Suporte técnico e integração: atuação como interface técnica para equipes que realizam integrações com os sistemas de segurança da refinaria.",
                                "Desenvolvimento de soluções de software para automação de processos e integração de dados entre sistemas.",
                                "Elaboração de procedimentos operacionais.",
                                "Análise de riscos físicos e tecnológicos, com foco em cibersegurança aplicada à segurança eletrônica."
                            ]
                        }
                    />

                    <ExperienceItem
                        company="Exército Brasileiro"
                        start="MAR/2015"
                        exit="FEV/2023"
                        office="3º Sargento | Carteira de pagamento de pessoal"
                        skills={
                            [
                                "Gestão e liderança de equipes operacionais, coordenação de operações com fortes requisitos de disciplina e tomada de decisão em ambiente de alta criticidade.",
                                "Planejamento e execução de rotinas administrativas e operacionais; responsável por processos de pagamento/folha (Veteranos e Pensionistas) em organização militar.",
                                "Treinamentos, condução de exercícios e aplicação de normas de segurança, com foco em padrão procedimental, hierarquia e conformidade."
                            ]
                        }
                    />

                    <ExperienceItem
                        company="Atrium Construções e Empreendimentos"
                        start="FEV/2014"
                        exit="FEV/2015"
                        office="Auxiliar administrativo"
                        skills={["Auxiliar nas atividades administrativas no setor de recursos humanos."]}
                    />
                </MainConatainer>
            </main>
        </>
    );
}