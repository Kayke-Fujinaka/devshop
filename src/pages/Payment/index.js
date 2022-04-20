import React, { useContext } from 'react';
import * as S from "./styles";

export default function Payment() {
    return (
        <>
            <S.Breadcrumb>
                <a href='/'>Home</a>
                <span>/</span>
                <p>Pagamento</p>
            </S.Breadcrumb>

            <div>
                <div>
                    <div>
                        <form>
                            <h3>DADOS DE CONTATO</h3>
                            <label>
                                <input type="text" placeholder="Email"/>
                            </label>
                            <input type="checkbox"/>
                            <label>Quero receber ofertas e novidades por email</label>
                        </form>
                    </div>
                    <div>
                        <h3>ENTREGA</h3>
                        <select>
                            <option>Brasil</option>
                        </select>
                        <input type="text" placeholder="CEP"/>
                    </div>
                    <div>
                        <button>Continuar</button>
                    </div>
                </div>
            </div>

            <S.ContainerMain>

            </S.ContainerMain>
        </> ) 
}