import { useState } from "react"
import CaretDown from "../../iconos/CaretDown"
import DropEnlace from "./DropEnlace"


const DropNoticias = () => {
    const [click, setClick] = useState(false)
  return (
    <div className="relative">
            <a href="" onMouseEnter={()=> setClick(true)} onMouseLeave={()=>setClick(false)} className=" flex items-center gap-1 text-base ">NOTICTM
            <CaretDown/>
            </a>
            <ul className={`${click ? "" : "hidden"}  hover:flex flex-col  items-start w-52 lg:absolute`}>
                <DropEnlace to="/pagos">Usuarios</DropEnlace>
                <DropEnlace to="/pagos">Asociados</DropEnlace>
                <DropEnlace to="/pagos">Conductores</DropEnlace>
            </ul>
        </div>
  )
}

export default DropNoticias