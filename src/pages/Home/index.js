import React, { useState, useContext } from 'react';
import Carousel from "react-multi-carousel";
import * as S from "./styles";
import { Link } from 'react-router-dom'

import { ApiContext } from '../../contexts/apiContext'

import backWomen from '../../assets/backWomen.jpg'
import backMen from '../../assets/backMen.jpg'
import eletronics from '../../assets/eletronics.jpg'
import joiasBack from '../../assets/joiasBack.jfif'

import CardProduct from '../../components/CardProduct'
import Loading from '../../components/Loading'

import { FaInstagram, FaLinkedin } from 'react-icons/fa'

import "react-multi-carousel/lib/styles.css";
import zIndex from '@mui/material/styles/zIndex';


export default function Home() {
    const { allProducts, loading } = useContext(ApiContext)
    const [products, setProducts] = useState([])

    let productsHome = allProducts.slice(0, 8)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }; 

    return (
        <S.Container>
            <S.SeeProductsCards>
                <S.ProductCard>
                    <img src={backMen} alt="Imagem roupa masculina" />
                    <S.ContentProductCard>
                        <h1>Roupas masculinas</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/men">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={backWomen} alt="Imagem roupa feminina" />
                    <S.ContentProductCard>
                        <h1>Roupas femininas</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/women">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={eletronics} alt="Imagem eletrônicos" />
                    <S.ContentProductCard>
                        <h1>Eletrônicos</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/eletronics">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={joiasBack} alt="Imagem joias" />
                    <S.ContentProductCard>
                        <h1>Joalheria</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/jewelery">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
            </S.SeeProductsCards>

            <div className="CarouselBanner">
                <Carousel responsive={responsive}>
                    <div>
                        <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/69750176-5ccc-4273-98c9-af2c00944577___28f1285c9c50ba578f3103af1719edc0.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/ef5c9169-21b4-47dc-8fb9-4075f8425b4f___de6ef233726209f366aeac951188dd80.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/9f3392f0-612a-4013-a238-3ee6a6075340___dd879e1c01966e85add16dee3b57b0c6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/bb8053e4-d3e6-43b7-b139-82622e855698___f95f198db32e898cc6ee8a101e31cad7.jpg" alt="" />
                    </div>
                </Carousel>
            </div>

            <S.TitleProducts>
                <h1>Conheça nossos principais produtos</h1>
                <p>Em breve... Novo estoque!</p>
            </S.TitleProducts>

            {loading ? (
                <Loading />
            ) : (

                <S.SomeProducts>
                    <ul>
                        {productsHome.map((item) => (
                            <>
                                <CardProduct id={item.id} title={item.title} price={item.price} category={item.category} image={item.image} rating={item.rating} />
                            </>
                        ))}
                    </ul>
                </S.SomeProducts>)}

            {loading === false && (
                <S.ButtonSeeAllProducts>
                    <Link to="/products">Ver todos produtos</Link>
                </S.ButtonSeeAllProducts>)}

            <S.Hashtag>
                <h1>#LoremIpsund</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis ullamcorper leo, ac laoreet erat eleifend in. Maecenas a dictum erat. Etiam sagittis nunc quis nunc semper tempus. Mauris hendrerit, augue non lobortis feugiat, justo nisi imperdiet mi, eu sagittis nulla erat eget lectus. Aliquam congue sit amet nulla et ornare.</p>
            </S.Hashtag>


            <div className="CarouselBanner">
                <Carousel responsive={responsive}>
                    <div>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20220421_HOME_CARROSSEL_APPDAY_PREOGRESSIVO_GERAL_DESKv2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20220421_HOME_CARROSSEL_MODA_JEANS_MASCULINO_DESK.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20220421_HOME_CARROSSEL_APPDAY_PREOGRESSIVO_GERAL_DESKv2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://img.lojasrenner.com.br/banner/01-home/20220421_HOME_CARROSSEL_MODA_JEANS_MASCULINO_DESK.jpg" alt="" />
                    </div>
                </Carousel>
            </div>

            <Carousel responsive={responsive}>
            <S.Patrocinadores>
                <div className='title'>
                <h1>Parceiros</h1>
                </div>
                <S.BoxPatrocinador>
                    <a href="https://www.linkedin.com/in/kayke-fujinaka/" target="blank"><img src="https://media-exp1.licdn.com/dms/image/D5603AQHZRwNxIEt07g/profile-displayphoto-shrink_200_200/0/1644408037987?e=1655942400&v=beta&t=nBHJgxTtq0PwAbrvLQ-EriE1ukd0Y3KY96GfTIYuWdA" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@kaykeaf</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/jguilhermesl/" target="blank"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQFv8Nrh37K9gg/profile-displayphoto-shrink_200_200/0/1647100224699?e=1655942400&v=beta&t=guAXFfGBK40TvnyX6sUFZN5U9qXDsVd4lzxgWDgpySk" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@jguilhermesl</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/pedroh-dev/" target="blank"><img src="https://media-exp1.licdn.com/dms/image/C4E03AQF6Oc5IxnB-EQ/profile-displayphoto-shrink_200_200/0/1638735694508?e=1655942400&v=beta&t=xhGFYYr_yw-URzBFcM_UEoAv8xH84jtGwWjw4BHlZBE" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@p3dro_dev</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/marcusviniciusbeghelisantos/" target="blank"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQFrRUGC6s_pdQ/profile-displayphoto-shrink_200_200/0/1647262353026?e=1655942400&v=beta&t=3ha-Sl9UiAFbxtYEpgPd-FdhxxJyYpzHgNpEDTdtbN4" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@marcusbegh</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/matheus-santos-souza/" target="blank"><img src="https://avatars.githubusercontent.com/u/90225074?v=4" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@mattheus_santos42</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/rafael-yokoyama/" target="blank"><img src="https://avatars.githubusercontent.com/u/60978293?v=4" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@rafael.yokoyama99</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/ismael-gomes-da-silva-a5a38b149/" target="blank"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQGuub2ulJbSSA/profile-displayphoto-shrink_200_200/0/1645912679551?e=1655942400&v=beta&t=Se5KViz6UGP9rKFazYbFYUM4CYYTroBWlNvKNYUCYyM" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@projeta.leam</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/enzocosta07/" target="blank"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEENKZVzlz3Tg/profile-displayphoto-shrink_200_200/0/1648254462084?e=1655942400&v=beta&t=MplfZJ5K8mxgUW5CisIRFKt-5GAloYGc2K1VhnpCN2k" alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@enzocosta07</p>
                </S.BoxPatrocinador>
            </S.Patrocinadores>
            </Carousel>

            <S.InstagramFooter>
                <FaInstagram />
                <S.InstagramText>
                    <h1>Siga-nos no instagram</h1>
                    <span>@DEVSHOPPERFEITO</span>
                </S.InstagramText>
            </S.InstagramFooter>
        </S.Container>
    )
}