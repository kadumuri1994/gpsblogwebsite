import React from 'react';
import { UserProfile } from '../userprofile-presentation/UserProfile';
import { connect } from 'react-redux';
// import SignInPromptComponent from '../../signinprompt/signinprompt-container/SignInPromptComponent';

function UserProfilePage(props) {
    // return  props.user.name && props.user.email ? <UserProfile {...props} /> : <SignInPromptComponent page= "profile" /> ;
    return <UserProfile {...props} />;
}

function mapStateToProps(state, ownProps) {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps, null)(UserProfilePage);