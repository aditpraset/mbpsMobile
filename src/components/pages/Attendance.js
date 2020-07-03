import React, { Component } from 'react';
import { Card, CardItem, Text, Body, Form, View, Left} from 'native-base';
import axios from 'axios';
import {StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class Attendance extends Component {



    render() {
        return (
            <Form style={styles.container}>
                <Text style={styles.TittleText}> Mitracomm Ekasarana </Text>
        
                <Text style={styles.EmployeeText}> Employee Name </Text>
        
                <Text style={styles.EmployeeText}> Employee Reg Number </Text>

                <Card style={styles.HeaderCard}>

                    <View>
                        <Text style={styles.MenuText}>
                            Schedule In :
                        </Text>
                    </View>
                    <View bordered>
                        <Text style={styles.MenuText}>
                            Schedule Out :
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.MenuText}>
                            Check In :
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.MenuText}>
                            Check Out :
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.MenuText}>
                            Check In Location :
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.MenuText}>
                            Check Out Location :
                        </Text>
                    </View>
                </Card>
                <View>
                    <TouchableOpacity onPress={() => alert("Thanks For Check In")} style={styles.Menu} >
                        <Image style={{ width:80, height:80, borderRadius: 18,}}></Image>
                    </TouchableOpacity>

                    <Text style={styles.EmployeeText}> Check In </Text>
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

        TittleText: {
        fontSize: 30,
        fontWeight:'bold',
        color:'black',  
        textAlign:'center',
        marginBottom:50
        },
        
        EmployeeText: {
        fontSize: 20,
        fontWeight:'normal',
        color:'black',  
        textAlign:'center',
        margin:5,


        },

        MenuText: {
        flexDirection:'column',
        justifyContent:'space-between',
        fontSize: 20,
        fontWeight:'bold',
        color:'black',  
        textAlign:'left',
        marginLeft:20,
        marginVertical:20,
        marginBottom:20,
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
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        }, 

        HeaderCard: {
        backgroundColor: 'skyblue',
        marginTop:50,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#000',
        width:400,
        height:400,
        },
    
    });