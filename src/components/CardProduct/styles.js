import styled from 'styled-components'
import theme from "../../styles/theme"

export const CardProduct = styled.div`
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
`