import React, { useState, useCallback ,useEffect} from "react";
import { View, Text } from "react-native";
import { useNavigation, useFocusEffect, useIsFocused } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
import ImageIndication from "../../components/ImageIndication";
import DueFlowIp from "../../models/dueflowip.model";
import DueFlowIpService from "../../services/dueflowip.service";
import { setBaseURL } from "../../services/api";
import styles_main from "../../styles/main";
import api, { makeAxiosInstance } from "../../services/api";



export default function SearchDue() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [dueStatus, setDueStatus] = useState(null);
  const [foundBaseURL, setFoundBaseURL] = useState(null);
  const [tryingBaseURL, setTryingBaseURL] = useState(null);

  const testConnection = useCallback(async (baseUrl) => {
    try {
      setTryingBaseURL(baseUrl);

      const { status } = await makeAxiosInstance(baseUrl, false)
        .get("/api/connection ", {
          headers: {
            "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
            "Content-Type": "application/json",
          },
        })

        setBaseURL(baseUrl);

        await AsyncStorage.setItem('lastSavedIp', baseUrl)
        
        return {responseStatus: status, baseUrl};
    } catch (err) {
      console.log({err})
      throw err;
    }
  }, []);
//tentar fazer a conexão
  const recursivelyFindIP = useCallback(async (current = 0, max = 255) => {
    try {
      const savedIp = await AsyncStorage.getItem('lastSavedIp');
      const currentIp = `http://192.168.0.${current}`;

      const ip = current === 0 ? (savedIp ?? currentIp)  : currentIp;

      return await testConnection(ip)
    } catch(error) {
      if(current > max) {
        throw error;
      }

      return recursivelyFindIP(current + 1, max);
    }
  }, [])
//initialize = toda vez que a tela ficar visivel(SearchDUe)vai ser chamado
  const initialize = useCallback(async () => {
    try {
      const { responseStatus, baseUrl } = await recursivelyFindIP();
  
      setDueStatus(responseStatus);
      setFoundBaseURL(baseUrl);
    } catch(error) {
      navigation.navigate("Error");
    }
  }, [])

  useEffect(() => {
    if(!isFocused) {
      setDueStatus(null)
      setFoundBaseURL(null)
      setTryingBaseURL(null)

      return;
    }

    initialize();
  }, [isFocused])
//se eu não tenho o dueStatus = 200 , ou se eu não tenho a URL encontrada , não vai fazer nada , pois ainda vai estar procurando o ip até 255
  useEffect(() => {
    if(dueStatus === null || foundBaseURL === null) return;   

    if (dueStatus !== 200) {
      navigation.navigate("Error");
    } else {
      navigation.navigate("Controll", { baseURL: foundBaseURL });
    }
  }, [dueStatus, foundBaseURL])

  return (
    <View style={styles_main.container}>
      <ImageIndication message="Boas Vindas" status="loading" />
      <Text style={styles_main.text}>Procurando sua Due...</Text>

      {(!foundBaseURL && tryingBaseURL) && (
        <Text style={styles_main.text}>Procurando ip da sua due {tryingBaseURL}</Text>
      )}
    </View>
  );
}
