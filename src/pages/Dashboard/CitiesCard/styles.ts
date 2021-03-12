import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 245px;
    height: 266px;
    border-radius: 16px;
    background: #fff;
    margin-left: auto;
    margin-right: auto;

`;

export const ImageContainer = styled.div`
    height: 159px;


    img{
        border-radius: 16px 16px 0 0;
        position: absolute;
        width: 245px;
    }
`;

export const ActionsContainer = styled.div`
    position: relative;
    float: right;

    margin-top: 15px;
    margin-right: 15px;

    button {
        width: 40px;
        height: 40px;
        border: 0;

        &:first-child {
            border-radius: 10px 0px 0px 10px;
            margin-right: 5px;
        }

        &:last-child {
            border-radius: 0 10px 10px 0;
        }
    }
`;

export const TextContainer = styled.div`
    display: flex;
    margin-left: 25px;
    height: 100px;
    justify-content: center;
    flex-direction: column;
    position: relative;

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
