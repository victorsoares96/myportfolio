import { 
  Typography, 
  Button, 
  LinearProgress, 
  CircularProgress,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledTypo = withStyles((theme) => ({
  root: {
    textAlign: 'left',
    fontWeight: 600
  },
}))(Typography);

export const StyledButton = withStyles((theme) => ({
  root: {
    fontWeight: 600,
    color: 'inherit',
    flex: 1
  },
}))(Button);

export const CustomLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
}))(LinearProgress);

export const AvatarProgress = withStyles((theme) => ({
  root: {
    width: '50px',
    height: '150px'
  },
  circle: {
    strokeLinecap: 'round',
  },
}))(CircularProgress);