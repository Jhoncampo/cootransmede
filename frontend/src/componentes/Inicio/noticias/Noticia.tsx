import { Noticia } from "../../../interfaces/noticia";

const Noticia = ({urlImg, titulo, descripcion, categoria, enlace, textoBoton = " Ver Más "}:Noticia) => {
    return (
        <div className="flex flex-col max-w-[350px] items-center py-3 px-2 gap-2 justify-center   md:max-w-[220px] lg:max-w-[225px]">
            <img
                className="w-[290px]"
                src={urlImg}
                alt={categoria}
            />
            <div className="flex flex-col gap-3 items-center ">
                <h2 className="text-center text-2xl text-[#333333] font-light">
                    {titulo}
                </h2>
                <p className=" font-light text-justify">{descripcion}</p>
                <a
                    href={enlace}
                    className="bg-[#23A455] px-7 py-2 text-white font-light rounded-sm ease-linear duration-300 hover:px-9 "
                >
                    {textoBoton}
                </a>
            </div>
        </div>
    );
};

export default Noticia;
