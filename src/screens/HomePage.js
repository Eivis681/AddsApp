import React, { Component } from "react";
import { StyleSheet, View, Text , TouchableOpacity, ScrollView, Alert} from "react-native";
import {connect} from 'react-redux';
import {showAll} from '../../store/actions/getAction';
import FadeInView from 'react-native-fade-in-view';

class HomePage extends Component {
    componentDidCatch(){
      this.props.showAll();
    }

  render(){
    const {adds} = this.props;
    const username = this.props.route.params.username; 
 
  return (
    <View style={styles.container}>
        <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('My Adds',{
                      username: username,
                    })}
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>MY ADVERTISEMENT</Text>
                </TouchableOpacity>
              <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Add advertisements',{
                      username: username,
                    })}
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>ADD ADVERTISEMENT</Text>
                </TouchableOpacity>

                <ScrollView style={styles.carsContainer}>
                  {adds.adds.map((add, index) => (
                  <FadeInView 
                  duration={1000}
                  style={styles.cars} key={index}>
                    <TouchableOpacity
                      onPress={()=>{
                        if (add.UserId==username)
                        {
                          this.props.navigation.navigate('My Item',{
                            id: add.ID,
                            title:add.Title,
                            description:add.Description,
                            phoneNumber: add.PhoneNumber,
                            price: add.Price,
                          })
                        }
                        else {
                          this.props.navigation.navigate('Item',{
                            id: index,
                            title:add.Title,
                            description:add.Description,
                            phoneNumber: add.PhoneNumber,
                            price: add.Price,
                          })
                        }
                      }}
                      style={styles.loginBtn} >
                      <Text> {add.Title} </Text>
                    </TouchableOpacity>
                  </FadeInView>
                   ))}
                  </ScrollView>
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
export default connect(mapStateToProps,{showAll})(HomePage);

