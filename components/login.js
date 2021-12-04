import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../styles/style.js';


function Login() {
    const navigation = useNavigation();

    return (
    <View style={style.container}>
        <View style={style.inputContainer}>

            <TouchableOpacity style={style.back} onPress={() => navigation.goBack()} > 
                <Image source={require('../assets/back.svg')} style={{width: 20, height: 20}}/>
            </TouchableOpacity>


            <Text style={style.textInput}>E-mail</Text>
            <View style={style.line}>
                <TextInput style={style.input} placeholder="email@exemplo.com" />
            </View>

            <View style={style.espaco}></View>

            <Text style={style.textInput}>Senha</Text>
            <View style={style.line}>
                <TextInput
                        style={style.input}
                        secureTextEntry
                        placeholder="***********"
                    />
            </View>
            <Text style={style.labelB}><TouchableOpacity style={style.link}>
                    Esqueci minha senha</TouchableOpacity></Text>
            

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <Text style={style.label}>Não tem uma conta? <TouchableOpacity style={style.link}
            onPress={ () => navigation.navigate('Cadastro')}>
                    Cadastrar</TouchableOpacity></Text>
        </View>
        <Image source={require('../assets/patas.png')} style={style.decoration}/>
     </View>
    );
  }

export default Login;