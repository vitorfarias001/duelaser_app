import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Modal, Image, StyleSheet, Button } from 'react-native';
import { Camera } from 'expo-camera';

import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';

import styles from '../Conectar/styles';
import uploadFile from './Upload';

function Profile() {
    const [cameraType, setTypeCarmera] = useState(Camera.Constants.Type.back)
    const [open, setOpen] = useState(false);
    const [capturedPhoto, setCapturedPhoto] = useState(null)

    const camRef = useRef(null);

    async function takePicture() {
        try {
            if (camRef) {
                const data = await camRef.current.takePictureAsync();
                setCapturedPhoto(data.uri);
                setOpen(true);
                console.log(data);
            }
        } catch (err) {
            alert('Não foi possivel tirar a foto')
            console.log('error', error);
        }

    }

    async function savePicture() {
        try {
            const asset = await MediaLibrary.createAssetAsync(capturedPhoto);
            const BibliotecaFlow = asset.albumId;
            await MediaLibrary.createAlbumAsync('biblioteca', asset);
            await MediaLibrary.removeAssetsFromAlbumAsync([asset], BibliotecaFlow)

            alert('Foto Salva com Sucesso')
            uploadFile(capturedPhoto)
        } catch (err) {
            alert('Não foi possivel salvar a foto')
            console.log('error', error);
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Camera style={styles.camera}
                    type={cameraType}
                    ref={camRef}
                >
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                bottom: 20,
                                left: 20,
                            }}
                            onPress={() => {
                                setType(
                                    cameraType === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back
                                );
                            }}>
                            <Text style={styles.TextTrocar}> Trocar </Text>
                        </TouchableOpacity>
                        <View>
                        </View>
                    </View>
                </Camera>
                <TouchableOpacity style={styles.button} onPress={takePicture}>
                    <FontAwesome name="camera" size={23} color="#121212" />
                </TouchableOpacity>
            </View>
            { capturedPhoto &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visibile={open}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', nargin: 20 }}>
                        <View style={{ margin: 10, flexDirection: 'row' }}  >
                            <TouchableOpacity style={{ margin: 10 }} onPress={() => setCapturedPhoto(null)}>
                                <FontAwesome5 name="window-close" size={50} color="#FF0000" />
                            </TouchableOpacity >
                            <TouchableOpacity style={{ margin: 10 }} onPress={savePcture} >
                                <FontAwesome name="upload" size={50} color="#121212" />
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={{ width: '100%', height: 300, borderRadius: 20 }}
                            source={{ uri: capturedPhoto }}
                        />
                    </View>
                </Modal>
            }
        </>
    );
}

export default Profile