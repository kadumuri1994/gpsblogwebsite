import React, { useEffect } from "react";
import { OnCallBlogs } from "../oncall-presentation/OnCallBlogs";
import { connect } from "react-redux";
import { loadOnCallBlogs } from "../../../redux/actions/blogActions";

function OnCallPage(props) {
  useEffect(() => {
    props.loadOnCallBlogs().catch(err => {
      alert("failed getting oncall blogs");
    });
  }, []);

  return <OnCallBlogs onCallBlogs={props.onCallBlogs} />;
}

function mapStateToProps(state, ownProps) {
  return {
    onCallBlogs: state.onCallBlogsData,
    userData: state.userData
  };
}

const mapDispatchToProps = {
  loadOnCallBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(OnCallPage);
