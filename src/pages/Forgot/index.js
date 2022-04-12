import React from 'react';
import * as S from "./styles";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Forgot(){
    return(
        <>
        <Header />

        <S.ContainerMain>

            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <a href='#'>My account</a>
                <span>/</span>
                <p>Forgot Password</p>
            </S.Breadcrumb>

            <S.Information>
                <p>We will send you an email so you can change your password.</p>
            </S.Information>

            <S.ContainerForm>
                <div>
                    <div className='divLabelInput'>
                        <label>
                            Email Adress
                            <input type="email" placeholder='youremail@email.com'/>
                        </label>
                    </div>
                    <S.DivButton>
                        <button>Send email</button>
                    </S.DivButton>
                    <p>Back to <a href='/login'>Login</a></p>
                </div>
            </S.ContainerForm>

        </S.ContainerMain>

        <Footer />
        </>
    )
}