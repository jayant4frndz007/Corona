import React, {Component} from 'react';  
import { Text, View,StyleSheet, Image,TextInput,ImageBackground, TouchableOpacity,Button ,ScrollView,FlatList  } from 'react-native';  
import Header from './Components/Header';
import Home from './Components/Home';
import Calculate from './Components/Calculate';
import About from './Components/About';

export default class App extends Component { 
  constructor(props){
   super(props);
   this.state={
     header:true,
     home:true,
     cal:false,
     about:false,
     
   }
     
  } 
  changeComponent=(para)=>{
      if(para === 'home'){
        this.setState({home:true,cal:false,about:false})
      }else if(para === 'cal'){
        this.setState({home:false,cal:true,about:false})
      }else if(para === 'about'){
        this.setState({home:false,cal:false,about:true})
      }else{
        this.setState({home:true,cal:false,about:false})
      }
  }
    
    render() {  
        return (  
            <View style={styles.container}>  
            <View style={{ height:200}} >
             { this.state.header && <Header onClickChange={this.changeComponent}/>}
            </View>
                  <View>
                  { this.state.home && <Home />}
                  { this.state.cal && <Calculate />}
                  { this.state.about && <About/>}
                 
                  </View>
            </View>  
        );  
    }  
} 


const styles = StyleSheet.create({
  container: {
    
        flex:1,
        
  },
 
  
});
