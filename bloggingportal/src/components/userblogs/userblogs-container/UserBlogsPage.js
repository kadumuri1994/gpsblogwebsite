import React, { useEffect } from "react";
import { UserBlogs } from "../userblogs-presentation/UserBlogs";
import { connect } from "react-redux";
import { loadUserBlogs } from "../../../redux/actions/userBlogActions";

function UserBlogsPage(props) {
  useEffect(() => {
    props
      .loadUserBlogs(props.userData.token, props.userData.verifyOptions, props.userData.email)
      .catch(err => console.log("error loading user blogs", err));
  }, []);

  return <UserBlogs userBlogs={props.userBlogsData} />;
}

function mapStateToProps(state, ownProps) {
  return {
    userBlogsData: state.userBlogsData,
    userData: state.userData
  };
}

const mapDispatchToProps = {
  loadUserBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(UserBlogsPage);
