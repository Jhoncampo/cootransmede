import { useState } from "react";
import CaretDown from "../iconos/CaretDown";
import { DescripcionDesplegable } from "../../interfaces/descripcionDesplegable";




const DescripcionDesplegable = ({titulo, descripcion}: DescripcionDesplegable) => {
    const [valor, setValor] = useState(false)

    return (
        <div className="flex flex-col  py-3">
            <div className="flex justify-between  items-center cursor-pointer" onClick={() => setValor(!valor)}>
                <span
                    className={`font-bold text-[#7a7a7a] ${
                        valor ? "text-black" : ""
                    }`}
                >
                    {titulo}
                </span>
                <div
                    className={`bg-[#23A455] px-1 rounded ease-linear duration-300 ${
                        valor ? "rotate-180 bg-white" : ""
                    }`}
                    
                >
                    <CaretDown fill="#ffffff" isActive={valor} />
                </div>
            </div>
            <span
                className={`overflow-hidden transition-all duration-700 ease-in-out text-[#54595f] ${
                    valor ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                {descripcion}
            </span>
        </div>
    );
};

export default DescripcionDesplegable;
