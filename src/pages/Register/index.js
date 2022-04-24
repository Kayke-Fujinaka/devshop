import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from "react-router-dom";

import { AuthContext } from '../../contexts/auth'

import Swal from "sweetalert2";
import firebase from "../../services/firebase"

import * as yup from "yup";


import * as S from "./styles";

const schema = yup
    .object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup
            .string()
            .email("Digite um email válido")
            .required("O email é obrigatório"),
        password: yup
            .string()
            .min(6, "A senha deve ter pelo menos 6 dígitos")
            .required("A senha é obrigatória"),
        confirmPassword: yup
            .string()
            .required("A Confirmação de Senha é obrigatória")
            .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
    })
    .required();

export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signUp, loadingAuth } = useContext(AuthContext)

    function formSubmit(e) {
        e.preventDefault();

        if (name !== '' && email !== ''  && password !== '') {
            signUp(email, name, password)
            history.push('/')
        }
    }

    const history = useHistory();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

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
                    <form onSubmit={formSubmit}>
                        <div className='divLabelInput'>

                            <label>
                                Name Complete
                                <input
                                    className={`input ${errors.name ? "error" : ""}`}
                                    type="text"
                                    placeholder='Your Name'
                                    {...register("name", { required: true })}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <span>{errors.name?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Email Adress
                                <input
                                    className={`input ${errors.email ? "error" : ""}`}
                                    type="email"
                                    placeholder='youremail@email.com'
                                    {...register("email", { required: true })}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <span>{errors.email?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Password
                                <input
                                    className={`input ${errors.password  ? "error" : ""}`}
                                    type="password"
                                    {...register("password", { required: true })}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <span>{errors.password?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Confirm Password
                                <input
                                    className={`input ${errors.confirmPassword  ? "error" : ""}`}
                                    type="password"
                                    {...register("confirmPassword", { required: true })}
                                />
                                {errors.confirmPassword && (<span>{errors.confirmPassword?.message}</span>)}
                            </label>

                        </div>
                        <S.DivButton>
                            <button type="submit">Register</button>
                        </S.DivButton>
                        <p>Already have an account? <a href='/login'>Sing in</a></p>
                    </form>

                </S.ContainerForm>

            </S.ContainerMain>

        </>
    )
}