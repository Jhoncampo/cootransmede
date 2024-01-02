import WhatsApp from "../iconos/WhatsApp";
import Globe from "../iconos/Globe";
import Telefono from "../iconos/Telefono";
import PlayStore from "../iconos/PlayStore";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const HeaderTop = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="bg-zinc-600 flex z-30 flex-col py-2 px-2 sticky top-0 items-center sm:border-b-green md:flex-row md:border-b-2 md:border-green-700 md:justify-center">
            <div className=" md:border-r">
                <TypeAnimation
                    sequence={["Solicite su taxi seguro", 4000, "S", 1000]}
                    wrapper="span"
                    speed={30}
                    style={{
                        fontSize: "1.4rem",
                        minWidth: "171px",
                        display: "inline-block",
                        color: "white",
                    }}
                    repeat={Infinity}
                />
            </div>
            <div className=" flex flex-row  gap-3 items-center sm:gap-10 md:gap-0">
                <div className="md:border-r ">
                    <div className="flex gap-2 items-center cursor-pointer rounded-lg p-2 ease-linear duration-300 hover:bg-[#23A455] lg:mx-5">
                        <Telefono fill="#FFFFFF" />
                        <span className="text-sm text-white">
                            604 265 65 65
                        </span>
                    </div>
                </div>
                <div className="md:border-r">
                    <div className="p-2 rounded-lg cursor-pointer bg-[#23A455] flex gap-2 items-center lg:mx-5">
                        <WhatsApp fill="#FFFFFF" />
                        <span className=" text-white text-sm">
                            312 265 65 65
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center sm:gap-10 md:gap-0">
                <div className=" border-r py-1">
                    <div onMouseEnter={()=> setIsActive(true)} onMouseLeave={()=>setIsActive(false)} className="bg-amber-500 py-1 px-6 transition-all duration-300 cursor-pointer rounded-lg flex gap-2 items-center mx-2 hover:bg-[#23A455] hover:text-white lg:mx-5">
                        <Globe isActive={isActive} />
                        <span className=" text-sm">Web</span>
                    </div>
                </div>
                <div className="flex mx-2 p-2 items-center rounded-lg ease-linear duration-300 cursor-pointer hover:bg-[#23A455] sm:gap-3 md:gap-0 lg:gap-2">
                    <PlayStore fill="#FFFFFF" />
                    <span className="text-sm text-white text-center ">
                        Descargue gratis nuestra aplicación
                    </span>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
