import { useState } from 'react';
import { IoDesktopSharp, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp, IoMailSharp } from "react-icons/io5";
import perfil from '../assets/perfil.jpg';
import qr_code from '../assets/qr-code.svg';
import ContactItem from './parts/ContactItem';
import Title from './parts/Title';

function Aside() {
    const [showQRCode, setShowQRCode] = useState<boolean>(true);

    return (
        <>
            <aside className="bg-gray-100 col-span-full md:col-span-4 rounded-tl-md rounded-bl-md text-gray-700 py-4 px-6">
                <div id="name_area" className="mt-8 text-center cursor-default w-full">
                    <div className='w-full mb-6 px-12'>
                        <img className='rounded-full border-2 select-none w-full box-content' src={perfil} alt="Foto do perfil" />
                    </div>
                    <h1 className="text-xl font-semibold mb-1">Ramon Oliveira</h1>
                    <h3 className="text-gray-700 text-sm">Analista de Segurança</h3>
                    <h3 className="text-gray-400 text-xs font-medium">Segurança Empresarial | Segurança Eletrônica | Desenvolvimento | Power BI</h3>
                </div>
                <div id="contatos" className='mt-6'>
                    <Title title="Contatos" />
                    {/* <ContactItem
                        icon={<IoDesktopSharp />}
                        link={<a target={'_blank'} href="https://ramonoliveira.dev.br">ramonoliveira.dev.br</a>}
                    /> */}
                    <ContactItem
                        icon={<IoLogoWhatsapp />}
                        link={<a target={'_blank'} href="tel:5575991537677">+55 75 9 9963-9190</a>}
                    />
                    <ContactItem
                        icon={<IoMailSharp />}
                        link={<a target={'_blank'} href="mailto:ramon.santos11@outlook.com">ramon.santos11@outlook.com</a>}
                    />
                    <ContactItem
                        icon={<IoLogoLinkedin />}
                        link={<a target={'_blank'} href="https://www.linkedin.com/in/ramon-oliveira-21b8571a2/">LinkedIn</a>}
                    />
                    {/* <ContactItem
                        icon={<IoLogoGithub />}
                        link={<a target={'_blank'} href="https://github.com/im-ramon">GitHub</a>}
                    /> */}
                </div>
                <div id="sobremim" className='mt-6'>
                    <Title title='Sobre mim' />
                    <p className='text-sm text-justify indent-4'>
                        Sou um profissional com sólida experiência em segurança empresarial, desenvolvimento, tecnologias e monitoramento eletrônico,
                        adquirida ao longo de oito anos de carreira no Exército Brasileiro, como 3º Sargento, e em projetos estratégicos
                        no setor de petróleo e gás. Atuei no planejamento, implantação e operação de Centrais de Monitoramento (SOC/CCO),
                        integração de sistemas de segurança e, mais recentemente, na condução das atividades de implantação de segurança
                        eletrônica em refinaria, garantindo aderência a requisitos técnicos e de compliance.

                        Tenho como pontos fortes a disciplina, liderança de equipes, análise de cenários de risco e implementação de
                        melhorias contínuas em processos de segurança. Minha formação em Análise e Desenvolvimento de Sistemas e pós-graduações
                        em Engenharia e Arquitetura de Software agregam uma visão tecnológica aplicada à segurança eletrônica e também à cibersegurança.
                    </p>
                </div>

                {/* <div id="qrcode" className={`mt-6 ${showQRCode ? '' : 'print:hidden'}`}>
                    <Title title='Currículo atualizado' />
                    <div className=' px-12'>
                        <a href="https://curriculo.ramonoliveira.dev.br/" className='text-center' title='www.curriculo.ramonoliveira.dev.br' target="_blank" rel="noopener noreferrer">
                            <img src={qr_code} alt="QRCODE" />
                        </a>
                    </div>
                    <a href='https://curriculo.ramonoliveira.dev.br/' className='text-xs text-center mt-2 mb-4 block'>
                        www.curriculo.ramonoliveira.dev.br
                    </a>
                    <div className="flex items-center justify-center mb-4 select-none print:hidden">
                        <input id="default-checkbox" type="checkbox" checked={showQRCode} onChange={() => { setShowQRCode(!showQRCode) }} value={""} className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <label htmlFor="default-checkbox" className="ml-2 text-xs font-medium text-gray-900">Exibir na impressão</label>
                    </div>
                </div> */}

            </aside>
        </>
    );
}

export default Aside;