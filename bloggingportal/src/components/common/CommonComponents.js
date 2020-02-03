import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import {useHistory} from 'react-router-dom';

export const Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export const FooterComponent = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Container>
        </footer>
    );
}

export const CardComponent = (props) => {

    let history = useHistory();
    const classes = useStyles();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (<React.Fragment>
        {props.blogs.map(blog => (
            <Grid item key={blog._id} onClick = {() => history.push("/blogs/" + blog.category + "/" + blog._id)}>
                <CardActionArea component="a" >
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {blog.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {blog.category} - {blog.lastActiveAt}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {blog.headerContent}
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        ))
        }
    </React.Fragment>
    );
}

export const MainFeaturedPost = (props) => {
    const classes = useStyles();
    {/* Main featured post */ }
    return (<Paper className={classes.mainFeaturedPost}>
        {/* Increase the priority of the hero background image */}
        {
            <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
            />
        }
        <div className={classes.overlay} />
        <Grid container>
            <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Title of a longer featured blog post
           </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                        Multiple lines of text that form the lede, informing new readers quickly and
             efficiently about what&apos;s most interesting in this post&apos;s contents.
           </Typography>
                    <Link variant="subtitle1" href="#">
                        Continue reading…
           </Link>
                </div>
            </Grid>
        </Grid>
    </Paper>);

    {/* End main featured post */ }
}

export const SubFeaturedPosts = (props) => {
    const classes = useStyles();
    {/* Sub featured posts */ }
    return (<Grid container spacing={4}>
        {props.featuredPosts.map(post => (
            <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
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
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        ))}
    </Grid>);

    {/* End sub featured posts */ }
}

export const About = (props) => {
    const classes = useStyles();
    return (<React.Fragment>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
                About
              </Typography>
            <Typography>
                {props.aboutContent}
            </Typography>
        </Paper>
    </React.Fragment>);
}

export const Archives = (props) => {
    const classes = useStyles();
    return (<React.Fragment>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            Archives
        </Typography>
        {props.archives.map(archive => (
            <Link display="block" variant="body1" href="#" key={archive}>
                {archive}
            </Link>
        ))}
    </React.Fragment>);
}

export const SocialMedia = (props) => {
    const classes = useStyles();
    return (<React.Fragment>
        <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
            Social
        </Typography>
        {props.social.map(network => (
            <Link display="block" variant="body1" href="#" key={network}>
                {network}
            </Link>
        ))}
    </React.Fragment>);
}

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
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
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
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
}));
