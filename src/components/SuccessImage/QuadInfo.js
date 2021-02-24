import React from 'react';

  import { QuadInfo, Circle, LinesContainer, Lines } from './styles';


const QuadInfoLayout = () => {
  //Check Icon
  return (
    <QuadInfo>
      <Circle />
      <LinesContainer>
        <Lines />
        <Lines />
      </LinesContainer>
    </QuadInfo>
  );

}
export default QuadInfoLayout;