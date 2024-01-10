import BannerPagina from "../componentes/Global/BannerPagina";
import Noticia from "../componentes/Inicio/noticias/Noticia";

const noticias = [
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-20-at-10.05.58-1.jpeg",
        titulo: "HORARIOS DE ATENCIÓN TEMPORADA NAVIDEÑA 2023",
        descripcion: "Horarios 2023",
        enlace: "#horarios-temporada-navideña",
        categoria: "conductores"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2022/03/2560px-Logo_Bancolombia.svg.png",
        titulo: "INSTRUCTIVOS PAGOS BANCOLOMBIA",
        descripcion:
            "A continuación presentamos el instructivo para realizar pagos a través de la APP Bancolombia: -Ingresar a la APP…",
        enlace: "#instructivos-bancolombia",
        categoria: "asociados"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2021/12/PostulacionDelegados.jpg",
        titulo: "POSTULACIÓN DE DELEGADOS 2023 - 2024",
        descripcion: "Circular",
        enlace: "#postulacion-delegado",
        categoria: "asociados"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2023/12/kit-escolar.jpeg",
        titulo: "ENTREGA DE KITS ESCOLARES",
        descripcion:
            "Señor Asociado y Conductor, lo invitamos para que a partir del día lunes 11 de diciembre de 2023,…",
        enlace: "#entrega-kit-escolares",
        categoria: "asociados"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2021/12/sutaxiseguro.jpg",
        titulo: "COOTRANSMEDE, SU TAXI SEGURO",
        descripcion:
            "Vehículos con protocolos de bioseguridad. Le ofrecemos las mejores garantías de seguridad y confianza.",
        enlace: "#taxi-seguro",
        categoria: "usarios"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2021/12/servicio24h-1.jpg",
        titulo: "SERVICIO DE TAXI LAS 24 HORAS",
        descripcion:
            "Señor usuario, lo invitamos a solicitar su móvil seguro al 604 265 65 65, le ofrecemos las mejores…",
        enlace: "#servicio-de-taxis",
        categoria: "usuarios"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2021/12/acopios.jpg",
        titulo: "ACOPIOS COOTRANSMEDE",
        descripcion:
            "Señor usuario, lo invitamos a solicitar su móvil seguro en los acopios operados por Cootransmede. Le brindamos las…",
        enlace: "#acopios",
        categoria: "usuarios"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2021/12/formas2.jpg",
        titulo: "FORMAS DE SOLICITAR SU SERVICIO DE TAXI",
        descripcion:
            "Whatsapp BOT CTM ? 312 265 65 65 ☎️ 604 265 65 65 ☎️ 322 07 07 Opción…",
        enlace: "#formas-de-solicitar-su-taxi",
        categoria: "usuario"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2023/12/cambio-tarifa.jpeg",
        titulo: "CAMBIO DE TARIFA 2023-2024",
        descripcion: "Resolución Nº 202350094180 (21 de noviembre de 2023)",
        enlace: "#cambio-de-tarifa",
        categoria: "conductores"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2021/11/app2.jpg",
        titulo: "APP COOTRANSMEDE",
        descripcion:
            "¿Cómo descargar la Aplicación Cootransmede? Solicita tu servicio de taxi en forma rápida y segura. Google Play ????…",
        enlace: "#app-cootransmede",
        categoria: "usuario"
    },
    {
        imgPortada:
            "https://www.cootransmede.com/wp-content/uploads/2021/11/whatsapp.jpg",
        titulo: "BOT CTM",
        descripcion:
            "BOT CTM – La manera fácil de solicitar su servicio de taxi a través de Whatsapp.",
        enlace: "#bot-cootransmede",
        categoria: "usuario"
    },
];

const Noticias = () => {
    return (
        <div>
            <BannerPagina
                bgImagen="https://www.cootransmede.com/wp-content/uploads/2020/05/Slider0.jpg"
                titulo="NOTICIAS"
            />
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-center text-3xl text-[#23A455] font-semibold py-7">Noticias</h2>
                <div className="flex flex-col items-center justify-around gap-3 px-2 max-w-[1024px] sm:flex-wrap sm:items-start sm:gap-8  sm:flex-row lg:justify-start ">
                    {noticias.map((noticia, index) => (
                        <Noticia
                            key={index}
                            urlImg={noticia.imgPortada}
                            titulo={noticia.titulo}
                            descripcion={noticia.descripcion}
                            enlace={noticia.enlace}
                            categoria={noticia.categoria}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Noticias;
