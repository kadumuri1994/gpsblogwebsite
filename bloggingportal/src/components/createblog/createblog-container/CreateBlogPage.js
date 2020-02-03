import React, { useState } from "react";
import EditorComponent from "../createblog-presentation/EditorComponent";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import BlogInputFields from "../createblog-presentation/BlogInputFields";
import ButtonsComponent from "../createblog-presentation/ButtonsComponent";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { connect } from "react-redux";
import { createBlog, saveBlog } from "../../../api/blogApi";

function CreateBlogPage(props) {
  const classes = useStyles();
  const [blogInputs, setBlogInputs] = useState({
    title: "",
    subtitle: "",
    category: ""
  });
  const [state, setState] = useState({
    editorState: EditorState.createWithContent(
      ContentState.createFromText("Your content goes here")
    )
  });
  const [previewOpen, setPreviewOpen] = React.useState(false);

  const onHandleTitleChange = e => {
    setBlogInputs({ ...blogInputs, title: e.target.value });
  };

  const onHandleSubTitleChange = e => {
    setBlogInputs({ ...blogInputs, subtitle: e.target.value });
  };

  const onHandleCategoryChange = e => {
    setBlogInputs({ ...blogInputs, category: e.target.value });
  };

  const onEditorStateChange = editorState => {
    setState({
      editorState
    });
  };

  const onSave = () => {
    const contentState = state.editorState.getCurrentContent();
    const rawState = convertToRaw(contentState);

    const data = {
      title: blogInputs.title,
      headerContent: blogInputs.subtitle,
      category: blogInputs.category,
      owner: props.userData.name,
      email: props.userData.email,
      likes: 0,
      mainContent: rawState,
      lastActiveAt: new Date(),
      featuredBlog: false,
      status: "saved"
    };
    if (
      blogInputs.title.trim() &&
      blogInputs.subtitle.trim() &&
      blogInputs.category.trim() &&
      rawState
    ) {
      saveBlog(data, props.userData.token, props.userData.verifyOptions)
        .then(data => console.log(data)) // JSON-string from `response.json()` call
        .catch(err => console.log(err));
    }
  };

  const onHandlePreviewOpen = () => {
    setPreviewOpen(true);
  };

  const onHandlePreviewClose = () => {
    setPreviewOpen(false);
  };

  const onSubmitForReview = () => {
    const contentState = state.editorState.getCurrentContent();
    const rawState = convertToRaw(contentState);
    console.log(rawState);
    const data = {
      title: blogInputs.title,
      headerContent: blogInputs.subtitle,
      category: blogInputs.category,
      owner: props.userData.name,
      email: props.userData.email,
      likes: 0,
      mainContent: rawState,
      lastActiveAt: new Date(),
      featuredBlog: false,
      status: "pendingReview"
    };
    console.log(data);
    if (
      blogInputs.title.trim() &&
      blogInputs.subtitle.trim() &&
      blogInputs.category.trim() &&
      rawState
    ) {
      createBlog(data, props.userData.token, props.userData.verifyOptions);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Grid container className={classes.mainGrid} justify="center">
            <Grid item xs={12} md={8}>
              <h1>Write up</h1>
              <BlogInputFields
                blogInputs={blogInputs}
                handleTitleChange={onHandleTitleChange}
                handleSubTitleChange={onHandleSubTitleChange}
                handleCategoryChange={onHandleCategoryChange}
              />
              <EditorComponent
                state={state}
                onEditorStateChange={onEditorStateChange}
              />
              <ButtonsComponent
                save={onSave}
                handlePreviewOpen={onHandlePreviewOpen}
                submitForReview={onSubmitForReview}
                hanldePreviewOpen={onHandlePreviewOpen}
                handlePreviewClose={onHandlePreviewClose}
                previewOpen={previewOpen}
              />
            </Grid>
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3)
  }
}));

function mapStateToProps(state, ownProps) {
  return {
    userData: state.userData
  };
}

export default connect(mapStateToProps, null)(CreateBlogPage);
