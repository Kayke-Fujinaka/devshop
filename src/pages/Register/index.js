import React from 'react';
import * as S from "./styles";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Register() {
    return (
        <>

            <S.ContainerMain>

                <S.Breadcrumb>
                    <a href='/'>Home</a>
                    <span>/</span>
                    <a href='#'>My account</a>
                    <span>/</span>
                    <p>Register</p>
                </S.Breadcrumb>

                <S.ContainerForm>
                    <div>
                        <div className='divLabelInput'>
                            <label>
                                Name Complete
                                <input type="text" placeholder='Your Name' />
                            </label>
                        </div>
                        <div className='divLabelInput'>
                            <label>
                                Email Adress
                                <input type="email" placeholder='youremail@email.com' />
                            </label>
                        </div>
                        <div className='divLabelInput'>
                            <label>
                                Phone Number
                                <input type="text" placeholder='+55 (99) 99999-9999' />
                            </label>
                        </div>
                        <div className='divLabelInput'>
                            <label>
                                Password
                                <input type="password" />
                            </label>
                        </div>
                        <div className='divLabelInput'>
                            <label>
                                Confirm Password
                                <input type="password" />
                            </label>
                        </div>
                        <S.DivButton>
                            <button>Register</button>
                        </S.DivButton>
                        <p>Already have an account? <a href='/login'>Sing in</a></p>
                    </div>
                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}