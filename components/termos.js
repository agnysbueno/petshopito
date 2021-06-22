import React from 'react';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import style from '../styles/style.js';


function Login() {
    return (
        <View style={style.inputContainer}>

            <TouchableOpacity style={style.back}> 
                <Image source={require('../assets/back.svg')} style={{width: 20, height: 20}}/>
            </TouchableOpacity>

            <Text style={style.labelC}>Termos de Uso</Text>

            <View style={style.termoContainer}>
                <Text style={style.h2}>Lorem Ipsum </Text>
                <Text style={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam iaculis efficitur metus dictum consequat. In mattis turpis vitae nulla 
                    sodales, eget faucibus leo elementum. Curabitur ullamcorper consequat semper. 
                    Quisque vehicula, elit sollicitudin egestas varius, dolor velit auctor nulla, 
                    eget luctus enim purus et enim. Sed laoreet a erat in pharetra. Donec et nisi 
                    arcu. Phasellus scelerisque euismod leo nec condimentum. Etiam ut faucibus 
                    ligula, id placerat odio. Fusce ac elementum sem.

                    Nam consequat eros nec enim mattis, quis ullamcorper mi dignissim. Vivamus 
                    blandit molestie turpis, et vehicula orci tempus consectetur. Nullam suscipit 
                    lacinia molestie. In rhoncus, odio eu pharetra fermentum, velit quam fermentum 
                    augue, sit amet rutrum risus quam ac dolor. Nullam in rhoncus odio. Class aptent 
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Quisque dictum ultricies enim vitae dignissim. Proin at urna nunc. Sed ac interdum nulla.
                    Ut condimentum, orci vitae finibus maximus, ex nibh blandit velit, ac malesuada massa 
                    massa id nunc. Sed semper lacus sed fermentum dignissim. Fusce interdum ornare nibh, sed 
                    lobortis felis tempus id. </Text>

                    <Text style={style.h2}>Lorem Ipsum </Text>
                    <Text style={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nam iaculis efficitur metus dictum consequat. In mattis turpis vitae nulla 
                    sodales, eget faucibus leo elementum. Curabitur ullamcorper consequat semper. 
                    Quisque vehicula, elit sollicitudin egestas varius, dolor velit auctor nulla, 
                    eget luctus enim purus et enim. Sed laoreet a erat in pharetra. Donec et nisi 
                    arcu. Phasellus scelerisque euismod leo nec condimentum. Etiam ut faucibus 
                    ligula, id placerat odio. Fusce ac elementum sem.

                    Nam consequat eros nec enim mattis, quis ullamcorper mi dignissim. Vivamus 
                    blandit molestie turpis, et vehicula orci tempus consectetur. Nullam suscipit 
                    lacinia molestie. In rhoncus, odio eu pharetra fermentum, velit quam fermentum 
                    augue, sit amet rutrum risus quam ac dolor. Nullam in rhoncus odio. Class aptent 
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                    Quisque dictum ultricies enim vitae dignissim. Proin at urna nunc. Sed ac interdum nulla.
                     Ut condimentum, orci vitae finibus maximus, ex nibh blandit velit, ac malesuada massa 
                     massa id nunc. Sed semper lacus sed fermentum dignissim. Fusce interdum ornare nibh, sed 
                     lobortis felis tempus id. </Text>
            </View>
        </View>
    );
  }

export default Login;