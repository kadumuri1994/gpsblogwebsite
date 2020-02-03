import React from 'react';
import { FooterComponent, MainFeaturedPost, SubFeaturedPosts, CardComponent, About, SocialMedia, Archives } from '../../common/CommonComponents';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

export const Blogs = ({ blogs }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost />
          <SubFeaturedPosts featuredPosts={featuredPosts} />
          <Grid container spacing={5} className={classes.mainGrid} >
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Recent articles
              </Typography>
              <Divider />
              <CardComponent blogs = {blogs}/>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <About aboutContent={aboutContent} />
              <Archives archives={archives} />
              <SocialMedia social={social} />
            </Grid>
            {/* End sidebar */}
          </Grid>
          <FooterComponent />
        </main>
      </Container>
    </React.Fragment>
  );
}

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
    'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];

const archives = [
  'December 2019',
  'November 2019',
  'October 2019',
  'September 2019',
];

const aboutContent = "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit " +
  "amet fermentum. Aenean lacinia bibendum nulla sed consectetur.";

const social = ['YouTube', 'Twitter', 'Facebook'];

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

export default Blogs;