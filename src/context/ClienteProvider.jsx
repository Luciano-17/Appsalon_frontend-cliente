import {useState, useEffect, createContext} from 'react'
import clienteAxios from '../config/axios'

const ClienteContext = createContext()

const ClienteProvider = ({children}) => {
    const [servicios, setServicios] = useState([])

    // FECHA
    const fechaTotal = new Date
    const year = fechaTotal.getFullYear()
    
    const mes = fechaTotal.getMonth() + 1
    let mesBien
    if(mes > 0 && mes < 10) {
        mesBien = '0' + `${mes}`
    } else {
        mesBien = mes
    }
    
    const dia = fechaTotal.getDate() + 1
    let diaBien
    if(dia > 0 && dia < 10) {
        diaBien = '0' + `${dia}`
    } else {
        diaBien = dia
    }

    const fechaHoy = `${year}-${mesBien}-${diaBien}`

    const cita = {
        nombre: '',
        fecha: fechaHoy,
        hora: '',
        servicios: []
    }

    useEffect(() => {
        const obtenerServicios = async () => {
            try {
                const {data} = await clienteAxios.post('/cliente/servicios')
                setServicios(data)
            } catch (error) {
                console.log(error.response.data.msg)
            }
        }
        obtenerServicios()
    }, [])

    const agregarServicio = async servicioNuevo => {
        const {servicios} = cita
        cita.servicios = await [...servicios, servicioNuevo]
    }

    const eliminarServicio = async id => {
        const {servicios} = cita
        cita.servicios = await servicios.filter(serv => serv.id !== id)
    }

    const guardarCliente = async cliente => {
        const {nombre, fecha, hora} = cliente

        cita.nombre = await nombre
        cita.fecha = await fecha
        cita.hora = await hora
    }

    const guardar = async () => {
        try {
            const {data} = await clienteAxios.post('/cliente/guardar-cita', cita)
        } catch (error) {
            console.log(error.response.data.msg)
        }
    }

    return (
        <ClienteContext.Provider
            value={{
                servicios,
                agregarServicio,
                eliminarServicio,
                guardarCliente,
                cita,
                guardar
            }}
        >
            {children}
        </ClienteContext.Provider>
    )
}

export {ClienteProvider}
export default ClienteContext