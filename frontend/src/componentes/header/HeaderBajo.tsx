import { useEffect, useState } from "react";
import logo from "../../assets/imagenes/logo.png";
import Menu from "../iconos/Menu";
import Enlace from "./Enlace";
import WhatsApp from "../iconos/WhatsApp";
import Facebook from "../iconos/Facebook";
import Instagram from "../iconos/Instagram";

const HeaderBajo = () => {
    const [menu, setMenu] = useState(false);
    let tamanho = screen.width;
    useEffect(() => {
        if (tamanho > 1023) {
            setMenu(true);
        }
    }, [tamanho]);
    return (
        <nav className="flex items-center justify-between flex-wrap gap-3 p-2 ">
            <div className="flex items-center flex-shrink-0  mr-6">
                <img src={logo} alt="" className="w-32" />
            </div>
            <div className="flex gap-3 lg:hidden">
                <span className="bg-green-500 p-2 flex items-center rounded-full">
                    <WhatsApp fill="#FFFFFF" />
                </span>
                <span className="bg-blue-700 p-2 flex items-center rounded-full">
                    <Facebook fill="#FFFFFF" />
                </span>
                <span className="bg-[#E1306C] p-2 flex items-center rounded-full">
                    <Instagram fill="#FFFFFF" />
                </span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded  border-teal-400 hover:text-white hover:border-white"
                    onClick={() => setMenu(!menu)}
                >
                    <Menu />
                </button>
            </div>
            <div className="w-full block flex-grow  gap-3 lg:flex lg:items-center lg:w-auto">
                <div
                    className={`text-sm text-center ${
                        menu ? "" : "hidden"
                    }  lg:flex-grow`}
                >
                    <Enlace to="inicio">Inicio</Enlace>
                    <Enlace to="nosotros">Nosotros</Enlace>
                    <Enlace to="asociados">Asociados</Enlace>
                    <Enlace to="tramites">Tramites</Enlace>
                    <Enlace to="app">App</Enlace>
                    <Enlace to="noticias">NOTICTM</Enlace>
                    <Enlace to="contactenos">Contactenos</Enlace>
                </div>
                <div className="flex gap-3  hidden lg:inline-flex">
                    <span className="bg-green-500 p-2 flex items-center rounded-full">
                        <WhatsApp fill="#FFFFFF" />
                    </span>
                    <span className="bg-blue-700 p-2 flex items-center rounded-full">
                        <Facebook fill="#FFFFFF" />
                    </span>
                    <span className="bg-[#E1306C] p-2 flex items-center rounded-full">
                        <Instagram fill="#FFFFFF" />
                    </span>
                </div>
                <div className="flex justify-center">
                    <a
                        href="#"
                        className="text-sm px-4 py-2 leading-none border rounded  border-green-700 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                    >
                        Pagos
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default HeaderBajo;
