import { SeccionInformacion } from "../../interfaces/seccionInformacion";
import Titulo from "./Titulo";
import "./style.css"

const SeccionInformacion = ({
    img,
    titulo,
    descripcion,
    subtitulo,
    subdescripcion,
    posisionX = false,
    children
}: SeccionInformacion) => {
    return (
        <div className={` w-full flex items-center justify-center ${posisionX ? "" : "bg-[#F1F1F1]"}`}>
            <div
                className={`flex flex-col py-6 px-3 items-center max-w-[1024px] gap-4  md:px-7 md:block l:flex l:flex-row ${
                    posisionX ? "flex-col-reverse l:flex-row-reverse" : " "
                } `}
            >
                <img
                    src={img}
                    alt={titulo}
                    className={` rounded-lg md:max-w-xs ${posisionX ? "md:float-right md:ml-5": "md:float-left md:mr-5"} lg:max-w-md`}
                />
                <div className=" flex items-center flex-col gap-4 md:block l:flex">
                    <Titulo titulo={titulo} />
                    {descripcion?.map((descripcion, index) => (
                        <p key={index} className="text-justify text-[14px] font-medium text-[#7a7a7a] font-roboto">
                            {descripcion} <br />
                        </p>
                    ))}
                    <Titulo titulo={subtitulo} />
                    {subdescripcion?.map((subdescripcion, index) => (
                        <p key={index} className="text-justify text-[14px] font-medium text-[#7a7a7a] font-roboto">
                            {subdescripcion} <br />
                        </p>
                    ))}
                    {children}
                </div>
            </div>
        </div>
    );
};

export default SeccionInformacion;
