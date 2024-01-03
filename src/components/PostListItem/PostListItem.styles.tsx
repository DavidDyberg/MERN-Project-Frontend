import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PostContainer = styled.div`
  width: 700px;
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: relative;

  &:hover {
    background: #2980b924;
  }

  @media (max-width: 768px) {
    width: 400px;
  }

  @media (max-width: 500px) {
    width: 250px;
  }
`;

export const PostTitle = styled.h2`
  margin-bottom: 8px;
  color: #333;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const PostLink = styled(Link)`
  text-decoration: none;
  color: #007bff;
  display: block;
  margin-bottom: 8px;
`;

export const PostAuthor = styled.p`
  bottom: 5px;
  color: #666;
`;

export const ShowPostLink = styled.span`
  display: block;
  margin-top: 8px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

