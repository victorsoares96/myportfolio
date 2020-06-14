import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: purple,
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

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: purple,
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