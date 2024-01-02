import Afiliado from "./componentes/afiliados/Afiliado";
import AppCTM from "./componentes/appCTM/AppCTM";
import BotCTM from "./componentes/botCTM/BotCTM";
import Carrusel from "./componentes/carrusel/Carrusel";
import Enlaces from "./componentes/enlacesInteres/Enlaces";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import Informacion from "./componentes/informacion/Informacion";
import Noticias from "./componentes/noticias/Noticias";

const App = () => {
    return (
        <>
            <Header />
            <Carrusel />
            <Afiliado/>
            <Informacion/>
            <AppCTM/>
            <BotCTM/>
            <Noticias/>
            <Enlaces/>
            <Footer/>
        </>
    );
};

export default App;
