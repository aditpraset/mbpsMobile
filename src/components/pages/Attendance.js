import React, { Component } from 'react';
import { Card, CardItem, Text, Body, Form, View, Left} from 'native-base';
import axios from 'axios';
import {StyleSheet, TouchableOpacity, Image,ScrollView,AsyncStorage } from 'react-native';



export default class Attendance extends Component {
    constructor(props){
        super(props);
        this.state={
           isLoading:true,
           dataSource: null,
           error:null,
           long:null,
           lat:null,
           name:null,
           empl_id:null,
           time_in:null,
           time_out:null,
           loc_in:null,
           loc_out:null,
           sched_in:null,
           sched_out:null,
    
        }
     }
    
      _getUserId = async() => {
        const uuid = await AsyncStorage.getItem('uuid');
        const token = await AsyncStorage.getItem('token');
        const name = await AsyncStorage.getItem('name');
        const empl_id = await AsyncStorage.getItem('empl_id');
        axios({
            method: 'post',
            url: 'http://192.168.1.36/attendance',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token
                // 'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTMxNDk4OTUsImlzcyI6Ik15IFNpbXBsZSBKV1QgQXBwIiwiVXNlcm5hbWUiOiIiLCJFbWFpbCI6IiIsIkdyb3VwIjoiIn0.d0BBVYCU6hPa5t9aS8i9jpxVQLeyFo9aXQaTaI1F1eU'
            },
            data: {
                UUID: uuid
            }
        })
        .then((res)=>{
            this.setState({
                name:name,
                empl_id:empl_id,
                })
            if(res.data.status == 1){
                this.setState({
                    isLoading:false,
                    dataSource: res.data.Data
                    })
                    this.state.dataSource.map((val,key)=>{
                      this.setState({
                        date:val.date,
                        time_in:val.time_in.String,
                        time_out:val.time_out.String,
                        loc_in:val.loc_in.String,
                        loc_out:val.loc_out.String,
                        sched_in:val.sched_in.String,
                        sched_out:val.sched_out.String,
                        })
                });

                }
            else{
                alert('kosong')
            //   AsyncStorage.clear()
            //   this.props.navigation.navigate('Login');
            }
         })
         .catch(err =>{
                alert('error')
                // this.props.navigation.navigate('Login');
            })
      }
         componentDidMount(){
            this._getUserId()
         }
    render() {
        return (
            <ScrollView>
                <Form style={styles.container}>
                    <Text style={styles.TittleText}> Mitracomm Ekasarana </Text>
            
                    <Text style={styles.EmployeeText}> { this.state.name } </Text>
            
                    <Text style={styles.EmployeeText}> { this.state.empl_id } </Text>

                    <Card style={styles.HeaderCard}>

                        <View>
                            <Text style={styles.MenuText}>
                                Schedule In : { this.state.sched_in }
                            </Text>
                        </View>
                        <View bordered>
                            <Text style={styles.MenuText}>
                                Schedule Out :{ this.state.sched_out }
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.MenuText}>
                                Check In : { this.state.time_in }
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.MenuText}>
                                Check Out : { this.state.time_out }
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.MenuText}>
                                Check In Location : { this.state.loc_in }
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.MenuText}>
                                Check Out Location : { this.state.loc_out }
                            </Text>
                        </View>
                    </Card>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}> Check In </Text>
                        </TouchableOpacity>
                    </View>

                </Form>
            </ScrollView>
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
        fontSize: 18,
        fontWeight:'bold',
        color:'black',  
        textAlign:'left',
        marginLeft:20,
        marginVertical:10

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
        backgroundColor: 'white',
        marginTop:50,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#000',
        width:400,
        height:330,
        },
        button: {
        width: 200,    
        backgroundColor:'#d50000',
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
    });