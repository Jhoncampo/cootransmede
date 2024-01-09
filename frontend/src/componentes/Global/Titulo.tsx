type Titulo = {
    titulo?: string;
};

const Titulo = ({ titulo }: Titulo) => {
    return (
        <h2
            className={`text-3xl text-center text-[#23A455] font-raleway font-extrabold md:text-center md:pb-3`}
        >
            {titulo}
        </h2>
    );
};

export default Titulo;
