import styled from "styled-components";
import { ThumbsUp, ThumbsDown  } from 'lucide-react'

export const VoteContainer = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    border: 1px grey solid;
    border-radius: 10px;
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 3px;

    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        width: 20px;
    }
`

export const Score = styled.span`
    display: flex;
    justify-content: center;
`

export const VoteButton = styled.button`
    background: none;
  border: none;
  color: inherit;
  font: inherit;
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: inherit;
`

export const VoteUp = styled(ThumbsUp)`
    width: 16px;
    height: 16px;

    &:hover {
       color: gray;
    }
`

export const VoteDown = styled(ThumbsDown)`
    width: 16px;
    height: 16px;

    &:hover {
       color: gray;
    }
`