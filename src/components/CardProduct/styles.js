import styled from 'styled-components'
import theme from '../../styles/theme'

export const CardProduct = styled.div`
li {
    width: 200px;
    height: 340px;
    position: relative;
    transition: 0.5s;

        a {
            color: ${theme.black};
        }

        img {
            width: 95%;
            height: 50%;
            margin: 0 auto;
        }

        .contentInfo {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: left;
            margin-top: 10px;
                
            h2 {
                height: 40px;
                font-size: 1rem;
                font-weight: ${theme.fonts.weight.bold};
                line-height: 20px;
                overflow: hidden;
            }

            strong {
                font-size: 1.2rem;
                margin: 5px 0;
            }

            span {
                font-size: 0.8rem;
                font-weight: ${theme.fonts.weight.bold};
            }

            .rateAndButton {
                display: flex;
                flex-direction: row!important;
                justify-content: left!important;
                align-items: center!important;
                margin-top: 10px;
                gap: 5px;

                a {
                    display: flex;
                    width: 90px;
                    height: 30px;
                    align-items: center;
                    justify-content: center;
                    margin-left: auto;
                    gap: 5px;
                    font-size: 1rem;
                    font-weight: ${theme.fonts.weight.boldest};
                    color: ${theme.white};
                    background: #FF7D1B;
                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
    }
`