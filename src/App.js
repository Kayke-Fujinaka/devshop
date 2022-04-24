import MainRoutes from './routes/routes';
import React from 'react';
import GlobalStyle from './styles/global'
import { ApiProvider } from './contexts/apiContext'
import AuthProvider from './contexts/auth'
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';


function App() {
  return (
    <>
      <ApiProvider>
        <AuthProvider>
          <ToastContainer />
          <Router>
            <MainRoutes />
            <ToastContainer />
          </Router>
          <GlobalStyle />
        </AuthProvider>
      </ApiProvider>
    </>
  )
}

export default App;
