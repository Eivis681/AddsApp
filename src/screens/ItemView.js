import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';

class ItemView extends Component {
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.titleRe}>Title</Text>

                <View style={styles.textContainer}>
                <Text style={styles.toDo}>Description:</Text>
                <Text style={styles.wordsText}>cia va geras itemas</Text>
                </View>

                <View style={styles.textContainer}>
                <Text style={styles.toDo}>Price:</Text>
                <Text style={styles.wordsText}>15,59</Text>
                </View>

                <View style={styles.textContainer}>
                <Text style={styles.toDo}>Phone number:</Text>
                <Text style={styles.wordsText}>866240744</Text>
                </View>
                
               <View style={styles.buttonConaiter}>
              <TouchableOpacity
                    onPress={()=> 
                        Alert.alert(
                            'Delete',
                            'Are you sure you want to delete this advertisements',
                            [
                                {
                                    text: 'Yes',
                                    //delete from database this item
                                    onPress: () =>this.props.navigation.goBack()
                                },
                                {
                                    text:'No',
                                },
                            ]
                        )
                }
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>DELETE ADVERTISEMENT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.navigate('Update advertisements')}
                     style={styles.loginBtn}>
                    <Text style={styles.loginText}>UPDATE ADVERTISEMENT</Text>
                </TouchableOpacity>
                </View> 
            </View>   
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        justifyContent: 'flex-start',
        },
        buttonConaiter:{
            flexDirection: "row",
            marginVertical:10,
            justifyContent:'flex-end',
        },
        textContainer:{
            flexDirection:'row',
        },
          loginBtn:{
            width:"47%",
            backgroundColor:"#fb5b5a",
            borderRadius:25,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:5,
            marginBottom:10,
            marginHorizontal:5
          },
          titleRe:{
            fontWeight:'bold',
            textTransform:'uppercase',
            color:'#fff',
            fontSize:25,
            textAlign:'center',
            marginBottom:10,
        },
        toDo:{
            fontWeight:'bold',
            textTransform:'uppercase',
            color:'#fff',
            fontSize:20,
        },
        wordsText:{
            fontSize:15,
            color:'#fff',
            marginBottom:10,
            margin:5,
        },
    });
export default ItemView;