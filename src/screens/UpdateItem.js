import React, {Component} from 'react';
import {View, Text, StyleSheet,TextInput, Alert,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {updateAdd} from '../../store/actions/addAction';

class UpdateItem extends Component {
    constructor(){
        super();
        this.state={
            title:"",
            description:"",
            phoneNumber:"",
            price:""
      }
    }
    titleValue=(text)=>{
        this.setState({
            title:text,
        });
    };
    descrioptionValue=(text)=>{
        this.setState({
            description:text,
        });
    };
    phoneValue=(text)=>{
        this.setState({
            phoneNumber:text,
        });
    };
    priceValue=(text)=>{
        this.setState({
            price:text,
        });
    };

    checkIfEmpty  = ()=>{
        const id = this.props.route.params.id;
        if (this.state.title.trim()=="") {
            alert('Please Enter Title');
            return;
        }

        else if (this.state.description.trim()=="") {
            alert('Please Enter Description');
            return;
        }

        else if (this.state.phoneNumber.trim()=="") {
            alert('Please Enter Phone Number');
            return;
        }
        else if (this.state.price.trim()=="") {
            alert('Please Enter Price');
            return;
        }

        else if (this.state.password!=this.state.repeatPassword)
        {
            alert('Passwords does not match');
            return;
        }
        //alert(this.state.description);
        this.props.updateAdd(this.state.title, this.state.description, this.state.phoneNumber, this.state.price,id)
        // Alert.alert(
        //     'UPDATE ADVERTISEMENT',
        //     'Your item has been successfully updated',
        //     [
        //         {
        //             text: 'OK',
        //             onPress: () =>this.props.navigation.goBack()
        //         },
        //     ]
        // )
      };

    render(){
        
        const title= this.props.route.params.title;
        const description= this.props.route.params.description;
        const phoneNumber= this.props.route.params.phoneNumber;
        const price= this.props.route.params.price;
        
        return( 
        <View style={styles.container}>
            <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Item name" 
              placeholderTextColor="#003f5c"
              onChangeText={this.titleValue}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Description" 
              placeholderTextColor="#003f5c"
              onChangeText={this.descrioptionValue}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Phone number" 
              placeholderTextColor="#003f5c"
              onChangeText={this.phoneValue}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Price" 
              placeholderTextColor="#003f5c"
              onChangeText={this.priceValue}/>
              </View>
                <TouchableOpacity 
                onPress={this.checkIfEmpty}
                style={styles.loginBtn}>
                    <Text >UPDATE</Text>
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

const mapStateToProps = (state)=>{
    return{
      adds: state.adds,
    };
  };

export default connect(mapStateToProps,{updateAdd})(UpdateItem);
//UpdateItem;