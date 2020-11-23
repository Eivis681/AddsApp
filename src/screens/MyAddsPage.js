import React, { Component } from "react";
import {useState} from "react";
import { StyleSheet, View, Text , TouchableOpacity, ScrollView, Alert} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';
import {showAll} from '../../store/actions/getAction';
import FadeInView from 'react-native-fade-in-view';


class MyAddsPage extends Component {
   
    componentDidCatch(){
      this.props.showAll();
    }

  render(){

    const {adds} = this.props;
    const username = this.props.route.params.username; 

    const renderItem = (item,index) =>{
      if (item.UserId==username)
      {
      return(
        <FadeInView 
        duration={1000}
        style={styles.cars} key={index}>
        <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('My Item',{
        id: item.ID,
        title:item.Title,
        description:item.Description,
        phoneNumber: item.PhoneNumber,
        price: item.Price,
        })}
        style={styles.loginBtn} >
        <Text> {item.Title} </Text>
        </TouchableOpacity>
      </FadeInView>
      );
      };
    };
    
    
  return (
    <View style={styles.container}>
                <ScrollView style={styles.carsContainer}>
                  {adds.adds.map((add, index) => 
                    (
                      renderItem(add,index)
                      //   <View style={styles.cars} key={index}>
                      //   <TouchableOpacity
                      //   onPress={()=> this.props.navigation.navigate('My Item',{
                      //   id: add.ID,
                      //   title:add.Title,
                      //   description:add.Description,
                      //   phoneNumber: add.PhoneNumber,
                      //   price: add.Price,
                      //   })}
                      //   style={styles.loginBtn} >
                      //   <Text> {add.Title} </Text>
                      //   </TouchableOpacity>
                      // </View>
                    )
                   )}
                  </ScrollView>

                  {/* {adds.adds.map((add, index) => (
                  <View style={styles.cars} key={index}>
                    <TouchableOpacity
                      onPress={()=> this.props.navigation.navigate('My Item',{
                        id: index,
                        title:add.Title,
                        description:add.Description,
                        phoneNumber: add.PhoneNumber,
                        price: add.Price,
                      })}
                      style={styles.loginBtn} >
                      <Text> {add.Title} </Text>
                    </TouchableOpacity>
                  </View>
                   ))} */}
    </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'flex-start',
        },
        checkboxContainer: {
            flexDirection: "row",
            marginVertical:10,
          },
        inputView:{
            width:"80%",
            backgroundColor:"#465881",
            borderRadius:25,
            height:50,
            marginBottom:20,
            justifyContent:"center",
            padding:20
          },
          inputText:{
            height:50,
            color:"white"
          },
          loginBtn:{
            width:"80%",
            backgroundColor:"#fb5b5a",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:5,
            marginBottom:10
          },
          separator: {
            marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
          checkbox: {
            flexDirection: 'column',
            alignSelf: "center",
          },
          label: {
            margin: 8,
          },
          carsContainer: {
            borderTopWidth: 3,
            width:'100%',
            flex: 1,
          },
          make: {
            fontSize: 18,
            fontWeight: 'bold',
          },
          
    });

    const mapStateToProps = (state)=>{
      return{
        adds: state.adds,
      };
    };
export default connect(mapStateToProps,{showAll})(MyAddsPage);

