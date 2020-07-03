import React, {Component} from 'react';
import {StackNavigator, createNavigator} from 'react-navigation';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import Attendance from './pages/Attendance';


export const Pages = StackNavigator({
  Login:{screen:Login,navigationOptions:{ header:null}},
  Homepage:{screen:Homepage,navigationOptions:{ header:null}},
  Attendance:{screen:Attendance,navigationOptions:{ header:null}},
})