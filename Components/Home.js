import React, {Component} from 'react';  
import { Text, View,StyleSheet, Image,TextInput,ImageBackground, TouchableOpacity,Button ,ScrollView,FlatList  } from 'react-native';  

  
export default class Home extends Component { 
  constructor(props){
   super(props);
   this.state={
       covidData:undefined,
   }
  } 
  
  componentDidMount(){
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=India", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "9d1f62bcb1msh74451c847a4993cp1d7060jsnbcf6704032f8"
	}
})
    .then(response => response.json())
    .then((responseJson)=> {
      console.log(responseJson.data.covid19Stats[0]);
      this.setState({covidData:responseJson.data.covid19Stats[0]})
    })
    .catch(error=>console.log(error)) //to catch the errors if any
 
    }
    
    render() {  
        return ( 
            
            <View >  
            <ScrollView style={{backgroundColor:'lightgray',height:600}}>
            <Text style={styles.head}>
                     Watch for Symptoms
            </Text>
            <Text style={styles.subhead}>
            Reported illnesses have ranged from mild 
            symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.
             </Text>
             <View>
                <Text style={styles.head1}>India Covid-19 Status</Text>
        <Text style={styles.covidData}>
            <Text style={styles.subhead2}>Confirmed:<Text style={styles.subhead2}>{this.state.covidData !== undefined ?' '+this.state.covidData.confirmed+', ':'0, '}</Text>
            </Text> 
            <Text style={styles.subhead2}>Deaths:<Text style={styles.subhead2}>{this.state.covidData !== undefined ?' '+this.state.covidData.deaths+', ':'0, '}</Text>
            </Text>
            <Text style={styles.subhead2}>Recovered:<Text style={styles.subhead2}>{this.state.covidData !== undefined ?' '+this.state.covidData.recovered+' ':'0'}</Text>
            </Text>
        </Text>
            </View> 
            <Text style={styles.subhead1}>
            These symptoms may appear <Text > 2-14</Text> days after exposure (based on the incubation period of MERS-CoV viruses).
            </Text>
             
            <Text style={styles.listData}>
                1. Fever
            </Text>
            <Text style={styles.listData}>
                2. Cough
            </Text>
            <Text style={styles.listData}>
                3. Shortness of breath
            </Text>
            <Text style={styles.listData}>
                4. Chest pain
            </Text>
            <View style={styles.imageData}>
            <Image source={require('../assets/symptoms-fever.png')}  style={{width: 100, height: 100,marginBottom:50}}/>
            <Image source={require('../assets/symptoms-cough.png')} style={{width: 100, height: 100,marginBottom:50}}/>
            <Image source={require('../assets/symptoms-shortnessOfBreath.png')} style={{width: 100, height: 100}}/>
            
                  
            </View>
            <View style={{backgroundColor:'lightblue',height:400}}>
                    <Text style={styles.footerData}>When to Seek Medical Attention</Text>
                    <View>
                <Text style={styles.footerData1}>
                  . Trouble breathing
                </Text>
                <Text style={styles.footerData1}>
                  . Persistent pain or pressure in the chest
                </Text>
                <Text style={styles.footerData1}>
                 . New confusion or inability to arouse
                </Text>
                <Text style={styles.footerData1}>
                 . Bluish lips or face
                </Text>
            </View>
            </View>
           <View>
               <Text style={styles.footerData2}>
               *This list is not all inclusive.
                Please consult your medical provider for any other symptoms that are severe or concerning.
               </Text>
           </View>
            </ScrollView>  
            </View> 
           
        );  
    }  
} 


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
    
        
  },
  head:{
      fontSize:35,
      
      justifyContent:'center',
      padding:5,
      color:'gray',
      opacity:0.7
  },
  head1:{
    fontSize:28,
    
    justifyContent:'center',
    padding:5,
    color:'gray',
    opacity:0.7
},
  subhead:{
      marginLeft:100,
      fontSize:18,
      color:'gray',
      marginBottom:20,
      
  },
  subhead2:{
   fontSize:16,
    color:'#ff8080',
   padding:10,
   fontWeight:"bold"
    
},
  subhead1:{
    fontSize:18,
    color:'gray',
    padding:10

  },
  listData:{
    fontSize:18,
      marginLeft : 100,
      color:'gray',
  },
  imageData:{
     marginBottom:50,
      justifyContent:'center',
      alignItems:'center'
  },
  footerData:{
      fontSize:20,
      backgroundColor:'transparent',
      padding:20
  },
  footerData1:{
      padding:20,
  },
  footerData2:{
      padding:20,
      color:'rgba(200,0,0,0.4)',
      fontSize:30
  },
  covidData:{
        backgroundColor:'#ffe6f2',
        height:60,
        padding:20,

  }
  
});
