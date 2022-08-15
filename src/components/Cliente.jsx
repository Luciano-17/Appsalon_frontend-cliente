import { useState } from "react"
import useCliente from "../hooks/useCliente"
import Alerta from './Alerta'

const Cliente = () => {
    const {guardarCliente, cita} = useCliente()

    const [nombre, setNombre] = useState(cita.nombre)
    const [fecha, setFecha] = useState(cita.fecha)
    const [hora, setHora] = useState(cita.hora)
    const [alerta, setAlerta] = useState({})

    const handleSubmit = e => {
        e.preventDefault()

        if([nombre, fecha, hora].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }

        const diaElegido = new Date(fecha).getUTCDay()
        if([0, 1, 6].includes(diaElegido)) {
            setAlerta({
                msg: 'Domingo, Lunes y Sábado no permitidos',
                error: true
            })
            return
        }

        const horaCita = hora.split(':')
        if(horaCita[0] < 10 || horaCita[0] > 20) {
            setAlerta({
                msg: 'El horario de atención es de 10hs a 20hs',
                error: true
            })
            return
        }

        const clienteObj = {
            nombre,
            fecha,
            hora
        }

        guardarCliente(clienteObj)

        setAlerta({
            msg: 'Guardado correctamente',
            error: false
        })
    }

    const {msg} = alerta

    return (
        <>
            <h2 className="text-center text-2xl font-bold">Tus datos y cita</h2>
            <p className="text-center text-lg md:text-xl mt-2 md:mt-5">Coloca tus datos y fecha de tu cita</p>

            <form
                className="w-full flex flex-col gap-6 mt-10"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <label htmlFor="nombre" className="uppercase cursor-pointer font-bold md:w-20 md:text-end">Nombre</label>
                    <input 
                        type='text'
                        name='nombre'
                        id="nombre"
                        placeholder="Ingrese su nombre"
                        className="border-2 outline-none border-transparent focus:border-purple-600 p-1 rounded-sm bg-gray-200 text-gray-800 text-sm md:w-8/12"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <label htmlFor="fecha" className="uppercase cursor-pointer font-bold md:w-20 md:text-end">Fecha</label>
                    <input 
                        type='date'
                        name='fecha'
                        id="fecha"
                        placeholder="Ingrese una fecha"
                        className="border-2 outline-none border-transparent focus:border-purple-600 p-1 rounded-sm bg-gray-200 text-gray-800 text-sm md:w-8/12"
                        min={fecha}
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                    <label htmlFor="hora" className="uppercase cursor-pointer font-bold md:w-20 md:text-end">Hora</label>
                    <input 
                        type='time'
                        name='hora'
                        id="hora"
                        placeholder="Ingrese su nombre"
                        className="border-2 outline-none border-transparent focus:border-purple-600 p-1 rounded-sm bg-gray-200 text-gray-800 text-sm md:w-8/12"
                        value={hora}
                        onChange={e => setHora(e.target.value)}
                    />
                </div>

                {msg && <Alerta alerta={alerta} />}

                <input 
                    type='submit'
                    value='Guardar'
                    className='font-bold uppercase shadow-md bg-gray-200 text-gray-800 rounded-md w-full md:w-6/12 mx-auto py-2 cursor-pointer duration-300 hover:bg-purple-700 hover:text-gray-200 mt-2 mb-5'
                />
            </form>
        </>
    )
}

export default Cliente