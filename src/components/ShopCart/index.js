import React, { useState, useEffect, useCallback } from 'react';
import * as S from './style';
import { FaTimes, FaTrash, FaStore, FaAngleDown } from 'react-icons/fa'
import { toast } from 'react-toastify';


export default function ShopCart({ sidebar }) {
    const [showCart, setShowCart] = useState(sidebar)

    const [productsOnCart, setProductsOnCart] = useState([])
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(1);
    const [qtdItems, setQtdItems] = useState(0)

    useEffect(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
        console.log(productsOnCart)
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

    function removeQuantity() {
        if(quantity === 1) {
            setQuantity(1)
            alert('No mínimo 1 produto')
            return
        }

        setQuantity(quantity - 1)
    }

    function addQuantity() {
    
    }

    useEffect( () => {
        let totalPrice = 0;
        let qtd = 0;

        productsOnCart.forEach( (item, index) => {
            totalPrice += item.price * item.quantity
            qtd += item.quantity
        })
        setTotal(totalPrice.toFixed(2))
        setQtdItems(qtd)
    })



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
                                            <button type="button" onClick={removeQuantity}>-</button>
                                            <input type="text" value={item.quantity} />
                                            <button type="button" onClick={addQuantity}>+</button>
                                        </div>
                                    </div>
                                    <span>R${(item.price).toFixed(2)}</span>
                                    <FaTrash onClick={() => deleteProduct(item.id)} />
                                </li>
                            ))}
                        </S.ListProducts>

                        {productsOnCart.length > 0 ? (
                            <>
                                <S.OurShops>
                                    <p><FaStore /> Nossas lojas</p>
                                    <nav>
                                        <span>VER OPÇÕES <FaAngleDown /></span>
                                    </nav>

                                </S.OurShops>
                                <S.Total>
                                    <h2>Total (sem frete):</h2>
                                    <div>
                                        <h2>R$ {total}</h2>
                                        <p>Ou até 10x de R$ {(total / 10).toFixed(2)}</p>

                                    </div>
                                </S.Total>
                            </>) : (
                            <S.DontHasProduct>
                                <p>Não há produtos no carrinho.</p>
                            </S.DontHasProduct>
                        )}

                    </S.ShopCart>
                </S.Modal>)}

        </>
    )
}