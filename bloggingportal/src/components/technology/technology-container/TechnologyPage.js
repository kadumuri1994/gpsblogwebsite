import React, { useEffect } from "react";
import { TechBlogs } from "../technology-presentation/TechBlogs";
import { connect } from "react-redux";
import { loadTechnologyBlogs } from "../../../redux/actions/blogActions";

function TechnologyPage(props) {
  useEffect(() => {
    props.loadTechnologyBlogs().catch(err => {
      console.log(err);
      alert("failed loading technology blogs");
    });
  }, []);

  return <TechBlogs techBlogs={props.techBlogs} />;
}

function mapStateToProps(state, ownProps) {
  return {
    techBlogs: state.techBlogsData,
    userData: state.userData
  };
}

const mapDispatchToProps = {
  loadTechnologyBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(TechnologyPage);
