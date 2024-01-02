import Noticia from "./Noticia";

const Noticias = () => {
    return (
        <div>
            <div className="px-3 py-5 flex flex-col items-center gap-5 font-raleway">
                <h2 className="text-[#23A455] text-3xl text-center font-extrabold md:text-4xl">
                    Noticias
                </h2>
                <div className="flex flex-col items-center justify-center gap-3 sm:flex-wrap sm:flex-row sm:justify-start sm:items-start sm:gap-10 ">
                    <Noticia
                        urlImg="https://www.cootransmede.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-20-at-10.05.58-1.jpeg"
                        titulo="HORARIOS DE ATENCIÓN TEMPORADA NAVIDEÑA 2023"
                        descripcion="Horarios 2023"
                    />
                    <Noticia
                        urlImg="https://www.cootransmede.com/wp-content/uploads/2022/03/2560px-Logo_Bancolombia.svg.png"
                        titulo="INSTRUCTIVOS PAGOS BANCOLOMBIA"
                        descripcion="A continuación presentamos el instructivo para
                    realizar pagos a travez de la APP Bancolombia -
                    Ingresa a la APP..."
                    />
                    <Noticia
                        urlImg="https://www.cootransmede.com/wp-content/uploads/2021/12/PostulacionDelegados.jpg"
                        titulo="POSTULACIÓN DE DELEGADOS 2023 - 2024"
                        descripcion="Circular"
                    />
                </div>
            </div>
        </div>
    );
};

export default Noticias;
