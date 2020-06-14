import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CurriculoPDF } from './app/curriculo';

ReactDOM.render(
  <React.StrictMode>
    {/*<CurriculoPDF/>*/}
    {<App/>}
  </React.StrictMode>,
  document.getElementById('root')
);