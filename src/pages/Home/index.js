import React, { useState, useContext } from 'react';
import { ApiContext } from '../../contexts/apiContext'
import { Link } from 'react-router-dom'
import firebase from "../../services/firebase";

import * as S from "./styles";

import CardProduct from '../../components/CardProduct'
import Loading from '../../components/Loading'

import backWomen from '../../assets/backWomen.jpg'
import backMen from '../../assets/backMen.jpg'
import eletronics from '../../assets/eletronics.jpg'
import joiasBack from '../../assets/joiasBack.jfif'
import kayke from '../../assets/kayke.png'
import joao from '../../assets/joao.png'
import pedro from '../../assets/pedro.png'
import matheus from '../../assets/matheus.png'
import marcus from '../../assets/marcus.png'
import rafael from '../../assets/rafael.png'

import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
                    <a href="https://www.linkedin.com/in/kayke-fujinaka/" target="blank"><img src={kayke} alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p className='bossName'>@kaykeaf</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/jguilhermesl/" target="blank"><img src={joao} alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p className='bossName'>@jguilhermesl</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/rafael-yokoyama/" target="blank"><img src={rafael} alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@rafael.yokoyama99</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/pedroh-dev/" target="blank"><img src={pedro} alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@p3dro_dev</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/marcusviniciusbeghelisantos/" target="blank"><img src={marcus} alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@marcusbegh</p>
                </S.BoxPatrocinador>
                <S.BoxPatrocinador>
                <a href="https://www.linkedin.com/in/matheus-santos-souza/" target="blank"><img src={matheus} alt="" /></a>
                    <div className="icon">
                        <FaLinkedin />
                    </div>
                    <p>@mattheus_santos42</p>
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