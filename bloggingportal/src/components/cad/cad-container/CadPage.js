import React, { useEffect } from "react";
import { CadBlogs } from "../cad-presentation/CadBlogs";
import { connect } from "react-redux";
import { loadCadBlogs } from "../../../redux/actions/blogActions";

function CadPage(props) {
  useEffect(() => {
    props.loadCadBlogs().catch(err => {
      alert("failed loading cad blogs");
    });
  }, []);

  return <CadBlogs cadBlogs={props.cadBlogs} />;
}

function mapStateToProps(state, ownProps) {
  return {
    cadBlogs: state.cadBlogsData,
    userData: state.userData
  };
}

// function mapDispatchToProps(dispatch) {
//     return {
//         blogActions: bindActionCreators(blogActions, dispatch)
//     }
// }

//if we declare mapDispatchToProps as an object instead, each property will automatically be bound to dispatch.

const mapDispatchToProps = {
  loadCadBlogs
};

export default connect(mapStateToProps, mapDispatchToProps)(CadPage);
