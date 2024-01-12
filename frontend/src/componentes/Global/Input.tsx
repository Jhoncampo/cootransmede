import { Input } from "../../interfaces/input";

const Input = ({type="text", texto, required=false, id, placeholder}: Input) => {
    return (
        <div className="flex flex-col mb-3">
            <label htmlFor={id} className="text-white">{texto}</label>
            <input type={type} required={required} id={id} placeholder={placeholder} className="py-1 px-2 text-[#7a7a7a] opacity-70 outline-none rounded"/>
        </div>
    );
};

export default Input;
