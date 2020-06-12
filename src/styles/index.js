import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledTypo = withStyles((theme) => ({
  root: {
    textAlign: 'left',
    fontWeight: 600
  },
}))(Typography);