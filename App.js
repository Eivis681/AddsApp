import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Component } from 'react';
import LoginPage from './src/LoginPage';
import UpdateItem from './src/UpdateItem';
import RegisterPage from './src/RegisterPage';
import AddAdPage from './src/AddAdPage';
import HomePage from './src/HomePage';
import ItemView from './src/ItemView';
import AllItemView from './src/AllItemView';


const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName ="Login">
          <Stack.Screen name ="Login" component= {LoginPage}/>
          <Stack.Screen name ="My Item" component= {ItemView}/>
          <Stack.Screen name ="Update advertisements" component= {UpdateItem}/>
          <Stack.Screen name ="Register" component= {RegisterPage}/>
          <Stack.Screen name ="Add advertisements" component= {AddAdPage}/>
          <Stack.Screen name ="Home" component= {HomePage}/>
          <Stack.Screen name ="Item" component= {AllItemView}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
