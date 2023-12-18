import styled from "styled-components";

export const PagesContainer = styled.div`
    text-align: center;
   
`

export const PaginationButton = styled.button`
    width: 30px;
    height: 30px;
    margin: 5px;
    background-color: #007bff;
    color: #fff;
    border: 1px solid #007bff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`