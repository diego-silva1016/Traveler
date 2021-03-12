import styled from 'styled-components';

export const Container = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 160px;
    margin-bottom: 20px;
    background: #F5F8FA;
    border-radius: 10px;
    border: 2px dashed #DCE2E6;
    cursor: pointer;
    color: #F25D27;

    input{
        display: none;
    }

    svg{
        margin-right: 5px;
    }
`;

export const Label = styled.span`
    color: #617480;
    font-family: "Heebo";
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 10px;
`;
