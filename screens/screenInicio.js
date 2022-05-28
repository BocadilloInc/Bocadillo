import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/sInicioStyles';
import auth from '@react-native-firebase/auth'; 
const ScreenInicio = ( {navigation} ) =>{
  
    const [email, setEmail] = React.useState('')
    const [password, setPassword] =  React.useState('') 
  
    function IniciarSesion(){
      auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
          navigation.navigate('NuevaOrden')
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
      }
    return (
        
      <View style={styles.mainContainer}>
        <View style={styles.backContainer}>
          <Text style={styles.titulo}>Iniciar Sesión</Text>        
          
          <Text style={styles.subtitulo}>Correo Electronico</Text>
          <View style={styles.container}>
            <TextInput onChangeText={(text) => setEmail(text)} style={styles.Input} placeholder='Correo Electronico'/>
            <Icon name="user" size={30} color="#999" /> 
          </View>
  
          <Text style={styles.subtitulo}>Contraseña</Text>
          <View style={styles.container}>
            <TextInput onChangeText={(text) => setPassword(text)} style={styles.Input} secureTextEntry={true} placeholder='Contraseña'/>
            <Icon name="key" size={30} color="#999" /> 
          </View>
  
          
          <Button 
            title='Iniciar Sesion' 
            color='#cb0519' 
            onPress = { () => { navigation.navigate('NuevaOrden') }}
            />
  
          <Text style={styles.textoSecundario}>¿No tienes cuenta? <Text style={{color: '#cb0519'}} onPress = { () => { navigation.navigate('Registro') }}>Registrate Aquí</Text></Text>
        </View>
        
      </View>
    );
  }
  

export default ScreenInicio;
