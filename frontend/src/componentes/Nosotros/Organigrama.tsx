import Titulo from "../Global/Titulo";

const Organigrama = () => {
    return (
        <div className="flex items-center flex-col justify-center">
            <div className="px-3  max-w-[1024px] mb-4">
                <Titulo titulo="Organigrama" />
                <img
                    src="https://www.cootransmede.com/wp-content/uploads/2021/03/Diapositiva1.jpg"
                    alt=""
                />
                <a
                    href="https://www.cootransmede.com/wp-content/uploads/2021/03/organigrama2021.pdf"
                    target="_blank"
                    className="text-[#0000ff] text-[14px]"
                >
                    Si desea ver el organigrama en formato PDF, por favor haga
                    click aquí.
                </a>
            </div>
            <div
                style={{
                    backgroundImage: `url(${"https://www.cootransmede.com/wp-content/uploads/2020/10/ASAMBLEA-2-scaled.jpg"})`,
                }}
                className="relative bg-cover bg-center w-full h-[250px]"
            >
                <div className="bg-[#333333] h-full w-full absolute opacity-80"></div>
                <div className="relative flex h-full items-center justify-center flex-col gap-5">
                    <h2 className="text-3xl font-raleway text-white font-extrabold">Estatutos</h2>
                    <a href="https://www.cootransmede.com/wp-content/uploads/2023/08/CTM-Estatutos.pdf" target="_blank" className="py-2 text-[15px] px-4 bg-[#23A455] font-roboto text-white font-semibold rounded">Haz click aquí</a>
                </div>
            </div>
        </div>
    );
};

export default Organigrama;
