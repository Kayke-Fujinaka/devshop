import styled from 'styled-components'
import theme from "../../styles/theme"

export const CardProduct = styled.div`
li {
            width: 200px;
            height: 340px;
            position: relative;
            transition: 0.5s;

            a {
                color: #000;
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
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 20px;
                    height: 40px;
                    overflow: hidden;
                }

                strong {
                    font-size: 1.2rem;
                    margin: 5px 0;
                }

                span {
                    font-size: 0.8rem;
                    font-weight: 500;
                }

                .rateAndButton {
                    margin-top: 10px;
                    display: flex;
                    flex-direction: row!important;
                    justify-content: left!important;
                    align-items: center!important;
                    gap: 5px;

                    a {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: auto;
                        width: 90px;
                        height: 30px;
                        background: #FF7D1B;
                        font-size: 1rem;
                        font-weight: 700;
                        gap: 5px;
                        color: #fff;

                        &:hover {
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
`