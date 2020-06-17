import "fontsource-open-sans";

import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './app/shared/header';
import Footer from './app/shared/footer';
import Home from './app/home';

import usePersistedState from './utils/usePersistedState';
import { green, red } from "@material-ui/core/colors";

export default function App() {
  /* Armazena o tipo do tema no local storage do navegador */
  const [theme, setTheme] = usePersistedState('theme', 'light');
  const palletType = theme === 'light' ? 'dark' : 'light'
  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  /* Configurações do tema */
  const theme_ = createMuiTheme({
    palette: {
      type: palletType,
      primary: red,
      secondary: green,
      basic: '#f5f5f5',
    },
    status: {
      danger: 'orange',
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    },
  });
  return (
    <React.Fragment>
      <ThemeProvider theme={theme_}>
        <Header onChangeTheme={onChangeTheme} isDark={theme}/>
        <Home/>
        <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
}