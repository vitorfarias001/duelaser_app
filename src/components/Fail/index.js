import React from "react";
import LottieView from "lottie-react-native";

import { Container, Success, BorderQuad } from "./styles";
import QuadInfoLayout from "../SuccessImage/QuadInfo";
import ErrorImage from "./Error";
import Reconnect from '../Reconnect';

const FailImage = (props) => {
  //Check Icon
  const { message } = props;
  console.log(message);

  return (
    <Container>
      {/* <Success>{message}</Success>  */}
      <BorderQuad>
        <LottieView
          source={require("./fail.json")}
          autoPlay
          style={{ top: -72 }}
        />
        <QuadInfoLayout />
        <QuadInfoLayout />
      </BorderQuad>
      <ErrorImage style={{ position: "absolute", top: 110, left: 210 }} />
    </Container>
  );
};
export default FailImage;
