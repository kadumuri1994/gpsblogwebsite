import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'html-react-parser';

export const Blog = (props) => {
    const classes = useStyles();
    if (props.blogDetails) {
        return (<React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Grid container spacing={5} className={classes.mainGrid} justify="center" >
                        <Grid item md={12} lg={8}>
                            <Typography component="h2" variant="h3" color="inherit" gutterBottom>
                                {props.blogDetails.title}
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                                {props.blogDetails.headerContent}
                            </Typography>
                            {parse(props.blogDetails.mainContent)}
                        </Grid>
                    </Grid>
                </main>
            </Container>
        </React.Fragment>);
    }
    else {
        return (<React.Fragment>Loading...</React.Fragment>);
    }
}

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));