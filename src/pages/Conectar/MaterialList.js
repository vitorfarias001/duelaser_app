import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

import styles from './styles';
import MaterialMDF from '../../components/Materiais/MDF';
import Acrilico from '../../components/Materiais/acrilico';
import Couro from '../../components/Materiais/couro';
import Eva from '../../components/Materiais/eva';
import Papel from '../../components/Materiais/papel';
import Madeira from '../../components/Materiais/madeira';

const MaterialList = () => {
  return (
    <ScrollView>
      <TouchableOpacity style={styles.buttonContent}>
        <View style={styles.MaterialListContainer}>
          <View style={{ width: 60 }}>
            <MaterialMDF style={{ width: 20, height: 20 }} />
          </View>
          <Text>MDF</Text>
          <Text>R$7,50</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContent}>
        <View style={styles.MaterialListContainer}>
          <View style={{ width: 60 }}>
             <Madeira style={{ width: 20, height: 20 }} />
          </View>
          <Text>Madeira</Text>
          <Text>R$17,00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContent}>
        <View style={styles.MaterialListContainer}>
          <View style={{ width: 60 }}>
            <Acrilico style={{ width: 20, height: 20 }} />
          </View>
          <Text>Acrilico  </Text>
          <Text>R$57,00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContent}>
        <View style={styles.MaterialListContainer}>
          <View style={{ width: 60 }}>
            <Couro style={{ width: 20, height: 20 }} />
          </View>
          <Text>Couro</Text>
          <Text>Em breve</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContent}>
        <View style={styles.MaterialListContainer}>
          <View style={{ width: 60 }}>
            <Eva style={{ width: 20, height: 20 }} />
          </View>
          <Text>EVA</Text>
          <Text>R$1.00 ~ R$50.00</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContent}>
        <View style={styles.MaterialListContainer}>
          <View style={{ width: 60 }}>
            <Papel style={{ width: 20, height: 20 }} />
          </View>
          <Text>Papel</Text>
          <Text>R$9,90 ~ R$36.00</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default MaterialList;
