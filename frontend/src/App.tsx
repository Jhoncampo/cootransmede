import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import HeaderTop from "./componentes/header/HeaderTop";
import Inicio from "./paginas/Inicio";
import Noticias from "./paginas/Noticias";

const App = () => {
    return (
        <>
            <HeaderTop />
            <Header /> 
            <Inicio/>
            <Footer />
        </>
    );
};

export default App;
