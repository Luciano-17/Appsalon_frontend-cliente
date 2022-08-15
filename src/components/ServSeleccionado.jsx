const ServSeleccionado = ({servicio}) => {
    const {nombre, precio} = servicio

    return (
        <>
            <div className="flex justify-between">
                <p>{nombre}</p>
                <p className="text-purple-600 font-bold">${precio}</p>
            </div>
        </>
    )
}

export default ServSeleccionado