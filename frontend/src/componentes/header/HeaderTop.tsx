import WhatsApp from "../iconos/WhatsApp";
import Globe from "../iconos/Globe";
import Telefono from "../iconos/Telefono";
import PlayStore from "../iconos/PlayStore";
import { TypeAnimation } from "react-type-animation";

const HeaderTop = () => {
    return (
        <div className="bg-zinc-600 flex flex-col py-2 px-2 items-center sm:border-b-green md:flex-row md:border-b-2 md:border-green-700 md:justify-center">
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
                <div className="md:border-r sm:py-2">
                    <div className="flex gap-2 items-center lg:mx-5">
                        <Telefono fill="#FFFFFF" />
                        <span className="text-sm text-white">
                            604 265 65 65
                        </span>
                    </div>
                </div>
                <div className="md:border-r">
                    <div className="p-2 rounded-lg bg-green-700 flex gap-2 items-center lg:mx-5">
                        <WhatsApp fill="#FFFFFF" />
                        <span className=" text-white text-sm">
                            312 265 65 65
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3 items-center sm:gap-10 md:gap-0">
                <div className=" border-r py-1">
                    <div className="bg-amber-500 py-1 px-6 rounded-lg flex gap-2 items-center mx-2 lg:mx-5">
                        <Globe />
                        <span className=" text-sm">Web</span>
                    </div>
                </div>
                <div className="flex px-2 items-center sm:gap-3 md:gap-0">
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
