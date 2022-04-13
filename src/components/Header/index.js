import React, { useState } from 'react';
import * as S from "./styles"
import { FiShoppingCart } from 'react-icons/fi'

import {Link} from 'react-router-dom'

import ShopCart from '../ShopCart';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false)

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
          <FiShoppingCart onClick={() => setShowSidebar(!showSidebar)}/>
          <S.Bar>0</S.Bar>
        </S.ContainerRight>
      </S.MainContainer>
      {showSidebar && <ShopCart sidebar={showSidebar} />}
    </>
  )
}
