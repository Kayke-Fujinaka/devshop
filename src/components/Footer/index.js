import React from 'react';
import * as S from './style';
import { FaInstagram, FaCreditCard, FaTruck, FaWhatsapp, FaPhoneAlt, FaPaperPlane, FaConnectdevelop } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <S.Container>

        <S.ServicesFooter>
          <S.Service>
            <FaTruck />
            <S.TextService>
              <h1>Serviço de Entrega</h1>
              <p>Entregamos em todo país.</p>
            </S.TextService>
          </S.Service>

          <S.Service>
            <FaCreditCard />
            <S.TextService>
              <h1>Pagamento  facilitado</h1>
              <p>Cartões de crédito ou PIX.</p>
            </S.TextService>
          </S.Service>

          <S.Service>
            <FaWhatsapp />
            <S.TextService>
              <h1>Compre pelo Whatsapp</h1>
              <p>Estamos sempre prontos para te atender!</p>
            </S.TextService>
          </S.Service>
        </S.ServicesFooter>

        <S.MainFooter>
          <S.MFBox>
            <S.TitleMainFooter>Navegação</S.TitleMainFooter>
            <ul>
              <li><a href="https://www.linkedin.com/in/jguilhermesl/">Linkedin do João Guilherme</a></li>
              <li><a href="https://www.linkedin.com/in/kayke-fujinaka/"></a>Linkedin do Kayke</li>
            </ul>
          </S.MFBox>
          <S.MFBox>
            <S.TitleMainFooter>Contato</S.TitleMainFooter>
            <div className="textCel"><FaCreditCard /> (99) 99145 331</div>
            <div className="text@"><FaPaperPlane /> devshop@gmail.com</div>
          </S.MFBox>
          <S.MFBox>
            <S.TitleMainFooter>Redes sociais</S.TitleMainFooter>
            <div className="iconInstaFooter"><FaInstagram /> </div>
            <div className="inputEmailFooter">
              <input placeholder="E-mail" type="email" />
              <div className="iconInputEmailFooter">
                <FaPaperPlane />
              </div>
            </div>
          </S.MFBox>
        </S.MainFooter>

        <S.BottomFooter>
          <div className="createdBy">
            <span><FaConnectdevelop /> Desenvolvido por <strong>DevsClub</strong></span>
          </div>
          <p>COPYRIGHT © DevShop - 2022. Todos os direitos reservados. </p>
        </S.BottomFooter>
      </S.Container>
    </>
  )
}