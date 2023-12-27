import Afiliado from "./componentes/afiliados/Afiliado";
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
        </>
    );
};

export default App;
