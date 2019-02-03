import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Markdown from '../home/Markdown';
import post1 from '../home/blog-post1.md';
import post2 from './blog-post2.md';
import post3 from './blog-post3.md';

// http://kinlane.github.io/hack-weekends-guide/  

const drawerWidth = 240;

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
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
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

const featuredPosts = [
  {
    title: 'Prizes',
    date: 'Nov 12',
    description: '1st Prize - $500.00   2nd Prize - $250.00 3rd Prize - $100.00 ',
  },
  {
    title: 'When',
    date: 'Nov 11',
    description:
      'Provide a detailed description of schedule. 01/01/2012 through 01/02/2012 xxx'
  },
  {
    title: 'Hackathon Location',
    date: 'Nov 11',
    description:
      '123 There Street  San Francisco, CA 94110 INSERT GOOGLE MAPS API HERE!!!!',
      
  },
  {
    title: 'Sponsors',
    date: 'Nov 11',
    description:
      'Instituto Baldes de Massa(cash cash cash) Instituto Baldes de Massa(cash cash cash)',
      
  },
];

const posts = [post1, post2, post3];

const archives = [
  'March 2020',
  'February 2020',
  'January 2020',
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
  'August 2019',
  'July 2019',
  'June 2019',
  'May 2019',
  'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

class Blog extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };


  render() {
    const { classes, theme } = this.props;
   

    return (
      <div className={classes.root}>
 
                <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Say Whaat?
                  </Typography>

                  <Typography component="h4" variant="h6" color="inherit" gutterBottom>
                    [Fork and Deploy for Your Hackathon]
                  </Typography>

                  <Typography variant="h5" color="inherit" paragraph>
                  Provide a detailed, but concise description of your event. Generally 250-750 characters is sufficient to explain the theme and goals of the hackathon.
                  Your description should get them excited about the event, and not put them to sleep.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        Continue reading...
                      </Typography>
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                      title="Image title"
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={40} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                From the Firehose
              </Typography>
              <Divider />
              {posts.map(post => (
                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                  {post}
                </Markdown>
              ))}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                  amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                </Typography>
              </Paper>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archives
              </Typography>
              {archives.map(archive => (
                <Typography key={archive}>{archive}</Typography>
              ))}
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Social
              </Typography>
              {social.map(network => (
                <Typography key={network}>{network}</Typography>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </div>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
