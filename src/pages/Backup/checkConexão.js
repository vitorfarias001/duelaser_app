import React, { useEffect, useState, Component } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'
import DueFlowIp from '../../models/dueflowip.model'
import DueFlowIpService from '../../services/dueflowip.service'
import api from '../../services/api';
import styles_main from '../../styles/main'
import styles from './styles'

let _wifiReady = false
let _dueFound = false
let _lastConnection = ""

export default function SearchDue(){
    let _ipSplited
    let _ipClass
    let _ipEnd = 1
    let _ipMounted

    const navigation = useNavigation();

    const [textConnectionType, setTextConnectionType] = useState("...")
    const [textIsConnected, setTextIsConnected] = useState("...")
   
    async function SaveLastConnection(ip){
      console.log("Saving last connection data...");
      let myIp =  new DueFlowIp();
      myIp.ip = ip;

      DueFlowIpService.clear()
      DueFlowIpService.addData(myIp)
  }

    async function checkFlowStateWifi(){
        if(_wifiReady){
            if(!_dueFound) {
                try{
                    _ipMounted = _ipSplited[0]+"."+_ipSplited[1]+"."+_ipSplited[2]+"."+_ipEnd;

                    if(_lastConnection != "")
                    {
                        _ipMounted = _lastConnection
                    }

                    const url = 'http://'+_ipMounted+'/api/connection';
                    console.log('Trying to get in touch over ', url);
                    const response = await api.get(url, {
                        headers: { 'X-Api-Key' : 'F4944B335B634FF29D563D5F92E9FB7D' }
                    });
                    SaveLastConnection(_ipMounted);
                    _dueFound = true
                    navigateToControll(_ipMounted)
                    console.log("Due Flow found!")
                }catch (e) {
                    console.log("No answer")
                    _lastConnection = ""
                    _ipEnd++
                    
                    if(_ipEnd == 255){
                        _ipEnd = 1
                    }
                }
            }
        }
    }

    NetInfo.fetch().then(state => {
        setTextConnectionType('Connection type ' + state.type)
        setTextIsConnected('Is connected? ' + state.isConnected)

        _wifiReady = state.isConnected

        _ipSplited = state.details.ipAddress.split(".")
        _ipClass = _ipSplited[0]+"."+_ipSplited[1]+"."+_ipSplited[2]

        if(_ipClass == "10.3.3"){
            //Assume the machine is over Access Point
            _dueFound = true
            navigateToControll('10.3.3.1')
        }
        else {
            //Get last connection
            DueFlowIpService.findAll().then((response) => { 
              response._array.forEach(function(item){
                  console.log("Last connection ip ", item['ip'])
                  _lastConnection = item[ip]
              });
          }), (error) => {
              console.log(error)
          }
      }
    });

    useEffect(() => {
        setInterval(() => {
            checkFlowStateWifi()
          }, 1000)
    }, []);

    function navigateToControll(ipAddress){
        _dueFound = true
        navigation.navigate('Controll', { ipAddress });
    }

    return (
        <View style={styles_main.container}>
            <Text>{textConnectionType}</Text>
            <Text>{textIsConnected}</Text>
        </View>
    );
}