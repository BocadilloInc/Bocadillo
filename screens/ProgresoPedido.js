import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet, Text, StatusBar,Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PedidosContext from '../Context/pedidos/pedidosContext';
import firebase from '../firebase';

import CountDown from 'react-native-countdown-component';
import { min } from 'react-native-reanimated';

function ProgresoPedido() {

    const navigation = useNavigation();
    const { idpedido } = useContext(PedidosContext);

    const [completado,guardarCompletado] = useState(false);
    const [tiempo, guardarTiempo] = useState(0);

    useEffect(()=>{
      const obtenerProducto = () =>{
        firebase.db.collection('ordenes')
                          .doc(idpedido)
                          .onSnapshot(function(doc){
                                guardarTiempo(doc.data().tiempoentrega);
                                guardarCompletado(doc.data().completado)
                          })
      }
      obtenerProducto();
    },[]);

    //Muestra el count down en la pantalla
    const renderer = (minutes, seconds) =>{
      console.log(minutes);
      console.log(seconds);
      return(
        <Text>{minutes}:{seconds}</Text>  
      )
    }

    return (
        <View>
          {tiempo === 0 && (
            <>
              <Text style={styles.title}>Hemos recibido tu orden ...</Text>


              <Text  style={styles.title}>Se esta calculando el tiempi de entrega...</Text>
            </>
          )}
          {
           !completado && tiempo != ''  &&(
              <>
                <Text  style={styles.title}>Su orden estara lista alrededor de las :{ tiempo}</Text>
              </>
            )
          }
          {
            completado  &&(
              <>
                <Text style={styles.title}>Orden lista</Text>
                <Text  style={styles.title}>Por favor, pase a recoger su pedido</Text>

                <Button
                  onPress={ ()=> navigation.navigate("NuevaOrden")}
                  title="comenzar orden nueva"
                />
              </>
            )
          }
        </View>
    )
}

export default ProgresoPedido;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    title: {
      fontSize: 23,
      color: 'black',
    }
  });