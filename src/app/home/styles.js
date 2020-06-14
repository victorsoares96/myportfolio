import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'left',
    fontWeight: 900
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    color: 'inherit'
  },
  media: {
    height: 340,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  avatar: {
    width: '224px',
    height: '224px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginTop: 20,
    marginBottom: 20
  },
}));