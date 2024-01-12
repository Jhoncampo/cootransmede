import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import HeaderTop from "./componentes/header/HeaderTop";
import PQRS from "./paginas/PQRS";

const App = () => {
    return (
        <>
            <HeaderTop />
            <Header /> 
            <PQRS/>
            <Footer />
        </>
    );
};

export default App;
