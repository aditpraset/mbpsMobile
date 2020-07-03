import React, { Component } from 'react';
import axios from 'axios';
import {NavigationActions} from 'react-navigation';
import {StackNavigator} from 'react-navigation';
import { Item, Input, Form, Label, Button } from 'native-base';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, AsyncStorage, TouchableWithoutFeedback, Keyboard  } from 'react-native';
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
        axios({
            method: 'post',
            url: 'http://192.168.1.36/login',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                // 'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTI5OTA0NTYsImlzcyI6Ik15IFNpbXBsZSBKV1QgQXBwIiwiVXNlcm5hbWUiOiIiLCJFbWFpbCI6IiIsIkdyb3VwIjoiIn0.jeg0C5BR-mMCJc_UxyvOu7oqgoQDvVo2SYKxwxgi1uU'
            },
            data: {
                email: this.state.email,
                password: this.state.password
            }
          })
        .then(res => {
            if(res.data.status == '1'){
                res.data.Data.map((val,key)=>{
                    this.storeToken(res.data.token,val.UUID);
                 });
                 
                this.props.navigation.navigate('Homepage');
            } else {
              alert('Something Wrong')
            }
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
            });
     }
        render(){
            return (

                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <Form style={styles.container}>

                        <Image  style={styles.logoStyle} source={require('../images/MBPSAPPS.jpeg')}/>
                        
                        <TextInput style={styles.inputBox}
        
                        placeholder="Enter Your Email"
                        placeholderTextColor = "white"
                        selectionColor="white"
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email })}
                        />
        
                        <TextInput style={styles.inputBox}
        
                        placeholder="Enter Your Password"
                        secureTextEntry={true}
                        placeholderTextColor = "white"
                        selectionColor="white"
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password })}
                        />
        
                        <TouchableOpacity onPress={this.Login} style={styles.button}>
                            <Text style={styles.buttonText}> Login </Text>
                        </TouchableOpacity>
        
                        <View style={styles.signupTextCont}>
                            <Text style={styles.signupText}><Text style={styles.signupButton}> Copyright</Text> © 2020 MBPS. </Text>
                        </View>
        
                    </Form>
                </TouchableWithoutFeedback>
    
            );
     }
     
}
const styles = StyleSheet.create({
    
    logoStyle:{
        marginTop:30,
        marginBottom:80,
        alignItems:'center',
        justifyContent:'center',
        width:'100%', height: '50%'
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
    backgroundColor:'#b71c1c',
    borderRadius: 25,
    paddingHorizontal:20,
    fontSize:16,
    color:'white',
    marginVertical: 5
    },

    button: {
    width: 200,    
    backgroundColor:'#b71c1c',
    justifyContent :'center',
    borderRadius: 25,
    marginVertical: 50,
    paddingVertical: 13
    },
            
    buttonText: {
    fontSize:16,
    fontWeight:'bold',
    color:'white',  
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