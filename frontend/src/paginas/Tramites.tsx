import InformacionCorta from "../componentes/Global/InformacionCorta";
import SeccionInformacion from "../componentes/Global/SeccionInformacion";
import PlanillaViaje from "../componentes/Tramites/PlanillaViaje";

const Tramites = () => {
    return (
        <>
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2022/04/plantilla768x512.jpg"
                titulo="Realice sus pagos"
                descripcion={[
                    `A través de este vínculo usted podrá realizar sus pagos a nuestra Cooperativa.`,
                ]}
            >
                <a
                    href="#pagos"
                    className="text-white bg-[#23A455] px-4 rounded-sm py-2"
                >
                    Haga click aquí
                </a>
            </SeccionInformacion>
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/AREA-ADMINISTRATIVA-52-1024x683.jpg"
                titulo="Cootransmede"
                posisionX={true}
                descripcion={[
                    `La Cooperativa de Transporte de Medellín, C.T.M. COOTRANSMEDE, es una empresa del sector de la economía solidaria,
                     fundada en diciembre de 1965 por diez propietarios de taxis que tenían como objetivo fundamental fortalecer la actividad del 
                     transporte individual tipo taxi y generar una mejor calidad de vida para los asociados y sus familias. En sus inicios la Cooperativa
                      operaba en un local arrendado y sus libros de cuentas eran simples cuadernos escolares. Poco a poco la empresa fue creciendo con la
                       llegada de nuevos asociados y el incremento de capital, hasta el punto que en año de 1986 contaba con una sede propia para beneficio
                        de 190 asociados que conformaban la Cooperativa de esa época.`,
                ]}
            />
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/AREA-ADMINISTRATIVA-49-1024x683.jpg"
                titulo="Afiliación seguridad social"
                descripcion={[
                    `Satisfacer las necesidades de los asociados, maximizando el valor agregado de los empleados para que a través de ellos,
                    se logre un balance social rico en capacitación permanente, participación democrática, efectiva en los órganos de administración y beneficio para él,
                    ellos y su núcleo familiar, con base en los principios cooperativos vigentes.`,
                ]}
            />
            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/05/PARQUEADERO-8-1024x683.jpg"
                titulo="Tarjetas de operación"
                posisionX={true}
                descripcion={[
                    `Ser una empresa líder en servicio al transportador y a la comunidad.`,
                ]}
            />
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/AREA-ADMINISTRATIVA-34-1024x683.jpg"
                titulo="Liquidación de conductores"
                descripcion={[
                    `La actividad principal es coordinar la prestación del servicio de transporte público de taxis; comercializar 
                    los productos y servicios requeridos por la industria del transporte como equipos, repuestos, insumos, 
                    servicio de taller para mantenimiento y reparación y las demás actividades necesarias para el cumplimiento de sus objetivos.`,
                ]}
            />
            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/ACOPIO-LAURELES-7-1024x683.jpg"
                titulo="Tarjeta amarilla"
                posisionX={true}
            />

            <PlanillaViaje />

            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/08/SERVICIO.png"
                titulo="Afiliación al sistema GPS"
                posisionX={false}
            />
            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/10/PARQUEADERO-2-1024x683.jpg"
                titulo="Afiliación Vehículo Nuevo"
                posisionX={true}
            />
        </>
    );
};

export default Tramites;
