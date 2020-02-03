import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { CardComponent } from '../../common/CommonComponents';
import Container from '@material-ui/core/Container';

export const XaltBlogs = (props) => {
    const classes = useStyles();
    return (<React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
            <main>
                <Grid container className={classes.mainGrid} justify="center" >
                    {/* Main content */}
                    <Grid item xs={12} md={8}>
                        <Typography variant="h6" gutterBottom>
                            Recent articles
                </Typography>
                        <Divider />
                        <CardComponent blogs={props.xaltBlogs} />
                    </Grid>
                </Grid>
            </main>
        </Container>
    </React.Fragment>)
}

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));