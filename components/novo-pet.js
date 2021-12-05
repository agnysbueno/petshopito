import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style.js';


function NovoPet() {
    return (
    <View style={style.containerLog}>
        <View style={style.inputContainer}>
            <View style={style.centerTitle}>
                <Text style={style.blueTitle}>Novo Pet</Text>
            </View>

            <View style={style.espaco}></View>

            <Text style={style.textInputApp}>Nome</Text>
            <View style={style.filledInput}>
                <TextInput style={style.input} placeholder="Qual o nome do seu bichinho?" />
            </View>

            <View style={style.espaco}></View>

            <Text style={style.textInputApp}>Espécie</Text>
            <View style={style.twoColumns}>              
                <TouchableOpacity style={style.filledInputSemi}> 
                    <Image source={require('../assets/cat.svg')} style={{width: 55, height: 54}}/>
                </TouchableOpacity>

                <TouchableOpacity style={style.filledInputSemi}> 
                    <Image source={require('../assets/dog.svg')} style={{width: 72, height: 54}}/>
                </TouchableOpacity>
            </View>

            <View style={style.espaco}></View>

            <Text style={style.textInputApp}>Raça</Text>
            <View style={style.filledInput}>
                <TextInput style={style.input} placeholder="Yorkshire terrier" />
            </View>

            <View style={style.espaco}></View>

            <View style={style.oneMoreColumn}>
                
                <Text style={style.textInputApp}>Idade</Text>
                <View style={style.filledInputShort}>
                    <TextInput style={style.input} placeholder="Anos" />
                </View>

                <Text style={style.textInputApp}>Cor</Text>
                <View style={style.filledInputLong}>
                    <TextInput style={style.input} placeholder="Cor da pelagem" />
                </View>

            </View>

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Cadastrar pet</Text>
            </TouchableOpacity>

            <View style={style.espaco}></View>


        </View>
        <View style={style.select}>
            <View style={style.oneMoreColumn}>
                <TouchableOpacity style={style.menuFilledInput}>
                    <Image source={require('../assets/home.svg')} style={{width: 30, height: 23}}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.menuFilledInputSemi}>
                    <Image source={require('../assets/pets.svg')} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.menuFilledInput}>
                    <Image source={require('../assets/services.svg')} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.menuFilledInput}>
                    <Image source={require('../assets/profile.svg')} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
            </View>
            <View style={style.pinkLine}></View>
        </View>
     </View>
    );
  }

export default NovoPet;