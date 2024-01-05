import BannerPagina from "../componentes/Global/BannerPagina";
import DescripcionDesplegable from "../componentes/Global/DescripcionDesplegable";
import Titulo from "../componentes/Global/Titulo";

interface ImgObj {
    img: string;
    categoria: string;
}

const imagenesAcopios: ImgObj[] = [
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider0-1.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider1.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider2.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider3.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider4.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Sliderx1.jpg",
        categoria: "sandiego",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Sliderx2.jpg",
        categoria: "sandiego",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Sliderx4.jpg",
        categoria: "sandiego",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/Medellin-Occidente1.jpg",
        categoria: "clinicaMedellin",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/Medellin-Occidente2.jpg",
        categoria: "clinicaMedellin",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/Conquistadores1.jpg",
        categoria: "clinicaCosquitadoes",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/conquistadores2.jpg",
        categoria: "clinicaCosquitadoes",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo1.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo2.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo3.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo4.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo5.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/olaya2.jpg",
        categoria: "aeropuerto",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/olaya3.jpg",
        categoria: "aeropuerto",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/olaya4.jpg",
        categoria: "aeropuerto",
    },
];

const Asociados = () => {
    return (
        <div>
            <BannerPagina
                bgImagen="https://www.cootransmede.com/wp-content/uploads/2024/01/bannerAsociados.png"
                titulo="BENEFICIOS PARA NUESTROS ASOCIADOS"
            />
            <div>
                <div className="px-3 py-6 flex flex-col gap-5">
                    <img
                        className="rounded-lg"
                        src="https://www.cootransmede.com/wp-content/uploads/2021/03/administrativa3.jpg"
                        alt="areaAdministrativa"
                    />
                    <div className="flex flex-col gap-3">
                        <Titulo titulo="área Administrativa" />
                        <ul className="px-9 list-disc text-[#7a7a7a]">
                            <li>Seguridad social</li>
                            <li>SEguros Contractual y Extracontractual</li>
                            <li>Póliza de Accidentes Personales</li>
                            <li>Expedición de soat</li>
                            <li>Tarjetas de Servicios</li>
                            <li>Prestaciones sociales</li>
                            <li>Obligaciones fiscales y parafiscales</li>
                            <li>Liquidación a conductores</li>
                            <li>Bienestar social</li>
                            <li>Beneficios par los Asociados</li>
                            <li>Convenios</li>
                            <li>Solidaridad (auxilios)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3 text-[#7a7a7a]">
                        <h3 className="px-1 font-semibold">
                            LÍNEAS DE CRÉDITO CONFIAR Y CIDESA para:
                        </h3>
                        <ul className="px-9 list-disc">
                            <li>Suministros</li>
                            <li>Adquisición de seguros</li>
                            <li>Adquisición de SOAT</li>
                            <li>Reparación de caja y motor</li>
                            <li>Reparación latonería y pintura</li>
                            <li>Adquisición de Sistema de comunicación GPS</li>
                            <li>Libre inversión</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                style={{
                    backgroundImage: `url(${"https://www.cootransmede.com/wp-content/uploads/2020/08/FondoPrin.jpg"})`,
                }}
                className="bg-cover bg-center"
            >
                <div>
                    <Titulo titulo="Área comercial" />
                    <DescripcionDesplegable
                        titulo="ALMACEN DE RESPUESTOS"
                        descripcion="Suministros básicos para reparación rápida"
                    />
                    <DescripcionDesplegable
                        titulo="VENTA "
                        descripcion="Venta de llantas, baterías y respuestos de suspención para vehículos de servicio público tipo taxi."
                    />
                    <DescripcionDesplegable
                        titulo="CENTRO DE LUBRICACIÓN"
                        descripcion="Lobricantes garantizados, uso tecnológico para la extracción y suministro de lubricantes, control de la fecha de cambio de lubricante"
                    />
                    <DescripcionDesplegable
                        titulo="FRENOS, SUSPENSIÓN Y MÉCANICA"
                        descripcion="Personal capacitado y amplia experiencia en el mantenimiento preventivo y correctivo de los behículos automotores"
                    />
                    <DescripcionDesplegable
                        titulo="ALINEACIÓN COMPUTARIZADA"
                        descripcion="Equipo de moderna tecnología para el diagnóstico y correción del vehículo"
                    />
                    <DescripcionDesplegable
                        titulo="MONTAJE, BALANCEO Y ROTACIÓN DE LLANTAS"
                        descripcion="Equipo de acuerdo a la especificación requerida por el fabricante de llantas, para el mantenimiento de estas. Como calibración parches, balanceos entre otros."
                    />
                    <DescripcionDesplegable
                        titulo="MECÁNICA AUTOMOTRIZ"
                        descripcion="Personal calificado y con experiencia en la inyección electrónicos a todos los motores tipo taxi y vehículos livianos."
                    />
                    <DescripcionDesplegable
                        titulo="LAVADO DE INTECTORES Y SCÁNNER"
                        descripcion="Lavado de inyectores y scánner"
                    />
                    <DescripcionDesplegable
                        titulo="REVISIÓN TÉCNICO MECÁNICA"
                        descripcion="convenio de Certificado de Revisión técnico-mecanicá y de Emisiones Contaminantes"
                    />
                    <DescripcionDesplegable
                        titulo="CONVENIOS ÁREA COMERCIAL"
                        descripcion="Disponemos de los siguientes convenios"
                    />
                </div>
            </div>
        </div>
    );
};

export default Asociados;
