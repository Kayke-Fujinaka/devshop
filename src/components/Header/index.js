import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'

import { FiShoppingCart, FiSearch, FiMenu, FiLogOut } from 'react-icons/fi'
import ShopCart from '../ShopCart';

import * as S from "./styles"

export default function Header() {

  const { storageUser, user, signOut } = useContext(AuthContext)

  const [showSidebar, setShowSidebar] = useState(false);
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [qtdItems, setQtdItems] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [searchProducts, setSearchProducts] = useState('')
  const [navProducts, setNavProducts] = useState(false)

  useEffect(() => {
    const listaProducts = localStorage.getItem('products')
    setProductsOnCart(JSON.parse(listaProducts) || [])
  }, [[], productsOnCart])

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
            <li
              onMouseEnter={() => setNavProducts(true)} className={navProducts ? 'navProducts' : 'navProductsOff'}  >
              <NavLink to="/products"
                activeStyle={{
                  paddingBottom: "6px",
                  borderBottom: "2px solid #ffa724",
                }}
                >Produtos
                <nav onMouseLeave={() => setNavProducts(false)}>
                  <li><NavLink to="/men">Masculino</NavLink></li>
                  <li><NavLink to="/women">Feminino</NavLink></li>
                  <li><NavLink to="/jewelery">Joalheria</NavLink></li>
                  <li><NavLink to="/eletronics">Eletrônicos</NavLink></li>
                </nav>
              </NavLink>
            </li>
            <li><NavLink to="/policy" activeStyle={
              {
                paddingBottom: "6px",
                borderBottom: "2px solid #ffa724",
              }
            }>Nossa Política</NavLink></li>
            <li><NavLink to="/donate" activeStyle={
              {
                paddingBottom: "6px",
                borderBottom: "2px solid #ffa724",
              }
            }>Apoie-nos</NavLink></li>
          </S.Nav>
        </S.ContainerLeft>

        <S.ContainerRight>
          <S.ContainerSearch>
            <div className="inputEmailFooter">
              <input placeholder="Buscar produtos" type="text" value={searchProducts} onChange={e => setSearchProducts(e.target.value)} />
              <Link className="iconInputEmailFooter" to={`/search/${encodeURIComponent(searchProducts)}`} >
                <FiSearch />
              </Link>
            </div>
          </S.ContainerSearch>

          <S.DivAccount>
            {user ? (
              <Link to="/profile">
              Olá, {user.name}
              </Link>
            ) : (
              <>
                <p><Link to="/register">Registro</Link></p>
                <span>/</span>
                <p><Link to="/login">Login</Link></p>
              </>
            )}
          </S.DivAccount>

          <S.SignOutButton>
            <button type="button" onClick={signOut}><FiLogOut /></button>
          </S.SignOutButton>

          <FiShoppingCart onClick={() => setShowSidebar(!showSidebar)} />
          <S.Bar>{qtdItems}</S.Bar>
        </S.ContainerRight>

        <S.MenuHamburguer>
          <FiMenu onClick={() => setShowNav(!showNav)} />
          {showNav &&
            (
              <nav className={`navHamburguer ${showNav ? 'navTrue' : 'navFalse'}`}>
                <div className="inputEmailFooter">
                  <input placeholder="Buscar produtos" type="text" value={searchProducts} onChange={e => setSearchProducts(e.target.value)} />
                  <Link className="iconInputEmailFooter" to={`/search/${encodeURIComponent(searchProducts)}`} >
                    <FiSearch />
                  </Link>
                </div>
                <S.DivAccount>
                  <p><Link to="/register">Register</Link></p>
                  <span>/</span>
                  <p><Link to="/login">Login</Link></p>
                </S.DivAccount>
                <li><Link to="/men">Masculino</Link></li>
                <li><Link to="/women">Feminino</Link></li>
                <li><Link to="/jewelery">Joalheria</Link></li>
                <li><Link to="/eletronics">Eletrônicos</Link></li>
                <li><Link to="/policy">Nossa política</Link></li>
                <li><Link to="/donate">Apoie-nos</Link></li>
              </nav>)}
        </S.MenuHamburguer>

      </S.MainContainer>

      {showSidebar && <ShopCart sidebar={showSidebar} />}
    </>
  )
}
