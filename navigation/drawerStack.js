import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainStack from './mainStack';
import { DrawerContent } from './drawerContent';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent {... props}  /> }  
      initialRouteName="MainStack" 
      screenOptions={ { headerShown: false, swipeEdgeWidth: 0, } }
      gestureEnabled='false'      
      >   
      <Drawer.Screen name="MainStack" component={MainStack} options={{ drawerItemStyle: { height: 0 }}} />       
    </Drawer.Navigator>    
  );
}





export default DrawerStack;