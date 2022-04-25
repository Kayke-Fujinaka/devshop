import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContainerMain = styled.div`
    font-family: ${theme.fonts.secondary}
`

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

export const ContainerForm = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    .divLabelInput {
        margin-top: 25px;
        @media (max-width: 510px){
            margin-top: 0;
        }
    }

    label {
        font-family: ${theme.fonts.primary};
        font-size: 16px;
        font-weight: ${theme.fonts.weight.light};
        @media (max-width: 510px){
            font-size: 14px;
            margin: 0 5px;
        }
    }

    input {
        font-family: ${theme.fonts.secondary};
        display: block;
        height: 35px;
        width: 500px;
        margin: 2px auto 0;
        padding: 5px 15px;
        border: 1px solid ${theme.gray4};
        outline: none;
        @media (max-width: 510px){
            height: 35px;
            width: 300px;
            font-size: 11px;
        }
    }

    span {
        position: absolute;
        font-size: 13px;
        color: #FF0000;
    }

    p {
        text-align: center;
        margin: 15px 0 100px;
        font-size: 13px;
        a {
            color: ${theme.black};
            font-weight: ${theme.fonts.weight.bolder};
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        @media (max-width: 510px){
            font-size: 11px;
        }
    }
`

export const ButtonRegister = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    
    button {
        height: 35px;
        width: 500px;
        font-size: 18px;
        color: ${theme.white};
        background-color: #FF7D1B;
        &:hover {
            filter: brightness(1);
        }
        &:active {
            filter: brightness(0.9);
        }
        @media (max-width: 510px){
            height: 35px;
            width: 300px;
            font-size: 15px;
        }
    }
`