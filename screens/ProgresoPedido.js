import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet, Text, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PedidosContext from '../Context/pedidos/pedidosContext';


function ProgresoPedido() {
    const { idpedido } = useContext(PedidosContext);
    return (
        <Text style={styles.title}>{idpedido}</Text>
    )
}

export default ProgresoPedido;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    title: {
      fontSize: 32,
      color: 'black',
    }
  });