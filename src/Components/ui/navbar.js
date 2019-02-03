import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import classNames from 'classnames';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },

});


const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

const drawerWidth = 240;

class navbar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        open: false,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;
        const { auth, anchorEl } = this.state;
        const { open } = this.state;


       return( 
            <div className={classes.root}>

             <AppBar position="static"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                })}>
                  <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}>
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                      Guardians of the Hackhathon
                    </Typography>

                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                          paper: classes.drawerPaper,
                        }}
                      > 
                      {/* theme.direction === 'ltr' ? */}
                        <div className={classes.drawerHeader}>
                          <IconButton onClick={this.handleDrawerClose}>
                            { <ChevronLeftIcon />}
                          </IconButton>
                        </div>
                        <Divider />
                        <List component="nav">
                            <a href="/teams">
                              <ListItem  button >
                                  <ListItemIcon>  <InboxIcon /> </ListItemIcon>
                                  <ListItemText primary="Teams"  />
                              </ListItem>
                            </a>
                            <a href="/themes">
                              <ListItem  button >
                                  <ListItemIcon>  <InboxIcon /> </ListItemIcon>
                                  <ListItemText primary="Themes"  />
                              </ListItem>
                            </a>
                            <a href="/participants">
                              <ListItem  button >
                                  <ListItemIcon>  <InboxIcon /> </ListItemIcon>
                                  <ListItemText primary="Participant"  />
                              </ListItem>
                            </a>
                            <a href="/participants">
                              <ListItem  button >
                                  <ListItemIcon>  <InboxIcon /> </ListItemIcon>
                                  <ListItemText primary="Participant"  />
                              </ListItem>
                            </a>

                          {/* {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItem>
                          ))} */}
                        </List>
                        <Divider />

                      </Drawer>


                    <FormControlLabel
                    control={
                      <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                    }
                    label={auth ? 'Login' : 'Logout'}
                    />
                    <Button href="/login" variant="contained" color="primary" className={classes.button}>
                          Login
                    </Button>
                    {!auth && (
                      <div>
                       
                        <IconButton
                          aria-owns={open ? 'menu-appbar' : undefined}
                          aria-haspopup="true"
                          onClick={this.handleMenu}
                          color="inherit"
                        >
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={open}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                          <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        </Menu>
                      </div>
                    )}
                  </Toolbar>
                </AppBar>
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                  {sections.map(section => (
                    <Typography color="inherit" noWrap key={section}>
                      {section}
                    </Typography>
                  ))}
            </Toolbar>

        </div>
        )
    }
}
//export default footer;
export default withStyles(styles)(navbar);