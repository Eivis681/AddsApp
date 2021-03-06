import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {connect} from 'react-redux';
import {loginUser} from '../../store/actions/userAuthAction'
import {init} from '../helpers/db';


class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
      };
    }

      usernameValue = (text) =>{
        this.setState({
            username:text
        });
      };

      passwordValue = (text) =>{
        this.setState({
            password:text
        });
      };

      // chekIfEmpty =()=>{
      //   if (this.state.username.trim()=="") {
      //       alert('Please Enter Username');
      //       return;
      //   }
      //   if (this.state.password.trim()=="") {
      //       alert('Please Enter Password');
      //       return;
      //   }
      //   else {
      //       chekc if credentials are of if so navigate to home screen 
      //       this.props.navigation.navigate('Home')
      //   }
      //   this.props.navigation.navigate('Home')
      // };

      handleSubmit = () => {
        init()
        this.props.loginUser(this.state.username, this.state.password, () => {
          if (this.props.login.isLoggedIn === true) {
            this.props.navigation.navigate('Home',{
              username: this.state.username,
            });
          } else {
            Alert.alert('Wrong credentials');
          }
        });
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
              <View style={styles.checkboxContainer}>
                <CheckBox
                style={styles.checkbox}
                />
                <Text style={styles.label}>Remember me</Text>
                </View>
                <TouchableOpacity 
                onPress={this.handleSubmit}
                style={styles.loginBtn}>
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('Register')}>
                    <Text style={styles.loginText}>Signup</Text>
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
    checkboxContainer: {
        flexDirection: "row",
        marginVertical:10,
        alignSelf:'baseline',
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
        marginTop:10,
        marginBottom:10
      },
      checkbox: {
        flexDirection: 'column',
        alignSelf: 'baseline',
        marginLeft:40,
      },
      label: {
        margin: 8,
      },
});
const mapStateToProps = (state) => {
  return {
    user: state.users,
    login: state.login,
  };
};
export default connect(mapStateToProps, {loginUser})(LoginPage);