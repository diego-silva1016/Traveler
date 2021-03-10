import styled from 'styled-components';

interface ContainerProps {
    checked: boolean;
}

export const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        color: #A0ACB2;
        font-family: 'Heebo';
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const Container = styled.div<ContainerProps>`
    width: 24px;
    height: 24px;
    background: ${props => (props.checked ? '#51B853' : '#fff')};
    border: 1px solid #DCE2E6;
    margin-right: 15px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
