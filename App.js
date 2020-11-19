import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Component } from 'react';
import LoginPage from './src/screens/LoginPage';
import UpdateItem from './src/screens/UpdateItem';
import RegisterPage from './src/screens/RegisterPage';
import AddAdPage from './src/screens/AddAdPage';
import HomePage from './src/screens/HomePage';
import ItemView from './src/screens/ItemView';
import AllItemView from './src/screens/AllItemView';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import combinedReducers from './store/reducers/index';
import ReduxThunk from 'redux-thunk';


const Stack = createStackNavigator();
const store = createStore(combinedReducers, applyMiddleware(ReduxThunk));

export default class App extends Component{
  render(){
    return(
      <Provider store= {store}>
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
      </Provider>
    );
  }
}
