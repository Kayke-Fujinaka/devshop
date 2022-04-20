
import { createGlobalStyle } from 'styled-components'
import  devices  from './devices';
import  theme  from './theme';

const GlobalStyle = createGlobalStyle`


*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition:background ease 0.2s;
  font-family: ${theme.fonts.secondary};
}

@-ms-viewport {
     width: device-width;
   }

h1{
  margin: 0;
}

textarea,button,input{
  background-color: transparent;
  border:none;
}

a {
      font-weight: ${theme.fonts.weight.medium};
      text-decoration: none;
    }

button {
   box-shadow: none;
     cursor: pointer;
     outline: none;
     padding: 0;
     -webkit-box-shadow: none;
   }
 
 button  {
   transition: all ease 0.4s;
   &:hover{
     ${theme.configs.hover}
   }
 }

ul {
  list-style: none;
}

::-webkit-scrollbar{
  width: 0.4rem;
  height: 0.4rem;
}
*::-webkit-scrollbar {
      width: 0.4rem;
      @media ${devices.tablet}{
        width: 0.2rem;
      }
    }

.container {
  margin-top: 110px;
}
`;

export default GlobalStyle;
