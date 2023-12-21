import CaretDown from "../iconos/CaretDown";

interface DropDown{
    children: string
}

const DropDown = () => {
    return (
        <div className="relative">
            <a href="" className=" flex items-center gap-1 text-base">Tramites
            <CaretDown/>
            </a>
            <ul className=" absolute flex flex-col items-start w-52">
                <li><a href="">Pagos</a></li>
                <li><a href="">Afiliación seguridad social</a></li>
                <li><a href="">Pagos</a></li>
                <li><a href="">Pagos</a></li>
                <li><a href="">Pagos</a></li>
                <li><a href="">Pagos</a></li>
                <li><a href="">Pagos</a></li>
            </ul>
        </div>
    );
};

export default DropDown;
