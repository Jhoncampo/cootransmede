interface Acopio {
    acopio: string;
}

const Acopio = ({ acopio }: Acopio) => {
    return (
        <div className="flex items-center gap-1 mr-4 cursor-pointer">
            <span className="bg-blue-500 w-2 h-2 rounded-full "></span>
            <span className="hover:text-red-600 text-[15px] text-[#666565]">{acopio}</span>
        </div>
    );
};

export default Acopio;
