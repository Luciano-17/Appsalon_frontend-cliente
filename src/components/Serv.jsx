import useCliente from "../hooks/useCliente"

const Serv = ({servicio}) => {
    const {eliminarServicio, agregarServicio} = useCliente()
    
    const seleccionarServicio = e => {
        let servicio

        if(e.target.tagName === 'P' || e.target.tagName === 'H3') {
            servicio = e.target.parentElement
            const id = servicio.id

            if(servicio.classList.contains('seleccionado')) {
                servicio.classList.remove('seleccionado')

                eliminarServicio(id)
            } else {
                servicio.classList.add('seleccionado')

                const precioBien = servicio.firstElementChild.nextElementSibling.textContent.split('$')
                
                let servicioObj = {
                    id,
                    nombre: servicio.firstElementChild.textContent,
                    precio: precioBien[1]
                }

                agregarServicio(servicioObj)
            }
        }
    }

    return (
        <>
            <div
                id={`${servicio._id}`}
                className="bg-gray-200 text-gray-800 p-2 rounded-md text-lg md:text-xl shadow-md cursor-pointer"
                onClick={e => seleccionarServicio(e)}>
                <h3 className="font-bold">{servicio.nombre}</h3>
                <p className="font-bold text-purple-700">${servicio.precio}</p>
            </div>
        </>
    )
}

export default Serv