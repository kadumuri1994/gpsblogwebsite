import React, { useState, useEffect } from "react";
import { Blogs } from "../home-presentation/Blogs";
import { connect } from "react-redux";
import { loadAllBlogs } from "../../../redux/actions/blogActions";
import { useHistory } from "react-router-dom";

function HomePage(props) {
  let history = useHistory();

  useEffect(() => {
    props.loadAllBlogs().catch(err => {
      alert("loading blogs failed", err);
    });
  }, []);

  return <Blogs blogs={props.allBlogs} />;
}

function mapStateToProps(state, ownProps) {
  return {
    allBlogs: state.allBlogsData,
    userData: state.userData
  };
}

const mapDispatchToProps = {
  loadAllBlogs
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
