import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";

import { AuthContext } from '../../contexts/auth'

import * as S from "./styles";

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { logIn, loadingAuth } = useContext(AuthContext)

    const history = useHistory();

    function formSubmit(e) {
        e.preventDefault();

        if(email !== '' && password !== '') {
            logIn(email, password)
            history.push('/')
        }
    }

    return (
        <>

            <S.ContainerMain>

                <S.Breadcrumb>
                    <a href='/'>Início</a>
                    <span>/</span>
                    <a href='#'>Minha conta</a>
                    <span>/</span>
                    <p>Login</p>
                </S.Breadcrumb>

                <S.ContainerForm onSubmit={formSubmit}>
                    <div>

                        <div className='divLabelInput'>
                            <label>
                                Endereço de Email
                                <input
                                    type="email"
                                    placeholder='youremail@email.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label>
                        </div>

                        <div className='divLabelInput'>
                            <label>
                                Senha
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {" "}
                            </label>
                        </div>

                        <S.ForgotPassword>
                            <a href='/reset'>Esqueceu a senha?</a>
                        </S.ForgotPassword>

                        <S.ButtonLogin>
                            <button type="submit">Entrar</button>
                        </S.ButtonLogin>
                        <p>Não possui uma conta? <a href='/register'>Registre-se</a></p>
                        
                    </div>
                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}