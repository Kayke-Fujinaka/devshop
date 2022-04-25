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

export const InspectItem = styled.div`
    display: flex;
    width: 70vw;
    margin: 80px auto;
    gap: 6rem;
    @media (max-width: 1024px){
        flex-wrap: wrap;
        width: 100vw;
        gap: 2rem;
    }
`

export const ImageProduct = styled.div`
    width: 50%;
    height: 100%;

    img {
        width: 100%;
        height: 50vh;
    }

    @media (max-width: 1024px){
        display: flex;
        width: 70%;
        margin: 0 auto;
    }

    @media (max-width: 510px){
        width: 80%;
        height: 80%;
    }
`

export const InfoProduct = styled.div`
    width: 50%;

    .titleCompany {
        color: #FF7D1B;
    }

    h1 {
        margin-top: 10px;
        @media (max-width: 600px){
            font-size: 24px;
        }
    }

    p {
        margin: 25px 0;
        text-align: justify;
        @media (max-width: 510px){
            font-size: 18px;
        }
    }

    span {
        font-weight: ${theme.fonts.weight.bolder};
    }

    @media (max-width: 1024px){
        width: 70%;
        margin: 0 auto;
    }
`

export const TitleCompany = styled.div`
    color: #FF7D1B;
    font-weight: ${theme.fonts.weight.bolder};
`

export const Purchase = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 20px;

    .quantity {
        display: flex;
        max-width: 100px;
        justify-content: space-between;
        padding: 0 5px;
        background-color: #F7F8FD;
        border: 1px solid ${theme.white3};
        border-radius: 8px;

        input {
            width: 20%;
            margin-left: 6px;
        }

        button {
            font-size: 30px;
            color: #FF7D1B;
            &:hover {
                filter: brightness(1.2);
            }
        }
    }

    .buttonPurchase {
        padding: 10px 30px;
        color: ${theme.white};
        background-color: #FF7D1B;
        border-radius: 10px;
        box-shadow: 0px 3px 21px -2px rgba(255,125,27,0.56);
        &:hover {
            filter: brightness(1.1);
        }
    }
`