import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Homepage from './pages/Homepage';


export const Pages = StackNavigator({
  Login:{screen:Login,navigationOptions:{ header:null}},
  Homepage:{screen:Homepage,navigationOptions:{ header:null}},
})