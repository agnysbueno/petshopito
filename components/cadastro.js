import React,  { useState, useCallback } from 'react';
import { CheckBox, View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style.js';
//import { useNavigation, useRoute } from '@react-navigation/native';


function Cadastro() {
    /* const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    } */

    const [isSelected, setSelection] = useState(false);

    return (
    <>
        <View style={style.inputContainer}>

            <TouchableOpacity /* onPress={navigateBack} */ style={style.back}> 
                <Image source={require('../assets/back.svg')} style={{width: 20, height: 20}}/>
            </TouchableOpacity>

            <Text style={style.textInput}>Nome</Text>
            <View style={style.line}>
                <TextInput style={style.input} placeholder="Como você quer ser chamado?" />
            </View>

            <Text style={style.textInput}>Telefone</Text>
            <View style={style.line}>
                <TextInput style={style.input} placeholder="(xx)xxxxx-xxxx" />
            </View>

            <Text style={style.textInput}>E-mail</Text>
            <View style={style.line}>
                <TextInput style={style.input} placeholder="email@exemplo.com" />
            </View>

            <Text style={style.textInput}>Senha</Text>
            <View style={style.line}>
            <TextInput
                    style={style.input}
                    secureTextEntry
                    placeholder="***********"
                />
            </View>

            <Text style={style.textInput}>Confirmar Senha</Text>
            <View style={style.line}>
            <TextInput
                    style={style.input}
                    secureTextEntry
                    placeholder="***********"
                />
            </View>

            <View style={style.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={style.checkbox}
                />
                <Text style={style.termos}>Aceito os <TouchableOpacity style={style.link}>
                    termos de uso</TouchableOpacity></Text>
            </View>

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            
            <Text style={style.label}>Já tem uma conta? <TouchableOpacity style={style.link}>
                    Fazer Login</TouchableOpacity></Text>

        </View>
        <Image source={require('../assets/patas.png')} style={style.decoration}/>
     </>
    );
  }

export default Cadastro;