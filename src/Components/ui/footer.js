import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
  
const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    position: "fixed",
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
];

class footer extends React.Component {
    render() {
       const { classes, theme } = this.props;
       return( 
         <div >
            <Divider></Divider>
            <footer className={ (classes.footer, classes.layout)} >
                <Grid container spacing={32} justify="space-evenly">
                {footers.map(footer => (
                    <Grid item xs key={footer.title}>
                    <Typography variant="h6" color="textPrimary" gutterBottom>
                        {footer.title}
                    </Typography>
                    {footer.description.map(item => (
                        <Typography key={item} variant="subtitle1" color="textSecondary">
                        {item}
                        </Typography>
                    ))}
                    </Grid>
                ))}
                </Grid>
            </footer>

        </div>
        )
    }
}
//export default footer;
export default withStyles(styles)(footer);