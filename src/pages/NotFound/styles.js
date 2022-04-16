import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContainerMain = styled.div`
    display: block;
    justify-content: center;
    img {
        display: flex;
        justify-content: center;
        margin: 50px auto;
        width: 30%;
        display: block;
    }
    p {
        display: block;
        text-align: center;
    }
`

export const TitleProducts = styled.div`
    margin: 2.5rem auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: ${theme.gray2};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        @media (max-width: 550px){
        text-align: center;
        font-size: 1rem;
    }
}
`

export const SomeProducts = styled.div`
    display: flex;
    width: 82vw;
    margin: 3rem auto 0 auto;
    height: 100%;

    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5rem;

        li {
            width: 225px;
            height: 400px;
            position: relative;
            transition: 0.5s;
            cursor: pointer;

            a {
                color: #000;
            }

            img {
                width: 100%;
                height: 60%;
                &:hover {
                    opacity: 1;
                    filter: brightness(1);
                }
            }

            div {
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
                
                p {
                    text-align: center;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    font-weight: 500;
                }

                span {
                    margin-top: 10px;
                    font-weight: ${theme.fonts.weight.boldest};
                    font-size: 1.3rem;
                }
            }
        }
    }
`

export const ButtonSeeAllProducts = styled.div`
    display: flex;
     a {
        color: #fff;
        text-transform: uppercase;
        font-weight: ${theme.fonts.weight.boldest};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 40px;
        background: #FF7D1B;
        margin: 1rem auto 10rem auto;
        &:hover {
                filter: brightness(1.1);
        }
}
`