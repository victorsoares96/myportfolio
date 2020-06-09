import 'fontsource-roboto';

import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import Header from './app/shared/header';
import Footer from './app/shared/footer';
import Home from './app/home';

import usePersistedState from './utils/usePersistedState';

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', 'light');
  const palletType = theme == 'light' ? 'dark' : 'light'
  const onChangeTheme = () => {
    setTheme(theme == 'light' ? 'dark' : 'light');
  }
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: purple,
      secondary: green,
      basic: '#f5f5f5',
    },
    status: {
      danger: 'orange',
    },
  });
  return (
    <div>
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </head>
      <ThemeProvider theme={darkTheme}>
      <Header onChangeTheme={onChangeTheme} isDark={theme}/>
      <Home/>
      <Footer/>
      </ThemeProvider>
    </div>
  );
}