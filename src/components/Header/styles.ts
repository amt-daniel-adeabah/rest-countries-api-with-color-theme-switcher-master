import styled from "styled-components";

export const Header = styled.header `
    height: 90px;
    background: #fff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    .container {
        display: flex;
        width: 1024px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        p {
            cursor: pointer;
            font-weight: bold;
        }
    }
`