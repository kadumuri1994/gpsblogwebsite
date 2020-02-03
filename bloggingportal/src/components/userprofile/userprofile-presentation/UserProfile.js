import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

export const UserProfile = (props) => {
    return (<React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
            <main>
                <div>
                    User Name: {props.user.name}
                    Email: {props.user.email}
                </div>              
            </main>
        </Container>
    </React.Fragment>);
}