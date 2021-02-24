import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useMaterial } from "../../hook/MaterialProvider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import api from "../../services/api";
import styles from "./styles";

export const Header = styled.View`
  background-color: #00aeef;
  align-items: center;
  justify-content: center;
  padding: 5px;
  position: absolute;
  top: -90px;
  left: 0;
  border-radius: 70px;
  width: 400px;
  height: 279px;
  ${(props) => (!props.isVisible ? "bottom: 0" : "")};
  z-index: 5;
  margin-bottom: 100px;
`;

const Container = styled.View`
  flex-direction: row;
  background-color: #fff;
  margin: 8px 16px;
  border-radius: 16px;
  height: 120px;
  padding: 10px;
  width: 360px;
  max-width: 360px;
`;

const IconMaterial = styled.View`
  height: 60px;
  width: 60px;
  border-radius: 16px;
  position: relative;
  margin-right: 16px;
`;

const Biblioteca = () => {
  // useState
  // results -> contem o valor do state, começa com um array vazio
  // setResult -> unica função que pode alterar o valor de results,
  const [results, setResult] = React.useState([]);

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    try {
      const response = await api.get("/api/files ", {
        headers: {
          "X-Api-Key": "F4944B335B634FF29D563D5F92E9FB7D",
        },
      });

      setResult(response.data.files);
      console.log("RETORNO_DA_API", response);
    } catch (error) {
      console.log(error);
    }
  };
  const { setMaterial } = useMaterial();
  const [selectedHash, setSelectedHash] = useState(null);
  const [check, setCheck] = useState(null);

  const renderItem = ({ item }) => {
    const handleClick = () => {
      setCheck(item.hash);
      setSelectedHash(item.hash);
      setMaterial({
        name: item.name,
        hash: item.hash,
        download: item.refs.download,
      });
    };

    const backgroundColor = item.hash === selectedHash ? "#00aaef" : "#9a9a9a";
    const checked =
      check === item.hash ? "check-box-outline" : "checkbox-blank-outline";
    const color = item.hash === selectedHash ? "#00aaef" : "#E7EBF0";

    return (
      <TouchableOpacity onPress={() => handleClick()}>
        <Container>
          <View style={{ flexDirection: "row", marginRight: 16 }}>
            <IconMaterial style={{ backgroundColor }}>
              <MaterialCommunityIcons
                name={checked}
                size={32}
                style={{
                  backgroundColor: "#fff",
                  width: 28,
                  height: 28,
                  color,
                }}
              />
            </IconMaterial>
            <View>
              <Text style={{ fontSize: 18, marginBottom: 16 }}>
                {item.name.split(".")[0]}
              </Text>
            </View>
          </View>
        </Container>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header>
      <Text style={styles.BibliotecaTitle}> Biblioteca</Text>
      <Text style={styles.BibliotecaTitle2}> Selecione o arquivo desejado</Text>
      </Header>
      <FlatList
        style={{ marginTop: 279 }}
        data={results}
        renderItem={renderItem}
        keyExtractor={(item) => item.hash}
      />
    </View>
  );
};

export default Biblioteca;
