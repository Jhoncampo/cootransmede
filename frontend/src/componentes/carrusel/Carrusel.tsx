import { useEffect, useState } from "react";
import ArrowLeft from "../iconos/ArrowLeft";
import ArrowRight from "../iconos/ArrowRight";
import Circulo from "../iconos/Circulo";
import { colores } from "../../utils/colores";

interface Img {
    id: number;
    img: string;
}

const imagenes: Img[] = [
    {
        id: 1,
        img: "https://www.cootransmede.com/wp-content/uploads/2023/05/lineafija-web-2.jpg",
    },
    {
        id: 2,
        img: "https://www.cootransmede.com/wp-content/uploads/2023/05/whatsapp-web-2.jpg",
    },
    {
        id: 3,
        img: "https://www.cootransmede.com/wp-content/uploads/2023/05/lineafija-laureles-web2.jpg",
    },
    {
        id: 4,
        img: "https://www.cootransmede.com/wp-content/uploads/2023/05/app-web2.jpg",
    },
];

const Carrusel = () => {
    const [index, setIndex] = useState(0);
    const { colorPrimario } = colores;

    const imagenAnterior = () => {
        const primeraImagen = index === 0;
        const nuevoIndex = primeraImagen ? imagenes.length - 1 : index - 1;
        setIndex(nuevoIndex);
    };
    const imagenSiguiente = () => {
        const ultimaImagen = index === imagenes.length - 1;
        const nuevoIndex = ultimaImagen ? 0 : index + 1;
        setIndex(nuevoIndex);
    };

    const irImagen = (i: number) => {
        console.log(i);
        setIndex(i);
    };

    useEffect(() => {
        const interval = setInterval(()=>{
            imagenSiguiente()
        }, 5000)
        return () => clearInterval(interval)
    },[index])

    return (
        <div className=" w-full m-auto relative group bg-[#f1f1f1]  z-10">
            <div
                style={{ backgroundImage: `url(${imagenes[index].img})`}}
                className="w-full h-[16vh]  sm:h-[18vh] md:h-[20vh] lg:h-[28vh] xl:h-[60vh] 2xl:h-[40vh] lg:bg-cover bg-center bg-cover bg-no-repeat duration-500 "
            ></div>
            <div className="absolute block lg:hidden lg:group-hover:block top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-[#23A455] lg:p-2 cursor-pointer">
                <ArrowLeft
                    onClick={imagenAnterior}
                    fill="white"
                />
            </div>
            <div className={`absolute block lg:hidden lg:group-hover:block top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-[#23A455] lg:p-2 cursor-pointer`}>
                <ArrowRight
                    onClick={imagenSiguiente}
                    fill="white"
                />
            </div>
            <div className="flex gap-1 top-4 justify-center py-2">
                {imagenes.map((_imagen, index) => (
                    <div
                        className="text-2xl cursor-pointer"
                        key={index}
                        onClick={() => irImagen(index)}
                    >
                        <Circulo
                            width="8px"
                            height="8px"
                            fill={`${colorPrimario}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carrusel;

//tengo este carrusel como hago para que cada 5 minutos se cambie de imagen