import React from "react";
import { View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
//import api from '../../services/api';
import Button from "../../components/Button";
import ImageIndication from "../../components/ImageIndication";

import styles from "./styles";

export default function DueFlowControl() {
  const navigation = useNavigation();
  const route = useRoute();
  const ip = route.params.baseURL;

  console.log("FlowControll IP: " + ip);

  // async function SendCommand(cmd) {
  //   const url = ip + "/api/printer/command";
  //   const data = { command: cmd };

  //   console.log(url);

  //   const response = await api.post(url, JSON.stringify(data), {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
  //     },
  //   });

  //   console.log(response);
  // }

  return (
    <View style={styles.container}>
      <ImageIndication message="Perfeito" status="success" />
      <Text style={styles.text}>Tudo certo.</Text>
      <Text style={styles.text}>Você já pode conectar sua Due</Text>
      <Button
        onPress={() => {
          navigation.navigate("Conectar", { ip });
        }}
      >
        Conectar
      </Button>
    </View>
  );
}
