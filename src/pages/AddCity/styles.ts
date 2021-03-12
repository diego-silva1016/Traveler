import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const AddCityHeader = styled.div`
    background: #fff;
    height: 85px;
    padding: 15px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-family: 'Barlow', sans-serif;
        font-size: 18px;
        color: #A0ACB3;
        font-weight: 500;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 50px 0;
`;

export const FormDiv = styled.div`
    width: 800px;
    height: 968px;
    background: #fff;
    border-radius: 15px;
    margin: 40px;

    form {
        padding: 70px;
        display: flex;
        flex-direction: column;
        height: 100%;

        h2{
            color: #123952;
            font-family: "Barlow";
            font-weight: 500;
            font-size: 24px;
            display: flex;
            flex-direction: column;
        }

        h2:after{
            content:'';
            background: #DCE2E6;
            height: 1px;
            width: 100%;
            margin-bottom: 25px;
            margin-top: 25px;
        }
    }
`;

export const TitleContainer = styled.div`
    height: 143px;
    background: linear-gradient(90deg, #F5FFF5 0%, rgba(220, 245, 221, 0) 62.99%);
    display: flex;
    align-items: center;
    border-radius: 15px 15px 0px 0px;
    border-bottom: 1px solid #DCE2E6;

    h1{
        color: #51B853;
        font-family: "Barlow";
        font-size: 36px;
        font-weight: 600;

        margin-left: 40px;
    }
`;

export const NumberContainer = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #51B853;
    border-radius: 10px;

    margin-left: 72px;

    span{
        color: #fff;
        font-family: "Barlow";
        font-size: 24px;
        font-weight: 600;
    }
`;

export const ActionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        margin: 0;
    }

    a {
        background: #115D8C;

        &:hover{
            background: ${shade(0.2, '#115D8C')};
            text-decoration: none;
            color: #fff;
        }
    }
`;
