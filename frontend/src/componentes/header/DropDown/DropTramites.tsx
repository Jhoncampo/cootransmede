import { useState } from "react";
import CaretDown from "../../iconos/CaretDown";
import DropEnlace from "./DropEnlace";

interface DropDown {
    children: string;
}

const DropDown = () => {
    const [click, setClick] = useState(false);
    return (
        <div className="relative md:w-96 lg:w-auto">
            <span
                onClick={() => setClick(!click)}
                className=" flex items-center p-2 gap-1 text-base cursor-pointer "
            >
                Tramites
                <CaretDown />
            </span>
            <ul
                onMouseLeave={() => setClick(false)}
                onMouseEnter={() => setClick(true)}
                className={`${
                    click ? "" : "hidden"
                } flex flex-col gap-3 items-start w-64 lg:absolute`}
            >
                <DropEnlace to="/pagos">Pagos</DropEnlace>
                <DropEnlace to="/pagos">Afiliación seguridad social</DropEnlace>
                <DropEnlace to="/pagos">Tarjetas de operación</DropEnlace>
                <DropEnlace to="/pagos">Liquidación de conductores</DropEnlace>
                <DropEnlace to="/pagos">Tarjeta amarilla</DropEnlace>
                <DropEnlace to="/pagos">Planillas de viaje</DropEnlace>
                <DropEnlace to="/pagos">Afiliación al sistema GPS</DropEnlace>
                <DropEnlace to="/pagos">Afiliación vehículo nuevo</DropEnlace>
            </ul>
        </div>
    );
};

export default DropDown;
