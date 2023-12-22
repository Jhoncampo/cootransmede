import { Enlace } from "../../../interfaces/enlace"


const DropEnlace = ({children}: Enlace) => {
  return (
    <li className="w-full flex "><a href="" className="py-2 px-3 w-full text-left hover:bg-black hover:text-white">{children}</a></li>
  )
}

export default DropEnlace