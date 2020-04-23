import React, {Component} from 'react';  
import { Text, View,StyleSheet, Image,TextInput,ImageBackground, TouchableOpacity,Button ,ScrollView,FlatList  } from 'react-native';  

  
export default class About extends Component { 
  constructor(props){
   super(props);
  } 
  
    
    render() {  
        return ( 
            
            <View style={styles.container}>  
            <View>
                    <Text style={styles.about}>Developed By Jayant Kumar </Text>
                    <View style={{height:200,justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/jayantimg1.jpg')} style={{width: '50%', height: '90%',borderRadius:110}}>
                  
                 
              </Image>
              <View style={{position: 'absolute', top: 200, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text >Email: jayant4frndz007@gmail.com</Text>
                  </View>
              </View>
              </View>
              <View>
              <Text style={styles.about}>Tested By Ajay Raj </Text>
                    <View style={{height:200,justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../assets/ajay.png')} style={{width: '50%', height: '90%',borderRadius:110}}>
                  
                 
              </Image>
              <View style={{position: 'absolute', top: 200, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text >Email: ajay.kraj20@gmail.com</Text>
                  </View>
              </View>
              </View>
            </View> 
           
        );  
    }  
} 


const styles = StyleSheet.create({
  container: {
    
    backgroundColor:'lightgray',   
    height:'100%' 
  },
  about:{
      paddingTop:40,
      padding:5,
     fontSize:30,
     color:'gray'
     
  }
 
});
