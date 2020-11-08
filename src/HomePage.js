import React, { Component } from "react";
import {useState} from "react";
import { StyleSheet, View, Text , TouchableOpacity} from "react-native";
import CheckBox from '@react-native-community/checkbox';


class HomePage extends Component {
    render(){
        
  return (
    <View style={styles.container}>
        <View style={styles.checkboxContainer}>
        <CheckBox
          style={styles.checkbox}
        />
        <Text style={styles.label}>My advertisements</Text>
        <CheckBox
        // value={isSelected}
        // onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>All advertisements</Text>
        </View>
              <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Add advertisements')}
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>ADD ADVERTISEMENT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('My Item')}
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>PREKE</Text>
                </TouchableOpacity>
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
    });

export default HomePage;