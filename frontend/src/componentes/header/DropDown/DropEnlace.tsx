import { Enlace } from "../../../interfaces/enlace"


const DropEnlace = ({children}: Enlace) => {
  return (
    <li className="w-full h-auto py-2 ease-linear duration-200 hover:text-white hover:bg-[#3a3f45]"><a href="" className=" px-4 w-full text-left  ">{children}</a></li>
  )
}

export default DropEnlace