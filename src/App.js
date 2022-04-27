import MainRoutes from './routes/routes';
import React from 'react';
import GlobalStyle from './styles/global'
import { ApiProvider } from './contexts/apiContext'
import AuthProvider from './contexts/auth'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import 'react-toastify/dist/ReactToastify.min.css';

const initialOptions = {
  "client-id": "AQbHJbBidFnxX9hCsdz4TQP0FQ17DSXVl76d6SuTY12_0Rrw1lq9DDKEgD9jDWTod5a7PxgsavoKhXjH",
  currency: "BRL",
  intent: "capture"
}


function App() {
  return (
    <>
      <ApiProvider>
        <AuthProvider>
          <PayPalScriptProvider options={initialOptions}>
            <ToastContainer />
            <Router>
              <MainRoutes />
              <ToastContainer />
            </Router>
            <GlobalStyle />
            </PayPalScriptProvider>
        </AuthProvider>
      </ApiProvider>
    </>
  )
}

export default App;
