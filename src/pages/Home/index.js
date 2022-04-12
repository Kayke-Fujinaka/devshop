import React, { useState, useContext, useEffect } from 'react';
import * as S from "./styles";
import { Link } from 'react-router-dom'
import api from "../../services/api";

import { ApiContext } from '../../contexts/apiContext'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import backWomen from '../../assets/backWomen.jpg'
import backMen from '../../assets/backMen.jpg'
import eletronics from '../../assets/eletronics.jpg'
import joiasBack from '../../assets/joiasBack.jfif'

import { FaInstagram } from 'react-icons/fa'

export default function Home() {
    const { allProducts } = useContext(ApiContext)
    const [products, setProducts] = useState([])

    return (
        <>
            <Header />

            <S.SeeProductsCards>
                <S.ProductCard>
                    <img src={backMen} alt="Imagem roupa masculina" />
                    <S.ContentProductCard>
                        <h1>Roupas masculinas</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={backWomen} alt="Imagem roupa feminina" />
                    <S.ContentProductCard>
                        <h1>Roupas femininas</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={eletronics} alt="Imagem eletrônicos" />
                    <S.ContentProductCard>
                        <h1>Eletrônicos</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
                <S.ProductCard>
                    <img src={joiasBack} alt="Imagem joias" />
                    <S.ContentProductCard>
                        <h1>Joalheria</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
            </S.SeeProductsCards>

            <S.TitleProducts>
                <h1>Conheça nossos principais produtos</h1>
                <p>Em breve... Novo estoque!</p>
            </S.TitleProducts>

            <S.SomeProducts>
                {allProducts.map( (item) => (
                    <li key={item.id}>KAYKE LINDO</li>
                ))}
                <Link to="/products">Ver todos produtos</Link>
            </S.SomeProducts>

            <S.InstagramFooter>
                <FaInstagram />
                <S.InstagramText>
                    <h1>Siga-nos no instagram</h1>
                    <span>@DEVSHOPPERFEITO</span>
                </S.InstagramText>
            </S.InstagramFooter>

            <Footer />
        </>
    )
}