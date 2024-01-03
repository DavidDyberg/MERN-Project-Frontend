import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    background: linear-gradient(to right, #3498db, #2980b9);
    padding: 10px 20px;
    margin: 10px;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    color: white;

    &:hover {
        background: #2980b9;
    }
`