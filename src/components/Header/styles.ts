import styled from 'styled-components';

export const Container = styled.header`
    max-width: 65px;
    flex: 1;
    background: #F25D27;
    padding: 25px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    >img {
        height: 44px;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    flex-direction: column;

    svg{
        & + svg {
            margin-top: 20px;
        }
    }
`;
