import React from 'react';
import {NavBar} from '../navbar-presentation/NavBar';
import {connect} from 'react-redux';

function NavBarComponent(props){
    return <NavBar {...props} />;
}

function mapStateToProps(state, ownProps) {
    return {
        userData : state.userData
    };
}

export default connect(mapStateToProps)(NavBarComponent);