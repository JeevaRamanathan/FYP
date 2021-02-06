import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  ScrollView,Alert
} from 'react-native';
import {ListItem} from 'react-native-elements';
import HeaderBar from './Header';
import LottieView from 'lottie-react-native';
import database from '@react-native-firebase/database';
import { and } from 'react-native-reanimated';
class BusList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      source:this.props.navigation.state.params.s,
      destination:this.props.navigation.state.params.d,
      routes:[],
      bus:[],
      arr:[],
      rid:[],
      via:[],
      finalBusVia:[],
      flag:0
    }
  }
  componentDidMount() {
    let flag=0;
    database()
      .ref('Routes')
      .on('value', (snapshot) => {
        snapshot.forEach(element => {
          if (element.val().toandfro==1 && element.val().intermediate.includes(this.state.source) && element.val().intermediate.includes(this.state.destination))
            {
              this.state.routes.push(element.val())
              // console.log("-",element.val().route_id);
                  // database()
                  // .ref('bus')
                  // .on('value', (snapshot1) => {
                  //   snapshot1.forEach((element1) =>
                  //   {
                  //     // console.log(element1.val().route_id," ----- ",element.val().route_id );
                  //     // console.log(typeof(element.val().route_id));
                  //     if (element1.val().route_id.includes(element.val().route_id))
                  //     {
                  //       console.log(element1.val());
                  //       // this.state.bus.push(element1.val())
                  //     let  a= this.state.bus
                  //       a.push(element1.val())
                  //       this.setState({bus:a})
                  //     }
                  //   });

                  // });
            }
            else if(element.val().toandfro==0 && element.val().intermediate.includes(this.state.source) && element.val().intermediate.includes(this.state.destination) && (element.val().intermediate.indexOf(this.state.source) < element.val().intermediate.indexOf(this.state.destination)) )
            {
              this.state.routes.push(element.val()) 
            }
        });
        // if(this.state.routes.length>1){
        // for (var i=0;i<this.state.routes.length;i++){
        //       if(this.state.routes[i].via!='')
        //       {
                
        //         var t= this.state.routes[i].intermediate
        //         var arr=t.splice(this.state.routes[i].intermediate.indexOf(this.state.source),this.state.routes[i].intermediate.indexOf(this.state.destination))
        //         let  a= this.state.arr
        //         a.push(arr)
        //         this.setState({arr:a})
        //         let b=this.state.rid
        //         b.push(this.state.routes[i].route_id)
        //         this.setState({rid:b})
        //       }
             
        //   }
        // }
        // else{
        //   this.state.rid.push(this.state.routes[0].route_id)
        //   // console.log(this.state.rid);

        // }
         
        for (var i=0;i<this.state.routes.length;i++){
          var t= this.state.routes[i].intermediate
         
               var arr=t.slice(this.state.routes[i].intermediate.indexOf(this.state.source),this.state.routes[i].intermediate.indexOf(this.state.destination)+1)
                let  a= this.state.arr
                a.push(arr)
                this.setState({arr:a})
                let b=this.state.rid
                b.push(this.state.routes[i].route_id)
                this.setState({rid:b})
                let c=this.state.via
                c.push(this.state.routes[i].via)
                this.setState({via:c})
                this.state.finalBusVia.push([])
                 
        }
        console.log(this.state.rid);
        console.log('---');
        console.log(this.state.arr);
        console.log(this.state.via);
        console.log(this.state.finalBusVia);
        // console.log(typeof(this.state.finalBusVia[0]));
        // console.log("*",typeof(this.state.finalBusVia[1]));
        // console.log("&",typeof(this.state.finalBusVia[2]));

        if(this.state.arr.length!=1)
        {
          // console.log("&&&&");
          for(var i=0;i<this.state.arr.length;i++)//for routes
          {
            // console.log("***");
            for(var j=0;j<this.state.via[i].length;j++)// for via
            {
              // console.log(this.state.arr[i]+"---------0");
              for(var k=0;k<this.state.arr[i].length;k++)
              {
                if(this.state.arr[i][k].includes(this.state.via[i][j]) && !this.state.finalBusVia[i].includes(this.state.via[i][j]) && this.state.via[i][j]!=this.state.source && this.state.via[i][j]!=this.state.destination && !this.state.source.includes(this.state.via[i][j]) && !this.state.destination.includes(this.state.via[i][j]))
                  {
                    this.state.finalBusVia[i].push(this.state.via[i][j])
                  // let temp=this.state.finalBusVia[i]
                  // console.log(this.state.finalBusVia[0],"---",typeof(this.state.finalBusVia[0]));
                  // temp.push(this.state.via[i][j])
                  // this.setState({finalBusVia[i]:temp})
                  // console.log(this.state.via[j]);
                }
              }
            } 
            // console.log(this.state.source);
            // this.state.finalBusVia[i].splice(this.state.finalBusVia[i].indexOf(this.state.source), 1);
            // this.state.finalBusVia[i].splice(this.state.finalBusVia[i].indexOf(this.state.destination), 1);
          }
          console.log(this.state.finalBusVia);
          // this.state.finalBusArray.push(this.state.routes[this.state.arr.length-1].route_id)
          // for(var j=0;j<this.state.arr.length-1;j++)
          // {
          //   // var flag=true;
          //   for(var k=j+1;k<this.state.arr.length;k++)
          //   {
          //     for(var iteration=0)
          //     if(JSON.stringify(this.state.arr[j])!=JSON.stringify(this.state.arr[k]) )
          //     {
          //       // flag=false
          //       // if(k==this.state.arr.length-1)
          //       // {
          //       //   flag1=false
          //       // }
          //       // this.print();
          //     }
          //     // else{
          //     //   console.log(this.state.rid+"- route_id");
          //     // }
          //   }
          //   // if (flag)
          //   // {
          //   //   this.state.finalBusArray.push(this.state.routes[j].route_id)
          //   // }
          // }
        }
        else
        {
            // this.state.finalBusArray.push(this.state.routes[0].route_id)
            console.log(this.state.routes[0].route_id);
        }
      });
         
  }
  print=()=>{
    for(var k=0;k<this.state.routes.length;k++){
      console.log(this.state.routes[k].via+"-route_id:"+this.state.routes[k].route_id);
    }
  }
  render() {

    return (
      <>
        <View style={styles.top}>
          <Text style={styles.text}>
            {this.props.navigation.state.params.s} -{' '}
            {this.props.navigation.state.params.d}
          </Text>
        </View>
        {/* <View style={{height: '100%', width: '100%'}}> */}
        {/* Activity Indicator until it fetches the data*/}
        {/* <LottieView
            source={require('../assets/Bus.json')}
            loop={true}
            autoPlay={true}
            progress={0}
            speed={3}
          /> */}
        {/* </View> */}
        <ScrollView>
        <ListItem bottomDivider>
                    <Image
                      source={require('../assets/busno.png')}
                      style={{height: 30, width: 30, borderRadius: 10}}
                    />
        <ListItem.Content>
                      <ListItem.Title>
                        <View syle={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontFamily: 'SourceSansPro-Regular',
                              fontSize: 17,
                              fontWeight: 'bold',
                            }}>
                        BusNumber
                          </Text>
                        </View>
                      </ListItem.Title>
                      <ListItem.Subtitle>
                        <Text
                          style={{
                            fontFamily: 'SourceSansPro-Regular',
                          }}>
                        Route - Route
                        </Text>
                      </ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                 

        </ScrollView>
      </>
    );
  }
}
export default BusList;
const styles = StyleSheet.create({
  top: {
    backgroundColor: '#ebc550',
    height: 40,
    width: '100%',
    justifyContent: 'center', //Centered vertically
  },
  text: {
    color: '#22333b',
    fontSize: 16,
    padding: 10,
    fontFamily: 'SourceSansPro-Regular',
    textAlign:'center'
  },
  container: {
    height: 140,
    width: '100%',
    backgroundColor: 'white',
    elevation: 7,
    borderRadius: 3,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  text1: {
    fontFamily: 'SourceSansPro-Regular',
    textAlignVertical: 'bottom',
    fontStyle: 'italic',
    color: '#aaa',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,
  },
});
