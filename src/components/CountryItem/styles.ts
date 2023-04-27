import styled from "styled-components";

export const CountryItem = styled.div`
    a {
        text-decoration: none;
        color: #000;
    }

    .img--area {
        width: 100%;
        height: 150px;
        border-top-left: 4px;
        border-top-right: 4px;
    }

    .data--area {
        padding: 10px 20px;
        p {
            font-size: 13px;
            font-weight: bold;
            span {
                font-weight: 300;
            }
        }
        .country--name {
            font-size: 17px;
            margin: 10px 0px;
        }
    }
`