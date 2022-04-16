import React, { useState, useEffect, useCallback } from 'react';
import * as S from "./styles"
import { FiShoppingCart } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import ShopCart from '../ShopCart';

import { qtdItems } from '../ShopCart';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [productsOnCart, setProductsOnCart] = useState([])
  const [qtdItems, setQtdItems] = useState(0)

  useEffect(() => {
    const listaProducts = localStorage.getItem('products')
    setProductsOnCart(JSON.parse(listaProducts) || [])
    console.log(productsOnCart)
  }, [[], productsOnCart])

  useCallback(() => {
    const listaProducts = localStorage.getItem('products')
    setProductsOnCart(JSON.parse(listaProducts) || [])

  }, [productsOnCart, qtdItems])

  useEffect(() => {
    let qtd = 0;

    productsOnCart.forEach((item, index) => {
      qtd += item.quantity
    })
    setQtdItems(qtd)
  }, [[], productsOnCart, qtdItems])

  return (
    <>
      <S.MainContainer>
        <S.ContainerLeft>
          <Link to="/"><h1>devshop</h1></Link>
          <S.Nav>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/jewelery">Jewelery</Link></li>
            <li><Link to="/eletronics">Eletronics</Link></li>
            <li><Link to="/policy">Our policy</Link></li>
          </S.Nav>
        </S.ContainerLeft>

        <S.ContainerRight>
          <S.DivAccount>
            <p><Link to="/register">Register</Link></p>
            <span>/</span>
            <p><Link to="/login">Login</Link></p>
          </S.DivAccount>
          <FiShoppingCart onClick={() => setShowSidebar(!showSidebar)} />
          <S.Bar>{qtdItems}</S.Bar>
        </S.ContainerRight>
      </S.MainContainer>
      {showSidebar && <ShopCart sidebar={showSidebar} />}
    </>
  )
}
