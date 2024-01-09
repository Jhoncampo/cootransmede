import Titulo from "../Global/Titulo"


const AreaAdministrativa = () => {
  return (
    <div className="flex items-center justify-center md:block l:flex">
                <div className="px-3 py-6 flex flex-col gap-5 max-w-[1024px] md:block l:flex l:flex-row">
                    <img
                        className="rounded-lg md:max-w-xs md:float-left md:mr-7 mb-4 lg:max-w-lg lg:mb-0 lg:max-h-[360px]"
                        src="https://www.cootransmede.com/wp-content/uploads/2021/03/administrativa3.jpg"
                        alt="areaAdministrativa"
                    />
                    <div>
                        <div className="flex flex-col gap-3 md:block">
                            <Titulo titulo="Área Administrativa" />
                            <ul className="px-9 list-disc text-[#7a7a7a] text-[14px]">
                                <li>Seguridad social</li>
                                <li>SEguros Contractual y Extracontractual</li>
                                <li>Póliza de Accidentes Personales</li>
                                <li>Expedición de soat</li>
                                <li>Tarjetas de Servicios</li>
                                <li>Prestaciones sociales</li>
                                <li>Obligaciones fiscales y parafiscales</li>
                                <li>Liquidación a conductores</li>
                                <li>Bienestar social</li>
                                <li>Beneficios par los Asociados</li>
                                <li>Convenios</li>
                                <li>Solidaridad (auxilios)</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3 text-[#7a7a7a] md:block md:mt-3">
                            <h3 className="px-1 font-semibold">
                                LÍNEAS DE CRÉDITO CONFIAR Y CIDESA para:
                            </h3>
                            <ul className="px-9 list-disc text-[14px]">
                                <li>Suministros</li>
                                <li>Adquisición de seguros</li>
                                <li>Adquisición de SOAT</li>
                                <li>Reparación de caja y motor</li>
                                <li>Reparación latonería y pintura</li>
                                <li>
                                    Adquisición de Sistema de comunicación GPS
                                </li>
                                <li>Libre inversión</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

  )
}

export default AreaAdministrativa