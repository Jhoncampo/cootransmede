const Pagos = () => {
    return (
        <div>
            <div className="mx-2 text-[#7a7a7a] border-b border-black box-border md:mx-6">
                <h1 className="text-[#23A455] text-3xl text-center font-semibold py-9">
                    FORMAS PARA REALIZAR SUS PAGOS
                </h1>
                <div className="">
                    <div  className="flex flex-col items-center gap-4 mb-3">
                        <img
                            src="https://www.cootransmede.com/wp-content/uploads/2022/03/2560px-Logo_Bancolombia.svg-1024x241.png"
                            alt="bancolombia"
                            className="py-8 max-w-lg"
                        />
                        <p className="text-justify">
                            Apreciado Asociado, ahora realizar sus pagos a
                            través de los medios electrónicos es mucho más
                            fácil, lo invitamos a ingresar a:
                        </p>
                        <a
                            href=""
                            className="px-3 py-2 text-white rounded-sm bg-[#23A455] text-center"
                        >
                            Sucursal Virtual Bancolombia
                        </a>
                    </div>
                    <b className="text-justify ">
                        Instructivo para realizar pagos a través de Sucursal
                        Virtual Personas:
                    </b>
                    <p className="my-3">
                        Inicia la inscripción de facturas:
                    </p>
                    <ul className="list-decimal pl-8 mb-3">
                        <li>Ingrese a <a href="#bancolombia" className="text-red-600 hover:text-blue-600">bancolombia.com</a></li>
                        <li>Opción Sucursal Virtual Personas.</li>
                        <li>Ingrese su Usuario.</li>
                        <li>Ingrese su Clave usando el teclado virtual.</li>
                        <li>Seleccione la opción Pagos.</li>
                        <li>Inscribir.</li>
                        <li>Clave dinámica.</li>
                        <li>
                            Digitar el Código: 11336 y seleccionar Cootransmede.
                        </li>
                        <li>
                            Descripción: Seguridad Social y/o Administración.
                        </li>
                        <li>N° de Móvil</li>
                        <li>Dar click en inscribir.</li>
                    </ul>
                    <p className="mb-3">
                        Luego de inscribir exitosamente la empresa solo debe
                        realizar el siguiente proceso.
                    </p>
                    <ul className="list-decimal pl-8">
                        <li>Ingrese a <a href="#bancolombia" className="text-red-600 hover:text-blue-600">bancolombia.com</a></li>
                        <li>Opción Sucursal Virtual Personas.</li>
                        <li>Ingrese su Usuario.</li>
                        <li>Ingrese su Clave usando el teclado virtual.</li>
                        <li>Seleccionar pagos.</li>
                        <li>Dar clic en Facturas.</li>
                        <li>Seleccionar Realizar pago.</li>
                        <li>
                            Ingrese la Clave Dinámica (código de 6 dígitos que
                            se genera por la App Bancolombia).
                        </li>
                        <li>Selecciona la factura a pagar.</li>
                        <li>Ingresa el código 11336.</li>
                        <li>Verificar el valor a pagar.</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center text-justify gap-4 md:px-5">
                    <img
                        src="https://www.cootransmede.com/wp-content/uploads/2022/02/logo-pse-300x300-1-150x150.png"
                        alt=""
                        className=""
                    />
                    <p>
                        Apreciado Asociado, habilitamos otra forma de realizar
                        sus pagos en Cootransmede, a través del botón PSE (Pagos
                        Seguros en Línea) donde se debitará el dinero en línea
                        de su cuenta de ahorros, corriente o deposito
                        electrónico, independiente banco donde tenga su cuenta.
                    </p>
                    <a className="px-3 py-2 text-white rounded-sm bg-[#23A455] text-center" href="">Ir a PSE</a>
                    <p className="text-lg font-semibold pb-4">
                        Las transacciones por PSE son seguras y serán
                        notificadas en el correo electrónico registrado por
                        usted en PSE.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src="https://www.cootransmede.com/wp-content/uploads/2022/04/canales-pago.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Pagos;
