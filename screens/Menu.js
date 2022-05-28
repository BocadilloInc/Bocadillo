import React, {useContext, useEffect} from 'react';
import FirebaseContext from '../Context/firebase/firebaseContext';
import PedidosContext from '../Context/pedidos/pedidosContext';

import {  FlatList, StyleSheet, Text, View , StatusBar} from 'react-native';
function Menu() {
    //Context de Firebase

    const { obtenerProductos, menu } = useContext(FirebaseContext);
    //context de pedido
    const { seleccionarPlatillo } = useContext(PedidosContext);
    useEffect( () => {
        obtenerProductos();
        
    }, []);
    /*const comidas = menu.map(platillo =>{
        const {nombre,id,descripcion,imagen}=platillo;

        const renderItem = () => (
            <View style={styles.item}>
              <Text style={styles.nombre}>{nombre}</Text>
              <Text style={styles.nombre}>{descripcion}</Text>
            </View>
            
          );

          return(
            <FlatList
                data={menu}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        )
    });
    */
    const renderItem = () => (
        menu.map((menu) => 
        <View style={styles.item}>
                <Text>{menu.nombre}</Text>
                
        </View>)
        
      );
    return (
        <FlatList
                data={menu}
                renderItem={renderItem}
             
            />
    
    )
}
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
      color:'black'
    },
  });
  
export default Menu;
