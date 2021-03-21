import React, { Component } from "react";
import { Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export default class Connectivity extends React.Component{
  
    constructor(props){
        super(props);
        this.state={
            isConnected:true
        }
    }
    
     CheckConnectivity=(data)=> {  
    // For Android devices
   
    if (Platform.OS === "android") {           
            NetInfo.fetch().then(res => {     
        if (res.isConnected) {
           return true;        
        } else {
            data.navigation.navigate("ConnectToInternet")      
        }
      });
    }
  };

 
}