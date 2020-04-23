import React, {Component} from 'react';  
import { Text, View,StyleSheet,ImageBackground  } from 'react-native';  

  
export default class Header extends Component { 
  constructor(props){
   super(props);
   
     
  } 
  
    showComponent=(args)=>{
         this.props.onClickChange(args);
    }
    render() {  
        return (  
            <View style={styles.container}>  
            <View style={{ height:200}} >
              
              <ImageBackground source={require('../assets/corona.jpg')} style={{width: '100%', height: '100%'}}>
                  <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.headerData}>CORONA TEST</Text>
                  </View>
                  <View style={{position: 'absolute', top: 150, left: 0, right: 0, bottom: 0,backgroundColor:'transparent'}}>
                      <View style={styles.subHeader}>
                    <Text style={styles.navData} onPress={this.showComponent.bind(this,'home')}>Home</Text>
                    <Text style={styles.navData} onPress={this.showComponent.bind(this,'cal')}>Calculate</Text>
                    <Text  style={styles.navData} onPress={this.showComponent.bind(this,'about')}>About</Text>
                    </View>
                  </View>
              </ImageBackground>
            </View>
           
                          
            
            </View>  
        );  
    }  
} 


const styles = StyleSheet.create({
  container: {
    
        flex:1,
        
  },
  subHeader:{
      backgroundColor:'rgba(0,50,100,0.5)',
      padding:15,
      flexDirection:'row',
        
},
 navData:{
    color:'#fff',
    marginLeft:50,
    
 },
    item: {  
      padding: 10,  
      fontSize: 18,  
      height: 44,  
      backgroundColor:'white'
  },  
  headerData:{
   fontSize:25,
   color:'#ffff'
  }
  
});
