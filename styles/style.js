import React from 'react';
import { StyleSheet } from 'react-native';

export default	StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: '#374999',
                    alignItems: 'center'
                },
                containerLog: {
                    flex: 1,
                    alignItems: 'center'
                },
                inputContainer: {
                    position: 'relative',
                    width: '75%',
                    maxWidth: 500,
                    height: '70vh',
                    marginTop: 70
                    /* fontFamily: 'BalooDa2_400Regular' */
                },
                select: {
                    position: 'relative',
                    width: '75%',
                    maxWidth: 500,
                    marginTop: 70,
                    flex: 1,
                    justifyContent: 'flex-end',
                },
                termoContainer:{
                    height: '75vh',
                    backgroundColor: 'white',
                    padding: 10,
                    textAlign: 'justify',
                    overflow: 'scroll',
                    borderRadius: 5
                },
                h2: {
                    fontSize: 20,
                    fontWeight: '700',
                    marginVertical: 15
                },
                p: {
                    fontSize: 16
                },
                centerTitle: {
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                oneMoreColumn: {
                    flexDirection: "row",
                    justifyContent: 'space-between', 
                },
                blueTitle: {
                    fontSize: 30,
                    fontWeight: '700',
                    color: '#374999',
                    marginVertical: 15
                },
                twoColumns: {
                    width: '300px',
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: 'space-evenly',
                },
                filledInput: {
                    backgroundColor: '#F5F5F5',
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 10, 
                    height: 40,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                filledInputShort: {
                    backgroundColor: '#F5F5F5',
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    width: 86,
                    height: 40,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                filledInputLong: {
                    backgroundColor: '#F5F5F5',
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    width: 144,
                    height: 40,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                filledInputSemi: {
                    backgroundColor: '#F5F5F5',
                    marginTop: 5,
                    marginBottom: 5,
                    borderTopLeftRadius: '23px',
                    borderBottomRightRadius: '23px',
                    width: 100,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                menuFilledInput: {
                    width: 66,
                    height: 57,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                menuFilledInputSemi: {
                    backgroundColor: '#F1C3CD',
                    borderTopLeftRadius: '23px',
                    borderBottomRightRadius: '23px',
                    width: 66,
                    height: 57,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                pinkLine: {
                    borderBottomColor: '#F1C3CD',
                    width: '100%',
                    borderBottomWidth: '5px'
                },
                back: {
                  position: 'absolute',
                  top: -60,
                  left: -30,
                  backgroundColor: 'transparent'
                },
                textInput:{
                  color: 'white',
                  fontSize: 20
                },
                textInputApp:{
                    color: '#374999',
                    fontSize: 20,
                    fontWeight: '600'
                  },
                input: {
                    backgroundColor: 'transparent',
                    paddingHorizontal: 10,
                    paddingBottom: 5,
                    fontSize: 16,
                    color: 'white',
                    width: '100%'
                },
                line: {
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    marginBottom: 20
                },
                button: {
                    backgroundColor: '#F1C3CD',
                    marginTop: 10,
                    marginBottom: 15,
                    borderRadius: 10, 
                    height: 50,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                buttonText: {
                    fontWeight: '700',
                    fontSize: 20,
                    
                },
                checkboxContainer: {
                    flexDirection: "row",
                    marginBottom: 20,
                },
                checkbox: {
                    alignSelf: "center",
                },
                termos: {
                    marginLeft: 8,
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600'
                },
                label: {
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600',
                    textAlign: 'center'
                },
                labelB: {
                    color: 'white',
                    fontSize: 16,
                    fontWeight: '600',
                    marginBottom: 40
                },
                labelC: {
                    color: '#F1C3CD',
                    fontSize: 20,
                    fontWeight: '700',
                    marginBottom: 30
                },
                link: {
                    color: '#F1C3CD',
                    fontSize: 16,
                    fontWeight: '600',
                },
                decoration:{
                    width: 130,
                    height: 160,
                    position: 'absolute',
                    right: 0,
                    bottom: 2
                },
                espaco: {
                    margin: 10
                }
});