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
    const seleccionarPlatillo = platillo => { 
        console.log(platillo);
        dispatch({
            typeof: SELECCIONAR_PRODUCTO
            ,payload: platillo
        })
    }

    return(
        <PedidosContext.Provider
            value={{
                seleccionarPlatillo,
                pedido: state.pedido,
                platillo: state.platillo,
                
            }}

        >
            {props.children}
        </PedidosContext.Provider>
    )
}
export default PedidosState;