import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native'
import styles from './styles';

export const Header = styled.View`
		background-color:#00aeef;
		align-items:center;
		justify-content: center;
		padding: 5px;
		position: absolute;
		top: -90px;
		left: 0;
		borderRadius:70px;
		width:400px;
		height: 279px;
		${props => !props.isVisible ? 'bottom: 0' : ''};
		z-index: 5;
		margin-bottom: 100px;
  `;
  
function Buscar() {
    return (
      <View>
        <Header>
			<Text style={styles.BibliotecaTitle}> Biblioteca</Text>
      		<Text style={styles.BibliotecaTitle2}> Selecione o arquivo desejado</Text>
        </Header>
      </View>
    );
  }

  export default  Buscar;  