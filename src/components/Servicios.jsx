import useCliente from '../hooks/useCliente'
import Serv from './Serv'

const Servicios = () => {
    const {servicios} = useCliente()

    return (
        <>
            <h2 className="text-center text-2xl font-bold">Servicios</h2>
            <p className="text-center text-lg md:text-xl mt-2 md:mt-5">Elige tus servicios a continuación</p>

            {servicios ? (
                <>
                    <div className='flex flex-col gap-6 md:grid md:grid-cols-2 mt-10'>
                        {servicios.map(servicio => (
                            <Serv key={servicio._id} servicio={servicio} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <p className='text-center text-md md:text-lg mt-2 md:mt-5'>No hay servicios disponibles</p>
                </>
            )}
        </>
    )
}

export default Servicios