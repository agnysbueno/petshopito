import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../styles/style.js';
import firebase from '../components/firebaseConnect';


function Login() {
    const navigation = useNavigation();

    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ usuario, setUsuario ] = useState('');

    async function login(){
        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((value) => {
         
          alert('Bem-vinde!');
          setUsuario(value.user.email);
      
          navigation.navigate('NovoPet', { usuario:value.user.email } );
        })
        .catch( (error) => {
            if(error.code === 'auth/invalid-email'){
                alert('Email invalido');
                return;
            } else {
                alert('Erro! Tente novamente');
                return;
            }
        })

        setSenha('');
      }

      async function sair(){
        await firebase.auth().signOut();
        setUser('');
        alert('Saiu do sistema com sucesso!');
      }


    return (
    <View style={style.container}>
        <View style={style.inputContainer}>
            <TouchableOpacity style={style.back} onPress={() => navigation.goBack()} > 
                <Image source={require('../assets/back.svg')} style={{width: 20, height: 20}}/>
            </TouchableOpacity>


            <Text style={style.textInput}>E-mail</Text>
            <View style={style.line}>
                <TextInput style={style.input} 
                placeholder="email@exemplo.com" 
                onChangeText={(texto) => setEmail(texto) }
                value={email}/>
            </View>

            <View style={style.espaco}></View>

            <Text style={style.textInput}>Senha</Text>
            <View style={style.line}>
                <TextInput
                        style={style.input}
                        secureTextEntry
                        placeholder="***********"
                        onChangeText={(texto) => setSenha(texto) }
                        value={senha}
                    />
            </View>
            <Text style={style.labelB}><TouchableOpacity style={style.link}
            onPress={ () => navigation.navigate('RecuperarSenha')}>
                    Esqueci minha senha</TouchableOpacity></Text>
            

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText} onPress={login}>Entrar</Text>
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