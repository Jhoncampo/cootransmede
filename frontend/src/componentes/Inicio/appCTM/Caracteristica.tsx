import { Caracteristica } from "../../../interfaces/caracteristicas";

const Caracteristica = ({numero, subtitulo, parrafo}: Caracteristica) => {
    return (
        <div className="flex items-start gap-2">
            <span className="bg-[#23A455] text-center rounded-full px-[9px] py-[3px] text-[15px] text-white md:px-[13px] md:py-[6px]">
                {numero}
            </span>
            <div>
                <h3 className="text-[#23A455] text-lg">
                {subtitulo}
                    
                </h3>
                <p>{parrafo}</p>
            </div>
        </div>
    );
};

export default Caracteristica;
