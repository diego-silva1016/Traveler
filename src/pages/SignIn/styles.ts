import styled from 'styled-components';

import SingInImage from '../../assets/SingInImage.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const ImageContainer = styled.div`
    background: url(${SingInImage}) no-repeat center;
    flex: 1;
    background-size: cover;
`;

export const Content = styled.div`
    max-width: 736px;
    width: 100%;
    background: #F5F8FA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ElementsDiv = styled.div`
`;

export const SingInContainer = styled.div`
    width: 416px;
    height: 371px;

    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Barlow', sans-serif;
        font-size: 36px;
        line-height: 32px;
        color: #123952;
        margin-bottom: 44px;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

    a{
        text-decoration: none;
        font-family: 'Heebo';
        font-size: 16px;
        color: #A0ACB3;

    }

`;

export const AlertContainer = styled.div`
    margin-top: 50px;
    max-width: 195px;
    display: flex;
    align-items: center;

    p {
        font-family: 'Heebo';
        font-size: 14px;
        color: #A0ACB3;
        margin-left: 10px;
    }


`;
