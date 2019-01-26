import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
const styles = {
  list: {
    width: 250,
  }
};

class SwipeableTemporaryDrawer extends React.Component {

  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
 styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  setlogout(){
    localStorage.setItem('Authorization', '')
  }
  render() {
    const { classes } = this.props;
    let token = localStorage.getItem('Authorization');
    const sideList = (
      <div className={classes.list}>
        <List>
            <ul>
                <li>
                     <a  className="menu-item" href="/">Home</a>
                </li>
                <li>
                     <a  className="menu-item" href="/teams">Teams</a>
                </li>
                <li>
                    <a  className="menu-item" href="/themes">Themes</a>
                </li>
                <li>
                    <a  className="menu-item" href="/prices">Pricies</a>
                </li>
                <li>
                    <a  className="menu-item" href="/participants">participants</a>
                </li>
                <li>
                    <a  className="menu-item" href="/mentors">mentors</a>
                </li>
                <li>
                    <a  className="menu-item" href="/register">Register</a>
                </li>
            </ul>

        </List>
      </div>
    );
    
if (token=='') {
    console.log(token);
    return(
        
        
        <div className='NvBar'>
        <AppBar >
          <Toolbar>
          <div>
            <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            </div>
            <div>
            <Button color="inherit"  href="/login" >Login</Button>
            </div>
          </Toolbar>
        </AppBar>
      
        <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
            onOpen={this.toggleDrawer('left', true)}
            >
            <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
        </SwipeableDrawer>
        </div>
    )
}
else{
    console.log(token);
    return (
       
      <div>
        <div className='NvBar'>
        <AppBar >
            <Toolbar>
            <div>
            <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            </div>
            <div>
            <Button color="inherit"  onClick={this.setlogout} href="/" >Logout</Button>
            </div>
            </Toolbar>
        </AppBar>
        </div>
        
        
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
     
    );
    }
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
