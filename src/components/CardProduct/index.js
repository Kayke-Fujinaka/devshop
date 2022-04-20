import React, { useState, useEffect, useCallback, useHistory } from 'react';
import * as S from "./styles"
import { } from 'react-icons/fi'

import { Link, NavLink } from 'react-router-dom'

export default function CardProduct({id, title, price, description, category, image, rating}) {
    return (
        <S.CardProduct>
                <li key={id}>
                    <Link to={`/products/${id}`}>
                        <img src={image} alt={`Imagem ${title}`} />
                        <div>
                            <p>{title}</p>
                            <span>R${price}</span>
                            <p><strong>10</strong>x de <strong>R${(price / 10).toFixed(2)}</strong></p>
                        </div>
                    </Link>
                </li>
        </S.CardProduct>
    )
}