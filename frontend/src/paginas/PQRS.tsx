import { useState } from "react";
import BannerPagina from "../componentes/Global/BannerPagina";
import Input from "../componentes/Global/Input";
import InputOpcion from "../componentes/Global/InputOpcion";
import Textarea from "../componentes/Global/Textarea";

const PQRS = () => {
    const [valor, setValor] = useState("")
    return (
        <div>
            <BannerPagina
                bgImagen="https://www.cootransmede.com/wp-content/uploads/2024/01/bannerAsociados.png"
                titulo="PQRS"
            />
            <div className="flex items-center justify-center py-16">
                <form action="" className="max-w-lg w-full px-3">
                    <InputOpcion valor={setValor}/>
                    <Input border placeholder="Eliga situación" />
                    <Input border placeholder="Situación" />
                    <Input border placeholder="Situación" />
                    <Input border placeholder="Situación" />
                    <Textarea border placeholder="Detalle de PQRS"/>
                </form>
            </div>
        </div>
    );
};

export default PQRS;
