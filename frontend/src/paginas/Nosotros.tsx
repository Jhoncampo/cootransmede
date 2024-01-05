import { bg } from "../componentes/Inicio/informacion/Informacion";
import { Imagen } from "../interfaces/imagen";
import DescripcionDesplegable from "../componentes/Global/DescripcionDesplegable";
import BannerPagina from "../componentes/Global/BannerPagina";
import SeccionInformacion from "../componentes/Global/SeccionInformacion";
import Titulo from "../componentes/Global/Titulo";
import Organigrama from "../componentes/Nosotros/Organigrama";
const info: Array<Imagen> = [
    {
        titulo: "Presentación",
        img: "https://www.cootransmede.com/wp-content/uploads/2020/10/ASAMBLEA-2-1024x683.jpg",
    },
    {
        titulo: "Reseña Historica",
        img: "https://www.cootransmede.com/wp-content/uploads/2020/10/ASAMBLEA-1-1024x683.jpg",
    },
    {
        titulo: "Misión y Visión",
        img: "https://www.cootransmede.com/wp-content/uploads/2020/12/plantilla-fotos-servicios-empresariales3.jpg",
    },
    {
        titulo: "Objeto Social",
        img: "https://www.cootransmede.com/wp-content/uploads/2020/10/ACOPIO-SAN-DIEGO-8-1024x683.jpg",
    },
];


const Nosotros = () => {
    return (
        <div className="font-raleway">
            <BannerPagina bgImagen={bg} titulo="Nosotros" />
            <div className=" flex flex-col items-center gap-16 ">
                <SeccionInformacion
                    img={info[0].img}
                    titulo={info[0].titulo}
                    descripcion={[
                        `La Cooperativa de Transporte de Medellín, CTM –
                    Cootransmede, es una empresa del sector de la
                    economía solidaria, especializada en transporte de
                    servicio público tipo taxi, con personería jurídica
                    N° 00000625 del 10 de diciembre de 1965 y diciembre
                    31 de 2003. Su base social está conformada por 1.500
                    asociados, 1.100 conductores y un parque automotor
                    cercano a los 1.800 vehículos`,
                        `Cootransmede, opera acopios en establecimientos de
                    importante trayectoria en la ciudad, como son:
                    Centro Comercial Sandiego, Jumbo 65, Clínica
                    Conquistadores, Clínica Medellín de Occidente y el
                    Primer Parque de Laureles, reconocido este último
                    como el Primer Acopio de Taxis Computarizado del
                    País.`,
                        `La prestación del servicio por parte de nuestros
                    conductores, se ha caracterizado por la eficiencia,
                    seguridad y confianza que ofrecemos a nuestros
                    usuarios; esto obedece a que hemos incluido como
                    componente estratégico para el logro de nuestros
                    objetivos.`,
                    ]}
                />
                <SeccionInformacion
                    img={info[1].img}
                    titulo={info[1].titulo}
                    posisionX={true}
                    descripcion={[
                        `La Cooperativa de Transporte de Medellín, C.T.M.
                        COOTRANSMEDE, es una empresa del sector de la
                        economía solidaria, fundada en diciembre de 1965 por
                        diez propietarios de taxis que tenían como objetivo
                        fundamental fortalecer la actividad del transporte
                        individual tipo taxi y generar una mejor calidad de
                        vida para los asociados y sus familias. En sus
                        inicios la Cooperativa operaba en un local arrendado
                        y sus libros de cuentas eran simples cuadernos
                        escolares. Poco a poco la empresa fue creciendo con
                        la llegada de nuevos asociados y el incremento de
                        capital, hasta el punto que en año de 1986 contaba
                        con una sede propia para beneficio de 190 asociados
                        que conformaban la Cooperativa de esa época.`,
                    ]}
                />
                <SeccionInformacion
                    img={info[2].img}
                    titulo="Misión"
                    posisionX={false}
                    descripcion={[
                        `Satisfacer las necesidades de los asociados,
                        maximizando el valor agregado de los empleados para
                        que a través de ellos, se logre un balance social
                        rico en capacitación permanente, participación
                        democrática, efectiva en los órganos de
                        administración y beneficio para él, ellos y su
                        núcleo familiar, con base en los principios
                        cooperativos vigentes.`,
                    ]}
                    subtitulo="Visión"
                    subdescripcion={[
                        `Ser una empresa líder en servicio al transportador y
                    a la comunidad.`,
                    ]}
                />

                <SeccionInformacion
                    img={info[3].img}
                    titulo={info[3].titulo}
                    posisionX={true}
                    descripcion={[
                        `Satisfacer las necesidades de los asociados,
                        maximizando el valor agregado de los empleados para
                        que a través de ellos, se logre un balance social
                        rico en capacitación permanente, participación
                        democrática, efectiva en los órganos de
                        administración y beneficio para él, ellos y su
                        núcleo familiar, con base en los principios
                        cooperativos vigentes.`,
                    ]}
                >
                    <Titulo titulo="Valores corporartivos" />
                    <div className="flex flex-col w-full px-3  ">
                        <DescripcionDesplegable
                            titulo="Ética"
                            descripcion="Conjunto de normas morales que rigen la conducta de la Cooperativa."
                        />
                        <DescripcionDesplegable
                            titulo="Eficiencia"
                            descripcion="Capacidad para conseguir un efecto determinado."
                        />
                        <DescripcionDesplegable
                            titulo="Soliralidad"
                            descripcion="Capacidad que tienen los miembros de una comunidad de actuar como un todo."
                        />
                    </div>
                </SeccionInformacion>
            </div>
            <Organigrama/>
        </div>
    );
};

export default Nosotros;
