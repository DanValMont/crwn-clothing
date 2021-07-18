import styled from "styled-components";

export const SignInContainer = styled.div`
 
  width: 380px;
  display: flex;
  flex-direction: column;

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

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-gap: 20px;
    }
`;