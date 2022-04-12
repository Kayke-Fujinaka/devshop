import MainRoutes from './routes/routes';
import React from 'react';
import GlobalStyle from './styles/global'
import { ApiProvider } from './contexts/apiContext'
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      <ApiProvider>
        <Router>
          <MainRoutes />
        </Router>
        <GlobalStyle />
      </ApiProvider>
    </>
  )
}

export default App;
