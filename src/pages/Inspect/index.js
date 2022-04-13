import React, { useContext, useEffect, useState } from 'react';
import * as S from "./styles";

import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'

import { ApiContext } from '../../contexts/apiContext'

import { FiShoppingCart } from 'react-icons/fi'

export default function Inspect(props) {
    const history = useHistory();
    const { allProducts } = useContext(ApiContext);

    const id = props.match.params.id
    const index = parseInt(id) - 1

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)

    {/* useEffect( () => {
        async function loadProduct() {
            setLoading(true)
            const response = await api.get(`products/${idToNumber}`)

            if(response.data === null) {
                history.replace('/')
                return
            }

            setProduct(response.data)
            setLoading(false)
        }

        loadProduct();
    }, []) */}

    function addItemOnCart() {

        console.log('Oi')
        console.log(allProducts[index])

        const myList = localStorage.getItem('products');

        let savedProducts = JSON.parse(myList) || [];
        // Se tiver algum produto salvo com esse mesmo id precisa ignorar
        const hasProduct = savedProducts.some((savedProduct) => savedProduct.id === allProducts[index].id)

        if (hasProduct) {
            alert('Esse produto já está no carrinho.')
            return
            //Execução do código finaliza aqui.
        } 

        savedProducts.push(allProducts[index])
        localStorage.setItem('products', JSON.stringify(savedProducts));
        toast.success(`${allProducts[index].title} adicionado em 'Carrinho'!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <>
            <S.Breadcrumb>
                <Link to='/'>Home</Link>
                <span>/</span>
                <Link to="/products">Products</Link>
                <span>/</span>
                <p>{product.title}</p>
            </S.Breadcrumb>

            {loading && (
                <h1>Carregando...</h1>
            )}

            {loading === false && (
                <S.InspectItem>
                    <S.BoxLeft>
                        <img src={allProducts[index].image} />
                    </S.BoxLeft>
                    <S.BoxRight>
                        <S.TitleCompany>Dev Company</S.TitleCompany>
                        <h1>{allProducts[index].title}</h1>
                        <p>{allProducts[index].description}</p>
                        <span>R${allProducts[index].price}</span>
                        <S.Purchase>
                            <div className="quantity">
                                <button type="button">-</button>
                                <input type="text" value="1" />
                                <button type="button">+</button>
                            </div>
                            <button className="buttonPurchase" onClick={addItemOnCart}><FiShoppingCart /> Add to cart</button>
                        </S.Purchase>
                    </S.BoxRight>
                </S.InspectItem>)}
        </>
    )
}