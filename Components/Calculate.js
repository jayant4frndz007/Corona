import React, {Component} from 'react';  
import { Text, View,StyleSheet, Image,TextInput,ImageBackground, TouchableOpacity,Button ,ScrollView,FlatList  } from 'react-native';  

  
export default class App extends Component { 
  constructor(props){
   super(props);
    this.state = {  
        myState: 'This is a text component, created using state data. It will change or updated on clicking it.'  ,
        toggleChange:true,
        toggleText:'Show',
        data:[  
          {key: 'Cough',color:'gray',url:''},
          {key: 'Fever',color:'gray',url:''},
           {key: 'Chest pain',color:'gray',url:''},
           {key: 'Breathing Problem',color:'gray',url:''},  
          {key: 'Bluish lips or face',color:'gray',url:''},
          {key: 'Weakness',color:'gray',url:''},
          
           
      ],
      percentage:0,
      suggest:"Wash hand Properly."
    }
     
  } 
  
   
    onPressButton=(args,e)=>{
      //console.log(args); 
    let newData= this.state.data.map((data)=>{
              if(args.key === data.key){
                data.color=args.color=='orange' ? 'gray' :'orange';
                if(data.color === 'orange'){
                    data.url='../assets/tick.png';

                }else{
                data.url='';

                }
                return data;
              }else{
                return data;
              }

     });
     console.log(newData);
     this.setState({data:newData});
    }
    seperator=()=>{
      return (  
        <View  
            style={{  
                height: 1,  
                backgroundColor: "skyblue", 
                margin:10
            }}  
        />  
    );  
    }
    calculateData=(data)=>{
        let count=0;
            data.map((data)=>{
                    if(data.color === 'orange'){
                        count++;
                    }
            });
           
            let ress=parseInt((count/6)*100);
            this.setState({percentage:ress});
            if(ress >=0 && ress <35){
                this.setState({suggest:'Wash hand Properly.'});
            }else if(ress >=35 && ress <51){
                this.setState({suggest:'Consult to Doctor (Moderate).'});
            }else{
                this.setState({suggest:'Please Consult to Doctor Immediately, May be you are suffering from Corona.'});
            }

    }
    render() {  
        return (  
            <View style={styles.item}>  
            
           <View style={{height:20}}>
                <Text style={{color:'gray',fontWeight:'bold',marginLeft:20}}>Select or Press on Symptons given below .</Text>
           </View>
                          
            <ScrollView style={{height:330}}>  
               <FlatList
                    data={this.state.data}  
                    renderItem={({item}) =>  
                        <Text style={{backgroundColor:item.color,color:'white',padding: 10,  
                          fontSize: 18,  
                          height: 44,  
                          }} 
                     onPress={this.onPressButton.bind(this, item)}>
                         {item.key}
                        
                     </Text>}  
                    ItemSeparatorComponent={this.seperator}
                    
                /> 
                </ScrollView>
                <ScrollView style={{height:330}} >
                <View style={styles.line}>
                    <Button title='Calculate' onPress={this.calculateData.bind(this,this.state.data)}/>
                </View>   
                <View style={styles.result}>
                    <Text style={styles.res}>Result</Text>
                    <View >
                        <Text style={styles.res1}>Percentage calculation :{this.state.percentage} %</Text>
                </View> 
                <View >
                        <Text style={styles.res2}>Suggestion : {this.state.suggest}</Text>
                </View> 
                </View>
                </ScrollView> 
            </View>  
        );  
    }  
} 


const styles = StyleSheet.create({
  
    item: {  
       fontSize: 18, 
      
          
  },
  secondFlex:{
        flex:1
  },
  line:{
        height:40,
        backgroundColor:'lightblue'
  },
  result:{
      backgroundColor:'orange',
      height:250
  }
  ,
  res:{
      padding:20,
      fontSize:24,
      color:'rgba(255,50,0,0.5)'
      
  },
  res1:{
    paddingLeft:20,
    fontSize:24,
    color:'rgba(50,50,0,0.5)'
    
},
res2:{
    paddingLeft:20,
    paddingTop:10,
    fontSize:18,
    color:'rgba(50,70,0,0.5)'  
}
});
