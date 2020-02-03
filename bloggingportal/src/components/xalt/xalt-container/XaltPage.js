import React, { useEffect } from "react";
import { XaltBlogs } from "../xalt-presentation/XaltBlogs";
import { connect } from "react-redux";
import { loadXaltBlogs } from "../../../redux/actions/blogActions";

function XaltPage(props) {
  useEffect(() => {
    props.loadXaltBlogs().catch(err => {
      alert("failed loading xalt blogs");
    });
  }, []);

  return <XaltBlogs xaltBlogs={props.xaltBlogs} />;
}

function mapStateToProps(state, ownProps) {
  return {
    xaltBlogs: state.xaltBlogsData,
    userData: state.userData
  };
}

const mapDispatchToProps = {
  loadXaltBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(XaltPage);
