import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import firebase from "../../services/firebase"

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

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    console.log(watch("name"));

    function onSubmit(userData) {
        console.log(userData);
    }

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='divLabelInput'>

                            <label>
                                Name Complete
                                <input
                                    type="text"
                                    placeholder='Your Name'
                                    {...register("name", { required: true })}
                                />
                                {errors.name && <span>{errors.name?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Email Adress
                                <input
                                    type="email"
                                    placeholder='youremail@email.com'
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span>{errors.email?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Password
                                <input
                                    type="password"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span>{errors.password?.message}</span>}
                            </label>

                        </div>
                        <div className='divLabelInput'>

                            <label>
                                Confirm Password
                                <input
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