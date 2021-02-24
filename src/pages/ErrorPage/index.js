import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import ImageIndication from "../../components/ImageIndication";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ErrorPage = () => {
  const navigation = useNavigation();
// se reinderizo a tela de erro ,  remove AsycStorage
  useEffect(() => {
    AsyncStorage.removeItem('lastSavedIp')
  }, [])

  return (
    <View style={styles.container}>
      <ImageIndication message="Ah, não!" status="fail" />
      <Text style={styles.text}>Ops... Não encontramos a Due.</Text>
      <Text style={styles.text}>
        Certifique-se de que está conectado na rede wifi Due Flow
      </Text>
      <TouchableOpacity
        style={styles.buttonTryReconect}
        onPress={() => navigation.navigate("SearchDue")}
      >
        <Text style={styles.TextTryReconect}> Tentar novamente </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ErrorPage;
