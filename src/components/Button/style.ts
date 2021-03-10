import styled from 'styled-components';
import { shade } from 'polished';

export const ContainerButton = styled.button`
    height: 72px;
    background: #F25D27;
    border-radius: 10px;
    margin-top: 25px;
    color: #fff;
    border: 0;
    font-family: 'Heebo';
    font-size: 18px;

    &:hover{
        background: ${shade(0.2, '#F25D27')};
    }
`;
