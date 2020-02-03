import React from "react";
import Container from "@material-ui/core/Container";
import TabPanelComponent from "../../common/TabPanel";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

export const UserBlogs = props => {
  const classes = useStyles();

  const savedBlogs = props.userBlogs.filter(blog => blog.status === "saved");
  const pendingReviewBlogs = props.userBlogs.filter(
    blog => blog.status === "pendingReview"
  );
  const approvedBlogs = props.userBlogs.filter(
    blog => blog.status === "approved"
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid
            container
            spacing={5}
            className={classes.mainGrid}
            justify="center"
          >
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" gutterBottom>
                Your Blogs
              </Typography>
              <Divider />
              <TabPanelComponent
                savedBlogs={savedBlogs}
                pendingReviewBlogs={pendingReviewBlogs}
                approvedBlogs={approvedBlogs}
              />
            </Grid>
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));
