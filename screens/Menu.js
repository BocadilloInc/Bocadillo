import React, {useContext, useEffect} from 'react';
import FirebaseContext from '../Context/firebase/firebaseContext';
import PedidosContext from '../Context/pedidos/pedidosContext';

import {FlatList, StyleSheet, Text, View, StatusBar} from 'react-native';
function Menu() {
  const {obtenerProductos, menu} = useContext(FirebaseContext);
  const {seleccionarPlatillo} = useContext(PedidosContext);
  useEffect(() => {
    obtenerProductos();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.nombre}</Text>
      <Text>{item.descripcion}</Text>
    </View>
  );

  return (
    <FlatList
      data={menu}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
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
