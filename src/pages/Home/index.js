import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'

import { ApiContext } from '../../contexts/apiContext'

import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
import biggest from '../../assets/biggest.png'
import joias from '../../assets/joias.png'
import discount from '../../assets/discount.png'
import post1 from '../../assets/post1.png'
import msg1 from '../../assets/msg1.png'
import msg2 from '../../assets/msg2.png'
import msg3 from '../../assets/msg3.png'
import msg4 from '../../assets/msg4.png'
import msg5 from '../../assets/msg5.png'

import * as S from "./styles";

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
                        <img src={biggest} alt="Banner 1" />
                    </div>
                    <div>
                        <img src={joias} alt="Banner 2" />
                    </div>
                    <div>
                        <img src={post1} alt="Banner 3" />
                    </div>
                    <div>
                        <img src={discount} alt="Banner 4" />
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
                                <CardProduct
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    category={item.category}
                                    image={item.image}
                                    rating={item.rating}
                                />
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
                        <img src={msg1} alt="uma" />
                    </div>
                    <div>
                        <img src={msg3} alt="forma" />
                    </div>
                    <div>
                        <img src={msg2} alt="nova" />
                    </div>
                    <div>
                        <img src={msg4} alt="de" />
                    </div>
                    <div>
                        <img src={msg5} alt="ecommerce" />
                    </div>
                </Carousel>
            </div>

            <Carousel responsive={responsive}>
                <S.Patrocinadores>
                    <div className='title'>
                        <h1>Parceiros</h1>
                    </div>
                    <S.BoxPatrocinador>
                        <a
                            href="https://www.linkedin.com/in/kayke-fujinaka/" target="blank">
                            <img src={kayke} alt="Foto do Kayke" />
                        </a>
                        <div className="icon">
                            <FaLinkedin />
                        </div>
                        <p className='bossName'>@kaykeaf</p>
                    </S.BoxPatrocinador>
                    <S.BoxPatrocinador>
                        <a href="https://www.linkedin.com/in/jguilhermesl/" target="blank">
                            <img src={joao} alt="Foto do João" />
                        </a>
                        <div className="icon">
                            <FaLinkedin />
                        </div>
                        <p className='bossName'>@jguilhermesl</p>
                    </S.BoxPatrocinador>
                    <S.BoxPatrocinador>
                        <a href="https://www.linkedin.com/in/rafael-yokoyama/" target="blank">
                            <img src={rafael} alt="Foto do Rafael" />
                        </a>
                        <div className="icon">
                            <FaLinkedin />
                        </div>
                        <p>@rafael.yokoyama99</p>
                    </S.BoxPatrocinador>
                    <S.BoxPatrocinador>
                        <a href="https://www.linkedin.com/in/pedroh-dev/" target="blank">
                            <img src={pedro} alt="Foto do Pedro" />
                        </a>
                        <div className="icon">
                            <FaLinkedin />
                        </div>
                        <p>@p3dro_dev</p>
                    </S.BoxPatrocinador>
                    <S.BoxPatrocinador>
                        <a href="https://www.linkedin.com/in/marcusviniciusbeghelisantos/" target="blank">
                            <img src={marcus} alt="Foto do Marcus" />
                        </a>
                        <div className="icon">
                            <FaLinkedin />
                        </div>
                        <p>@marcusbegh</p>
                    </S.BoxPatrocinador>
                    <S.BoxPatrocinador>
                        <a href="https://www.linkedin.com/in/matheus-santos-souza/" target="blank">
                            <img src={matheus} alt="Foto do Matheus" />
                        </a>
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