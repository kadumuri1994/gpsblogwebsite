import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BlogPreviewModal from './BlogPreviewModal';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

function ButtonsComponent(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Button variant="contained" className={classes.button} onClick={props.save} >
                Save
            </Button>
            <Button variant="contained" className={classes.button} onClick={props.handlePreviewOpen} >
                Preview
            </Button>
            <Button variant="contained" className={classes.button} onClick={props.submitForReview} >
                Submit for review
            </Button>
            <BlogPreviewModal handlePreviewClose = {props.handlePreviewClose} previewOpen = {props.previewOpen}/>
        </React.Fragment>
    );
}

export default ButtonsComponent;