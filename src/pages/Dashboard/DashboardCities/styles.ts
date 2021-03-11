import styled from 'styled-components';

export const Container = styled.div`
    padding: 24px 0px 24px 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
`;

export const CardContainer = styled.div`
    width: 256px;
    height: 266px;
    border-radius: 16px;
    background: #fff;
    margin: 10px 20px 20px 20px;


    img{
        max-height: 159px;
        border-radius: 16px 16px 0 0;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    height: 100px;
    margin-left: 25px;
    justify-content: center;
    flex-direction: column;

    strong {
        margin-bottom: 10px;
        color: #123952;
        font-family: "Barlow";
        font-size: 17px;
    }

    p {
        color: #617480;
        font-family: "Roboto";
    }
`;
