import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import api from "../../services/api";

function AlertSecurity() {
  const [modalVisible, setModalVisible] = useState(true);

  const [dueCurrent, setDueCurrent] = useState({});

  const connection = async () => {
    try {
      const response = await api.post('/api/connection',
      {
        command: "connect",
        port: "AUTO",
        baudrate: 0,
        printerProfile: "_default",
        autoconnect: true
      }, 
      {
        headers: {
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
          "Content-Type": "application/json",
        },
      });
      setDueCurrent(response.data);
      console.log("RETORNO_DA_API", response);
    } catch (e) {
      console.log(e);
    }
    setModalVisible(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modal}>
        <View style={styles.AlertIcon}>
          <Feather name="alert-triangle" size={46} color="#F39200" />
        </View>
        <View>
          <Text style={styles.Atention}>ATENÇÃO</Text>
        </View>
        <View>
          <Text style={styles.Title1}>NOTAS DE SEGURANÇA</Text>
        </View>
        <View>
          <Text style={styles.MidleText}>
            A sua Due Flow é um equipamento de alta tecnologia com um laser de
            alta potência.
          </Text>
        </View>

        <View>
          <Text style={styles.MidleText2}>
            Nunca deixe a sua Due Flow operando sem supervisão.
          </Text>
        </View>
        <View>
          <Text style={styles.EndText2}>
            Nunca utilize os seguintes materiais: PVC, VINYL, ABS, FIBRA DE
            VIDRO, FIBRA DE CARBONO, ou qualquer outro material que contenha
            CLORO.
          </Text>
        </View>
        <View>
          <Text style={styles.Text3}>
            Ao operar a Due Flow, você concorda que:
          </Text>
        </View>
        <View>
          <Text style={styles.TextA}>
            A - O uso negligente do laser Due pode acarretar danos à saúde e à
            máquina
          </Text>
        </View>
        <View>
          <Text style={styles.TextB}>
            B - Conhece o guia de uso e as intruções de segurança Due
          </Text>
        </View>
        <View>
          <Text style={styles.TextC}>
            C - A utilização da Due Flow deve ser permitida somente á pessoas
            responsáveis e previamente capacitadas quanto ao uso correto e
            seguro da máquina e de seus componentes.
          </Text>
        </View>

        <TouchableOpacity onPress={() => connection()}>
          <View>
            <Text style={styles.ModalButton}>Entendo e Concordo</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default AlertSecurity;
