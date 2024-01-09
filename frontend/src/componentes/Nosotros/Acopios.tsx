import Acopio from "../Acopio";
import Titulo from "../Global/Titulo";

interface ImgObj {
    img: string;
    categoria: string;
}

const imagenesAcopios: ImgObj[] = [
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider0-1.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider1.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider2.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider3.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Slider4.jpg",
        categoria: "laureles",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Sliderx1.jpg",
        categoria: "sandiego",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Sliderx2.jpg",
        categoria: "sandiego",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/05/Sliderx4.jpg",
        categoria: "sandiego",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/Medellin-Occidente1.jpg",
        categoria: "clinicaMedellin",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/Medellin-Occidente2.jpg",
        categoria: "clinicaMedellin",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/Conquistadores1.jpg",
        categoria: "clinicaCosquitadoes",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/conquistadores2.jpg",
        categoria: "clinicaCosquitadoes",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo1.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo2.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo3.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo4.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/jumbo5.jpg",
        categoria: "tiendaJumbo",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/olaya2.jpg",
        categoria: "aeropuerto",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/olaya3.jpg",
        categoria: "aeropuerto",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2021/12/olaya4.jpg",
        categoria: "aeropuerto",
    },
];

const Acopios = () => {
    return (
        <div className="px-3 flex justify-center flex-col items-center">
            <Titulo titulo="Nuestros Centros de Acopio" />
            <div className="flex justify-center max-w-[1024px]  flex-wrap ">
                <span className="mr-3 hover:text-red-600 text-[#666565] cursor-pointer">
                    Todas las categorias
                </span>
                <Acopio acopio="Laureles" />
                <Acopio acopio="C.C Sandiego" />
                <Acopio acopio="Clínica Medellín de Occidente" />
                <Acopio acopio="Clínica Conquistadores" />
                <Acopio acopio="Tienda Jumbo 65" />
                <Acopio acopio="Aeropuerto Olaya Herrera" />
            </div>
            <div className="flex flex-col gap-4 py-4 max-w-[1024px] sm:flex-wrap sm:flex-row sm:justify-evenly">
                {imagenesAcopios.map((acopio, index) => (
                    <img
                        key={index}
                        src={acopio.img}
                        alt={acopio.categoria}
                        className="rounded sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px]"
                    />
                ))}
            </div>
        </div>
    );
};

export default Acopios;
