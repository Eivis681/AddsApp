import React, {Component} from 'react';
import {View, Text,TouchableOpacity,StyleSheet,TextInput,Alert} from 'react-native';
import {addAdd} from '../../store/actions/addAction'
import 'react-native-gesture-handler';

class AddAdPage extends Component {
    constructor(props){
        super(props);
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
        this.props.addAdd(this.state.title,this.state.description,this.state.phoneNumber,this.state.price,this.state.price)
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
export default AddAdPage;