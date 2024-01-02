import { Noticia } from "../../interfaces/noticia";

const Noticia = ({urlImg, titulo, descripcion, textoBoton = " Ver Más "}:Noticia) => {
    return (
        <div className="flex flex-col max-w-[448px] items-center py-3 px-2 gap-3 justify-center border border-black  sm:max-w-[250px] lg:max-w-[300px]">
            <img
                className="w-[290px]"
                src={urlImg}
                alt=""
            />
            <div className="flex flex-col gap-3 items-center ">
                <h2 className="text-center text-2xl">
                    {titulo}
                </h2>
                <p className="text-lg font-light text-center">{descripcion}</p>
                <a
                    href=""
                    className="bg-[#23A455] px-7 py-2 text-white font-light rounded-sm"
                >
                    {textoBoton}
                </a>
            </div>
        </div>
    );
};

export default Noticia;
