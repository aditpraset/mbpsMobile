import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Profile from './pages/Profile';

export const Pages = StackNavigator({
  Login:{screen:Login,navigationOptions:{ header:null}},
  Profile:{screen:Profile,navigationOptions:{ header:null}},
})