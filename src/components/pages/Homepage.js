import React, { Component } from 'react';
import { Container, Header,Body, Button, Title, Item, Content, Card, CardItem, Form, View } from 'native-base';
import axios from 'axios';
import {StyleSheet, Text, TouchableOpacity, Image,AsyncStorage } from 'react-native';

export default class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
       isLoading:true,
       dataSource: null,
       error:null,
       long:null,
       lat:null,
       name:null,
       empl_id:null

    }
 }

  _getUserId = async() => {
    const uuid = await AsyncStorage.getItem('uuid');
    const token = await AsyncStorage.getItem('token');
    axios({
        method: 'post',
        url: 'http://192.168.1.20/emp',
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
        if(res.data.status == 1){
            this.setState({
                isLoading:false,
                dataSource: res.data.Data
                })
                this.state.dataSource.map((val,key)=>{
                  this.setState({
                    name:val.name,
                    empl_id:val.employee_id,
                    })
               });
            }
        else{
          AsyncStorage.clear()
          this.props.navigation.navigate('Login');
        }
     })
     .catch(err =>{
         this.props.navigation.navigate('Login');
        })
  }
     componentDidMount(){
        this._getUserId()
     }
    render() {
        return (
          <Form style={styles.container}>
              <Text style={styles.TitleText}> Mitracomm Ekasarana </Text>
    
              <Text style={styles.EmployeeText}>{ this.state.name } </Text>

              <Text style={styles.EmployeeText}> { this.state.empl_id } </Text>
              
              <View style={{ flexDirection:'row', marginTop:450,  marginHorizontal: 20, }} >
                <View style= {{ justifyContent:'space-between', flexDirection:'row', width:'100%' }} >
                    <View>
                        <TouchableOpacity style={styles.Menu}>
                        <Image style={{ width:80, height:80 }} source={require('../images/marker.png')}></Image>
                        </TouchableOpacity>
                        <Text style={styles.EmployeeText}> Attendance </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Menu}>
                        <Image style={{ width:80, height:80 }} source={require('../images/network.png')}></Image>
                        </TouchableOpacity>
                        <Text style={styles.EmployeeText}> Staff </Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Menu}>
                        <Image style={{ width:80, height:80 }} source={require('../images/wall.png')}></Image>
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
        backgroundColor:'#7f0000',
        flex: 1,
        // alignItems:'center',
        // justifyContent :'center'
        },
    
        TitleText: {
        marginTop: 20,
        marginBottom:40,
        fontSize: 30,
        fontWeight:'bold',
        color:'white',  
        textAlign:'center'    
        },
    
        EmployeeText: {
        fontSize: 20,
        fontWeight:'normal',
        color:'white',  
        textAlign:'center'    
        },
        
        Card: {
        width: 400,
        height: 400,
        borderRadius: 10,
        backgroundColor:'white',
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
        color:'white',  
        textAlign:'center'    
        },

        Menu: {
        width: 80,
        height: 80,
        borderWidth: 1,
        backgroundColor:'white',
        borderColor: 'white',
        borderRadius: 18,
        marginHorizontal: 20,
        justifyContent:'center',
        alignItems:'center',
        }
    
    });