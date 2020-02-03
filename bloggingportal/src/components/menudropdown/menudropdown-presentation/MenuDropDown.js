import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import { deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
    purpleAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepPurple[500],
    },
});

export default function MenuDropDown(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();

    let history = useHistory();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let arr = props.userData.name.split(" ");
    let avatarName = arr[0].substring(0,1) + arr[1].substring(0,1); 

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {props.userData.name}
                <Avatar className={classes.purpleAvatar}>{avatarName}</Avatar>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => history.push('/profile')}>Profile</MenuItem>
                <MenuItem onClick={() => history.push('/createblog')}>Create blog</MenuItem>
                <MenuItem onClick={() => history.push('/manageblogs')}>Manage blogs</MenuItem>
                <MenuItem onClick={() => history.push('/myblogs')}>My blogs</MenuItem>
                <MenuItem onClick={handleClose}>Activity</MenuItem>
                <MenuItem onClick={() => history.push('/logout')}>Logout</MenuItem>
            </Menu>
        </div>
    );
}