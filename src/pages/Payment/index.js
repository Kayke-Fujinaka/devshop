import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import * as S from "./styles";

const schema = yup
    .object({
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
    })
    .required();

export default function Payment() {
    const [productsOnCart, setProductsOnCart] = useState([])

    useEffect(() => {
        const listaProducts = localStorage.getItem('products')
        setProductsOnCart(JSON.parse(listaProducts) || [])
    }, [productsOnCart])

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(userData) {
        console.log(userData);
    }

    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Entrega</p>
                <span>/</span>
                <p>Pagamento</p>
            </S.Breadcrumb>

            <S.ContainerMain>
                <S.ContainerLeft onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <S.Form>
                            <h3>Pagamento apenas com PayPal</h3>
                            <div>
                                <img src='https://www.larissamuller.com.br/wp-content/uploads/2020/06/paypal.png' />
                            </div>
                            <S.DivInputCard>
                                <div className='card'>
                                <input maxlength="12" placeholder='Número do cartão'/>
                                <input maxlength="3" className='securityCode' type="password" placeholder='Security Code'/>
                                </div>
                                <select>
                                    <option>Visa</option>
                                    <option>MasterCard</option>
                                    <option>Elo</option>
                                </select>
                                <input type="month" placeholder='Data de Vencimento'/>
                                
                            </S.DivInputCard>
                            <input id='checkInfo' type="checkbox" />
                            <label for='checkInfo' className='labelCheck'>Eu quero receber informações importantes, ofertas especiais e descontos do PayPal.</label>
                            <br />
                            <input id='checkSave' type="checkbox" />
                            <label for='checkSave' className='labelCheck'>Salve o número do meu cartão de crédito para a próxima compra.</label>
                        </S.Form>
                    </div>
                    <S.DivButton>
                        <button>Continuar</button>
                    </S.DivButton>
                </S.ContainerLeft>
                <S.ContainerRight>
                    {productsOnCart.map(item => (
                        <S.Product>
                            <img src={item.image} alt={item.title} />
                            <p>{item.title} x {item.quantity}</p>
                            <span>R${item.price}</span>
                        </S.Product>
                    ))}
                    <S.Total>
                        {productsOnCart.length === 0 ? (
                            <p>Sem produtos no carrinho.</p>
                        ) : (
                            <>
                                <span>Total:</span>
                                <span>R$ 234,90</span>
                            </>)}
                    </S.Total>
                </S.ContainerRight>
            </S.ContainerMain>

        </>)
}