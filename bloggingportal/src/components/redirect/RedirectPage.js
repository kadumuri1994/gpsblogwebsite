import React, { useEffect } from "react";
import * as userActions from "../../redux/actions/userActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import * as JWT from "jwt-decode";

function RedirectPage(props) {
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    let queryObj = queryString.parse(location.search);
    if (queryObj["token"]) {
      let decodedToken = JWT(queryObj["token"]);
      props.actions.signIn({
        name: decodedToken["name"],
        email: decodedToken["email"],
        token: queryObj["token"],
        verifyOptions: {
          issuer: decodedToken.iss,
          subject: decodedToken.subject,
          audience: decodedToken.aud,
          expiresIn: decodedToken.exp
        }
      });
    }
    history.push("./home");
  }, []);

  return <React.Fragment>Redirecting. Please wait..</React.Fragment>;
}

// RedirectPage.props = {
//     actions: PropTypes.object.isRequired
// }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(RedirectPage);
