import { Enlace } from "../../../interfaces/enlace"


const DropEnlace = ({children}: Enlace) => {
  return (
    <li className="w-full h-auto"><a href="" className="py-2 px-4 text-left hover:bg-[#3a3f45] hover:text-white">{children}</a></li>
  )
}

export default DropEnlace