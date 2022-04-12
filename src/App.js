import MainRoutes from './routes/routes';
import React from 'react';
import GlobalStyle from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';

function App(){
  return(
    <>
    <Router>
      <MainRoutes />
    </Router>
    <GlobalStyle />
    </>
  )
}

export default App;
