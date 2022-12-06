import { useRef } from 'react';
import Aside from "./Aside";
import ButtonArea from "./ButtonArea";
import Main from "./Main";
import { useReactToPrint } from 'react-to-print';

export default function Curriculo() {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <>
            <div ref={componentRef} id="curriculo" className="bg-white border mx-auto w-full max-w-screen-lg text-text rounded-md my-10 grid grid-cols-12">
                <Aside />
                <Main />
            </div>
            <ButtonArea handlePrint={handlePrint} />
        </>
    );
}