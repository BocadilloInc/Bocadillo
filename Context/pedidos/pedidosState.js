import React, { useReducer } from "react";
import pedidosReduce from "./pedidosReduce";
import PedidosContext from "./pedidosContext";

import { SELECCIONAR_PRODUCTO } from "../../types";

const PedidosState = props => {
    //State Inicial
    
    const initialState = {
        pedido: [],
        platillo: null
    }

    //useReducer con dispatch para ejecutar las funciones
    const [ state, dispatch ] = useReducer(pedidosReduce, initialState); 

    //Productos para ordenar
    const seleccionarPlatillo = () =>{

    }

    return(
        <PedidosContext.Provider
            value={{
                pedido: state.pedido,
                platillo: state.platillo,
                seleccionarPlatillo,
            }}

        >
            {props.children}
        </PedidosContext.Provider>
    )
}
export default PedidosState;