import styled from "styled-components";
import { Form } from "react-router-dom";

export const DeleteForm = styled(Form)`
    text-align: end;
`

export const DeleteButton = styled.button`
    border-radius: 2px;
    border: none;
    cursor: pointer;
    background: #59a4d6;

    &:hover {
        background: #2980b9;
    }
`