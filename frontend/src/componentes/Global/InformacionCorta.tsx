import { SeccionInformacion } from "../../interfaces/seccionInformacion";
import Titulo from "./Titulo";

const InformacionCorta = ({
    img,
    titulo,
    descripcion,
    posisionX = false,
    children
}: SeccionInformacion) => {
    return (
        <div className={` w-full flex items-center justify-center ${posisionX ? "" : "bg-[#F1F1F1]"}`}>
            <div
                className={`flex flex-col py-6 px-3 items-center max-w-[1024px] gap-4 md:justify-between  md:px-7 md:gap-7 md:flex md:flex-row ${
                    posisionX ? "flex-col-reverse md:flex-row-reverse" : " "
                } `}
            >
                <img
                    src={img}
                    alt={titulo}
                    className={` rounded-lg md:max-w-xs  lg:max-w-md`}
                />
                <div className=" flex items-center flex-col gap-4">
                    <Titulo titulo={titulo}/>
                        <p className="text-justify text-[14px] font-medium text-[#7a7a7a] font-roboto">
                            {descripcion}
                        </p>
                        {children}
                </div>
            </div>
        </div>
    );
};

export default InformacionCorta;