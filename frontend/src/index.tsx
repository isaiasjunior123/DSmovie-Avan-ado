import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

/*este  codigo foi responsavel por criar o metodo root , cria o lugar especial pra renderizar o meu aplicativo */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/* este codido coloca o componente principal App , dentro dele  e o React.StrictMode é com um ajudante de erros e pratica ruins  */
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


