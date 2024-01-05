import Check from "../iconos/Check";
import { bg } from "../Inicio/informacion/Informacion";

const Footer = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-no-repeat relative font-raleway mt-2 text-white flex flex-col items-center gap-6"
        >
            <div className="bg-[#23A455] h-full w-full  absolute opacity-90"></div>
            <div className="py-10 flex flex-col md:flex-row">
                <div className="relative px-3  flex flex-col items-center gap-4 lg:max-w-sm">
                    <h2 className="text-3xl flex justify-end font-extrabold ">
                        BIENVENIDOS | COOTRANSMEDE
                    </h2>
                    <p className=" flex text-justify text-sm">
                        La Cooperativa de Transporte de Medellín, CTM -
                        Cootransmede, es una empresa del sector de la economía
                        solidaria, especializada en transporte de servicio
                        público tipo taxi, con personería jurídica N° 00000625
                        del 10 de diciembre de 1965 y diciembre 31 de 2003. Su
                        base social está conformada por 1.500 asociados, 1.100
                        conductores y un parque automotor cercano a los 1.800
                        vehículos.
                    </p>
                    <img
                        src="https://www.cootransmede.com/wp-content/uploads/2020/03/logo-vigilado_blanco-1024x308-1.png"
                        alt=""
                        className="max-w-[180px]"
                    />
                </div>
                <div className="relative px-3 flex flex-col gap-2 lg:max-w-sm">
                    <h2 className="text-3xl text-center font-extrabold pt-5">
                        IMPORTANTE
                    </h2>
                    <div className="flex items-center gap-2">
                        <Check fill="white" width="20px" height="20px" />
                        <span className="text-sm">
                            Cómo pedir un taxi a través de nuestra APP
                            Cootransmede
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check fill="white" width="20px" height="20px" />
                        <span className="text-sm">
                            Formas de solicitar su servicio de Taxi
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check fill="white" width="20px" height="20px" />
                        <span className="text-sm">PQRS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Check fill="white" width="20px" height="20px" />
                        <span className="text-sm">
                            Políticas de Tratamiento de Datos
                        </span>
                    </div>
                </div>
                <div className="relative px-3 flex flex-col gap-4 lg:max-w-sm">
                    <h2 className="text-3xl text-center font-extrabold pt-5">
                        DATOS DE CONTACTO
                    </h2>
                    <div className="text-sm">
                        <b>Oficina Administrativa</b>
                        <p>
                            <b>Dirección:</b> Calle 25#65B-48
                        </p>
                        <p>
                            <b>Teléfono:</b> 604 265 96 92
                        </p>
                        <p>
                            <b>Correo:</b> ctmgeneral@ctmcootransmede.com
                        </p>
                        <p>
                            <b>Horarios::</b> Lunes a Viernes 8:00 a.m. a 5:00
                            p.m. Jornada Continua
                        </p>
                    </div>
                    <div className="text-sm">
                        <b>Contacto para solicitar servicio de Taxi:</b>
                        <p>
                            <b>Línea de Solicitud de Servicios:</b> 604 265 65
                            65
                        </p>
                        <p>
                            <b>Línea Única de Acopios:</b> 604 322 0707
                        </p>
                        <p>
                            <b>Línea de WhatsApp:</b> 312 265 65 65
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
