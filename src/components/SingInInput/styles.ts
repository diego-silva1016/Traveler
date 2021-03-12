import styled from 'styled-components';

export const Container = styled.div`
    height: 72px;
    border: 1px solid #DCE2E6;
    background: #fff;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    text-align: center;
    position: relative;

    input{
        border: 0;
        flex: 1;
        font-size: 16px;
        transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
        -webkit-appearance:none;
        margin-top: 10px;
        color: #617480;

        &::placeholder{
            font-family: 'Heebo';
            font-size: 16px;
            line-height: 24px;
            color: #A0ACB3;
        }

        &:focus + label,
        &:not(:placeholder-shown) + label{
            font-size: 12px;
            margin-top: 0;
            color: #A0ACB3;
        }

    }

    > label {
        pointer-events: none;
        position: absolute;
        color: #A0ACB3;
        margin-top: 14px;
        transition: all .3s ease-out;
        -webkit-transition: all .3s ease-out;
        -moz-transition: all .3s ease-out;
    }
`;

export const IconContainer = styled.div`
    width: 24px;
    height: 24px;
    margin-top: 14px;
    margin-left: 10px;
`;
