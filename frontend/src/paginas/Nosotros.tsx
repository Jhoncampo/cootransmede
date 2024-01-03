import { bg } from "../componentes/Inicio/informacion/Informacion";
import { Imagen } from "../interfaces/imagen";
import DescripcionDesplegable from "../componentes/Global/DescripcionDesplegable";
import BannerPagina from "../componentes/Global/BannerPagina";
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
            <BannerPagina bgImagen={bg} titulo="Nosotros"/>
            <div className="py-6 px-3 flex flex-col gap-16 md:px-7">

                <div className=" flex flex-col gap-4">
                    <img
                        src={info[0].img}
                        alt={info[0].titulo}
                        className="rounded-lg"
                    />
                    <div className=" flex items-center flex-col gap-4">
                        <h2 className="text-3xl text-[#23A455] font-extrabold">
                            {info[0].titulo}
                        </h2>
                        <p className="text-justify">
                            La Cooperativa de Transporte de Medellín, CTM –
                            Cootransmede, es una empresa del sector de la
                            economía solidaria, especializada en transporte de
                            servicio público tipo taxi, con personería jurídica
                            N° 00000625 del 10 de diciembre de 1965 y diciembre
                            31 de 2003. Su base social está conformada por 1.500
                            asociados, 1.100 conductores y un parque automotor
                            cercano a los 1.800 vehículos.
                        </p>
                        <p className="text-justify">
                            Cootransmede, opera acopios en establecimientos de
                            importante trayectoria en la ciudad, como son:
                            Centro Comercial Sandiego, Jumbo 65, Clínica
                            Conquistadores, Clínica Medellín de Occidente y el
                            Primer Parque de Laureles, reconocido este último
                            como el Primer Acopio de Taxis Computarizado del
                            País.
                        </p>
                        <p className="text-justify">
                            La prestación del servicio por parte de nuestros
                            conductores, se ha caracterizado por la eficiencia,
                            seguridad y confianza que ofrecemos a nuestros
                            usuarios; esto obedece a que hemos incluido como
                            componente estratégico para el logro de nuestros
                            objetivos.
                        </p>
                    </div>
                </div>

                <div className=" flex flex-col-reverse gap-4">
                    <img
                        src={info[1].img}
                        alt={info[1].titulo}
                        className="rounded-lg"
                    />
                    <div className=" flex items-center flex-col gap-4">
                        <h2 className="text-3xl text-[#23A455] font-extrabold">
                            {info[1].titulo}
                        </h2>
                        <p className="text-justify">
                            La Cooperativa de Transporte de Medellín, C.T.M.
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
                            que conformaban la Cooperativa de esa época.
                        </p>
                    </div>
                </div>

                <div className=" flex flex-col gap-4">
                    <img
                        src={info[2].img}
                        alt={info[2].titulo}
                        className="rounded-lg"
                    />
                    <div className=" flex items-center flex-col gap-4">
                        <h2 className="text-3xl text-[#23A455] font-extrabold">
                            Misión
                        </h2>
                        <p className="text-justify">
                            Satisfacer las necesidades de los asociados,
                            maximizando el valor agregado de los empleados para
                            que a través de ellos, se logre un balance social
                            rico en capacitación permanente, participación
                            democrática, efectiva en los órganos de
                            administración y beneficio para él, ellos y su
                            núcleo familiar, con base en los principios
                            cooperativos vigentes.
                        </p>
                        <h2 className="text-3xl text-[#23A455] font-extrabold">
                            Visión
                        </h2>
                        <p className="text-justify">
                            Ser una empresa líder en servicio al transportador y
                            a la comunidad.
                        </p>
                    </div>
                </div>

                <div className=" flex flex-col-reverse gap-4">
                    <img
                        src={info[3].img}
                        alt={info[3].titulo}
                        className="rounded-lg"
                    />
                    <div className=" flex items-center flex-col gap-4">
                        <h2 className="text-3xl text-[#23A455] font-extrabold">
                            {info[3].titulo}
                        </h2>
                        <p className="text-justify">
                            Satisfacer las necesidades de los asociados,
                            maximizando el valor agregado de los empleados para
                            que a través de ellos, se logre un balance social
                            rico en capacitación permanente, participación
                            democrática, efectiva en los órganos de
                            administración y beneficio para él, ellos y su
                            núcleo familiar, con base en los principios
                            cooperativos vigentes.
                        </p>
                        <h2 className="text-3xl text-[#23A455] font-extrabold">
                            Valores corporartivos
                        </h2>
                        <div className="flex flex-col w-full px-3">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
