import React, { useState, useContext, useEffect } from 'react';
import * as S from "./styles";
import error404Image from "../../assets/error.svg"
import { Link } from 'react-router-dom'

import { ApiContext } from '../../contexts/apiContext'

export default function NotFound() {
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

            <S.ButtonSeeAllProducts>
                <Link to="/">ACESSE A HOME</Link>
            </S.ButtonSeeAllProducts>
        </>
    )
}