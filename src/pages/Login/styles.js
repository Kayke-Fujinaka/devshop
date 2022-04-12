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
`

export const ContainerForm = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    .divLabelInput {
        margin-top: 15px;
    }
    label {
        font-family: ${theme.fonts.primary};
        font-size: 16px;
        font-weight: ${theme.fonts.weight.light};
    }
    input {
        display: block;
        height: 35px;
        width: 500px;
        margin: 5px auto 0;
        padding: 5px 15px;
        font-family: ${theme.fonts.secondary};
        border: 1px solid ${theme.gray4};
        outline: none;
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
    }
`

export const ForgotPassword = styled.div`
    margin: 5px 0 25px;
    a {
        font-size: 12px;
        font-weight: ${theme.fonts.weight.bolder};
        &:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }

`

export const DivButton = styled.div`
    display: flex;
    justify-content: center;

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
    }
`