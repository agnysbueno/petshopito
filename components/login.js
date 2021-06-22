import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style.js';


function Login() {
    return (
    <>
        <View style={style.inputContainer}>

            <TouchableOpacity style={style.back}> 
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

            <Text style={style.label}>Não tem uma conta? <TouchableOpacity style={style.link}>
                    Cadastrar</TouchableOpacity></Text>
        </View>
        <Image source={require('../assets/patas.png')} style={style.decoration}/>
     </>
    );
  }

export default Login;