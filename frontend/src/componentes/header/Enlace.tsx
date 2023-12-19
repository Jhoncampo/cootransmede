import { Enlace } from "../../interfaces/enlace";


const Enlace = ({to, children}: Enlace) => {
    return (
        <a
            href={to}
            className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4"
        >
            {children}
        </a>
    );
};

export default Enlace;
