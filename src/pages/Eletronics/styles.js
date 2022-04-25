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
    height: 100%;
    width: 80vw;
    margin: 3rem auto 0 auto;

    a {
        color: ${theme.black};
    }

    ul {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5rem;
    }
`