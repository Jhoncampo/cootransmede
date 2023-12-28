import Afiliado from "./componentes/afiliados/Afiliado";
import AppCTM from "./componentes/appCTM/AppCTM";
import Carrusel from "./componentes/carrusel/Carrusel";
import Header from "./componentes/header/Header";
import Informacion from "./componentes/informacion/Informacion";

const App = () => {
    return (
        <>
            <Header />
            <Carrusel />
            <Afiliado/>
            <Informacion/>
            <AppCTM/>
        </>
    );
};

export default App;
