//Nota: Para hacer botones con estilos usar TouchableOpacity
import React, {useState, useContext, useEffect } from 'react'
import {Text, Image,View, StyleSheet,StatusBar, TouchableOpacity, ScrollView, Button} from 'react-native';

import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PedidosContext from '../Context/pedidos/pedidosContext';
import PedidosState from '../Context/pedidos/pedidosState';

import firebase from '../firebase';



function ResumenPedido() {

    const navigation = useNavigation();
    const { pedido, total, mostrarResumen,  eliminarProducto , pedidoRealizado} = useContext(PedidosContext);
   
    

    useEffect(() => {
      calcularTotal();
    },[pedido]);

    const calcularTotal = () =>{
      let nuevoTotla = 0;
      nuevoTotla = pedido.reduce((nuevoTotla, articulo)=> nuevoTotla + articulo.total, 0);
      mostrarResumen(nuevoTotla);
    }
    //Eliminar Un producto del arreglo del pedido
    const ConfirmarElminacion = id =>{
      Alert.alert(
        'Deseas Eliminar este articulo?',
        'Se eleminara este producto del carrito',
        [
          {
            text: 'Confirmar',
            onPress:() =>{
              //Eleminar el state
              eliminarProducto(id);

            }
          },
          {
            text: 'Revisar', style:'cancel'
          }
        ]
      )
    }

    const Carrito = pedido.map((platillo,i) =>{
        const {nombre,id,descripcion,imagen, cantidad, total}=platillo;
          return(
            <View style={styles.item} key={id + i}>     
              <Text style={styles.nombre}>{nombre}</Text>
              <Text style={styles.nombre}>{descripcion}</Text>
              <Text style={styles.nombre}>{cantidad}</Text>
              <Text style={styles.nombre}>pagar:{total}</Text>
              <Image
                style={styles.imgen}
                source={{uri : imagen}} 
              />
        
              <TouchableOpacity 
                  onPress={ () =>{ConfirmarElminacion(id)}}
              >
                  <Text style={styles.boton}>Eliminar</Text>
              </TouchableOpacity>
               
            </View>
        
        )
    });
    //Redireccion a progreeso pedido
    const progresoPedido = ()=>{
      Alert.alert(
        'Revisa tu pedido',
        'Una vez tu pedido este echo no podras cambiarlo',
        [
          {
            text: 'Confirmar',
            onPress: async () =>{
             

              //Objeto con toda la informacion de la pedido
              const pedidoObj ={
                tiempoentrega: 0,
                completado: false,
                total: Number(total),
                orden: pedido,
                creado: Date.now()

              }
              console.log(pedidoObj);
              //Usar fire base
          
              try {
                const pedido = await firebase.db.collection('ordenes').add(pedidoObj);
                pedidoRealizado(pedido.id);
                navigation.navigate("ProgresoPedido");
              } catch (error) {
                console.log(error);
              }
            }
          },
          {
            text: 'Revisar', style:'cancel'
          }
        ]
      )
    }
    
    return (
      <View>
        <ScrollView>
            {Carrito}
            <Text style={styles.title}>Total a pagar: {total}</Text>
            <Button
                title='Seguir Pidiendo'
                onPress={()=>{
                  navigation.navigate('Menu');
                }}
            />
            <Button
                style={styles.boton}
                title='Confirmar Pedido'
                onPress={()=>{
                 progresoPedido()
                }}
            />
        </ScrollView>
        
      </View>
 
        
    )
}

export default ResumenPedido;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    
  },

  title: {
    fontSize: 32,
    color: 'black',
  },
  imgen: {
    height: 60,
    width: 60
  },
  boton:{
    backgroundColor: 'black',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 7,
  },
});