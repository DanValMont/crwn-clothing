import styled from "styled-components";
import { Link } from "react-router-dom";



export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;

    @media screen and (max-width: 350px) {
        width: 40px;
        padding: 0px;
    }

    @media screen and (min-width: 351px) {
        width: 50px;
        padding: 0px;
    }

    @media screen and (min-width: 800px) {
        width: 70px;
        padding: 25px;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 400px) {
        width: 90%;
    }

    @media screen and (min-width: 401px) {
        width: 80%;
    }

    @media screen and (min-width: 800px) {
        width: 50%;
    }
`;

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 350px) {
        padding: 10px 7px;
    }
`;

