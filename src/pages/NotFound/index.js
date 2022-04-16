import React, { useState, useContext, useEffect } from 'react';
import * as S from "./styles";
import error404Image from "../../assets/error.svg"
import { Link } from 'react-router-dom'

import { ApiContext } from '../../contexts/apiContext'

export default function Search() {
    const { allProducts } = useContext(ApiContext)
    const [products, setProducts] = useState([])

    let productsHome = allProducts.slice(0, 8)

    return (
        <>
            <S.ContainerMain>
                <img src={error404Image}/>
                <p>
                    Desculpe, mas a página que você está procurando não existe.
                </p>
            </S.ContainerMain>

            <S.TitleProducts>
                <h1>Talvez você se interesse pelos seguintes produtos.</h1>
            </S.TitleProducts>

            <S.SomeProducts>
                <ul>
                    {productsHome.map((item) => (
                        <li key={item.id}>
                            <Link to={`/products/${item.id}`}>
                                <img src={item.image} alt={`Imagem ${item.title}`} />
                                <div>
                                    <p>{item.title}</p>
                                    <span>R${item.price}</span>
                                    <p><strong>10</strong>x de <strong>R${(item.price / 10).toFixed(2)}</strong></p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </S.SomeProducts>

            <S.ButtonSeeAllProducts>
                <Link to="/products">Ver todos produtos</Link>
            </S.ButtonSeeAllProducts>
        </>
    )
}