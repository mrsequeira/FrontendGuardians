import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

    // <div>
    //       < Login />
    //     </div>
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



class login extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '',password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
  console.log(event.target.name)
  this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
  console.log(this.state);
  event.preventDefault();

  return fetch('https://guardianshackatum.herokuapp.com/api/v1/login', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password
    }) 
  }).then((response) => response.json())
    .then((responseJson) => {

      console.log(responseJson.auth_token) // aqui vem o verdadeiro 
      localStorage.setItem('Authorization', 'Bearer ' +  responseJson.auth_token)

      return responseJson.success;
    })

    .catch((error) => {
      console.error(error);
    });

  }

  render(){
      const { classes, theme } = this.props;

      return(
    
      <main className={classes.main}>
        <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
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

              <Button  type="submit"fullWidth variant="contained" color="primary" className={classes.submit} >
                Sign in
              </Button>

            </form>
          </Paper>
          

          <Paper>
            <a href="/register  ">
             <Typography variant="h8" component="h5" href="/register">
                New here? Create an account.
             </Typography>
            </a>
          </Paper>
          
      </main>
      )
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(login);