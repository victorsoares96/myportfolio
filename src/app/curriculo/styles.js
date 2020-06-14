import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

export const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    width: '793.7007874px',
    height: '1122.519685px',
    fontFamily: 'Open Sans',
    backgroundColor: '#f5f5f5',
    justifyContent: 'left',
    display: 'flex'
  },
  sideBar: {
    position: 'absolute',
    width: '20vw',
    height: 'inherit',
    backgroundColor: purple[700],
    justifyContent: 'center',
  },
  name: {
    fontWeight: 600,
    color: '#f5f5f5'
  },
  label: {
    fontWeight: 600,
    color: '#333'
  },
  work: {
    fontWeight: 600,
    color: '#f5f5f5',
    fontStyle: 'italic'
  },
  avatar: {
    width: '192px',
    height: '192px'
  },
  socialMedias: {
    position: 'absolute',
    bottom: 5
  },
  socialMediasText: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 600,
    marginLeft: '5px'
  },
  aboutText: {
    fontSize: 12,
    color: '#f5f5f5',
    fontWeight: 600,
    margin: '10px',
    textAlign: 'left',
    fontStyle: 'italic'
  },
  icon: {
    margin: '5px',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));