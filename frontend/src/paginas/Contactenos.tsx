import Input from "../componentes/Global/Input";
import Textarea from "../componentes/Global/Textarea";

const Contactenos = () => {
    return (
        <div
            style={{
                backgroundImage: `url(https://www.cootransmede.com/wp-content/uploads/2020/10/ASAMBLEA-2-1024x683.jpg)`,
            }}
            className=" relative  bg-no-repeat bg-cover bg-center lg:flex lg:flex-col lg:items-center lg:justify-between"
        >
            <div className="bg-black absolute h-full w-full  opacity-60"></div>

            <div className="relative flex flex-col w-full gap-4 py-8 max-w-[1024px] lg:flex-row lg:items-start lg:py-20">
                <div className="text-white px-4 md:px-8">
                    <h1 className="text-white text-3xl font-semibold relative pb-6 ">
                        Contáctenos
                    </h1>
                    <span className="absolute h-[2px] w-20  bg-[#23A455] "></span>
                    <p className="mt-3">Oficina Administrativa</p>
                    <p>Dirección: Calle 25#65B-48</p>
                    <p>Teléfono: 604 265 96 92</p>
                    <p>Correo: ctmgeneral@ctmcootransmede.com</p>
                    <p>Horarios: Lunes a Viernes 8:00 a.m. a 5:00 p.m.</p>
                    <p className="mb-4">Jornada Continua</p>
                    <p>Contacto para solicitar servicio de Taxi:</p>
                    <p>Línea de Solicitud de Servicios: 604 265 65 65</p>
                    <p>Línea Única de Acopios: 604 322 0707</p>
                    <p className="mb-3">Línea de WhatsApp 312 265 65 65</p>
                    <span className="absolute h-[2px] w-20 bg-[#23A455] "></span>
                </div>
                <form action="" className="px-4 py-4 w-full max-w-lg mx-auto">
                    <Input
                        texto="Nombre"
                        required
                        placeholder="Ingrese Nombre"
                    />
                    <Input
                        type="email"
                        texto="Email"
                        required
                        placeholder="example@example.com"
                    />
                    <Input
                        texto="Asunto"
                        required
                        placeholder="Ingrese Asunto"
                    />
                    <Textarea
                        texto="Mensaje"
                        placeholder="Ingrese un Mensaje"
                    />
                    <button
                        type="submit"
                        className="px-3 py-1 bg-[#23A455] text-white rounded-sm font-semibold"
                    >
                        ENVIAR
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contactenos;
