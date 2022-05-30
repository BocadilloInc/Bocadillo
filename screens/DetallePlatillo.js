import React, {useContext}from 'react';
import {Text,StyleSheet, StatusBar,View, Image, Button} from 'react-native';

import PedidosContext from '../Context/pedidos/pedidosContext';
import { useNavigation } from '@react-navigation/native';

function DetallePlatillo() {

  const {platillo} = useContext(PedidosContext);
  const {nombre,descripcion, precio,id,imagen} = platillo;


  const navigation = useNavigation();

    return (
     <View>
       <Text style={styles.title}>{nombre}</Text>
       <Text style={styles.title}>{descripcion}</Text>
       <Image style={styles.logo} source={{uri:imagen}}/>
       <Button title="Ordenar Platillo" onPress={()=> navigation.navigate('FormularioPlatillo')} />
     </View>
        
     
    )
}

export default DetallePlatillo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
    color: 'black',
  },
  logo: {
    width: 66,
    height: 58,
  },
});