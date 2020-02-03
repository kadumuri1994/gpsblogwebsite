import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import MenuDropDownComponent from '../../menudropdown/menudropdown-container/MenuDropDownComponent';

const sections = [
    { nav: 'Home', route: 'home' },
    { nav: 'Technology', route: 'technology' },
    { nav: 'CAD 9.x', route: 'cad9.x' },
    { nav: 'CAD 10', route: 'cad10' },
    { nav: 'XALT', route: 'xalt' }
];

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export const NavBar = (props) => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Button size="small">Subscribe</Button>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        HxGN
                    </Typography>
                    {/* <IconButton>
                        {<SearchIcon />}
                    </IconButton> */}

                    {props.userData.name && props.userData.email ? 
                        <MenuDropDownComponent {...props}/> :
                        <Button onClick={() => history.push('/authenticate')} variant="outlined" size="small">Sign In</Button>}
                    {/* <Button onClick={() => history.push('/authenticate')} variant="outlined" size="small">
                        Sign In</Button> */}

                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.nav}
                            variant="body2"
                            onClick={() => section.route === "home" ? history.push("/" + section.route) : history.push("/blogs/" + section.route)}
                            className={classes.toolbarLink}
                        >
                            {section.nav}
                        </Link>
                    ))}
                </Toolbar>
            </Container>
        </React.Fragment >
    );
}
