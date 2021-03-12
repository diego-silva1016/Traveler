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
        margin: 0;
    }
`;

export const Container = styled.label<ContainerProps>`
    width: 30px;
    height: 30px;
    background: ${props => (props.checked ? '#51B853' : '#fff')};
    border: 1px solid #DCE2E6;
    margin-right: 15px;
    margin-bottom: 0;
    border-radius: 8px;
    margin-top: auto;
    display: flex;
    justify-content: center;
    align-items: center;


    input {
        display: none;
    }
`;
