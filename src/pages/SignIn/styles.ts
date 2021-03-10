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

export const SingInContainer = styled.div`
    width: 100%;
    max-width: 736px;
    background: #F5F8FA;
`;
