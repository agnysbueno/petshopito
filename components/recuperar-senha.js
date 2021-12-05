import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style.js';
import firebase from '../components/firebaseConnect';


function RecuperarSenha() {

    const navigation = useNavigation();

    const [email, setEmail] = useState('');

    async function recuperar(){
        await firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                alert('Verifique sua caixa de e-mail.')
            })

        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Erro '+ errorCode + ` ${errorMessage}`)
        });
      }

    return (
        <View style={style.container}>
            <View style={style.inputContainer}>

                <TouchableOpacity style={style.back} onPress={() => navigation.goBack()}> 
                    <Image source={require('../assets/back.svg')} style={{width: 20, height: 20}}/>
                </TouchableOpacity>


                <Text style={style.textInputApp}>E-mail</Text>
                <View style={style.line}>
                    <TextInput style={style.input} placeholder="email@exemplo.com" 
                    onChangeText={(texto) => setEmail(texto) }
                    value={email}/>
                </View>

                <Text style={style.labelB}>Você receberá um e-mail de verificação com o link para redefinir sua senha.</Text>
                

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText} 
                    onPress={recuperar}>Confirmar</Text>
                </TouchableOpacity>

            </View>
            <Image source={require('../assets/senha.png')} style={style.decoration}/>
     </View>
    );
  }

export default RecuperarSenha;