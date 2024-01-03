import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

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
    height: auto;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: auto;
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

    @media (max-width: 768px) {
        width: 300px;
    }

    @media (max-width: 500px) {
        width: 250px;
    }
`

export const Author = styled.p`
    color: #666;
    position: absolute;
    bottom: 8px;
    right: 16px;
`

export const CommentsContainer = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;

    @media (max-width: 500px) {
    width: 300px;
    
  }
`

export const CommentBody = styled.p`
    width: 300px;
    white-space: break-spaces;
    line-height: 20px;
`

export const CommentAuthor = styled.p`
    color: #666;
    width: 70px;
`

export const DeleteCommentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px 
`