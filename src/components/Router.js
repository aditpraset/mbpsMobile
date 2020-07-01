import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './pages/Login';
import Hal1 from './pages/Hal1';

export const Pages = StackNavigator({
  Login:{screen:Login,navigationOptions:{ header:null}},
  Hal1:{screen:Hal1,navigationOptions:{ header:null}},
})