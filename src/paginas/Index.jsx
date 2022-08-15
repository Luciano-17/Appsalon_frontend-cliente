import { useState } from "react"

import Servicios from "../components/Servicios"
import Cliente from "../components/Cliente"
import Resumen from "../components/Resumen"

const Index = () => {
    const [mostrarServicios, setMostrarServicios] = useState(true)
    const [mostrarCliente, setMostrarCliente] = useState(false)
    const [mostrarResumen, setMostrarResumen] = useState(false)

    const elegirServicios = () => {
        const botonServicio = document.querySelector('#botonServicio')
        const botonCliente = document.querySelector('#botonCliente')
        const botonResumen = document.querySelector('#botonResumen')
        
        const botonAnterior = document.querySelector('#botonAnterior')
        const botonSiguiente = document.querySelector('#botonSiguiente')
        
        if(!mostrarServicios) {
            setMostrarServicios(true)
            setMostrarCliente(false)
            setMostrarResumen(false)

            botonServicio.classList.add('actual')
            botonCliente.classList.remove('actual')
            botonResumen.classList.remove('actual')
        }

        botonAnterior.classList.add('invisible')
        botonSiguiente.classList.remove('invisible')
    }
    const elegirCliente = () => {
        const botonServicio = document.querySelector('#botonServicio')
        const botonCliente = document.querySelector('#botonCliente')
        const botonResumen = document.querySelector('#botonResumen')
        
        const botonAnterior = document.querySelector('#botonAnterior')
        const botonSiguiente = document.querySelector('#botonSiguiente')

        if(!mostrarCliente) {
            setMostrarServicios(false)
            setMostrarCliente(true)
            setMostrarResumen(false)

            botonServicio.classList.remove('actual')
            botonCliente.classList.add('actual')
            botonResumen.classList.remove('actual')
        }

        botonAnterior.classList.remove('invisible')
        botonSiguiente.classList.remove('invisible')
    }
    const elegirResumen = () => {
        const botonServicio = document.querySelector('#botonServicio')
        const botonCliente = document.querySelector('#botonCliente')
        const botonResumen = document.querySelector('#botonResumen')
        
        const botonAnterior = document.querySelector('#botonAnterior')
        const botonSiguiente = document.querySelector('#botonSiguiente')

        if(!mostrarResumen) {
            setMostrarServicios(false)
            setMostrarCliente(false)
            setMostrarResumen(true)

            botonServicio.classList.remove('actual')
            botonCliente.classList.remove('actual')
            botonResumen.classList.add('actual')
        }

        botonAnterior.classList.remove('invisible')
        botonSiguiente.classList.add('invisible')
    }

    const paginaAnterior = () => {
        const botonAnterior = document.querySelector('#botonAnterior')
        const botonSiguiente = document.querySelector('#botonSiguiente')

        if(mostrarResumen) {
            setMostrarResumen(false)
            setMostrarCliente(true)
            setMostrarServicios(false)
            botonServicio.classList.remove('actual')
            botonCliente.classList.add('actual')
            botonResumen.classList.remove('actual')
            botonSiguiente.classList.remove('invisible')
        } else if(mostrarCliente) {
            setMostrarResumen(false)
            setMostrarCliente(false)
            setMostrarServicios(true)
            botonServicio.classList.add('actual')
            botonCliente.classList.remove('actual')
            botonResumen.classList.remove('actual')
            botonAnterior.classList.add('invisible')
            botonSiguiente.classList.remove('invisible')
        }
    }
    const paginaSiguiente = () => {
        const botonAnterior = document.querySelector('#botonAnterior')
        const botonSiguiente = document.querySelector('#botonSiguiente')

        if(mostrarServicios) {
            setMostrarServicios(false)
            setMostrarCliente(true)
            setMostrarResumen(false)
            botonServicio.classList.remove('actual')
            botonCliente.classList.add('actual')
            botonResumen.classList.remove('actual')
            botonAnterior.classList.remove('invisible')
        } else if(mostrarCliente) {
            setMostrarServicios(false)
            setMostrarCliente(false)
            setMostrarResumen(true)
            botonServicio.classList.remove('actual')
            botonCliente.classList.remove('actual')
            botonResumen.classList.add('actual')
            botonSiguiente.classList.add('invisible')
            botonAnterior.classList.remove('invisible')
        }
    }

    return (
        <>
            <div className="md:grid md:grid-cols-2 md:min-h-screen">
                <div className="imagen"></div>
                
                <div className="w-11/12 mx-auto">
                    <h1 className="text-center font-bold text-4xl text-purple-600 mt-10">App Peluquería</h1>

                    <nav className="grid grid-cols-3 place-items-center gap-6 md:gap-4 my-10">
                        <button
                            className="bg-gray-200 text-gray-800 w-28 md:w-32 py-1 uppercase font-bold rounded-sm duration-300 hover:bg-gray-300 actual"
                            type='button'
                            id='botonServicio'
                            onClick={() => elegirServicios()}>
                            Servicios</button>
                        <button
                            className="bg-gray-200 text-gray-800 w-28 md:w-32 py-1 uppercase font-bold rounded-sm duration-300 hover:bg-gray-300"
                            type='button'
                            id='botonCliente'
                            onClick={() => elegirCliente()}>
                            Cliente</button>
                        <button
                            className="bg-gray-200 text-gray-800 w-28 md:w-32 py-1 uppercase font-bold rounded-sm duration-300 hover:bg-gray-300"
                            type='button'
                            id='botonResumen'
                            onClick={() => elegirResumen()}>
                            Resumen</button>
                    </nav>

                    <div>
                        {mostrarServicios && (
                            <Servicios />
                        )}
                    </div>

                    <div>
                        {mostrarCliente && (
                            <Cliente />
                        )}
                    </div>

                    <div>
                        {mostrarResumen && (
                            <Resumen />
                        )}
                    </div>

                    <div className="px-2 md:px-6 flex justify-between my-5">
                        <button
                            type='button'
                            id='botonAnterior'
                            className="bg-purple-700 px-4 py-2 text-gray-200 font-bold uppercase rounded-sm duration-300 hover:bg-purple-800 invisible"
                            onClick={() => paginaAnterior()}>
                            &laquo; Anterior</button>

                        <button
                            type='button'
                            id='botonSiguiente'
                            className="bg-purple-700 px-4 py-2 text-gray-200 font-bold uppercase rounded-sm duration-300 hover:bg-purple-800"
                            onClick={() => paginaSiguiente()}>
                            Siguiente &raquo;</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index