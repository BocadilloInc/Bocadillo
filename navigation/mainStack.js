import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import screenInicio from '../screens/screenInicio'
import screenRegistro from '../screens/screenRegistro'
import screenGeneral from '../screens/screenGeneral'


const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (

        <Stack.Navigator
            screenOptions={ { headerShown: false } }
        >
            <Stack.Screen 
                name = 'Inicio'
                component = { screenInicio }
            />
            <Stack.Screen 
                name = 'Registro'
                component = { screenRegistro }
            />
            <Stack.Screen 
                name = 'General'
                component = { screenGeneral }
            />                
        </Stack.Navigator>
    )    
}

export default MainStack