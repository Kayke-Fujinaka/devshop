import styled from 'styled-components'
import theme from "../../styles/theme"

export const SeeProductsCards =  styled.div`
    max-width: 90vw;
    font-family: ${theme.fonts.secondary};

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto 0 auto;
    gap: 1rem;

`

export const ProductCard =  styled.div`
    width: 320px;
    height: 300px;
    flex: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.black};
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        object-fit: cover;
        transition: 0.5s;
    }

    &:hover img {
        opacity: 0.5;
    }
`

export const ContentProductCard =  styled.div`
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 1.7rem;
    }

    p {
        margin-top: 10px;
    }

    a {
        color: ${theme.white};
        font-weight: ${theme.fonts.weight.boldest};
        text-transform: uppercase;
        background: #FF7D1B;
        padding: 7px 10px;
        margin-top: 10px;
        border-radius: 1px;
    }
`

export const AllProducts = styled.div`
    display: flex;
`
