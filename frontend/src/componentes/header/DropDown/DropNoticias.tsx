import { useState } from "react";
import CaretDown from "../../iconos/CaretDown";
import DropEnlace from "./DropEnlace";

const DropNoticias = () => {
    const [click, setClick] = useState(false);
    return (
        <div className="relative md:w-96  lg:w-auto">
            <span
                onClick={() => setClick(!click)}
                className=" flex items-center gap-1 p-2 text-base cursor-pointer"
            >
                NOTICTM
                <CaretDown />
            </span>
            <ul
                onMouseLeave={() => setClick(false)}
                className={`${
                    click ? "" : "hidden"
                } flex flex-col gap-3 bg-white transition items-start w-64 lg:absolute`}
            >
                <DropEnlace to="/pagos">Usuarios</DropEnlace>
                <DropEnlace to="/pagos">Asociados</DropEnlace>
                <DropEnlace to="/pagos">Conductores</DropEnlace>
            </ul>
        </div>
    );
};

export default DropNoticias;
