import { Enlace } from "../../interfaces/enlace";

const Enlace = ({ to, children }: Enlace) => {
    return (
        <a
            href={to}
            className="block md:w-96 lg:w-auto text-base lg:inline-block lg:mt-0 hover:border-b p-2 hover:border-green-700 hover:ease-linear hover:duration-300"
        >
            {children}
        </a>
    );
};

export default Enlace;
