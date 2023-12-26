import { useState } from "react";
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
    {
        id: 5,
        img: "https://www.cootransmede.com/wp-content/uploads/2023/05/whatsapp-web.jpg",
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

    return (
        <div className=" max-w-[1400px] h-[400px] w-full m-auto relative group">
            <div
                style={{ backgroundImage: `url(${imagenes[index].img})` }}
                className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
            ></div>
            <div className="absolute hidden group-hover:block top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer">
                <ArrowLeft
                    onClick={imagenAnterior}
                    fill="white"
                    width="20px"
                    height="20px"
                />
            </div>
            <div className="absolute hidden group-hover:block top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer">
                <ArrowRight
                    onClick={imagenSiguiente}
                    fill="white"
                    width="20px"
                    height="20px"
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
