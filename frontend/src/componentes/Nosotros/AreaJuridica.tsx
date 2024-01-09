import Titulo from "../Global/Titulo"

const AreaJuridica = () => {
  return (
    <div className="px-3 py-10 flex flex-col items-center justify-center gap-6 text-[#666565] md:block md:px-7 lg:flex">
                <div className="max-w-[1024px] w-full ">
                    <img
                        src="https://www.cootransmede.com/wp-content/uploads/2020/12/plantilla-fotos-asociados.jpg"
                        alt="judirica"
                        className="rounded-lg md:max-w-xs md:float-left md:mr-7 md:mb-5 lg:max-w-md"
                    />

                    <div className="">
                        <Titulo titulo="Área Jurídica" />
                        <ul className="list-disc px-8 mt-4 text-[15px]">
                            <li>
                                Asesoría Jurídica personalizada
                                (contravencional, civil, laboral y penal).
                            </li>
                            <li>
                                Asisitencia y asesoría en las audiencias de
                                conciliación de la Ley 640 del 2001.
                            </li>
                            <li>
                                Contestación demandas civiles y laborales y
                                procesos administrativos de transporte
                            </li>
                            <li>
                                Asesoría de comité de siniestros para establecer
                                responsabilidades y valores a pagar.
                            </li>
                            <li>
                                Apayo jurídico y logístico a todas las
                                dependencias de la Cooperativa.
                            </li>
                        </ul>
                        <div className="mt-4">
                            <b>Horario Área Jurídica:</b>
                            <p>Lunes a viernes de 9:00 a.m a 12:00 p.m.</p>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default AreaJuridica