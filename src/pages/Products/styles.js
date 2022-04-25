import styled from 'styled-components';
import theme from "../../styles/theme"

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
`

export const AllProducts = styled.div`
    display: flex;
    width: 80vw;
    height: 100%;
    margin: 3rem auto 0 auto;

    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5rem;

        a {
            color: ${theme.black};
        }
    }
`