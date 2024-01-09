import BannerPagina from "../componentes/Global/BannerPagina";
import SeccionInformacion from "../componentes/Global/SeccionInformacion";
import Acopios from "../componentes/Asociados/Acopios";
import AreaAdministrativa from "../componentes/Asociados/AreaAdministrativa";
import AreaComercial from "../componentes/Asociados/AreaComercial";
import AreaJuridica from "../componentes/Asociados/AreaJuridica";
import AreaSGSST from "../componentes/Asociados/AreaSG-SST";
import TarjetaServicios from "../componentes/Asociados/TarjetaServicios";

const Asociados = () => {
    return (
        <div className="font-roboto">
            <BannerPagina
                bgImagen="https://www.cootransmede.com/wp-content/uploads/2024/01/bannerAsociados.png"
                titulo="BENEFICIOS PARA NUESTROS ASOCIADOS"
            />
            <AreaAdministrativa />

            <AreaComercial />

            <AreaJuridica />

            <Acopios />

            <TarjetaServicios />
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2020/10/ACOPIO-LAURELES-8-1024x683.jpg"
                titulo="Central de comunicaciones"
                posisionX={false}
                descripcion={[
                    `Desde nuestra central de comunicaciones ofrecemos servicio de taxi y de mensajería las 24 horas.
                    Para optimizar la prestación de servicio, disponemos de un sistema de despacho a través de la aplicación
                    “APP Cootransmede” con excelentes garantías de control, eficiencia, seguridad y confianza, con recursos
                    tecnológicos y humanos que permiten una efectiva prestación del servicio.`,
                ]}
            />
            <div className="flex items-center justify-center md:flex-row bg-[#f1f1f1]">
                <div className="max-w-[1024px] py-6 md:gap-10 md:flex md:items-center md:justify-between">
                    <h2 className="text-3xl text-center text-[#23A455] font-raleway font-extrabold md:text-center md:pb-3">
                        Sistema GPS
                    </h2>
                    <img
                        src="https://www.cootransmede.com/wp-content/uploads/2020/12/plantilla-fotos-asociados5.jpg"
                        alt=""
                        className=" md:max-w-sm"
                    />
                </div>
            </div>

            <AreaSGSST />
        </div>
    );
};

export default Asociados;
