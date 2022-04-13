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

export const InspectItem = styled.div`
    display: flex;
    width: 70vw;
    height: 50vh;
    margin: 0 auto;
    gap: 1rem;
`

export const BoxLeft = styled.div`
    width: 50%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
    }
`

export const BoxRight = styled.div`
    width: 50%;
`