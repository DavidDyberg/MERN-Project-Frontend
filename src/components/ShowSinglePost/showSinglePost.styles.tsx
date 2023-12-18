import styled from "styled-components";

export const SinglePostContainer = styled.div`
    width: 700px;
    height: 200px;
    margin-bottom: 20px;
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    position: relative;

    @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 400px;
  }
`

export const Title = styled.h2`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    color: #333;
    margin-top: 0;
`

export const PostBody = styled.p`
    width: 400px;
`

export const Author = styled.p`
    color: #666;
    position: absolute;
    bottom: 8px;
    right: 16px;
`


