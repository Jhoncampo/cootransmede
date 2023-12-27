const urlImg =
    "https://www.cootransmede.com/wp-content/uploads/2020/08/SERVICIO.png";

const Informacion = () => {
    return (
            <a
                href=""
                style={{ backgroundImage: `url(${urlImg})` }}
                className="bg-no-repeat bg-cover flex items-center  justify-center flex-col w-full h-[300px] "
            >
                <div className="bg-black opacity-50 w-full h-full"></div>
                <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-white text-xl font-extrabold">
                        Lo invitamos a solicitar su taxi:
                    </span>
                    <button className="text-white opacity- py-3 px-6 backdrop-filter backdrop-blur-lg bg-[#FBBC06]">
                        VER MÁS
                    </button>
                </div>
            </a>
    );
};

export default Informacion;
