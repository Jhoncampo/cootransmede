import { useState } from "react";
import CaretDown from "../../iconos/CaretDown";
import DropEnlace from "./DropEnlace";

const DropContactenos = () => {
    const [click, setClick] = useState(false);
    return (
        <div className="relative  md:w-96 lg:w-auto">
            <span
                onClick={() => setClick(!click)}
                className=" flex items-center gap-1 p-2 text-base cursor-pointer"
            >
                Contáctenos
                <CaretDown />
            </span>
            <ul
                onMouseLeave={() => setClick(false)}
                className={`${
                    click ? "" : "hidden"
                }  hover:flex flex-col  bg-white items-start w-64 lg:absolute`}
            >
                <DropEnlace to="/pagos">PQRS</DropEnlace>
            </ul>
        </div>
    );
};
export default DropContactenos;
