<h1 align="center">👕 DEVSHOP • E-COMMERCE</h1>

<img src="./src/assets/dev.gif" alt="A gif introducing the project">

> The project is an E-Commerce called DevShop that simulates a sales site which has men's and women's clothing, jewelry and electronics.

Check out application: https://shopdev.netlify.app/ <br>

## :page_facing_up: Explanation

The project is an E-Commerce called DevShop that simulates a sales site which has men's and women's clothing, jewelry and electronics. An &nbsp;[API](https://fakestoreapi.com/docs) with &nbsp;[Axios](https://axios-http.com/docs/intro) was consumed in it, which has some products from each category above to represent a true store.

The &nbsp;[API](https://fakestoreapi.com/docs) used is the Fake Store API which is easily found on Google through a search or on&nbsp;[GitHub](https://github.com/keikaavousi/ fake-store-api) from the creator which is properly explained. It has a few options:

- Products: There are 20 products available. It gives the ability to view all products, view a specific product, limit product results, sort results according to what you choose, add new products, update product values ​​and delete some products.

- Categories: There are 4 categories in total, namely: men's clothing, women's clothing, electronics and jewelery. It gives the ability to filter a specific category or view all.

The website visitor will be initially directed to the Home page, which has some sections, namely: blocks with all categories, banners in a Carousel, 8 products with the option to see all of them and the partners section, which were some people who followed the entire website design.

By accessing one of the four categories, namely: Male, Female, Electronics and Jewelry. The person will be directed to a page that only presents products from that category, that is, in the electronics category there will not be clothes, only if you add clothes that fit with something electronic.

When clicking on one of the products, the person will have the option to select how many products will be added and a button to add the product(s) to the cart.

When sending a product to the cart (It is located at the top right of the Header) you can reduce the quantity of products, change the store you purchased from, see more products or complete the purchase. If you click on finalize the purchase, you will be directed to the delivery page that simulates where the product will be delivered. When filling in the fields, you have the option to continue and finally arrive at the payment page, but it is only illustrative and there is no way to actually pay, so you will finally be directed to the donation page.

**Components:**

The Header has some menus for navigation, namely: Products (Men's, Women's, Jewelry and Electronics), Our Policy and Support Us. In addition to a search field, registration/login option and the cart to store the products that will be purchased.

- Products: A dropdown menu appears that has the 4 categories with the option of clicking on one of them and being directed to the desired one.

- Our Policy: It is a page that presents some store policies, but only the subjects of each policy were placed and the paragraphs are with Lorem.

- Support us: It is a page where the visitor can support the project with R$ 1.00. Our project or payment page is fictitious and has no profit-making intent.

- Search Field: The person can search for any of the products in this field.

- Registration/Login: The visitor can create an account on the site which will be stored in [Firebase](https://firebase.google.com/docs) and will have the option to log in afterwards. The account is created with the name, email, password and password confirmation that has a field validation system used [Yup](https://react-hook-form.com/get-started#SchemaValidation), that is , you need to enter a valid email, enter a name that does not have numbers, a password of at least 6 digits and the password confirmation must be the same in both fields.

Loading was created to streamline the waiting time for consuming the &nbsp;[API](https://fakestoreapi.com/docs) to locate a specific item and display it on the Inspect page.

The Product Card has been componentised, as it has a total of 20 products. Thus, it facilitated in reducing more codes. It presents the image of the product, the name of the product, the price, quantity of available units, the evaluation and an option to inspect the product, which will then be directed to the inspection page.

The stars are a means of evaluating the products, so it was reused on some pages.

The shopping cart stores the items to be purchased. To store, you need to choose the desired item and click add to cart. In addition, you have the option to increase and decrease the number of products purchased, remove the item from the cart, change store options in different regions, see more products and finally complete the purchase and be directed to the delivery page.

WhatsApp is for illustrative purposes only. However, if you would like to get in touch with one of us:

Kayke Alves Fujinaka: [LinkedIn](https://www.linkedin.com/in/kayke-fujinaka/), [GitHub](https://github.com/Kayke-Fujinaka), +55 11 96187-7936 < br>
João Guilherme Lima: [LinkedIn](https://www.linkedin.com/in/jguilhermesl/), [GitHub](https://github.com/jguilhermesl), +55 81 9169-3706

Footer has 3 sections.
- The first shows some characteristics of the store, such as: delivery service throughout the country, means of payment and a purchase option via WhatsApp;

- The second offers some means of contact with the creators of the project, with the options: LinkedIn, Email and Instagram. The Input that has a placeholder written "Email" is just illustrative;

- The last one presents the rights reserved to the creators [Kayke Fujinaka](https://www.linkedin.com/in/kayke-fujinaka/) and [João Guilherme](https://www.linkedin.com/in/jguilhermesl /).

## 📁 Pages

The website has a total of 16 pages, which are:

- Home: The main page of the store that displays various products.
- Login: Page to log in the user to the website.
- Registration: Page to register the user on the website.
- Reset Password: Page to reset the password.
- Products: The page shows all the products.
- Search: The page displays the products according to the field entered in the search bar.
- Men: The page shows men's products.
- Women: The page shows women's products.
- Jewelry: The page shows jewelry products.
- Electronics: The page shows electronic products.
- Our Policy: Presents the (fictional) policies of the store.
- Support Us: A page that has the option to contribute to us via PayPal.
- Inspect Item: It shows a specific item to evaluate or purchase.
- Delivery: Page to inform where the purchased product will be shipped to.
- Payment: Page to complete the purchase.
- Error 404: The 404 error page that occurs when accessing a nonexistent route.

## :dart: Steps ##

Version 1.0: :heavy_check_mark:

:heavy_check_mark: Creation of Routes;\
:heavy_check_mark: Application of Global Styles;\
:heavy_check_mark: Header and Footer Components;\
:heavy_check_mark: API Consumption and API Context;\
:heavy_check_mark: Login and Registration Pages;\
:heavy_check_mark: Password Reset Page;\
:heavy_check_mark: Responsiveness on Login, Registration and Password Reset;\
:heavy_check_mark: Applying Products on Home Page;\
:heavy_check_mark: Men, Women, Jewelery and Eletronics Pages;\
:heavy_check_mark: Consuming API by Category;\
:heavy_check_mark: Inspect and Our Policy Pages;\
:heavy_check_mark: Shopping Cart on Header;\
:heavy_check_mark: Responsive Footer;\
:heavy_check_mark: Search and Error 404 Pages;\
:heavy_check_mark: Input Validation with Yup;\
:heavy_check_mark: Fixed Header;\
:heavy_check_mark: Adding Reviews to Products;\
:heavy_check_mark: Products Added to Cart;\
:heavy_check_mark: Shop Options on Cart;\
:heavy_check_mark: Delivery Page;\
:heavy_check_mark: Payment Page;\
:heavy_check_mark: Product Carousel on Home Page;\
:heavy_check_mark: Fixed Cart Error when Empty;\
:heavy_check_mark: Banner Carousel on Home Page;\
:heavy_check_mark: Partners Section on Home Page;\
:heavy_check_mark: Authentication with Firebase;\
:heavy_check_mark: Donate Page;\
:heavy_check_mark: Project Video;\
:heavy_check_mark: Finished 1.0;

Version 2.0: Coming soon...

## :rocket: Tecnologias ##

The following tools were used in this project:

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

## :closed_book: Requirements ##

Before starting, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed on your computer.

## :checkered_flag: Getting Started ##

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

If you clone the project, you will need to create your own Firebase project. After that, put your Firebase token in the .env file. I'll leave an example below:

```bash
  REACT_APP_API_KEY="AIzah63dg9emUtIKmMCvrkSJLw-GZIl0a8qmEs",
  REACT_APP_AUTH_DOMAIN="example-8a13f.firebaseapp.com",
  REACT_APP_PROJECT_ID="example-8a13f",
  REACT_APP_STORAGE_BUCKET="example-88a13f.appspot.com",
  REACT_APP_MESSASING_SENDER_ID="65936679370",
  REACT_APP_APP_ID="1:659905779370:web:16c3ac97ef413h13ga2d3",
  REACT_APP_MEASUREMENT_ID: "G-BL1CGU42B6"
```

After that, pass it to the file where Firebase is located. For example:

```bash
  const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
```

## 🤝 Contributors

We want to thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="160px;" alt="Kayke Fujinaka's photo on GitHub"/><br>
        <sub>
          <b>Kayke Fujinaka</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/88175581?v=4" width="160px;" alt="João Guilherme Lima's photo on GitHub"/><br>
          <sub>
            <b>João Guilherme</b>
          </sub>
        </a>
      </td>
  </tr>
</table>

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

&#xa0;

<a href="#top">Back to top</a>

