import Caracteristica from "./Caracteristica";
const appCTM = "https://www.cootransmede.com/wp-content/uploads/2023/12/IMG_20231229_111616.jpg"

const AppCTM = () => {
    return (
        <div className="flex items-center justify-center bg-[#f1f1f1]">
            <div className="max-w-6xl py-6 md:flex md:px-5 md:py-8 font-raleway lg:gap-0">
                <div className=" flex items-center justify-center w-full md:w-80 md:items-start">
                    <a
                        style={{backgroundImage: `url(${appCTM})`}}
                        href=""
                        className="bg-contain w-48 h-64 bg-no-repeat bg-center md:bg-top md:h-full lg:bg-center"
                    ></a>
                </div>
                <div className="flex flex-col items-center justify-center gap-10 max-w-3xl">
                    <div className="flex flex-col px-3 gap-4">
                        <h1 className="text-[#23A455] text-4xl flex font-bold xl:text-[40px]">
                            Descargue nuestra APP cootransmede
                        </h1>
                        <h4 className=" flex font-semibold text-lg leading-none">
                            Solicite su taxi desde su smatrphone en tan sólo
                            unos segundos
                        </h4>
                        <p className="flex text-justify">
                            Nuestra aplicación es fácil de usar y muy amigable.
                            Elija ubicación de recogida, acepte el TAXI asignado
                            y en pocos minutos estaremos en su puerta.
                        </p>
                    </div>
                    <div className="px-3 flex flex-col gap-3">
                        <h2 className="text-[#23A455] text-3xl font-bold">
                            Características
                        </h2>
                        <Caracteristica
                            numero="1"
                            subtitulo="Funcionamiento en tiempo real."
                            parrafo="Tiempo de respuesta en tiempo real con la central."
                        />
                        <Caracteristica
                            numero="2"
                            subtitulo="Disponibilidad."
                            parrafo="Comprueba los taxistas disponibles directamente
                                desde la central."
                        />
                        <Caracteristica
                            numero="3"
                            subtitulo="Seguridad."
                            parrafo="Conectándose directamente con la central reserva
                                un coductos confiable y seguro para usted."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCTM;
