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

export const SomeProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin: 3rem auto 0 auto;
    height: 100%;

    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5rem;

        a {
            color: #000;
        }

        li {
            width: 225px;
            height: 400px;
            position: relative;
            cursor: pointer;

            img {
                width: 100%;
                height: 60%;
            }

            div {
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
                
                .title {
                    text-align: center;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    font-weight: 500;
                    &:hover{
                        opacity: 0.8;
                    }
                }
                
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