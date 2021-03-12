import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const DashboardHeader = styled.div`
    background: #fff;
    height: 85px;
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

export const ListContainer = styled.div`
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-gap: 22px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-content:center;
`;
