import Title from './parts/Title';
import perfil from '../assets/perfil.jpg'
import { IoDesktopSharp, IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp, IoMailSharp } from "react-icons/io5";
import ContactItem from './parts/ContactItem';
function Aside() {
    return (
        <>
            <aside className="bg-gray-100 col-span-full md:col-span-3 rounded-tl-md rounded-bl-md text-gray-700 py-4 px-6">
                <div id="name_area" className="mt-8 text-center cursor-default">
                    <img className='rounded-full mb-6 border-2 select-none mx-auto' src={perfil} alt="Foto do perfil" />
                    <h1 className="text-xl font-semibold mb-1">Ramon Oliveira</h1>
                    <h3 className="text-gray-600 text-sm">Desenvolvedor JavaScript</h3>
                    <h3 className="text-gray-600 text-sm">Full Stack</h3>
                </div>
                <div id="contatos" className='mt-6'>
                    <Title title="Contatos" />
                    <ContactItem
                        icon={<IoDesktopSharp />}
                        link={<a target={'_blank'} href="https://ramonoliveira.dev">ramonoliveira.dev</a>}
                    />
                    <ContactItem
                        icon={<IoLogoWhatsapp />}
                        link={<a target={'_blank'} href="tel:5575991537677">+55 75 9 9153-7677</a>}
                    />
                    <ContactItem
                        icon={<IoMailSharp />}
                        link={<a target={'_blank'} href="mailto:contato@ramonoliveira.dev">contato@ramonoliveira.dev</a>}
                    />
                    <ContactItem
                        icon={<IoLogoLinkedin />}
                        link={<a target={'_blank'} href="https://www.linkedin.com/in/ramon-oliveira-21b8571a2/">LinkedIn</a>}
                    />
                    <ContactItem
                        icon={<IoLogoGithub />}
                        link={<a target={'_blank'} href="https://github.com/im-ramon">GitHub</a>}
                    />
                </div>
                <div id="sobremim" className='mt-6'>
                    <Title title='Sobre mim' />
                    <p className='text-sm text-justify indent-4'>Entusiasta de tecnologia e desenvolvimento para a web desde o meu primeiro blog, com 14 anos. Graduado em Análise e Desenvolvimento de Sistemas pela UNIFACS, hoje me especializo em soluções utilizando JavaScript.
                        Possuo experiencia em desenvolvimento para web e dispositivos móveis, com alguns projetos publicados. Hoje, após 8 anos dedicados à carreira militar, busco oportunidades para migrar de área.</p>

                </div>
            </aside>
        </>
    );
}

export default Aside;