import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Alert} from 'react-native';
import 'react-native-gesture-handler';
import {removeAdd} from '../../store/actions/deleteAction';
import {connect} from 'react-redux';

class ItemView extends Component {
    
    
    render(){
        const id = this.props.route.params.id;
        const title= this.props.route.params.title;
        const description= this.props.route.params.description;
        const phoneNumber= this.props.route.params.phoneNumber;
        const price= this.props.route.params.price;
        const {adds} = this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.titleRe}>{title}</Text>
                <View style={styles.textContainer}>
                <Text style={styles.toDo}>Description:</Text>
                <Text style={styles.wordsText}>{description}</Text>
                </View>

                <View style={styles.textContainer}>
                <Text style={styles.toDo}>Price:</Text>
                <Text style={styles.wordsText}>{price}</Text>
                </View>

                <View style={styles.textContainer}>
                <Text style={styles.toDo}>Phone number:</Text>
                <Text style={styles.wordsText}>{phoneNumber}</Text>
                </View>
                
               <View style={styles.buttonConaiter}>
              <TouchableOpacity
                    onPress={()=> //this.props.removeAdd(id)
                        Alert.alert(
                            'Delete',
                            'Are you sure you want to delete this advertisements',
                            [
                                {
                                    text: 'Yes',
                                    onPress: () =>{
                                        this.props.navigation.goBack(),
                                        this.props.removeAdd(id)
                                    },
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
                    onPress={()=> this.props.navigation.navigate('Update advertisements',{
                        id: id,
                        title: title,
                        description: description,
                        phoneNumber: phoneNumber,
                        price:price,
                    })}
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

    const mapStateToProps = (state) =>{
        return{
            adds:state.adds,
        };
    };
export default connect(mapStateToProps, {removeAdd}) (ItemView);