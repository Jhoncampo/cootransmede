import { CardInfo } from "../../../interfaces/cardInfo";

const CardInfo = ({ urlImg, descripcion, textoBoton }: CardInfo) => {
    return (
        <a
            href=""
            style={{ backgroundImage: `url(${urlImg})` }}
            className="bg-no-repeat bg-cover bg-center flex items-center relative  justify-center flex-col w-full h-[300px] lg:h-[450px] xl:h-[450px]"
        >
            <div className="bg-black opacity-50 w-full h-full"></div>
            <div className="absolute flex flex-col items-center justify-center">
                <span className="text-white w-[124px] max-w-[300px] text-xl font-raleway text-center font-extrabold mb-6 md:text-2xl lg:w-full lg:text-[35px]">
                    {descripcion}
                </span>
                <button className="text-white text-sm font-bold rounded-sm opacity ease-linear duration-200 py-2 px-5 backdrop-filter backdrop-blur-lg bg-[#FBBC06] hover:bg-[#23A455]">
                    {textoBoton}
                </button>
            </div>
        </a>
    );
};

export default CardInfo;
