import DescripcionDesplegable from "../Global/DescripcionDesplegable"
import Titulo from "../Global/Titulo"


const AreaComercial = () => {
  return (
    <div
                style={{
                    backgroundImage: `url(${"https://www.cootransmede.com/wp-content/uploads/2020/08/FondoPrin.jpg"})`,
                }}
                className=" relative bg-cover bg-center flex justify-center"
            >
                <div className="bg-white absolute opacity-80 h-full w-full"></div>
                <div className="max-w-[1024px] flex flex-col lg:flex-row">
                    <div className="relative px-3 py-6 md:px-7">
                        <Titulo titulo="Área comercial" />
                        <DescripcionDesplegable
                            titulo="ALMACEN DE RESPUESTOS"
                            descripcion="Suministros básicos para reparación rápida"
                        />
                        <DescripcionDesplegable
                            titulo="VENTA "
                            descripcion="Venta de llantas, baterías y respuestos de suspención para vehículos de servicio público tipo taxi."
                        />
                        <DescripcionDesplegable
                            titulo="CENTRO DE LUBRICACIÓN"
                            descripcion="Lobricantes garantizados, uso tecnológico para la extracción y suministro de lubricantes, control de la fecha de cambio de lubricante"
                        />
                        <DescripcionDesplegable
                            titulo="FRENOS, SUSPENSIÓN Y MÉCANICA"
                            descripcion="Personal capacitado y amplia experiencia en el mantenimiento preventivo y correctivo de los behículos automotores"
                        />
                        <DescripcionDesplegable
                            titulo="ALINEACIÓN COMPUTARIZADA"
                            descripcion="Equipo de moderna tecnología para el diagnóstico y correción del vehículo"
                        />
                        <DescripcionDesplegable
                            titulo="MONTAJE, BALANCEO Y ROTACIÓN DE LLANTAS"
                            descripcion="Equipo de acuerdo a la especificación requerida por el fabricante de llantas, para el mantenimiento de estas. Como calibración parches, balanceos entre otros."
                        />
                        <DescripcionDesplegable
                            titulo="MECÁNICA AUTOMOTRIZ"
                            descripcion="Personal calificado y con experiencia en la inyección electrónicos a todos los motores tipo taxi y vehículos livianos."
                        />
                        <DescripcionDesplegable
                            titulo="LAVADO DE INTECTORES Y SCÁNNER"
                            descripcion="Lavado de inyectores y scánner"
                        />
                        <DescripcionDesplegable
                            titulo="REVISIÓN TÉCNICO MECÁNICA"
                            descripcion="convenio de Certificado de Revisión técnico-mecanicá y de Emisiones Contaminantes"
                        />
                        <DescripcionDesplegable
                            titulo="CONVENIOS ÁREA COMERCIAL"
                            descripcion="Disponemos de los siguientes convenios"
                        >
                            <ul className="list-disc px-8">
                                <li>
                                    Reparación, instalación, mantenimiento
                                    preventivo y correctivo de taxímetros.
                                </li>
                                <li>
                                    Banco de pruebes diagnóstico, reparación y
                                    puesta a punto de los estándares de
                                    fabricación del vehículo.
                                </li>
                            </ul>
                        </DescripcionDesplegable>
                    </div>

                    <div>
                        <img
                            src="https://www.cootransmede.com/wp-content/uploads/2020/12/mecanica.jpg"
                            alt=""
                            className="relative px-3 py-6 md:px-7 lg:max-w-lg"
                        />

                        <div className="relative px-3 pb-5 text-[#727171] md:px-8">
                            <b>Dirección SERVITECA:</b>
                            <p>
                                Cra. 65B 25-47. Trinidad - Medellín Antioquia.
                            </p>
                            <b>Horario:</b>
                            <ul className="list-disc px-8">
                                <li>
                                    <b>Lunes a Viernes: </b>de 8:00 a.m a 5:00
                                    p.m.
                                </li>
                                <li>
                                    <b>Sábados: </b>de 8:00 a.m a 12:00 p.m.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default AreaComercial