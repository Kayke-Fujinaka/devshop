import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import firebase from "../../services/firebase";

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
                    <a href='/'>Home</a>
                    <span>/</span>
                    <a href='#'>My account</a>
                    <span>/</span>
                    <p>Login</p>
                </S.Breadcrumb>

                <S.ContainerForm onSubmit={formSubmit}>
                    <div>
                        <div className='divLabelInput'>
                            <label>
                                Email Adress
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
                                Password
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
                            <a href='/reset'>Forgot password?</a>
                        </S.ForgotPassword>
                        <S.DivButton>
                            <button type="submit">Sign in</button>
                        </S.DivButton>
                        <p>Don't have an account? <a href='/register'>Register</a></p>
                    </div>
                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}