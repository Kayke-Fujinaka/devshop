import styled from 'styled-components'
import theme from '../../styles/theme'

export const Breadcrumb = styled.div`
    display: flex;
    width: 80%;
    margin: 1.5rem auto;
    gap: 5px;
    font-size: 15px;
    a {
        color: ${theme.black};
        cursor: pointer;
        &:hover {
            text-decoration: underline;
        }
    }
    p {
        font-weight: ${theme.fonts.weight.bolder};
    }
    @media (max-width: 510px){
        width: 100%;
        margin: 1.5rem 10px;
        font-size: 12px;
    }
`

export const ContainerMain = styled.div`
    width: 80%;
    margin: 1.5rem auto;
    p {
        margin-top: 20px;
    }
    .p-margin {
        margin-left: 20px;
    }
`

export const ContainerLeft = styled.form`
    width: 80%;
    margin: 1.5rem auto;    
`

export const Form = styled.div`
    display: block;
    .inputEmail {
        display: block;
        margin-top: 10px;
        padding: 10px;
        width: 100%;
        border: 1px solid #000;
    }
    span {
        color: red;
        font-size: 13px;
        display: block;
        margin-top: 5px;
    }
    #check {
        margin-top: 10px;
    }
    .labelCheck {
        margin-left: 5px;
    }

`

export const DivMid = styled.div`
    margin: 1.5rem auto; 
    select {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        appearance: none;
    }
    input {
        padding: 10px;
        width: 100%;
        border: 1px solid #000;
    }  
    span {
        font-size: 14px;
        font-weight: ${theme.fonts.weight.bold};
        color: #ffa724;
    } 
`

export const DivButton = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
        padding: 10px 20px;
        background-color: #ffa724;
        border-radius: 4px;
        color: #fff;
        &:hover{
            filter: brightness(1);
        }
        &:active{
            filter: brightness(0.9);
        }
    }
`
