const PSE = () => {
    return (
        <div className="flex flex-col items-center text-justify gap-4 md:px-5 lg:flex-1">
            <img
                src="https://www.cootransmede.com/wp-content/uploads/2022/02/logo-pse-300x300-1-150x150.png"
                alt=""
                className="lg:max-w-sm"
            />
            <p>
                Apreciado Asociado, habilitamos otra forma de realizar sus pagos
                en Cootransmede, a través del botón PSE (Pagos Seguros en Línea)
                donde se debitará el dinero en línea de su cuenta de ahorros,
                corriente o deposito electrónico, independiente banco donde
                tenga su cuenta.
            </p>
            <a
                className="px-3 py-2 text-white rounded-sm bg-[#23A455] text-center"
                href="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=11209"
                target="_blank"
            >
                Ir a PSE
            </a>
            <p className="text-lg font-semibold pb-4">
                Las transacciones por PSE son seguras y serán notificadas en el
                correo electrónico registrado por usted en PSE.
            </p>
        </div>
    );
};

export default PSE;
