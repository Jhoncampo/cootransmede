import CardInfo from "./CardInfo";

const urlImg = [
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/08/SERVICIO.png",
    },
    {
        img: "https://www.cootransmede.com/wp-content/uploads/2020/08/notictm.png",
    },
];
const bg =
    "https://www.cootransmede.com/wp-content/uploads/2020/08/FondoPrin.jpg";
const Informacion = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})` }} className="relative">
                <div className="bg-white absolute opacity-80 w-full h-full"></div>
                <div className="flex flex-col bg-cover items-center  justify-center md:flex-row w-full ">
                    <CardInfo
                        urlImg={urlImg[0].img}
                        descripcion="Lo invitamos a solicitar su taxi:"
                        textoBoton="VER MÁS"
                    />
                    <div className="max-w-96 w-full flex items-center justify-center">
                        <img
                            className="py-9 md:w-64 relative xl:w-96 hover:xl:w-[360px] ease-linear duration-500"
                            src="https://www.cootransmede.com/wp-content/uploads/2021/12/Logo-CTM.png"
                            alt=""
                        />
                    </div>
                    <CardInfo
                        urlImg={urlImg[1].img}
                        descripcion="Actualidad en NotiCTM"
                        textoBoton="VER MÁS"
                    />
                </div>
            </div>
            <div className="bg-[#23A455] h-[30px] relative"></div>
        </div>
    );
};

export default Informacion;
