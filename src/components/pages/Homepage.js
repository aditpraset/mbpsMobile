import React, { Component } from 'react';
import { Container, Header,Body, Button, Title, Item, Content, Card, CardItem, Form, View } from 'native-base';
import axios from 'axios';
import {StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default class Homepage extends Component {

    render() {
        return (
          <Form style={styles.container}>
              <Text style={styles.TitleText}> Mitracomm Ekasarana </Text>
    
              <Text style={styles.EmployeeText}> Employee Name </Text>
    
              <Text style={styles.EmployeeText}> Employee Reg Number </Text>
              
              <View style={{ flexDirection:'row', marginTop:80,  marginHorizontal: 20, }} >
                <View style= {{ justifyContent:'space-between', flexDirection:'row', width:'100%' }} >
                    <View>
                        <TouchableOpacity style={styles.Menu}>
                        <Image style={{ width:80, height:80 }} source={require('../images/attendance.png')}></Image>
                        </TouchableOpacity>
                        <Text style={styles.EmployeeText}> Attendance </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Menu}>
                        <Image style={{ width:80, height:80 }} source={require('../images/staff.png')}></Image>
                        </TouchableOpacity>
                        <Text style={styles.EmployeeText}> Staff </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Menu}>
                        <Image style={{ width:80, height:80 }} source={require('../images/options.png')}></Image>
                        </TouchableOpacity>
                        <Text style={styles.EmployeeText}> Options </Text>
                    </View>
                </View>
              </View>

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

        Menu: {
        width: 80,
        height: 80,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 18,
        marginHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        }
    
    });