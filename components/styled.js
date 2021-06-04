import styled from "styled-components";

export const Button = styled.button`
    background-color: #fff;
    width: 14rem;
    height: 6rem;
    font-size: 2rem;
    color: inherit;
    margin: 1em;
    padding: 0.25em 1em;
    border: .08rem solid #eaeaea;
    border-radius: 3px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    &:hover {
        color: #0070f3;
        border-color: #0070f3;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`