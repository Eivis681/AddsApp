import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {addUser} from "../../store/actions/addAction";
import {v4 as uuidv4} from 'uuid';

class RegisterPage extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            repeatPassword:'',
      }
    }
    
    usernameValue = (text)=>{
        this.setState({
            username: text,
        });
    };
    passwordValue = (text)=>{
        this.setState({
            password: text,
        });
    };
    repeatValue = (text)=>{
        this.setState({
            repeatPassword: text,
        });
    };

      checkIfEmpty  = ()=>{
        if (this.state.username.trim()=="") {
            alert('Please Enter Username');
            return;
        }

        else if (this.state.password.trim()=="") {
            alert('Please Enter Password');
            return;
        }

        else if (this.state.repeatPassword.trim()=="") {
            alert('Please Enter Repeat Password');
            return;
        }

        else if (this.state.password!=this.state.repeatPassword)
        {
            alert('Passwords does not match');
            return;
        }
        this.props.addUser(this.state.username,this.state.password)
        this.props.addUser
        Alert.alert(
            'Registration',
            'Your registration has been su successful',
            [
                {
                    text: 'OK',
                    onPress: () =>this.props.navigation.navigate('Login')
                },
            ]
        )
      };

    render(){
        return( 
        <View style={styles.container}>
            <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Username" 
              placeholderTextColor="#003f5c"
              onChangeText={this.usernameValue}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Password" 
              placeholderTextColor="#003f5c"
              onChangeText={this.passwordValue}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Repeat password" 
              placeholderTextColor="#003f5c"
              onChangeText={this.repeatValue}/>
              </View>
                <TouchableOpacity 
                onPress={ this.checkIfEmpty}
                style={styles.loginBtn}>
                    <Text style={styles.loginText}>SIGNUP</Text>
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
    justifyContent: 'center',
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
        marginTop:40,
        marginBottom:10
      },
});

const mapStateToProps = (state) => {
    return {
      user: state.users,
    };
  };  
export default connect(mapStateToProps, {addUser})(RegisterPage);
