# DEVSHOP • E-COMMERCE

<img src="./src/assets/dev.gif" alt="Um gif apresentando o projeto">

>  O projeto é um E-Commerce chamado DevShop que simula um site de vendas a qual possui roupas masculinas, femininas, joalherias e eletrônicos.

Confira a aplicação: https:// <br>
O vídeo apresentando o projeto: https://
## :page_facing_up: Explicação

O projeto é um E-Commerce chamado DevShop que simula um site de vendas a qual possui roupas masculinas, femininas, joalherias e eletrônicos. Nele foi consumido uma &nbsp;[API](https://fakestoreapi.com/docs) com &nbsp;[Axios](https://axios-http.com/docs/intro), a qual possui alguns produtos de cada categoria acima para representar uma loja verídica.

A &nbsp;[API](https://fakestoreapi.com/docs) utilizada é a Fake Store API que é facilmente encontrada no Google através de uma pesquisa ou no&nbsp;[GitHub](https://github.com/keikaavousi/fake-store-api) do criador que está devidamente explicado. Ela possui algumas opções:

- Produtos: São 20 produtos disponíveis. Ela dá a disponibilidade de visualizar todos os produtos, visualizar um produto em específico, limitar resultado dos produtos, classificar os resultados conforme o que escolher, adicionar novos produtos, atualizar valores dos produtos e deletar algum produto.

- Categorias: Sâo 4 categorias no total, sendo elas: men's clothing, women's clothing, electronics e jewelery. Ela dá a disponibilidade de filtrar uma categoria em específico ou visualizar todas.

O visitante do site vai ser direcionado inicialmente para a página Inicial possui algumas seções, sendo elas: blocos com todas as categorias, banners em um Carousel, 8 produtos com a opção de ver todos e a seção parceiros que foram algumas pessoas que acompanharam todo o projeto do site.

Ao acessar uma das quatro categorias, sendo: Masculino, Feminino, Eletrônicos e Joalheria. A pessoa será direcionada para uma página que apresenta produtos apenas daquela categoria, ou seja, na categoria de eletrônicos não vai ter uma roupa, só se adicionar uma roupa que se encaixe com algo eletrônico.

Ao clicar em um dos produtos a pessoa terá a opção de selecionar quantos produtos serão adicionados e um botão para adicionar o(s) produto(s) no carrinho. 

Ao enviar um produto no carrinho (Fica na parte superior direita do Header) você pode diminuir a quantidade dos produtos, mudar a loja a qual comprou, ver mais produtos ou finalizar a compra. Caso, clique em finalizar a compra será direcionado para a página de entrega que simula onde será entregado o produto. Ao preencher os campos tem a opção de continuar e finalmente chegar na página de pagamento, porém é apenas ilustrativa e não tem como pagar realmente, então por fim será direcionado para a página de doação.

**Componentes:**

O Header possui alguns menus para navegação, sendo: Produtos (Masculinos, Femininos, Joalheria e Eletrônicos), Nossa Política e Apoie-nos. Além de um campo de busca, opção de registro/login e o carrinho para armazenar os produtos que serão comprados.

- Produtos: Aparece um menu dropdown que tem as 4 categorias com a opção de clicar em uma delas e ser direcionado para que foi desejada.

- Nossa Política: É uma página que apresenta algumas políticas da loja, porém só os assuntos de cada política foram colocado e os parágrafos estão com o Lorem.

- Apoie-nos: É uma página que o visitante pode apoiar o projeto com R$ 1,00. O nosso projeto ou a página de pagamento é fictícia e não tem a mínima intenção de fins lucrativos. 

- Campo de Busca: A pessoa pode pesquisar algum dos produtos nesse campo.

- Registro/Login: O visitante tem como criar uma conta no site a qual será armazenada no [Firebase](https://firebase.google.com/docs) e terá a opção de logar depois. A conta é criada com o nome, email, senha e confirmação de senha que possui um sistema de validação dos campos utilizado o [Yup](https://react-hook-form.com/get-started#SchemaValidation), ou seja, necessita colocar um email válido, colocar um nome que não possua números, senha de no mínimo 6 dígitos e a confirmação de senha deve ser igual em ambos campos.
<br>

O Loading foi criado para deixar mais fluído o tempo de espera do consumo da &nbsp;[API](https://fakestoreapi.com/docs) para localizar um item em específico e apresentar na página de Inspecionar.

O Cartão do Produto foi componentizado, pois possui no total de 20 produtos. Assim, facilitou em diminuir mais códigos. Ele apresenta a imagem do produto, o nome do produto, o preço, quantidade de unidades disponíveis, a avaliação e uma opção de inspecionar o produto que assim será direcionado para página de inspeção.

As estrelas que são um meio de avaliar os produtos, assim foi reutilizada em algumas páginas.

O carrinho de compras armazena os itens que serão comprados. Para armazenar precisa escolher o item desejado e clicar em adicionar no carrinho. Além disso, tem a opção de aumentar e diminuir a quantidade de produtos comprados, tem como remover o item do carrinho, mudar opções de lojas em diferentes regiões, ver mais produtos e por fim finalizar a compra e ser direcionado para página de entrega.

O WhatsApp é apenas ilustrativo. Porém, caso queria entrar em contato com algum de nós:

Kayke Alves Fujinaka: [LinkedIn](https://www.linkedin.com/in/kayke-fujinaka/), [GitHub](https://github.com/Kayke-Fujinaka), +55 11 96187-7936 <br> 
João Guilherme Lima: [LinkedIn](https://www.linkedin.com/in/jguilhermesl/), [GitHub](https://github.com/jguilhermesl), +55 81 9169-3706

O Footer tem 3 seções. 
- A primeira mostra algumas características da loja, como, por exemplo: serviço de entrega em todo país, os meios de pagamento e uma opção de compra por WhatsApp;

- A segunda oferece alguns meios de contato com os criadores do projeto, sendo as opções: LinkedIn, Email e Instagram. O Input que possui um placeholder escrito "Email" é apenas ilustrativo;

- A última apresenta os direitos reservados aos criadores [Kayke Fujinaka](https://www.linkedin.com/in/kayke-fujinaka/) e [João Guilherme](https://www.linkedin.com/in/jguilhermesl/).

## 📁 Páginas

O site tem no total 16 páginas, sendo elas:

- **Inicial:** Página principal da loja que aprensenta diversos produtos.
- **Login:** Página para logar o usuário no site.
- **Registro:** Página para registrar o usuário no site.
- **Redefinir Senha:** Página para redefinir a senha.
- **Produtos:** A página mostra todos os produtos.
- **Pesquisa:** A página mostra os produtos de acordo com o campo digitado na barra de pesquisas.
- **Masculino:** A página mostra os produtos masculinos.
- **Feminino:** A página mostra os produtos femininos.
- **Joalheria:** A página mostra os produtos de joalheria.
- **Eletrônicos:** A página mostra os produtos eletrônicos.
- **Nossa política:** Apresenta as políticas (fictícias) da loja.
- **Apoie-nos:** Uma página que tem a opção de contribuir conosco por via do Paypal.
- **Inspecionar Item:** Ela mostra um item em específico para avaliar ou comprar.
- **Entrega:** Página para informar em que local vai ser enviado o produto comprado.
- **Pagamento:** Página para efetuar a compra.
- **Error 404:** A página de Error 404 que acontece ao acessar uma rota inexistente.
## :dart: Etapas ##

:heavy_check_mark: Criação da Rotas;\
:heavy_check_mark: Aplicação dos Estilos Globais;\
:heavy_check_mark: Componente Header e Footer;\
:heavy_check_mark: Consumo da API e Contexto da API;\
:heavy_check_mark: Página de Login e Registro;\
:heavy_check_mark: Página de Redefinição de Senha;\
:heavy_check_mark: Responsividade no Login, Registro e Redefinição;\
:heavy_check_mark: Aplicando os Produtos na Página Home;\
:heavy_check_mark: Páginas Men, Women, Jewelery e Eletronics;\
:heavy_check_mark: Consumindo API pela categoria;\
:heavy_check_mark: Página de Inspect e Our Policy;\
:heavy_check_mark: Carrinho de Compra no Header;\
:heavy_check_mark: Responsivo Footer;\
:heavy_check_mark: Página Search e Error 404;\
:heavy_check_mark: Validação dos Input com Yup;\
:heavy_check_mark: Header Fixo;\
:heavy_check_mark: Adicionando as avaliações nos produtos;\
:heavy_check_mark: Produtos adicionados no carrinho;\
:heavy_check_mark: Opções de loja no carrinho;\
:heavy_check_mark: Página de Entrega;\
:heavy_check_mark: Página de Pagamento;\
:heavy_check_mark: Carousel dos produtos na Home;\
:heavy_check_mark: Arrumando Erro do Carrinho quando estava vazio;\
:heavy_check_mark: Carousel com Banners na Home;\
:heavy_check_mark: Seção de parceiros na HOme;\
:heavy_check_mark: Autenticação com Firebase;\
:heavy_check_mark: Página de Donate;\
:x: Vídeo do projeto;\
:x: Finalizado;

## :rocket: Tecnologias ##

No projeto foram utilizadas as seguintes tecnologias:

- [ReactJs](https://pt-br.reactjs.org/)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [Styled-Components](https://styled-components.com/docs)
- [React Hook Form](https://react-hook-form.com)
- [Yup](https://react-hook-form.com/get-started#SchemaValidation)
- [Axios](https://axios-http.com/docs/intro)
- [React icons](https://react-icons.github.io/react-icons/)
- [React-Multi-Carousel](https://www.npmjs.com/package/react-multi-carousel)
- [SweetAlert2](https://sweetalert2.github.io)
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- [Firebase](https://firebase.google.com/docs)

## :closed_book: Requisitos ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/Kayke-Fujinaka/E-commerce
# Access
$ cd e-commerce
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn start or npm start 
# The server will initialize in the <http://localhost:3000>
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="160px;" alt="Foto do Kayke Fujinaka no GitHub"/><br>
        <sub>
          <b>Kayke Fujinaka</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFv8Nrh37K9gg/profile-displayphoto-shrink_200_200/0/1647100224699?e=1654732800&v=beta&t=MGX0G64IGlAgrtvpm_oc9SZokRGECo9dttgx6laF48g" width="160px;" alt="Foto do João Guilherme Lima"/><br>
          <sub>
            <b>João Guilherme</b>
          </sub>
        </a>
      </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.

&#xa0;

<a href="#top">Volte para o topo</a>
