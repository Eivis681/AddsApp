import React, {Component} from 'react';
import {View, Text,TouchableOpacity,StyleSheet,TextInput,Alert} from 'react-native';

import {connect} from 'react-redux';
import 'react-native-gesture-handler';
import {addAdd} from '../../store/actions/addAction';

class AddAdPage extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            description:"",
            phoneNumber:"",
            price:"",
      }
    }

    titleChange(title){
        this.setState({title});
    }
    descriptionChange(description){
        this.setState({description})
    }
    phoneNumberChange(phoneNumber){
        this.setState({phoneNumber})
    }
    priceChange(price){
        this.setState({price})
    }

    checkIfEmpty  = ()=>{
        const username = this.props.route.params.username;
        if (this.state.title.trim()=="") {
            alert('Please Enter Item Name');
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
        this.props.addAdd(this.state.title, this.state.description, this.state.phoneNumber, this.state.price, username)
        this.setState({title:'',description:'',phoneNumber:'',price:''})
        Alert.alert(
            'ADD ADVERTISEMENT',
            'Your item has been added successfully',
            [
                {
                    text: 'OK',
                    onPress: () =>this.props.navigation.navigate('Home')
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
              placeholder="Item name" 
              value={this.state.title}
              placeholderTextColor="#003f5c"
              onChangeText={(text)=>this.titleChange(text)}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Description" 
              value = {this.state.description}
              placeholderTextColor="#003f5c"
              onChangeText={(text)=>this.descriptionChange(text)}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Phone number" 
              value={this.state.phoneNumber}
              placeholderTextColor="#003f5c"
              onChangeText={(text)=>this.phoneNumberChange(text)}/>
              </View>
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Price" 
              value={this.state.price}
              placeholderTextColor="#003f5c"
              onChangeText={(text)=>this.priceChange(text)}/>
              </View>
                <TouchableOpacity 
                onPress={this.checkIfEmpty}
                style={styles.loginBtn}>
                    <Text style={styles.loginText}>ADD ADVERTISEMENT</Text>
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

const mapStateToProps = (state) =>{
    return{
        adds: state.adds,
    };
};
export default connect(mapStateToProps,{addAdd})(AddAdPage);
