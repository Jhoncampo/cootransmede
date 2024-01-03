import Afiliado from "../componentes/Inicio/afiliados/Afiliado";
import AppCTM from "../componentes/Inicio/appCTM/AppCTM";
import BotCTM from "../componentes/Inicio/botCTM/BotCTM";
import Carrusel from "../componentes/Inicio/carrusel/Carrusel";
import Enlaces from "../componentes/Inicio/enlacesInteres/Enlaces";
import Informacion from "../componentes/Inicio/informacion/Informacion";
import Noticias from "../componentes/Inicio/noticias/Noticias";

const Inicio = () => {
    return (
        <>
            <Carrusel />
            <Afiliado />
            <Informacion />
            <AppCTM />
            <BotCTM />
            <Noticias />
            <Enlaces />
        </>
    );
};

export default Inicio;
