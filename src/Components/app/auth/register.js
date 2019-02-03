import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';

////////////////////////////////////////////////////////
// Snackbar component and styles
////////////////////////////////////////////////////////
const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

////////////////////////////////////////////////////////
// Registration component and styles
////////////////////////////////////////////////////////

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

const variantIcon = {
  success: CheckCircleIcon,
}

class register extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '',password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // check data inserted on text box
  handleChange(event) {
    console.log(event.target.name)
    this.setState({ [event.target.name]: event.target.value });
  }
  // Close snackbar component
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  // Submit login form
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();

    return fetch('https://guardianshackatum.herokuapp.com/api/v1/register', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then((response) =>  {
      // Controll the response status and change the type of alert
        if(response.status !== 422){
            console.log("SUCCESSS")
            return response.json();     
        }else if(response.status === 422){
            
            console.log("SOMETHING WENT WRONG")
            this.setState({ open: true});
            return response.json();
        }
        return response.json();
      })  
      // Output for uer, sending informative
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson.email){
          this.setState({ message: responseJson.email });
          return responseJson.success;
        } else {
          this.setState({ message: responseJson.sucess });
          return responseJson.success;
        }
      
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
    const { classes, theme } = this.props;
    // pass message to snackbar component
    const message = (
      <span 
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: this.state.message }} />
    );
      return(
          <main className={classes.main}>
        <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <how_to_reg />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create an account
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input id="email" type="text" value={this.state.value} onChange={this.handleChange}  name="email" autoComplete="email" autoFocus />
              </FormControl>

              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="text" value={this.state.value} onChange={this.handleChange} id="password" autoComplete="current-password" />
              </FormControl>

              <br></br>
              <a href="/forgot_password">
                <Typography component="p" href="/forgot_password">
                  Forgot password?.
                </Typography>
              </a>
              
              <Button  type="submit"fullWidth variant="contained" color="primary" className={classes.submit} >
                Create my account!
              </Button>
            
            </form>
          </Paper>
          
          <Grid container direction="row" justify="center" alignItems="center" >
            <a href="/login" >
              <Paper className={classes.root} elevation={1}>
                <Typography variant="h6" component="h3">
                  Already have an acount? Login me!
                </Typography>
              </Paper>
            </a>
          </Grid>

          <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message={message}
          />
        </Snackbar>

      </main>
      )
  }
}

export default withStyles(styles)(register);