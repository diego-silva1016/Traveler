import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const ContainerButton = styled(Link)`
    height: 37px;
    width: 37px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #DCE2E6;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background: ${shade(0.2, '#fff')};
    }
`;
