import React, { useContext } from 'react';
import * as S from "./styles";

import { ApiContext } from '../../contexts/apiContext'

import { Link } from 'react-router-dom'

export default function Men() {
    const { menProducts } = useContext(ApiContext)

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Men</p>
            </S.Breadcrumb>

            <S.SomeProducts>
                <ul>
                    {menProducts.map((item) => (
                        <Link to={`/products/${item.id}`}>
                            <li key={item.id}>
                                <img src={item.image} alt={`Imagem ${item.title}`} />
                                <div>
                                    <p className='title'>{item.title}</p>
                                    <span>R${item.price}</span>
                                    <p><strong>10</strong>x de <strong>R${(item.price / 10).toFixed(2)}</strong></p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </S.SomeProducts>
        </>
    )
}