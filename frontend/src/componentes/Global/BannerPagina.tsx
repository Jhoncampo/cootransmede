import { BannerPagina } from "../../interfaces/bannerPagina";

const BannerPagina = ({bgImagen, titulo}: BannerPagina) => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImagen})` }}
            className="relative bg-cover bg-center h-[200px] bg-no-repeat flex justify-center items-center md:h-[250px] lg:h-[300px]"
        >
            <div className="absolute bg-black w-full h-full opacity-50"></div>
            <h1 className="text-white text-center font-bold relative text-3xl">
                {titulo}
            </h1>
        </div>
    );
};

export default BannerPagina;
