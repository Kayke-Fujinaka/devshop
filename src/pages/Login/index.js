import React, { useRef } from 'react';
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";
import firebase from "../../services/firebase";

import * as S from "./styles";

export default function Login() {

    const history = useHistory();
    const inputEmail = useRef();
    const inputPassword = useRef();

    async function login() {
        const email = inputEmail.current.value;
        const password = inputPassword.current.value;
    
        try {
          const user = await firebase.auth().signInWithEmailAndPassword( email, password);
          localStorage.setItem("user", JSON.stringify(email))
          history.push("/");
          return;
        } catch {
          toast.error("Email ou senha inválida!", {
            autoClose: 1000,
            pauseOnHover: false,
          });
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

                <S.ContainerForm>
                    <div>
                        <div className='divLabelInput'>
                            <label>
                                Email Adress
                                <input
                                    ref={inputEmail}
                                    type="email"
                                    placeholder='youremail@email.com'
                                    required
                                />
                            </label>
                        </div>
                        <div className='divLabelInput'>
                            <label>
                                Password
                                <input
                                    ref={inputPassword}
                                    type="password"
                                    required
                                />
                                {" "}
                            </label>
                        </div>
                        <S.ForgotPassword>
                            <a href='/reset'>Forgot password?</a>
                        </S.ForgotPassword>
                        <S.DivButton>
                            <button onClick={login}>Sing in</button>
                        </S.DivButton>
                        <p>Don't have an account? <a href='/register'>Register</a></p>
                    </div>
                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}