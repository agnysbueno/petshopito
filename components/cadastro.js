import React,  { useState, useCallback } from 'react';
import { CheckBox, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style.js';
import { useNavigation } from '@react-navigation/native';
import firebase from '../components/firebaseConnect';


function Cadastro() {
    const navigation = useNavigation();

    const [ nome, setNome ] = useState('');
    const [ email, setEmail ] = useState(''); 
    const [ senha, setSenha ] = useState(''); 
    const [ telefone, setTelefone ] = useState(''); 

    const [isSelected, setSelection] = useState(false);

    async function cadastrar() { 
        if ((nome && email && senha && telefone) !== '') {

            await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((value) => {
                firebase.database().ref('Usuarios').child(value.user.uid).set({
                    nome: nome,
                    email: email,
                    telefone: telefone
                })

                alert('Usuário '+ nome + ' cadastrado com sucesso!');
                navigation.navigate('Login');

            })
            .catch((error) => {
                if(error.code === 'auth/invalid-email'){
                    alert('Email invalido');
                    return;
                } else {
                    alert('Algo deu errado, tente novamente')
                    setSenha('');
                }
            })
        }
    }

    return (
        <View style={style.container}>
            <View style={style.inputContainer}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={style.back}> 
                    <Image source={require('../assets/back.svg')} style={{width: 20, height: 20}}/>
                </TouchableOpacity>

                <Text style={style.textInput}>Nome</Text>
                <View style={style.line}>
                    <TextInput style={style.input} placeholder="Como você quer ser chamado?" 
                    onChangeText={(texto) => setNome(texto) } value={nome}/>
                </View>

                <Text style={style.textInput}>Telefone</Text>
                <View style={style.line}>
                    <TextInput style={style.input} placeholder="(xx)xxxxx-xxxx" 
                    onChangeText={(texto) => setTelefone(texto) } value={telefone}/>
                </View>

                <Text style={style.textInput}>E-mail</Text>
                <View style={style.line}>
                    <TextInput style={style.input} placeholder="email@exemplo.com" 
                    onChangeText={(texto) => setEmail(texto) } value={email}/>
                </View>

                <Text style={style.textInput}>Senha</Text>
                <View style={style.line}>
                <TextInput
                        style={style.input}
                        secureTextEntry
                        placeholder="***********"
                        onChangeText={(texto) => setSenha(texto)} value={senha}
                    />
                </View>

                <View style={style.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={style.checkbox}
                    />
                    <Text style={style.termos}>Aceito os <TouchableOpacity style={style.link}
                    onPress={ () => navigation.navigate('Termos')}>
                        termos de uso</TouchableOpacity></Text>
                </View>

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText} onPress={cadastrar}>Cadastrar</Text>
                </TouchableOpacity>
                
                <Text style={style.label}>Já tem uma conta? <TouchableOpacity style={style.link}
                onPress={ () => navigation.navigate('Login')}>
                        Fazer Login</TouchableOpacity></Text>

            </View>
            <Image source={require('../assets/patas.png')} style={style.decoration}/>
            </View>
    );
  }

export default Cadastro;