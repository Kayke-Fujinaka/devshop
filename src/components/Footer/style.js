import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    width: 100vw;

    position: absolute;
    bottom: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${theme.fonts.primary}
`

export const InstagramFooter = styled.div`
    width: 90%;
    justify-content: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: ${theme.gray2};

    svg {
        font-size: 4rem;
    }
`

export const InstagramText = styled.div`
    margin-left: 0.5rem;
    h1 {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: ${theme.fonts.weight.bold};
    }
    span {
        font-size: 1.4rem;
        font-weight: ${theme.fonts.weight.boldest};
    }
`

export const ServicesFooter = styled.div`
    width: 90%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    color: ${theme.gray3};
`

export const Service = styled.div`
    width: 350px;
    display: flex;
    align-items: center;

    svg {
        font-size: 2rem;
        margin-right: 10px;
    }

    &:nth-child(1) {
        border-right: 2px solid ${theme.black};
    }
    &:nth-child(2) {
        border-right: 2px solid ${theme.black};
    }
`

export const TextService = styled.div`
    font-size: 0.6rem;
    
    h1 {
        text-transform: uppercase;
    }

    p {
        font-size: 1rem;
    }
    
`

export const MainFooter = styled.div`
    padding: 2rem 0;
    background: ${theme.white2};
    display: flex;
    justify-content: center;
    gap: 6rem;
    width: 100vw;
    margin-top: 2rem;
`


export const MFBox = styled.div`
    width: 350px;
    
    .iconInstaFooter {
        width: 30px;
        height: 30px;
        background: ${theme.black};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
            color: ${theme.white}
        }
        
    }

    .inputEmailFooter {
        width: 220px;
        height: 30px;
        margin-top: 10px;

        input {
            width: 190px;
            height: 100%;
            border: 1px solid ${theme.black};
            padding-left: 10px;
            font-size: 0.8rem;
        } 

        .iconInputEmailFooter {
            background: black;
                color: ${theme.white};
                width: 30px;
                height: 100%;
                float: right;
                display: flex;
                justify-content: center;
                align-items: center;
            
            svg {
                font-size: 1rem;
            }
        }

    }
`

export const TitleMainFooter = styled.div`
font-size: 0.9rem;
font-weight: ${theme.fonts.weight.boldest};
text-transform: uppercase;
margin-bottom: 5px;
`
export const BottomFooter = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto 10px auto;

    .createdBy {
        display: flex;
        font-size: 1rem;
        
        strong {
            font-weight: ${theme.fonts.weight.boldest};
        }
    }

    p {
        font-size: 0.8rem;
        font-weight: ${theme.fonts.weight.medium};
        text-transform: uppercase;
    }
`

