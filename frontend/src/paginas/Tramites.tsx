import InformacionCorta from "../componentes/Global/InformacionCorta";
import SeccionInformacion from "../componentes/Global/SeccionInformacion";

const Tramites = () => {
    return (
        <>
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2022/04/plantilla768x512.jpg"
                titulo="Realice sus pagos"
                descripcion={[
                    `A través de este vínculo usted podrá realizar sus pagos a nuestra Cooperativa.`,
                ]}
            >
                <a href="#pagos" className="text-white bg-[#23A455] px-4 rounded-sm py-2">Haga click aquí</a>
            </SeccionInformacion>
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/AREA-ADMINISTRATIVA-52-1024x683.jpg"
                titulo="Cootransmede"
                posisionX={true}
                descripcion={[
                    `La Cooperativa de Transporte de Medellín, C.T.M. COOTRANSMEDE, es una empresa del sector de la economía solidaria,
                     fundada en diciembre de 1965 por diez propietarios de taxis que tenían como objetivo fundamental fortalecer la actividad del 
                     transporte individual tipo taxi y generar una mejor calidad de vida para los asociados y sus familias. En sus inicios la Cooperativa
                      operaba en un local arrendado y sus libros de cuentas eran simples cuadernos escolares. Poco a poco la empresa fue creciendo con la
                       llegada de nuevos asociados y el incremento de capital, hasta el punto que en año de 1986 contaba con una sede propia para beneficio
                        de 190 asociados que conformaban la Cooperativa de esa época.`,
                ]}
            />
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/AREA-ADMINISTRATIVA-49-1024x683.jpg"
                titulo="Afiliación seguridad social"
                descripcion={[
                    `Satisfacer las necesidades de los asociados, maximizando el valor agregado de los empleados para que a través de ellos,
                    se logre un balance social rico en capacitación permanente, participación democrática, efectiva en los órganos de administración y beneficio para él,
                    ellos y su núcleo familiar, con base en los principios cooperativos vigentes.`,
                ]}
            />
            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/05/PARQUEADERO-8-1024x683.jpg"
                titulo="Tarjetas de operación"
                posisionX={true}
                descripcion={[
                    `Ser una empresa líder en servicio al transportador y a la comunidad.`,
                ]}
            />
            <SeccionInformacion
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/AREA-ADMINISTRATIVA-34-1024x683.jpg"
                titulo="Liquidación de conductores"
                descripcion={[
                    `La actividad principal es coordinar la prestación del servicio de transporte público de taxis; comercializar 
                    los productos y servicios requeridos por la industria del transporte como equipos, repuestos, insumos, 
                    servicio de taller para mantenimiento y reparación y las demás actividades necesarias para el cumplimiento de sus objetivos.`,
                ]}
            />
            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/09/ACOPIO-LAURELES-7-1024x683.jpg"
                titulo="Tarjeta amarilla"
                posisionX={true}
            />
            {/* planilla de viaje */}

            <div className="flex justify-center">
                <div className="max-w-[1024px] py-6 px-3 md:px-6">
                    <img
                        src="https://www.cootransmede.com/wp-content/uploads/2021/03/planillas-1024x1024.jpg"
                        alt=""
                        className="md:float-left md:max-w-md mr-2 mb-2"
                    />
                    <div className="text-justify flex flex-col gap-3 text-[#7a7a7a] md:block">
                        <h2 className="text-3xl text-center text-[#23A455] font-raleway font-extrabold my-6">
                            Planillas de viaje
                        </h2>
                        <p>
                            La Planilla de Viaje Ocasional, es un documento que
                            permite que los conductores de vehículos de servicio
                            público terrestre automotor individual tipo taxi,
                            puedan circular por fuera de su radio de acción;
                            cuenta con un código de seguridad o Código QR a
                            través del cual las autoridades de control podrán
                            verificar su autenticidad y será expedida a través
                            de medios electrónicos, página web y dispositivos
                            móviles.
                        </p>
                        <p>
                            El siguiente es el procedimiento para la solicitud
                            de la planilla de viaje ocasional electrónica:
                        </p>
                        <p>
                            1- La planilla de viaje ocasional podrá ser
                            solicitada en forma personal en el segundo piso de
                            la Cooperativa, de lunes a viernes de 8:00 a.m. a
                            5:00 p.m. o en el Estacionamiento de Laureles de
                            lunes a domingo, las 24 horas del día.
                        </p>
                        <p>
                            También podrá solicitar su planilla via Whatsapp
                            3122656565.
                        </p>
                        <p>
                            2- La cantidad de planillas no podrá ser superior a
                            seis (6) por mes para los vehículos vinculados a
                            empresas de transporte en la modalidad terrestre
                            automotor individual tipo taxi.
                        </p>
                        <p>
                            3- Cuando el vehículo se movilice sin pasajeros
                            fuera de su radio de acción autorizado, requerirá en
                            todo caso haber diligenciado la Planilla Única de
                            Viaje Ocasional, para su desplazamiento.
                        </p>
                        <p>
                            4- La Planilla Única de Viaje Ocasional deberá ser
                            presentada por el conductor del vehículo a las
                            autoridades de control en vía en formato físico o
                            digital.
                        </p>
                        <p>
                            5-Para la expedición de la planilla por el sistema
                            RUNT, la empresa de transporte deberá cancelar la
                            suma correspondiente, por cada PVO.
                        </p>
                        <b>Generalidades:</b>
                        <p>
                            1- La <b>PVO</b> podrá solicitarse máximo con 8 días
                            calendario, con antelación a la fecha de realización
                            del viaje.
                        </p>
                        <p>
                            2- Para la solicitud de la planilla de viaje debe
                            tener definido claramente las características del
                            viaje, así:
                        </p>
                        <ul className="list-disc pl-7">
                            <li>Placa del vehículo</li>
                            <li>Identificación del Conductor (cédula).</li>
                            <li>Fecha y hora de inicio del viaje</li>
                            <li>Departamento, Municipio de origen</li>
                            <li>Fecha y hora de fin de viaje.</li>
                            <li>Departamento, Municipio destino.</li>
                            <li>Cantidad de pasajeros.</li>
                            <li>
                                Ida y regreso con el mismo contratante (Si/No).
                            </li>
                            <li>
                                Datos del contratante (tipo y número de
                                documento, dirección y teléfono de contacto).
                            </li>
                        </ul>
                        <p>
                            3- La persona autorizada tendrá un tiempo máximo de
                            15 minutos contados a partir del inicio del viaje
                            para desistir o modificar la información del viaje
                            ocasional en el sistema HQ – RUNT.
                        </p>
                        <p>
                            4- En este caso puede realizar el desistimiento o la
                            modificación de la PVO marcando el número
                            3122656565, teniendo en cuenta que no hay lugar a la
                            devolución del dinero.
                        </p>
                        <p>
                            5- Se utilizará una sola PVO cuando el viaje sea ida
                            y regreso con el mismo contratante. En el caso en
                            que se tenga un contrato de ida y uno diferente de
                            regreso, se deberá disponer de una planilla por cada
                            contrato. Esto deberá ser digitado en el sistema
                            desde el inicio del viaje de ida.
                        </p>
                    </div>
                </div>
            </div>

            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/08/SERVICIO.png"
                titulo="Afiliación al sistema GPS"
                posisionX={false}
            />
            <InformacionCorta
                img="https://www.cootransmede.com/wp-content/uploads/2020/10/PARQUEADERO-2-1024x683.jpg"
                titulo="Afiliación Vehículo Nuevo"
                posisionX={true}
            />
        </>
    );
};

export default Tramites;
