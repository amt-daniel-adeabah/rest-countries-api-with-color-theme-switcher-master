import styled from "styled-components";

export const InputArea = styled.section<{theme: string}>`
    display: flex;
    width: 1024px;
    margin: auto;
    justify-content: space-between;
    padding: 40px 0px;
    transition: all ease 0.2s;

    .textAreaDiv {
        background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
        box-shadow: 1px 1px 0.2em rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        padding: 0 0 0 10px;
        color: ${props => props.theme === 'light' ? '' : '#FFF'};
    }
    input {
        background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? '' : '#FFF'};
        border-radius: 5px;
        width: 480px;
        height: 56px;
        padding: 0px 10px;
        border: none;
        outline: 0;
        font-size: 14px;
        
        ::placeholder {
            color: #ccc
        }
    }
    
    select {
        width: 200px;
        height: 56px;
        border-radius: 5px;
        padding: 0px 20px;
        border: none;
        box-shadow: 1px 1px 0.2em rgba(0, 0, 0, 0.2);
        outline: 0; 
        font-size: 14px;
        background-color: ${props => props.theme === 'light' ? '' : 'rgb(43, 55, 67)'};
        color: ${props => props.theme === 'light' ? '#000' : '#FFF'};
    }

    @media(max-width: 1024px) {
        & {
            width: auto;
            padding: 20px;
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }

    @media(max-width: 768px) {
        & {
            flex-direction: column;
            input {
                width: 60%;
            }
            select {
                margin-top: 10px;
                height: 50px;
                width: max-content;
            }
        }
    }
`