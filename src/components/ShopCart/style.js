import styled from 'styled-components'
import theme from "../../styles/theme"

export const Modal = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ShopCart = styled.div`
    position: fixed;
    top: 0rem;
    right: 0rem;
    width: 40vw;
    height: 100%;
    z-index: 100;
    background: #fff;
`

export const TitleShopCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 60px;
    border-bottom: 1px solid rgb(0,0,0, 0.35);


    h1 {
        text-transform: uppercase;
        font-weight: ${theme.fonts.weight.boldest}}
        color: ${theme.gray};
        font-size: 0.85rem;
        margin-left: 10px;
    }

    svg {
        font-size: 2rem;
        margin-top: 2px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            color: #ff7d1b;
        }
`

export const TitleProducts = styled.div`
        height: 50px;
        display: flex;
        width:  90%;
        justify-content: space-between;
        align-items: center;
        
        h1 {
            margin-left: 10px;
            font-size: 1.1rem;
            font-weight: 400;
        }
`
export const ListProducts = styled.div`
    display: flex;
    flex-direction: column;

    li {
        display: flex;
        margin: 10px 0;
        border-top: 1px solid rgb(0,0,0, 0.15);
        padding-top: 10px;

        .boxInfoCart {
            display: flex;
            flex-direction: column;
            width: 60%;

            .quantity {
            display: flex;
            justify-content: space-between;
            max-width: 100px;
            border: 1px solid ${theme.gray2};
            margin: 10px 0 0 20px;

            input {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 34%;
                outline: none;
                border: 1px solid ${theme.gray2};
            }
            button {
                font-size: 30px;
                color: ${theme.gray};
                width: 33%;
                border: 1px solid ${theme.gray2};
            }}
    }
            
        }

        h1 {
            font-size: 1rem;
            margin-left: 10px;
        }

        img {
            width: 100px;
            height: 100px;
            margin-left: 10px;
        }

        svg {
            position: absolute;
            right: 10px;
            cursor: pointer;

            &:hover {
                color: ${theme.gray}
            }
        }
`

export const Total = styled.div`
    margin-left: 10px;
    color: ${theme.gray}
`
