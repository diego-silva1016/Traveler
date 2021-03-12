import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const ContainerButton = styled(Link)`
    height: 44px;
    background: #51B853;
    border-radius: 10px;
    padding: 8px 35px;
    color: #fff;
    border: 0;
    font-family: 'Heebo';
    font-size: 16px;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover{
        background: ${shade(0.2, '#51B853')};
        text-decoration: none;
        color: #fff;
    }

    svg {
        margin-right: 2px;
    }
`;
