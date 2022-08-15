import useCliente from "../hooks/useCliente"
import Alerta from "./Alerta"
import ServSeleccionado from "./ServSeleccionado"
import { useState } from "react"

const Resumen = () => {
    const [alerta, setAlerta] = useState({})

    const {cita, guardar} = useCliente()
    const {nombre, fecha, hora, servicios} = cita

    let mostrarResumen = false
    if(![nombre, fecha, hora].includes('') && servicios.length) {
        mostrarResumen = true
    }

    let totalPagar = 0
    servicios.forEach(servicio => {
        totalPagar += parseInt(servicio.precio)
    })

    const guardarCita = () => {
        setAlerta({
            msg: 'Cita almacenada correctamente',
            error: false
        })

        guardar()

        setTimeout(() => {
            setAlerta({})
            window.location.reload()
        }, 3000);
    }

    const {msg} = alerta

    return (
        <>
            <h2 className="text-center text-2xl font-bold">Resumen</h2>

            {[nombre, fecha, hora].includes('') && (
                <p className="text-center text-xl mt-10">
                    Falta información del cliente para la cita
                </p>
            )}

            {!servicios.length && (
                <>
                    <p className="text-center text-xl mt-10">
                        Falta seleccionar servicios para la cita
                    </p>
                </>
            )}

            {mostrarResumen && (
                <>
                    <div className="mt-5">
                        <ul className="font-bold text-lg">
                            <li>
                                Nombre: <span className="text-purple-600 ml-2">{nombre}</span>
                            </li>
                            <li>
                                Fecha: <span className="text-purple-600 ml-2">{fecha}</span>
                            </li>
                            <li>
                                Hora: <span className="text-purple-600 ml-2">{hora}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-center text-xl font-bold mt-5">Resumen de los servicios</h3>

                        <div className="flex flex-col gap-4 md:gap-6 mt-5">
                            {servicios.map(servicio => (
                                <ServSeleccionado key={servicio.id} servicio={servicio} />
                            ))}
                        </div>

                        <div className="flex justify-between mt-2 font-bold pt-4 border-4 border-transparent border-t-gray-800">
                            <p>Total a pagar</p>
                            <p className="text-purple-600">${totalPagar}</p>
                        </div>
                    </div>

                    {msg && <Alerta alerta={alerta} />}
                    
                    <div className="flex items-center">
                        <button
                            type='button'
                            className="font-bold uppercase shadow-md bg-gray-200 text-gray-800 rounded-md w-full md:w-6/12 mx-auto py-2 cursor-pointer duration-300 hover:bg-purple-700 hover:text-gray-200 mt-10 mb-5"
                            onClick={() => guardarCita()}>
                            Guardar Cita
                        </button>
                    </div>
                </>
            )}
        </>
    )
}

export default Resumen