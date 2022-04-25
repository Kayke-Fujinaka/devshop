import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContainerMain = styled.div`
    display: block;
    justify-content: center;

    img {
        display: flex;
        justify-content: center;
        margin: 3rem auto;
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
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 1.5rem;
        color: ${theme.gray2};
        text-transform: uppercase;
        @media (max-width: 550px){
        text-align: center;
        font-size: 1rem;
    }
}
`

export const SomeProducts = styled.div`
    display: flex;
    width: 82vw;
    height: 100%;
    margin: 3rem auto 0 auto;

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
                color: ${theme.black};
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
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 10px auto 0;
                
                p {
                    text-align: center;
                    font-size: 0.9rem;
                    font-weight: ${theme.fonts.weight.bold};
                    text-transform: uppercase;
                }

                span {
                    margin-top: 10px;
                    font-size: 1.3rem;
                    font-weight: ${theme.fonts.weight.boldest};
                }
            }
        }
    }
`

export const ButtonSeeAllProducts = styled.div`
    display: flex;

     a {
        display: flex;
        width: 350px;
        height: 40px;
        justify-content: center;
        align-items: center;
        margin: 1rem auto 10rem auto;
        font-weight: ${theme.fonts.weight.boldest};
        color: ${theme.white};
        background: #FF7D1B;
        text-transform: uppercase;
        &:hover {
                filter: brightness(1.1);
        }
    }
`