import Bancolombia from "../componentes/Pagos/Bancolombia";
import PSE from "../componentes/Pagos/PSE";

const Pagos = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="mx-2 text-[#7a7a7a] border-b border-black box-border md:mx-6 max-w-[1024px]">
                <h1 className="text-[#23A455] text-3xl text-center font-semibold py-9 lg:py-14">
                    FORMAS PARA REALIZAR SUS PAGOS
                </h1>
                <div className=" flex flex-col items-center lg:flex-row lg:gap-10 lg:items-start lg:mb-4">
                    <Bancolombia />
                    <PSE />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src="https://www.cootransmede.com/wp-content/uploads/2022/04/canales-pago.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Pagos;
