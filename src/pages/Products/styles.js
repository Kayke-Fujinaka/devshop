import styled from 'styled-components';
import theme from "../../styles/theme"

export const AllProducts = styled.div`
    display: flex;
    width: 80vw;
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
            height: 350px;
            position: relative;

            img {
                width: 100%;
                height: 70%;
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