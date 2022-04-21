import styled from 'styled-components'
import theme from "../../styles/theme"

export const Container = styled.div`
    .CarouselBanner {
        width: 100vw;
        margin-bottom: 30px; 
        z-index: 1!important;

        img {
            width: 100%;
            height: 100%;
        }
    }
`
export const SeeProductsCards = styled.div`
    max-width: 95vw;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto 2rem auto;
    gap: 1rem;

`

export const ProductCard = styled.div`
    width: 300px;
    height: 300px;
    flex: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.black};
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        object-fit: cover;
        transition: 0.5s;
        &:hover {
        opacity: 0.5;
    }
    }


`

export const ContentProductCard = styled.div`
    position: absolute;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 1.7rem;
    }

    p {
        margin-top: 10px;
    }

    a {
        color: ${theme.white};
        font-weight: ${theme.fonts.weight.boldest};
        text-transform: uppercase;
        background: #FF7D1B;
        padding: 7px 10px;
        margin-top: 10px;
        border-radius: 1px;
        &:hover {
                filter: brightness(1.1);
        }
    }
`

export const TitleProducts = styled.div`
    margin: 2.5rem auto 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: ${theme.gray2};
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        @media (max-width: 550px){
        text-align: center;
    }
    }

`

export const SomeProducts = styled.div`
    display: flex;
    width: 82vw;
    margin: 3rem auto 0 auto;
    height: 100%;

    ul {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5rem;
    }
`

export const ButtonSeeAllProducts = styled.div`
    display: flex;
     a {
        color: #fff;
        text-transform: uppercase;
        font-weight: ${theme.fonts.weight.boldest};
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 40px;
        background: #FF7D1B;
        margin: 1rem auto 4rem auto;
        &:hover {
                filter: brightness(1.1);
        }
}
`

export const Hashtag = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 0 auto 2rem auto;
    text-align: center;

    h1 {
        font-size: 1.3rem;
        font-weight: 700;
    }

    p {
        width: 80%;
        line-height: 30px;
        letter-spacing: 1px;
    }
`

export const Patrocinadores = styled.div`
    width: 90vw;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    gap: 1rem;
    flex-wrap: wrap;
`

export const BoxPatrocinador = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    &:hover { 
        img {
            opacity: 0.5;
            transition: 0.5s;
        }

        .icon {
            opacity: 1;
            transition: 0.5s;
        }
    }

    img {
        background: #000;
        border-radius: 50%;
        transition: 0.3s;
    }

    .icon {
        position: absolute;
        margin: 0 auto 1rem auto;
        opacity: 0;
        transition: 0.3s;

        svg {
            font-size: 3rem;
        }
    }

    p {
        margin-top: 5px;
        background: #fff;
    }
`

export const InstagramFooter = styled.div`
    width: 90%;
    justify-content: center;
    margin: 2rem auto 0 auto;
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
