import React from 'react';
import * as S from "./styles"
import { FiShoppingCart } from 'react-icons/fi'

import {Link} from 'react-router-dom'

export default function Header() {
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
            <li><Link to="/">Contact</Link></li>
          </S.Nav>
        </S.ContainerLeft>

        <S.ContainerRight>
          <S.DivAccount>
            <p><Link to="/register">Register</Link></p>
            <span>/</span>
            <p><Link to="/login">Login</Link></p>
          </S.DivAccount>
          <FiShoppingCart />
          <bar>0</bar>
        </S.ContainerRight>
      </S.MainContainer>
    </>
  )
}
