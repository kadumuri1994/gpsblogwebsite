import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
}));

export default function BlogInputFields(props) {
    const classes = useStyles();

    return (<React.Fragment>
        <FormControl variant="outlined" className={classes.formControl}>
            <TextField
                required
                id="outlined-basic"
                className={classes.textField}
                label="Title of your blog"
                margin="normal"
                variant="outlined"
                onChange={props.handleTitleChange}
                value ={props.blogInputs.title}
            />
            < TextField
                required
                id="outlined-basic"
                className={classes.textField}
                label="Sub-title of your blog"
                margin="normal"
                variant="outlined"
                onChange={props.handleSubTitleChange}
                value ={props.blogInputs.subtitle}
            />
        </FormControl>

        {/* <FormControl>
            <InputLabel htmlFor="blog-title">Title</InputLabel>
            <Input id="blog-title" aria-describedby="blog-title-helper-text" />
            <FormHelperText id="blog-title-helper-text">Give a title for your blog.</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="blog-sub-title">Sub-Title</InputLabel>
            <Input id="blog-sub-title" aria-describedby="blog-sub-title-helper-text" />
            <FormHelperText id="blog-sub-title-helper-text">Give a sub-title for your blog.</FormHelperText>
        </FormControl> */}
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="category-outlined-label">
                Category
                </InputLabel>
            <Select
                required
                id="category-select-outlined"
                onChange={props.handleCategoryChange}
                value= {props.blogInputs.category} >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={"cad10"}>CAD10</MenuItem>
                <MenuItem value={"cad9.x"}>CAD9.x</MenuItem>
                <MenuItem value={"technology"}>Technology</MenuItem>
                <MenuItem value={"xalt"}>XALT</MenuItem>
            </Select>
        </FormControl>

    </React.Fragment>
    );
}