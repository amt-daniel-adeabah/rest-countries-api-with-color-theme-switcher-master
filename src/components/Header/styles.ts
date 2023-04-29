import styled from "styled-components";

export const Header = styled.header<{theme: string}>`
    height: 70px;
    background-color: ${props => props.theme === 'light' ? '#FFF' : 'rgb(43, 55, 67)'};
    color: ${props => props.theme === 'light' ? '' : '#FFF'};
    transition: all ease 0.2s;
    box-shadow: 1px 1px 0.2em rgba(0, 0, 0, 0.2);
    transition: all ease 0.2s;
    
    .container {
        display: flex;
        width: 1024px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-style: normal;
            font-weight: 800;
            font-size: 24px;
            line-height: 33px;
        }

        p {
            cursor: pointer;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
        }
    }

    @media(max-width: 1024px) {
        &{
            padding: 0px 20px;

            .container {
                width: auto
            }
        }
    }

    @media(max-width: 767px) {
        
        .container {
            height: 100%;
            h1 {
                font-size: 17px;
            }
            p {
                font-size: 14px
            }
        }
    }
`