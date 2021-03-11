import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
`;

export const DashboardContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const DashboardHeader = styled.div`
    background: #fff;
    height: 65px;
    padding: 15px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-family: 'Barlow', sans-serif;
        font-size: 36px;
        color: #123952;
        font-weight: 600;
    }
`;

export const DashboardInfos = styled.div`

`;
