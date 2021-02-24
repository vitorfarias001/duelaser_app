import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';

import { Container, Success, BorderQuad } from './styles';
import QuadInfoLayout from './QuadInfo';
import Sucesso from './Sucesso';


const SuccessMessage = (props) => {
  //Check Icon
  const { message } = props;

  return (
    <Container>
      <Success>{message}</Success>
      <BorderQuad>
        <LottieView source={require('./check.json')} autoPlay style={{ top: -72 }} />
        <QuadInfoLayout/>   
        <QuadInfoLayout/>
      </BorderQuad>
      <Sucesso style={{ position: 'absolute', top: 178, left: 180 }} />
    </Container>
  );

}     
export default SuccessMessage;