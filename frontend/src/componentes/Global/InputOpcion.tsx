import React, {ChangeEvent} from "react"

const InputOpcion = ({valor}) => {

    const valorOpcion = (event: React.ChangeEvent<HTMLInputElement>) =>{
        valor(event.target.value)
    }
  return (
    <select onChange={valorOpcion}>
        <option value="" defaultValue="" hidden>Eliga tipo de situación*</option>
        <option value="felicitacion">Felicitación</option>
        <option value="peticion">Petición</option>
        <option value="reclamo">Reclamo</option>
        <option value="queja">Queja</option>
        <option value="sugerencia">Sugerencia</option>
    </select>
  )
}
 
export default InputOpcion