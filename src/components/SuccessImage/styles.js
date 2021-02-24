import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Success = styled.Text`
  color: #03a9e5;
  font-size: 28px;
  margin-bottom: 16px;
`
//Check

export const BorderQuad = styled.View`
  height: 326px;
  width: 162px;
  border: 8px solid #aaa;
  border-radius: 36px;
  background: #fff;
  align-items: center;
  justify-content: flex-end;
  left: -48px;
  margin-bottom: 32px;
  padding-bottom: 32px;
`;
//Borda
export const QuadInfo = styled.View`
  width: 130px;
  height: 36px;
  border: 2px solid #aaa;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;
//Circulo
export const Circle = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #aaa;
  margin-left: 8px;
`;

export const LinesContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Lines = styled.View`
  width: 80%;
  height: 3px;
  background-color: #aaa;
  margin: 3px;
`;

