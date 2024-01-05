import { SeccionInformacion } from "../../interfaces/seccionInformacion";
import Titulo from "./Titulo";

const SeccionInformacion = (
    {
        img,
        titulo,
        descripcion,
        subtitulo,
        subdescripcion,
        posisionX = false,
        children
    }: SeccionInformacion,
) => {
    return (
        <div
            className={`flex flex-col items-center max-w-[1120px] gap-4 md:block l:flex l:flex-row ${
                posisionX ? "flex-col-reverse l:flex-row-reverse" : ""
            } `}
        >
            <img
                src={img}
                alt={titulo}
                className="rounded-lg md:max-w-xs md:float-left md:mr-5 lg:max-w-md"
            />
            <div className=" flex items-center flex-col gap-4 md:block l:flex">
                <Titulo titulo={titulo} />
                {descripcion?.map((descripcion, index) => (
                    <p key={index} className="text-justify">
                        {descripcion} <br />
                    </p>
                ))}
                <Titulo titulo={subtitulo} />
                {subdescripcion?.map((subdescripcion, index) => (
                    <p key={index} className="text-justify">
                        {subdescripcion} <br />
                    </p>
                ))}
                {
                    children
                }
            </div>
        </div>
    );
};

export default SeccionInformacion;
