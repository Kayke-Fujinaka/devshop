import styled from 'styled-components'
import theme from "../../styles/theme"

export const Modal = styled.div`
    display: flex;
    align-items: right;
    justify-content: right;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: rgba(0,0,0,0.5);
`

export const ShopCart = styled.div`
    width: 500px;
    height: 100%;
    position: relative;
    top: 0rem;
    right: 0rem;
    z-index: 100;
    background: ${theme.white};

    @media (max-width: 550px) {
        width: 400px;
    }

    @media (max-width: 450px) {
        width: 300px;
    }
`

export const TitleShopCart = styled.div`
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    h1 {
        margin-left: 10px;
        font-size: 0.85rem;
        font-weight: ${theme.fonts.weight.boldest}}
        color: ${theme.gray};
        text-transform: uppercase;

        @media (max-width: 700px) {
            font-size: 0.67rem;
        }
    }

    svg {
    margin-top: 2px;
    font-size: 2rem;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        color: #ff7d1b;
    }
`

export const TitleProducts = styled.div`
    display: flex;
    height: 50px;
    width:  100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(0,0,0, 0.35);
    border-top: 1px solid rgb(0,0,0, 0.35);
        
    h1 {
        margin-left: 10px;
        font-size: 1.1rem;
        font-weight: ${theme.fonts.weight.medium};
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
    height: 365px;
    flex-direction: column;
    overflow-y: scroll;

    li {
        display: flex;
        position: relative;
        margin: 10px 0;
        padding-top: 10px;
        border-top: 1px solid rgb(0,0,0, 0.15);

        &:nth-child(1) { 
            border-top: 0;
        }

        .boxInfoCart {
            display: flex;
            width: 270px;
            flex-direction: column;

            @media (max-width: 550px) {
                font-size: 0.8rem;
            }

            .quantity {
            display: flex;
            height: 30px;
            max-width: 100px;
            justify-content: space-between;
            margin: 10px 0 0 20px;
            border: 1px solid ${theme.gray2};

            input {
                display: flex;
                width: 34%;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 34%;
                border: 1px solid ${theme.gray2};
                outline: none;
            }
            button {
                display: flex;
                width: 33%;
                align-items: center;
                justify-content: center;
                font-size: 30px;
                color: ${theme.gray};
                border: 1px solid ${theme.gray2};
            }   
        }
    }     
}

    h1 {
        margin-left: 20px;
        margin-right: 5px;
        font-size: 1rem;
        font-weight: ${theme.fonts.weight.medium};

        @media (max-width: 550px) {
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

    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 10px 10px;
    background: ${theme.white};
    font-weight: ${theme.fonts.weight.bolder};
    border-top: 1px solid rgb(0,0,0, 0.35);
    z-index: 10;

    span {
        display: flex;
        align-items: center;
        margin-left: 10px;
        gap: 5px;
        color: #FF7D1B;
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
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
        transition: 1s;

        .inputOptions {
            display: flex;
            height: 40px;
            justify-content: left;
            align-items: center;
            padding-left: 10px;
            font-weight: ${theme.fonts.weight.medium};
            border: 1px solid rgb(0,0,0, 0.15);
            transition: height 0.4s;

            input {
                margin-right: 5px;
            }

            p {
                margin-left: auto;
                margin-right: 10px;
                font-weight: ${theme.fonts.weight.boldest};
            }
        }
    }
`

export const Total = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 0;
    color: #FF7D1B;
    font-weight: 800;
    border-top: 1px solid rgb(0,0,0, 0.35);
    background: ${theme.white};
    z-index: 10;

    h2 {
        margin-left: 10px;
    }

    .total {
        display: flex;
        flex-direction: column;
        text-align: right;

        p {
            margin-top: 4px;
        }
    }
`

export const FinishBuy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    .linkToProducts {
        margin-left: 10px;
        color: #FF7D1B;
        text-decoration: underline;
        text-transform: uppercase;
    }

    .linkToPayment {
        display: flex;
        width: 200px;
        height: 35px;
        align-items: center;
        justify-content: center;
        background: #FF7D1B;
        color: ${theme.white};
        text-transform: uppercase;
    }
`

export const DontHasProduct = styled.div`
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: #FF7D1B;
`
