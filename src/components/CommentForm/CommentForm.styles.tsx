import styled from "styled-components";

export const CommentFormContainer = styled.div`
    text-align: center;
    border-radius: 10px;
    text-align: center;
    border: 1px solid black;
    background-color: #f9f9f9; 
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
`

export const TextArea = styled.textarea`
    width: 80%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    min-height: 40px;
`

export const PostCommentButton = styled.button`
    padding: 8px 16px;
    background-color: #7393B3;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 80%;
    margin-top: 10px;

    &:hover {
      background-color: #4a5c6c;
    }
  
`