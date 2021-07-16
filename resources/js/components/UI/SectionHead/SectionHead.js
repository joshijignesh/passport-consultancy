import React, { Fragment } from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const sectionHead = (props) => {
    const theme = useTheme();
    return (
        <Fragment>
            <Typography align="center" variant="h5">{ props.children }</Typography>
            <Typography align="center">
                    <Box style={{ width:"200px",backgroundColor: theme.palette.primary.main, height:"2px", display: "inline-block" }} component="span"></Box>
            </Typography>
        </Fragment> 
    );
} 

export default sectionHead;