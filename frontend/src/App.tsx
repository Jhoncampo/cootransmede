import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import HeaderTop from "./componentes/header/HeaderTop";
import Noticias from "./paginas/Noticias";

const App = () => {
    return (
        <>
            <HeaderTop />
            <Header /> 
            <Noticias/>
            <Footer />
        </>
    );
};

export default App;
