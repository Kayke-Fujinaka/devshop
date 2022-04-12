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
                    <img src={backMen} alt="Imagem joias" />
                    <S.ContentProductCard>
                        <h1>Joalheria</h1>
                        <p>Outono/Inverno 2022</p>
                        <Link to="/">Ver produtos</Link>
                    </S.ContentProductCard>
                </S.ProductCard>
            </S.SeeProductsCards>

            <S.AllProducts>
                <ul>
                    {allProducts.map( (item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            </S.AllProducts>
            <Footer />
        </>
    )
}