import SeccionInformacion from '../Global/SeccionInformacion'

const TarjetaServicios = () => {
  return (
    <>
    <SeccionInformacion
                titulo="Tarjeta de Servicios"
                posisionX={true}
                descripcion={[
                    `Pago de indemnizaciones hasta el tope de cobertura de 3.5 SMLMV,
                    en audiencias de conciliaciones judiciales y perjudiciales con miras
                    a evitar litigios posteriores que afecten los intereses de la empresa.
                    El Consejo de Administración autoriza a la Gerencia los pagos que exceden 
                    el tope máximo de 3.5 SMMLV y hasta 10 SMMLV, en donde a criterio del director 
                    jurídico se pueda ver menoscabado del patrimonio de la Cooperativa en caso de no hacerlo.`,
                ]}
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/ACOPIO-SAN-DIEGO-35-1024x683.jpg"
            />
            <div className="flex justify-center items-center">
                <p className="px-3 text-justify italic text-sm text-[#7a7a7a] max-w-[1024px] md:px-7 md:pb-7">
                    Serán beneficiarios de la ayuda recíproca de esta tarjeta de
                    servicios para atención de accidentes y asuntos conexos y
                    complementarios del transporte, los asociados de C.T.M.
                    COOTRANSMEDE conforme a los ESTATUTOS y que hayan afiliado
                    el vehículo de servicio público determinando claramente y
                    demás características. En caso de que el asociado posea
                    varios vehículos, la afiliación a la tarjeta de servicios
                    para atención de accidentes y asuntos conexos y
                    complementarios del transporte se hace por cada uno de
                    manera independiente. También tendrá esta calidad (de
                    Beneficiarios) los terceros afectados que acrediten los
                    perjuicios con las condiciones y requisitos establecidos en
                    el presente reglamento.
                </p>
            </div>
    </>
  )
}

export default TarjetaServicios