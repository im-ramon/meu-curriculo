import React, { useRef } from 'react';
import { AiOutlineFilePdf, AiOutlinePrinter } from "react-icons/ai";
import Tilt from "./parts/Tilt";

interface ButtonAreaProps {
    handlePrint: Function;
}

export default function ButtonArea({ handlePrint }: ButtonAreaProps) {
    const optionsTilt = {
        scale: 1,
        speed: 1500,
        max: 12,
    };

    return (
        <div className="w-full flex justify-center mb-10 flex-col items-center">
            <p className='mb-4 text-red-400 sm:opacity-0 text-center text-xs px-8'>Para imprimir/ salvar em PDF, utilize um computador para melhor formatação do currículo.</p>
            <Tilt options={optionsTilt}>
                <button type="button" id='printButton' onClick={() => { handlePrint() }} className="text-white shadow-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ml-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <AiOutlinePrinter size={18} />
                    <p className="ml-2">
                        Imprimir
                    </p>
                </button>
            </Tilt>
        </div>
    );
}