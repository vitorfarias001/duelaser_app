
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Pasta = () => {

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity
        onPress={() => {navigation.navigate("Camera")}}
        style={{
          width: 130,
          borderRadius: 4,
          backgroundColor: '#14274e',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40
        }}
      >
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >         
          Ir para Câmera
            </Text>
      </TouchableOpacity>
    </View>

  )
}

export default Pasta;