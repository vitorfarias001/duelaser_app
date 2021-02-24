import React from 'react';
import LottieView from 'lottie-react-native';

import { Container, Loading, BorderQuad } from './styles';
import QuadInfoLayout from '../SuccessImage/QuadInfo';
import LoadingImage from './Loading';

const LoadingMessage = (props) => {
  //Check Icon
  const { message } = props;

  return (
    <Container>
      <Loading>{message}</Loading>
      <BorderQuad>
        <LottieView source={require('./spinner.json')} autoPlay style={{ top: -72 }} />
        <QuadInfoLayout />
        <QuadInfoLayout />
        
      </BorderQuad>
      <LoadingImage style={{ position: 'absolute', top: 178, left: 160 }} />
    </Container>
  );

}
export default LoadingMessage;