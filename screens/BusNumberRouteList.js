import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import {Picker} from '@react-native-community/picker';
import database from '@react-native-firebase/database';
import StepIndicator from 'react-native-step-indicator';

import Entypo from 'react-native-vector-icons/Entypo';


const labels = ["Cart","Delivery Address v Delivery AddressDelivery Address gre rtytr rr ","Order Summary","Payment Method","Track","Its s"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#ebc550',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: 'black ',
  stepStrokeUnFinishedColor: '#ebc550',
  separatorFinishedColor: 'black',
  separatorUnFinishedColor: 'black',
  stepIndicatorFinishedColor: 'black',
  stepIndicatorUnFinishedColor: '#22333b',
  stepIndicatorCurrentColor: '#22333b',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: 'black',
  labelSize: 15,
  currentStepLabelColor: 'black',
  lableFontFamily:'SourceSansPro-Regular',
  
}

export default class BusNumberRouteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route_id: this.props.navigation.state.params.data.value,
      route_details: [],
      selectedValue:0
    };
  }
async componentDidMount()  {
     for (var i = 0; i < this.state.route_id.length; i++) {
      await  database().ref(`/Routes/r${this.state.route_id[i]}`)
        .on('value', (snapshot) => {
          let arr=this.state.route_details
          arr.push(snapshot.val());
          this.setState({route_details:arr});     
        });     
    }
this.p();
  };
  p=()=>{
    console.log(this.state.route_details)  
  }
  render() {
    let arr=[];
    arr.push('1')
    return (
      <>
      {this.state.route_details.length==0?<View></View>:
      <>
        <View
          style={{
            height: 68,
            width: '100%',
            backgroundColor: '#393e42',
          }}>
          <View
            style={{
              height: 50,
              marginLeft: 10,
              marginBottom: 10,
              marginRight: 10,
              marginTop: 10,
              width: '95%',
              borderRadius: 18,
              backgroundColor: '#303338',
            }}>
            
            <Picker
              selectedValue={this.state.selectedValue}
              style={{
                height: 50,
                marginLeft: 10,
                marginRight: 10,
                width: '95%',
                fontSize: 20,
                fontFamily: 'SourceSansPro-Regular',
                borderRadius: 15,
                // color: '#89909a',
                color:'white'
              }}
              onValueChange={(itemValue, itemIndex) =>this.setState({selectedValue:itemValue})}>
                  {this.state.route_details.map((a,i)=>{
                  return(
                  <Picker.Item
                  key={i}
                  label={a.via!=""?a.source +" - "+a.destination+"("+a.via+")":a.source +" - "+a.destination}
                  value={i}
                 
                 
                />
                 );
              })}  
            
             
            </Picker>
         {console.log(arr)}
          </View>
          </View>
          <View
            style={{backgroundColor: '#ebc550',
            height: 40,
            marginTop:-2,
            width: '100%',
            justifyContent: 'center', }}>
              <Text>{this.state.route_details[Number(this.state.selectedValue)]['source']} - {this.state.route_details[Number(this.state.selectedValue)]['destination']}
              {this.state.route_details[Number(this.state.selectedValue)]['via']==''?'':'('+this.state.route_details[Number(this.state.selectedValue)].via+")"}
               </Text>
            </View>
                
        
         {/* {len=Number(this.state.route_details[Number(this.state.selectedValue)].intermediate.length)} */}
         
      <View style={{marginTop:25,left:15,bottom:20}}>
      {/* <View style={{marginLeft:30,height:'80%',marginRight:80,marginTop:50}}> */}
      
        <ScrollView>
          
        <StepIndicator
        
        renderStepIndicator={()=>   <Entypo
          name="location-pin"
          size={15}
          style={{color: '#aaa'}}
        />
}
         direction='vertical'
         stepCount={Number(this.state.route_details[Number(this.state.selectedValue)].intermediate.length)}
         customStyles={customStyles}
         labels={this.state.route_details[Number(this.state.selectedValue)].intermediate}
         renderLabel={function (position, stepStatus, label, currentPosition){
                  return (
                    <View style={{padding:15}}>
                         <Text style={{color: 'black',fontSize:13, position: 'absolute', left:0,padding:3}}>{position.label}</Text>
                    </View>
                  ) 
          }}
    />
    </ScrollView>
    
    </View>
       
         
    </>
  }

      </>
    );
  }
}