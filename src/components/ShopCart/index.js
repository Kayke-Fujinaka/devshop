import React, { useState, useEffect, useCallback } from 'react';
import * as S from './style';
import { FaTimes, FaTrash } from 'react-icons/fa'

export default function ShopCart({ sidebar }) {
    const [showCart, setShowCart] = useState(sidebar)

    const [productsOnCart, setProductsOnCart] = useState([])
    const [total, setTotal] = useState(0)
    const [hasProductOnCart, setHasProductOnCart] = useState()

    useEffect(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
    }, [])

    useCallback(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
    }, [productsOnCart])

    function deleteProduct(productId) {
        // Vai chegar o Id do produto e se esse Id tiver no array products do local storage, ele será filtrado e excluido
        let filtroProducts = productsOnCart.filter((item) => {
            return (item.id != productId)
        })

        setProductsOnCart(filtroProducts)
        localStorage.setItem('products', JSON.stringify(filtroProducts))
    }



    return (
        <>
            {showCart && (
                <S.Modal>
                    <S.ShopCart>
                        <S.TitleShopCart>
                            <h1>Carrinho de compras</h1>
                            <FaTimes onClick={() => setShowCart(!sidebar)} />
                        </S.TitleShopCart>

                        <S.TitleProducts>
                            <h1>PRODUTO</h1>
                            <h1>SUBTOTAL</h1>
                        </S.TitleProducts>

                        <S.ListProducts>
                            {productsOnCart.map(item => (
                                <li key={item.id}>
                                    <img src={item.image} alt={item.title} />
                                    <div className="boxInfoCart">
                                        <h1>{item.title}</h1>
                                        <div className="quantity">
                                            <button type="button">-</button>
                                            <input type="text" value="1" />
                                            <button type="button">+</button>
                                        </div>
                                    </div>
                                    <span>R${item.price}</span>
                                    <FaTrash onClick={() => deleteProduct(item.id)} />
                                </li>
                            ))}
                        </S.ListProducts>

                        {hasProductOnCart && (
                            <S.Total>
                                <h2>Total (sem frete):</h2>
                                <p>0</p>
                            </S.Total>)}

                        {hasProductOnCart === false && (
                            <p>Não há produtos no carrinho.</p>
                        )}

                    </S.ShopCart>
                </S.Modal>)}

        </>
    )
}