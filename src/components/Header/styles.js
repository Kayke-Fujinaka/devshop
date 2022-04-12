    import styled from 'styled-components'
import theme from "../../styles/theme"

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: ${theme.fonts.secondary};
    border: 1px solid #B5B5B5;
    padding: 20px 60px;
    position: fixed;
    background: #fff;
    top: 0rem;
    left: 0rem;
    z-index: 10;
    width: 100vw;
    box-shadow: 0px 3px 6px -1px rgba(0,0,0,0.37);
`

export const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    h1 {
        font-size: 26px;
        cursor: pointer;
        color: #FF7D1B;
    }
`

export const Nav = styled.ul`
    display: flex;
    gap: 20px; 
    outline: none;
    a {
        position: relative;
        font-size: 15px;
        color: ${theme.gray2};
        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
        &::after {
            content: "";
            position: absolute;
            top: 25px;
            right: 0;
            height: 2px;
            width: 100%;
            color: #FF7D1B;
            background-color: #FF7D1B;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.6s;
        }
    }
`

export const Li = styled.li `
    font-size: 15px;
        border-bottom: 1px solid transparent;
        color: ${theme.gray2};
        &::after{
            content: "";
            position: relative;
            top: 50px;
            left: 0;
            height: 3px;
            width: 100%;
            background-color: red;

        }
`

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    > svg {
        font-size: 20px;
        cursor: pointer;
    }
    p {
        font-size: 16px;
        cursor: pointer;
    }
`

export const DivAccount = styled.div`
    display: flex;
    gap: 10px;
    margin-right: 25px;

    a {
        font-size: 15px;
        color: ${theme.black};
        &:hover {
            color: ${theme.black};
            text-decoration: underline;
        }
    }
`

export const Bar = styled.span`
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 1.5px;
    width: 16px;
    background-color: ${theme.black};
    font-size: 11px;
    color: ${theme.white};
    border-radius: 50%;
`