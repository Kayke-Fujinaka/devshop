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

export const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    width: 90vw;
    text-align: center;
    justify-content: center;
    gap: 3rem;

    img {
        width: 400px;
    }
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 50%;
        z-index: 0;

        h1 {
            font-size: 1.2rem;
            font-weight: 600;
        }
    
        p {
            font-size: 1rem;
        }
    }

    span {
        color: #ffa724;
        font-weight: 800;
    }

    @media only screen and (max-width: 890px) {
        flex-direction: column;

        img {
            width: 300px;
        }

        div {
            width: 95%;
        }
    }
`