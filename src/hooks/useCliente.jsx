import { useContext } from "react";
import ClienteContext from "../context/ClienteProvider";

const useCliente = () => {
    return useContext(ClienteContext)
}

export default useCliente