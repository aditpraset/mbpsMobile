import React, { Component } from 'react';
import { Container, Header,Body, Button, Title, Item, Content, Card, CardItem, Form, Image } from 'native-base';
import axios from 'axios';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <Form style={styles.container}>
          <Text style={styles.TitleText}> Mitracomm Ekasarana </Text>

          <Text style={styles.EmployeeText}> Employee Name </Text>

          <Text style={styles.EmployeeText}> Employee Reg Number </Text>
          
          {/* <Image></Image> */}

          <Card style={styles.Card}>

              <TouchableOpacity style={styles.login} button onPress={() => alert("This is Card Header")}>
                <Text style={styles.loginText}> Attendance </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.login} button onPress={() => alert("This is Card Body")}>
                <Text style={styles.loginText}> Staff </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.login} button onPress={() => alert("Thanks for CheckIn / Thanks for Today")}>
                <Text style={styles.loginText}> Options </Text>
              </TouchableOpacity>
              
          </Card>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  
    container : {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
    },

    TitleText: {
    fontSize: 30,
    fontWeight:'bold',
    color:'black',  
    textAlign:'center'    
    },

    EmployeeText: {
    fontSize: 20,
    fontWeight:'normal',
    color:'black',  
    textAlign:'center'    
    },
    
    Card: {
    width: 400,
    height: 400,
    borderRadius: 10,
    backgroundColor:'black',
    marginBottom: 15,
    alignItems:'center',
    justifyContent :'center'
    },

    login: {
    width: 200,    
    backgroundColor:'skyblue',
    justifyContent :'center',
    borderRadius: 25,
    marginVertical: 5,
    paddingVertical: 15
    },
              
    loginText: {
    fontSize:25,
    fontWeight:'normal',
    color:'black',  
    textAlign:'center'    
    },

});
