import React from 'react';
import { View, Text } from 'react-native';

import BarraSuperior from '../components/barraSuperior';

const ScreenGeneral = ( {navigation} ) => {
  return (
      
    <View>
      <BarraSuperior navigation={navigation}/>
      <View>
        <Text style={{margin: 40, textAlign:'center', fontSize:40}}>
           Pantalla Principal
        </Text>
      </View>
    </View>
  );
}


export default ScreenGeneral;
