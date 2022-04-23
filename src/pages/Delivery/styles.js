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
    width: 85%;
    margin: 1.5rem auto;
    display: flex;
    flex-direction: row;
    gap: 2rem;

    .p-margin {
        margin-left: 20px;
    }

    @media only screen and (max-width: 860px) {
        flex-direction: column-reverse;
    }
`

export const ContainerLeft = styled.form`
    margin: 1.5rem 0;    
    width: 50%;

    @media only screen and (max-width: 1050px) {
        width: 40%;
    }
    @media only screen and (max-width: 860px) {
        width: 100%;
    }
`

export const ContainerRight = styled.form`
    width: 50%;
    margin: 1.5rem 0 1.5rem 0rem;    
    border-top: 1px solid rgb(0,0,0, 0.15);

    @media only screen and (max-width: 1050px) {
        width: 60%;
    }
    @media only screen and (max-width: 860px) {
        width: 100%;
    }
`

export const Product = styled.div`
    display: flex;
    height: 70px;
    margin-top: 1rem;
    padding-left: 10px;
    align-items: center;
    
    img {
        width: 15%;
        height: 100%;
    }

    p {
        margin-left: 10px;
        margin-right: 10px;
    }

    span {
        margin-left: auto;
        font-weight: 500;
    }
`

export const Total = styled.div`
    width: 100%;
    margin-top: 1rem;
    border-top: 1px solid rgb(0,0,0, 0.25);

    display: flex;
    justify-content: space-between;
    
    span {
        font-size: 1.8rem;
        font-weight: 800;
        color: #ffa724;
        padding: 10px 10px 0 10px;

        @media only screen and (max-width: 600px) {
            font-size: 1rem
        }
    }

    p {
        font-size: 1.2rem;
        margin: 0.7rem auto;
    }
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