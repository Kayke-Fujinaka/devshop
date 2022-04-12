import React from 'react';
import * as S from "./styles";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Login(){
    return(
        <>
        <Header />

        <S.ContainerMain>

            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <a href='#'>My account</a>
                <span>/</span>
                <p>Login</p>
            </S.Breadcrumb>

            <S.ContainerForm>
                <div>
                    <div className='divLabelInput'>
                        <label>
                            Email Adress
                            <input type="email" placeholder='youremail@email.com'/>
                        </label>
                    </div>
                    <div className='divLabelInput'>
                        <label>
                            Password
                            <input type="password" />
                        </label>
                    </div>
                    <S.ForgotPassword>
                        <a>Forgot password?</a>
                    </S.ForgotPassword>
                    <S.DivButton>
                        <button>Sing in</button>
                    </S.DivButton>
                    <p>Don't have an account? <a href='/register'>Register</a></p>
                </div>
            </S.ContainerForm>

        </S.ContainerMain>

        <Footer />
        </>
    )
}