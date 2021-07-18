import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  
  @media screen and (max-width: 320px) {
        width: 270px;
    }

  @media screen and (min-width: 321px) {
    width: 310px;
  }

  @media screen and (min-width: 500px) {
    width: 360px;
  }

  @media screen and (min-width: 800px) {
    width: 380px;
  }
    
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
`;

export const SignUpButton = styled(CustomButton)`
  @media screen and (max-width: 800px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            
            width: 100%;
    }
`;