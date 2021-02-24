import React, { useState, useRef, useCallback, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  PanResponder,
  NetInfo,
} from "react-native";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

import AlertSecurity from "./AlertSecurity";
import MaterialList from "./MaterialList";
import styled from "styled-components/native";
import styles from "./styles";
import { useMaterial } from "../../hook/MaterialProvider";
import axios from "axios";

import api from "../../services/api";
import { baseURL } from "../../services/api";

let CIRCLE_RADIUS = 15; //Drag

const styleDrag = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#00ADEF",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
  },
});

function enviarArquivos() {
  const data = new FormData();
}

// borderBottomLeftRadius: width*0.08
// borderBottomRightRadius: width*0.08

const Header = styled(Animated.View)`
  background-color: #00adef;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: absolute;
  top: -480px;
  left: 0;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  width: 400px;
  height: 600px;
  z-index: 10;
  margin-bottom: 100px;
`;

function Feed() {
  const [modalVisible, setModalVisible] = useState(true);
  const [ ip, setIp ] = useState(null);

  const { material, setMaterial } = useMaterial();

  const pan = useRef(new Animated.ValueXY()).current;

  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(250);

  console.log("x: " + moveX + " y: " + moveY);

  const moveRight = useCallback(() => {
    const move = moveX + 5;
    const maxX = 520;

    if (move > maxX) {
      console.log("Limite Máximo X");
      setMoveX(maxX);
    }
    setMoveX(move);
    Animated.timing(pan.x, {
      toValue: move,
      duration: 1,
      useNativeDriver: false,
    }).start();
    postMovementX(move);
  }, [moveX, pan.x]);

  const moveUp = useCallback(() => {
    const minY = -95;
    const move = moveY - 5;

    if (move < minY) {
      console.log("Limite Mínimo Y");
      setMoveY(minY);
      return;
    }

    setMoveY(move);

    Animated.timing(pan.y, {
      toValue: move,
      duration: 1,
      useNativeDriver: false,
    }).start();
    postMovementY(move);
  }, [moveY, pan.y]);

  const moveLeft = useCallback(() => {
    const move = moveX - 5;
    const minX = -135;
    setMoveX(move);

    if (move < minX) {
      console.log("Limite Mínimo X");
      setMoveX(minX);
      return;
    }

    Animated.timing(pan.x, {
      toValue: move,
      duration: 1,
      useNativeDriver: false,
    }).start();
    postMovementLeft(move);
  }, [moveX, pan.x]);

  const moveDown = useCallback(() => {
    const move = moveY + 5;
    const maxY = 95;

    if (move > maxY) {
      console.log("Limite Máximo Y");
      setMoveY(maxY);
      return;
    }
    setMoveY(move);

    Animated.timing(pan.y, {
      toValue: move,
      duration: 1,
      useNativeDriver: false,
    }).start();
    postMovementdownY(move);
  }, [moveY, pan.y]);

  const resetPosition = useCallback(() => {
    setMoveX(-360);
    setMoveY(-95);

    Animated.timing(pan.y, {
      toValue: moveY,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(pan.x, {
      toValue: moveX,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [moveX, moveY, pan.x, pan.y]);

  function swipeDown() {
    setHeaderHeight(800);
  }
  function swipeUp() {
    setHeaderHeight(250);
  }

  const postMovementX = async () => {
    await api.post(
      "/api/printer/printhead",
      {
        command: "jog",
        x: 10,
      },
      {
        headers: {
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("RETORNO_DA_API", postMovementX);
  };

  const postMovementY = async () => {
    await api.post(
      "/api/printer/printhead",
      {
        command: "jog",
        y: 10,
      },
      {
        headers: {
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("RETORNO_DA_API", postMovementY);
  };

  const postMovementdownY = async () => {
    await api.post(
      "/api/printer/printhead",
      {
        command: "jog",
        y: -10,
      },
      {
        headers: {
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("RETORNO_DA_API", postMovementdownY);
  };

  const postMovementLeft = async () => {
    await api.post(
      "/api/printer/printhead",
      {
        command: "jog",
        x: -10,
      },
      {
        headers: {
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
          "Content-Type": "application/json",
        },
      }
    );
    console.log("RETORNO_DA_API", postMovementdownY);
  };
  const disparoRapido = async () => {
    try {

      // const response = await makeAxiosInstance(null, true).post('/api/plugin/due_gpio', {
      //   command: "disparoRapido",
      //   type: "command",
      // }, {
      //   "Content-Type": "application/json",
      //   "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
      // })

      const response = await axios({
        method: "post",
        url: baseURL + "/api/plugin/due_gpio",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
        },
        data: {
          command: "disparoRapido",
          type: "command",
        },
      });
      console.log(response);
      console.log("RETORNO_DA_API", disparoRapido);
    } catch (e) {
      console.log(e);
    }
  };

  const ResetarPosition = async () => {
    try {
      const response = await axios({
        method: "post",
        url: baseURL + "/api/printer/command",
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
        },
        data: {
          command: "G92 X0 Y0",
        },
      });
      console.log(response);
      console.log("RETORNO_DA_API", response);
    } catch (e) {
      console.log(e);
    }
  };

  //  axios
  //  .get("http://192.168.0.47/api/files/local")
  //  .then((response) => doSomething(response));
  const letsDue = async () => {
    try {
      const response = await axios({
        method: "post",
        url: baseURL + `/api/files/local/${material.name}`,
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
        },
        data: {
          command: "select",
          print: "true",
        },
      });
      console.log(response);
      console.log("RETORNO_DA_API", letsDue);
    } catch (e) {
      console.log(e);
    }
  };
  const config = {
    velocityThreshold: 0.1,
    directionalOffsetThreshold: 80,
    gestoIsClickThreshold: 3,
  };

  const panHeader = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: panHeader.x._value,
          y: panHeader.y._value,
        });
        console.log(panHeader.y);
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: panHeader.x, dy: panHeader.y },
      ]),
      onPanResponderRelease: () => {
        panHeader.flattenOffset();
      },
    })
  ).current;


  useEffect(() => {
    AsyncStorage.getItem('lastSavedIp').then((ipState) => {
      setIp(ipState)
    })
  }, [])

  return (
    <>
      <Text style={styles.textHome}>Área de Trabalho</Text>
      <Text style={styles.textHome2}>
        Ajuste o material da sua due e Let's Due it.
      </Text>
      <AlertSecurity
        modalVisible={modalVisible}
        handlerCloseModal={() => setModalVisible(!modalVisible)}
      />

      <Header
        style={{
          transform: [
            {
              translateY: panHeader.y.interpolate({
                inputRange: [0, 480],
                outputRange: [0, 480],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
        {...panResponder.panHandlers}
      >
        <Text>{ip}</Text>
      </Header>

      <View
        style={{
          flex: 1,
          position: "absolute",
          top: 200,
          bottom: 0,
        }}
      >
        <View style={{ flex: 1 }}>
          {/* Controlls Itens */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <TouchableOpacity style={styles.buttonCicle}>
                  <AntDesign name="upcircleo" size={36} onPress={moveUp} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <TouchableOpacity style={styles.buttonCicle}>
                  <AntDesign
                    name="leftcircleo"
                    size={36}
                    color="black"
                    onPress={moveLeft}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonCicle}>
                  <AntDesign
                    name="rightcircleo"
                    size={36}
                    color="black"
                    onPress={moveRight}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.buttonCicle}>
                <AntDesign
                  name="downcircleo"
                  size={36}
                  color="black"
                  onPress={moveDown}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <TouchableOpacity style={styles.buttonContent}>
                <FontAwesome5
                  name="dot-circle"
                  size={40}
                  color="black"
                  onPress={ResetarPosition}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContent}>
                <MaterialCommunityIcons
                  name="electron-framework"
                  size={40}
                  color="black"
                  onPress={disparoRapido}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContent}>
                <AntDesign
                  name="delete"
                  size={40}
                  color="black"
                  onPress={() => setMaterial({})}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Crop Area Quad */}
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#00aeef",
              borderRadius: 40,
              alignItems: "center",
              margin: 15,
              padding: 5,
            }}
          >
            <Text style={styles.bordermessage}>
              adicionar arquivos da biblioteca...
            </Text>

            {/* Drag Circle Controlls */}
            <View style={styleDrag.container}>
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX: pan.x.interpolate({
                        inputRange: [-140, 120],
                        outputRange: [-150, 150],
                        extrapolate: "clamp",
                      }),
                    },
                    {
                      translateY: pan.y.interpolate({
                        inputRange: [-100, 120],
                        outputRange: [-100, 120],
                        extrapolate: "clamp",
                      }),
                    },
                  ],
                }}
              >
                <View style={styleDrag.circle} />
              </Animated.View>
            </View>
          </View>
          <View>
            <Text style={{ paddingHorizontal: 24 }}>
              {material.name ? material.name.split(".")[0] : ""}
            </Text>
          </View>
          <TouchableOpacity style={styles.buttonDueIt}>
            <Text style={styles.TextDueIt} onPress={letsDue}>
              Let's Due It{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Feed;
