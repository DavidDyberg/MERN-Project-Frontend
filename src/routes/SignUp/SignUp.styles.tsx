import styled from "styled-components";
import { ChevronLeft } from 'lucide-react'

export const container = styled.div`
    height: 500px;
    width: 400px;
    border-radius: 10px;
    border: 2px solid #2980b9;
    display: flex;
    flex-direction: column;
    background-color: #F6FBF9;

    @media(max-width: 600px) {
        width: 250px;
        margin: 0;
  }

`

export const Title = styled.h2`
    text-align: center;
`

//export const FormWrapper = styled.div`
//    width: 50vh;
//    
//    display: flex;
//    flex-direction: column;
//`

export const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
`

export const Label = styled.label`
  margin-bottom: 8px;
  color: #333;
  font-weight: bold;
`

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`

export const ButtonDiv = styled.div`
    text-align: center;
`

export const ErrorMessage = styled.div`
    text-align: center;

    p,b {
        color: red;
    }
`

export const Chevronleft = styled(ChevronLeft)`
    padding-right: 10px;
    color: black;
`
