import { Input } from "../../interfaces/input";

const Textarea = ({ texto, required = false, id, placeholder, border }: Input) => {
    return (
        <div className="flex flex-col mb-3">
            <label htmlFor={id} className="text-white">
                {texto}
            </label>
            <textarea
                required={required}
                id={id}
                placeholder={placeholder}
                rows={4}
                className={`py-1 px-2 opacity-70 text-[#7a7a7a] ${
                    border
                        ? " border-gray-700 border outline-0"
                        : "outline-none"
                }  rounded`}
            ></textarea>
        </div>
    );
};

export default Textarea;
