import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';

class AllItemView extends Component {
    
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
        textContainer:{
            flexDirection:'row',
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
export default AllItemView;