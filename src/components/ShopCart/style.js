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
    align-items: right;
    justify-content: right;
`

export const ShopCart = styled.div`
    position: relative;
    top: 0rem;
    right: 0rem;
    width: 500px;
    height: 100%;
    z-index: 100;
    background: #fff;

    @media only screen and (max-width: 550px) {
            width: 400px;
        }

    @media only screen and (max-width: 450px) {
            width: 300px;
        }
`

export const TitleShopCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    height: 60px;
    


    h1 {
        text-transform: uppercase;
        font-weight: ${theme.fonts.weight.boldest}}
        color: ${theme.gray};
        font-size: 0.85rem;
        margin-left: 10px;

        @media only screen and (max-width: 700px) {
            font-size: 0.67rem;
        }
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
        width:  100%;
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(0,0,0, 0.35);
        border-top: 1px solid rgb(0,0,0, 0.35);
        
        h1 {
            margin-left: 10px;
            font-size: 1.1rem;
            font-weight: 400;
        }

        h1:nth-child(1) {
            margin-left: 2rem;
        }
        h1:nth-child(2) {
            margin-right: 2rem;
        }
`
export const ListProducts = styled.div`
    display: flex;
    flex-direction: column;
    height: 365px;
    overflow-y: scroll;

    li {
        display: flex;
        margin: 10px 0;
        border-top: 1px solid rgb(0,0,0, 0.15);
        padding-top: 10px;
        position: relative;

        &:nth-child(1) { 
            border-top: 0;
        }

        .boxInfoCart {
            display: flex;
            flex-direction: column;
            width: 270px;

            @media only screen and (max-width: 550px) {
                font-size: 0.8rem;
            }

            .quantity {
            display: flex;
            justify-content: space-between;
            max-width: 100px;
            border: 1px solid ${theme.gray2};
            margin: 10px 0 0 20px;
            height: 30px;

            input {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 34%;
                outline: none;
                border: 1px solid ${theme.gray2};
                font-weight: ${theme.fonts.weight.boldest};
            }
            button {
                font-size: 30px;
                color: ${theme.gray};
                width: 33%;
                border: 1px solid ${theme.gray2};
                display: flex;
                align-items: center;
                justify-content: center;
            }}
    }
            
        }

        h1 {
            font-size: 1rem;
            margin-left: 20px;
            margin-right: 5px;
            font-weight: ${theme.fonts.weight.medium};

            @media only screen and (max-width: 550px) {
                font-size: 0.8rem;
        }

        }

        img {
            width: 80px;
            height: 80px;
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

        span {
                margin-left: 35px;
                font-weight: ${theme.fonts.weight.boldest}
            }
`

export const BottomCart = styled.div`
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
`

export const OurShops = styled.div`
    font-weight: 600;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid rgb(0,0,0, 0.35);
    padding: 10px 10px;
    background: #fff;
    z-index: 10;

    span {
        color: #FF7D1B;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-left: 10px;
        text-decoration: underline;
        cursor: pointer;
    }

    .containerInputsOff {

        .inputOptions {
            height: 0px;
            width: 0px;
            transition:  height 0.4s;
            opacity: 0;
        }
    }

    .containerInputs {
        height: 100%;
        transition: 1s;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;

        .inputOptions {
            padding-left: 10px;
            height: 40px;
            border: 1px solid rgb(0,0,0, 0.15);
            display: flex;
            justify-content: left;
            align-items: center;
            font-weight: 400;
            transition: height 0.4s;

            input {
                margin-right: 5px;
            }

            p {
                font-weight: 700;
                margin-left: auto;
                margin-right: 10px;
            }
        }
    }
`

export const Total = styled.div`
    color: #FF7D1B;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid rgb(0,0,0, 0.35);
    padding: 10px 0;
    background: #fff;
    z-index: 10;

    h2 {
        margin-left: 10px;
    }

    .total {
        display: flex;
        flex-direction: column;
        text-align: right;

        p{
            margin-top: 4px;
        }
    }
`

export const FinishBuy = styled.div`
    display: flex;
    margin: 0 0;
    justify-content: space-between;
    align-items: center;

    .linkToProducts {
        text-decoration: underline;
        color: #FF7D1B;
        text-transform: uppercase;
        margin-left: 10px;
    }

    .linkToPayment {
        width: 200px;
        height: 35px;
        background: #FF7D1B;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        text-transform: uppercase;
    }
`

export const DontHasProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    height: 50px;
    color: #FF7D1B;
`
