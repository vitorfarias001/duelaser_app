import React, { useState, useRef } from "react";
import { Text, View, TouchableOpacity, Modal, Image } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import { TextInput } from "react-native";
import axios from "axios";

const CameraPage = () => {
  const [startCamera, setStartCamera] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [open, setOpen] = useState(false);
  const [picName, setPicName] = useState("");

  const navigation = useNavigation();

  const camRef = useRef(null);

  const openCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      // start the camera
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const takePicture = async () => {
    try {
      if (camRef) {
        const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri);
        setOpen(true);
        console.log(data);
      }
    } catch (err) {
      alert("Não foi possivel tirar a foto");
      console.log("erro de não conseguir tirar a foto", err);
    }
  };

  const savePicture = async () => {
    try {
      const asset = await MediaLibrary.createAssetAsync(capturedPhoto);
      const BibliotecaFlow = asset.albumId;
      await MediaLibrary.createAlbumAsync("bibliotecaFlow", asset);
      await MediaLibrary.removeAssetsFromAlbumAsync([asset], BibliotecaFlow);

      alert("Foto Salva com Sucesso");
      // uploadFile(capturedPhoto)
    } catch (err) {
      alert("Não foi possivel salvar a foto");
      console.log("Não foi possivel salvar a foto", err);
    }
  };

  const closeCamera = () => {
    setStartCamera(false);
    navigation.goBack();
  };

  return (
    <>
      {startCamera ? (
        <>
          <Camera style={{ flex: 1, width: "100%" }} ref={camRef} />
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <FontAwesome name="camera" size={23} color="#121212" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 10 }}
              onPress={() => closeCamera()}
            >
              <FontAwesome5 name="window-close" size={23} color="#FF0000" />
            </TouchableOpacity>
          </View>
          {capturedPhoto && (
            <Modal animationType="slide" transparent={false} visibile={open}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 20,
                }}
              >
                <View
                  style={{
                    margin: 10,
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => setCapturedPhoto(null)}
                  >
                    <FontAwesome5
                      name="window-close"
                      size={50}
                      color="#FF0000"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => savePicture()}
                  >
                    <FontAwesome name="upload" size={50} color="#121212" />
                  </TouchableOpacity>
                </View>
                <Image
                  style={{ width: "100%", height: 300, borderRadius: 20 }}
                  source={{ uri: capturedPhoto }}
                />
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderWidth: 1,
                    width: "100%",
                  }}
                  onChangeText={(text) => setPicName(text)}
                  value={picName}
                />
              </View>
            </Modal>
          )}
        </>
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={openCamera}
            style={{
              width: 130,
              borderRadius: 4,
              backgroundColor: "#14274e",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 40,
              marginBottom: -130,
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Tire sua foto
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CameraPage;
