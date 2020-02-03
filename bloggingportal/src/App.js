import React from "react";
import "./App.css";
import HomePage from "./components/home/home-container/HomePage";
import XaltPage from "./components/xalt/xalt-container/XaltPage";
import OnCallPage from "./components/oncall/oncall-container/OnCallPage";
import CadPage from "./components/cad/cad-container/CadPage";
import TechnologyPage from "./components/technology/technology-container/TechnologyPage";
import BlogPage from "./components/blog/blog-container/BlogPage";
import NavBarComponent from "./components/navbar/navbar-container/NavBarComponent";
import UserActivityPage from "./components/useractivity/useractivity-container/UserActivityPage";
import UserBlogsPage from "./components/userblogs/userblogs-container/UserBlogsPage";
import RedirectPage from "./components/redirect/RedirectPage";
import { Switch, Route, Redirect } from "react-router-dom";
import CreateBlogPage from "./components/createblog/createblog-container/CreateBlogPage";
import UserProfilePage from "./components/userprofile/userprofile-container/UserProfilePage";
import ManageBlogsPage from "./components/manageblogs/manageblogs-container/ManageBlogsPage";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "./redux/actions/userActions";

function App(props) {
  return (
    <div className="container-fluid">
      <NavBarComponent />
      <Switch>
        <Route
          path="/authenticate"
          component={() => {
            window.location.href = "http://localhost:3001/login";
            return null;
          }}
        />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/redirect">
          <RedirectPage />
        </Route>
        <Route
          exact
          path="/profile"
          component={() => {
            if (props.userData.token) {
              return <UserProfilePage />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route exact path="/createblog">
          <CreateBlogPage />
        </Route>
        <Route exact path="/manageblogs">
          <ManageBlogsPage />
        </Route>
        <Route
          exact
          path="/myblogs"
          component={() => {
            if (props.userData.token) {
              return <UserBlogsPage />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          exact
          path="/activity"
          component={() => {
            if (props.userData.token) {
              return <UserActivityPage />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route
          path="/logout"
          component={() => {
            if(localStorage.getItem("state")){
              localStorage.removeItem("state");
            }
            window.location.href = "http://localhost:3001/logout";
            return null;
          }}
        />

        <Route exact path="/blogs/technology">
          <TechnologyPage />
        </Route>
        <Route exact path="/blogs/cad10">
          <OnCallPage />
        </Route>
        <Route exact path="/blogs/cad9.x">
          <CadPage />
        </Route>
        <Route exact path="/blogs/xalt">
          <XaltPage />
        </Route>
        <Route exact path="/blogs/technology/:id">
          <BlogPage />
        </Route>
        <Route exact path="/blogs/cad10/:id">
          <BlogPage />
        </Route>
        <Route exact path="/blogs/cad9.x/:id">
          <BlogPage />
        </Route>
        <Route exact path="/blogs/xalt/:id">
          <BlogPage />
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    userData: state.userData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
