import React, { Component } from 'react';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import{
   Item,
   Input,
   Form,
   Label,
   Button
} from 'native-base';
import {View, Text,Image, StyleSheet, TextInput, TouchableOpacity,ActivityIndicator,AsyncStorage,TouchableWithoutFeedback,Keyboard  } from 'react-native';
export default class Login extends Component{
    async storeToken(token,uuid) {
        try {
           await AsyncStorage.setItem("token",token);
           await AsyncStorage.setItem("uuid",uuid);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
    constructor(props){
        super(props);
        this.state={
           email: '',
           password: '',
        }
     }
     Login=()=>
     {
        this.props.navigation.navigate('Hal1');

     }
        render(){
            return (

                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <View style={styles.logoStyle}>
                            {/* <Image large source={require("../../src/img/emblem.png")}></Image> */}
                            <Text style={styles.textLogoStyle}>MBPS</Text>
                        </View>
                        {/* <Logo/> */}
        
                        <TextInput style={styles.inputBox}
        
                        placeholder="Enter Your Email"
                        placeholderTextColor = "black"
                        selectionColor="black"
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email })}
                        />
        
                        <TextInput style={styles.inputBox}
        
                        placeholder="Enter Your Password"
                        secureTextEntry={true}
                        placeholderTextColor = "black"
                        selectionColor="black"
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password })}
                        />
        
                        <TouchableOpacity onPress={this.Login} style={styles.button}>
        
                            <Text style={styles.buttonText}> Login </Text>
        
                        </TouchableOpacity>
        
                        <View style={styles.signupTextCont}>
        
                            <Text style={styles.signupText}><Text style={styles.signupButton}> Copyright</Text> © 2020 MBPS. </Text>
            
        
                        </View>
        
                    </View>
                </TouchableWithoutFeedback>
    
            );
     }
     
}
const styles = StyleSheet.create({
    logoStyle:{
        marginTop:70,
        marginBottom:70,
        alignItems:'center',
        justifyContent:'center'
    },
    textLogoStyle:{
        fontSize:30,
        color:'black'
    },
    container : {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
    },

    inputBox: {
    width:300,
    height: 50,
    backgroundColor:'skyblue',
    borderRadius: 25,
    paddingHorizontal:20,
    fontSize:16,
    color:'black',
    marginVertical: 5
    },

    button: {
    width: 200,    
    backgroundColor:'skyblue',
    justifyContent :'center',
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 13
    },
            
    buttonText: {
    fontSize:16,
    fontWeight:'bold',
    color:'black',  
    textAlign:'center'    
    },

    signupTextCont : {
    flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
    },

    signupText: {
    color:'black',
    fontSize: 20
    },

    signupButton: {
    color:'black',
    fontSize: 20,
    fontWeight:'bold'
    }

});