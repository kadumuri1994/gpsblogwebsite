import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SignInPrompt(props) {
    const [open, setOpen] = useState(false);
    let history = useHistory();

    const handleSignIn = () => {
        setOpen(false);
        history.push('./redirect');
    };

    const handleGoBack = () => {
        setOpen(false);
        history.goBack();
    };

    useEffect(() => {
        setOpen(true);
    }, [])

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleGoBack}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">Sign in</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are not logged in to display your {props} information. Do you wish to signin?
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleGoBack} color="primary">
                        No, go back
                    </Button>
                    <Button onClick={handleSignIn} color="primary" autoFocus>
                        Yes, sign me in!
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}