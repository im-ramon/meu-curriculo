import Title from './Title';
import perfil from '../assets/perfil.jpg'

function Aside() {
    return (
        <>
            <aside className="bg-gray-100 col-span-3 rounded-tl-md rounded-bl-md">
                <div id="name_area" className="mt-8 p-4">
                    <img className='rounded-full mb-4' src={perfil} alt="Foto do perfil" />
                    <h1 className="text-xl font-semibold mb-1">Ramon Oliveira</h1>
                    <h3 className="text-gray-600 text-sm">Desenvolvedor JavaScript</h3>
                    <h3 className="text-gray-600 text-sm">Full Stack</h3>
                </div>
                <div id="contatos">
                    <Title title="Contatos" />
                    <span>+557599362654</span>
                    <span>contato@ramonoliveira.dev</span>
                    <span>ramonoliveira.dev</span>
                    <span>linkeind</span>
                    <span>github</span>
                </div>
                <div id="sobremim">

                </div>
            </aside>
        </>
    );
}

export default Aside;