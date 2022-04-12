import React from 'react';
import * as S from "./styles"
import { FiShoppingCart } from 'react-icons/fi'

export default function Header() {
  return (
    <>
      <S.MainContainer>
        <S.ContainerLeft>
          <h1>devshop</h1>
          <S.Nav>
            <li><a href='#'>Men</a></li>
            <li><a href='#'>Women</a></li>
            <li><a href='#'>Jewelery</a></li>
            <li><a href='#'>Eletronics</a></li>
            <li><a href='#'>Contact</a></li>
          </S.Nav>
        </S.ContainerLeft>

        <S.ContainerRight>
          <FiShoppingCart />
          <p>Olá, visitante</p>
        </S.ContainerRight>
      </S.MainContainer>
    </>
  )
}
