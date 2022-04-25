import styled from 'styled-components'
import theme from "../../styles/theme"

export const Container = styled.div`
    .CarouselBanner {
        width: 100vw;
        margin-bottom: 30px; 

        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const SeeProductsCards = styled.div`
    display: flex;
    max-width: 95vw;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto 2rem auto;
    gap: 1rem;
`

export const ProductCard = styled.div`
    display: flex;
    position: relative;
    width: 300px;
    height: 300px;
    flex: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.black};
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s;
        opacity: 0.7;
        &:hover {
        opacity: 0.5;
    }
    }


`

export const ContentProductCard = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    color: #fff;

    h1 {
        font-size: 1.7rem;
    }

    p {
        margin-top: 10px;
    }

    a {
        padding: 7px 10px;
        margin-top: 10px;
        font-weight: ${theme.fonts.weight.boldest};
        color: ${theme.white};
        background: #FF7D1B;
        border-radius: 1px;
        text-transform: uppercase;
        &:hover {
            filter: brightness(1.1);
        }
    }
`

export const TitleProducts = styled.div`
    display: flex;
    margin: 2.5rem auto 1rem auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 1.5rem;
        color: ${theme.gray2};
        text-transform: uppercase;
        
        @media (max-width: 550px){
        text-align: center;
    }
    }

`

export const SomeProducts = styled.div`
    display: flex;
    width: 82vw;
    height: 100%;
    margin: 3rem auto 0 auto;

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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 40px;
        margin: 1rem auto 4rem auto;
        background: #FF7D1B;
        font-weight: ${theme.fonts.weight.boldest};
        color: #fff;
        text-transform: uppercase;
        &:hover {
                filter: brightness(1.1);
        }
}
`

export const Hashtag = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto 2rem auto;
    gap: 1rem;

    h1 {
        font-size: 1.3rem;
        font-weight: ${theme.fonts.weight.boldest};
    }

    p {
        width: 80%;
        line-height: 30px;
        letter-spacing: 1px;
    }
`

export const Patrocinadores = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0 50px;
    gap: 2.5rem;

    .title {
        display: block;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 510px) {
        padding: 0 50px;
    }
`

export const BoxPatrocinador = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;

    img {
        width: 170px;
        background: #000;
        border-radius: 50%;
        transition: 0.3s;
    }

    .bossName {
        color: #FF7D1B;
        font-weight: ${theme.fonts.weight.boldest};
    }

    p {
        margin-top: 5px;
        background: #fff;
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
`

export const InstagramFooter = styled.div`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    margin: 2rem auto 0 auto;
    color: ${theme.gray2};

    svg {
        font-size: 4rem;
    }
`

export const InstagramText = styled.div`
    margin-left: 0.5rem;

    h1 {
        font-size: 0.8rem;
        font-weight: ${theme.fonts.weight.bold};
        text-transform: uppercase;
    }

    span {
        font-size: 1.4rem;
        font-weight: ${theme.fonts.weight.boldest};
    }
`
