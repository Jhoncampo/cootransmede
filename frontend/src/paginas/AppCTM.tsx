import BannerPagina from "../componentes/Global/BannerPagina";
import InformacionCorta from "../componentes/Global/InformacionCorta";
import { bg } from "../componentes/Inicio/informacion/Informacion";

const AppCTM = () => {
    return (
        <>
            <BannerPagina bgImagen={bg} titulo="APP COOTRANSMEDE" />

            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2022/04/APP-CTM.png"
                titulo="APP COOTRANSMEDE"
                descripcion={[
                    `Le invitamos a conocer nuestro terminos y condiciones`,
                ]}
            >
              <a
                    href="https://www.cootransmede.com/wp-content/uploads/2022/04/Terminos-Condiciones-APP-Cootransmede.pdf"
                    className="text-white bg-[#23A455] px-4 rounded-sm py-2"
                >
                    Haga click aquí
                </a>
            </InformacionCorta>
        </>
    );
};

export default AppCTM;
