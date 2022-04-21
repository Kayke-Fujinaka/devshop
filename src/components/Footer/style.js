import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ${theme.fonts.primary};
`

export const ServicesFooter = styled.div`
    width: 90%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    color: ${theme.gray3};
    @media (max-width: 1280px){
        gap: 10px;
    }
`

export const Service = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    @media (max-width: 1280px){
        width: 341px;
    }
    @media (max-width: 510px){
        width: 300px;
    }
    svg {
        font-size: 2rem;
        margin-right: 10px;
    }

    &:nth-child(1) {
        border-right: 2px solid ${theme.black};
        @media (max-width: 768px){
            border-right: 2px solid transparent;
        }
    }
    &:nth-child(2) {
        border-right: 2px solid ${theme.black};
        @media (max-width: 768px){
            border-right: 2px solid transparent;
        }
    }
`

export const TextService = styled.div`
    font-size: 0.6rem;
    @media (max-width: 768px){
            font-size: 0.5rem;
    }
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
    @media (max-width: 1280px){
        gap: 1rem;
    }
    @media (max-width: 768px){
        flex-direction: column;
    }
`


export const MFBox = styled.div`
    width: 350px;
    
    @media (max-width: 1280px){
        width: 300px;
        margin: 0 20px;
    }
   
    ul a {
        color: ${theme.black};
    }

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
> svg {
    background: black;
    color: ${theme.white};
    width: 30px;
    height: 100%;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
export const BottomFooter = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto 10px auto;
    @media (max-width: 768px){
        flex-direction: column;
    }
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
        @media (max-width: 768px){
        text-align: center;
    }
    }
`

