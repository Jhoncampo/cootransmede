import { BannerPagina } from "../../interfaces/bannerPagina";

const BannerPagina = ({bgImagen, titulo}: BannerPagina) => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImagen})` }}
            className="relative bg-cover bg-center h-[250px] bg-no-repeat flex justify-center items-center "
        >
            <div className="absolute bg-black w-full h-full opacity-50"></div>
            <h1 className="text-white text-center relative text-4xl">
                {titulo}
            </h1>
        </div>
    );
};

export default BannerPagina;
