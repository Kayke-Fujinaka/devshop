import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContainerMain = styled.div`
    font-family: ${theme.fonts.secondary}
`

export const Breadcrumb = styled.div`
    display: flex;
    width: 80%;
    margin: 1.5rem auto;
    gap: 5px;
    font-size: 1rem;

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
        font-size: 0.75rem;
    }
`

export const Results = styled.div`
    display: flex;
    width: 85vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    list-style: none;
    gap: 3rem;
`