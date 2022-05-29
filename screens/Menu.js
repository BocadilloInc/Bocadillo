import React, {useContext, useEffect} from 'react';
import FirebaseContext from '../Context/firebase/firebaseContext';
import PedidosContext from '../Context/pedidos/pedidosContext';
import { useNavigation } from '@react-navigation/native';

import {FlatList, StyleSheet, Text, View, StatusBar, TouchableOpacity,ScrollView } from 'react-native';
function Menu() {


  const {obtenerProductos, menu} = useContext(FirebaseContext);
  const {seleccionarPlatillo} = useContext(PedidosContext);
  const navigation = useNavigation();
  
  useEffect(() => {
    obtenerProductos();
  }, []);

   const comidas = menu.map(platillo =>{
        const {nombre,id,descripcion,imagen}=platillo;
          return(
            <View style={styles.item} key={id}>
              <TouchableOpacity onPress={
                ()=>{
                  seleccionarPlatillo(platillo);
                  navigation.navigate("DetallePlatillo");
                }
              }>
                  <Text style={styles.nombre}>{nombre}</Text>
                  <Text style={styles.nombre}>{descripcion}</Text>
              </TouchableOpacity>
            </View>

        )
    });
  return (
    <ScrollView>
        {comidas}
    </ScrollView>
    
  );
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
    color: 'black',
  },
});

export default Menu;