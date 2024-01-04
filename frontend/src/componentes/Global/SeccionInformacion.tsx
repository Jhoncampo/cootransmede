import { SeccionInformacion } from "../../interfaces/seccionInformacion";


const SeccionInformacion = ({img, titulo, descripcion, subtitulo, subdescripcion, posisionX = false }:SeccionInformacion) => {
    
    return (
        <div className=" flex flex-col items-center max-w-[1120px] gap-4 md:block l:flex l:flex-row ">
            <img
                src={img}
                alt={titulo}
                className="rounded-lg md:max-w-xs md:float-left md:mr-5 lg:max-w-md"
            />
            <div className=" flex items-center flex-col gap-4 md:block l:flex">
                <h2 className="text-3xl text-[#23A455] font-extrabold md:text-center md:pb-3">
                    {titulo}
                </h2>
                {descripcion?.map((descripcion, index) => (
                    <p key={index}>{descripcion} <br/><br/></p>
                ))}
                <h2 className="text-3xl text-[#23A455] font-extrabold md:text-center md:pb-3">
                    {subtitulo}
                </h2>
                <p className="text-justify">
                    {subdescripcion}
                </p>

            </div>
        </div>
    );
};

export default SeccionInformacion;
