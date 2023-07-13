import styled from 'styled-components';

export const ContactFormStyled = styled.form`
display: flex;
flex-direction: column;
gap: 15px;

label{
    display: flex;
    flex-direction: column;
}

input {
    padding: 10px 15 px;
    cursor: pointer;
    border-radius: 15px;
}

button {
    width: 100px;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
    background-color: green;
    &:hover{
        background-color: yellow;
    }
}`