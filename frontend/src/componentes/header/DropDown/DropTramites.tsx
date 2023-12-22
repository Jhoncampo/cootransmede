import { useState } from "react";
import CaretDown from "../../iconos/CaretDown";
import DropEnlace from "./DropEnlace";

interface DropDown{
    children: string
}

const DropDown = () => {
    const [click, setClick] = useState(false)
    return (
        <div className="relative">
            <a href="" onMouseEnter={()=> setClick(true)} onMouseLeave={()=>setClick(false)} className=" flex items-center gap-1 text-base ">Tramites
            <CaretDown/>
            </a>
            <ul className={`${click ? "" : "hidden"}  hover:flex flex-col  items-start w-52 lg:absolute`}>
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
