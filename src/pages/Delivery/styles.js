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
    display: flex;
    width: 85%;
    margin: 1.5rem auto;
    gap: 2rem;
    flex-direction: row;

    .p-margin {
        margin-left: 20px;
    }

    @media (max-width: 860px) {
        flex-direction: column-reverse;
    }
`

export const ContainerData = styled.form`
    width: 50%;
    margin: 1.5rem 0;

    @media (max-width: 1050px) {
        width: 40%;
    }
    
    @media (max-width: 860px) {
        width: 100%;
    }
`

export const ContainerTotal = styled.form`
    width: 50%;
    margin: 1.5rem 0 1.5rem 0rem;    
    border-top: 1px solid rgb(0,0,0, 0.15);

    @media (max-width: 1050px) {
        width: 60%;
    }
    
    @media (max-width: 860px) {
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
        width: 13%;
        height: 90%;
    }

    p {
        margin-left: 20px;
        margin-right: 10px;
    }

    span {
        margin-left: auto;
        font-weight: ${theme.fonts.weight.bold};
    }
`

export const Total = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 1rem;
    border-top: 1px solid rgb(0,0,0, 0.25);
    
    span {
        padding: 10px 10px 0 10px;
        font-size: 1.8rem;
        font-weight: 800;
        color: #ffa724;

        @media (max-width: 600px) {
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
        width: 100%;
        margin-top: 10px;
        padding: 10px;
        border: 1px solid ${theme.black};
    }

    span {
        display: block;
        margin-top: 5px;
        font-size: 13px;
        color: #ff0000;
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
        width: 100%;
        padding: 10px;
        border: 1px solid ${theme.black};
    }  
    
    span {
        font-size: 14px;
        font-weight: ${theme.fonts.weight.bold};
        color: #ffa724;
    } 
`

export const ButtonContinue = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        padding: 10px 20px;
        background-color: #ffa724;
        border-radius: 4px;
        color: ${theme.white};

        &:hover{
            filter: brightness(1);
        }
        
        &:active{
            filter: brightness(0.9);
        }
    }
`
