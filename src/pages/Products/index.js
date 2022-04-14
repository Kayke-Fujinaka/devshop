import React, { useState, useContext, useEffect } from 'react';
import * as S from "./styles";
import { Link } from 'react-router-dom'
import api from "../../services/api";

import { ApiContext } from '../../contexts/apiContext'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Products() {
    const { allProducts } = useContext(ApiContext)

    return (
        <>

            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Products</p>
            </S.Breadcrumb>
            <S.AllProducts>
                <ul>
                    {allProducts.map((item) => (
                        <Link to={`/products/${item.id}`}>
                            <li key={item.id}>
                                <img src={item.image} alt={`Imagem ${item.title}`} />
                                <div>
                                    <p>{item.title}</p>
                                    <span>R${item.price}</span>
                                    <p><strong>10</strong>x de <strong>R${(item.price / 10).toFixed(2)}</strong></p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </S.AllProducts>

        </>
    )
}




