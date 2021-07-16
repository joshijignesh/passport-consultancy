import React from 'react'; 

import {  makeStyles, Box } from '@material-ui/core'; 

import NavigationItem from '../NavigationItem/NavigationItem';

const useStyle = makeStyles(theme => ({ 
    desktopMenu: {
        display:'flex', 
        flexGrow:1, 
        justifyContent: 'space-evenly',
        maxWidth: '75rem',
        margin: 'auto',
        [ theme.breakpoints.down('sm')] : {
            display: 'none'
        }
    }  
}));

const desktopMenu = (props) => {
    const classes = useStyle();
    return (
        <Box className={ classes.desktopMenu }>
            {props.navItems.reverse().map((navItem, index) => (
                <NavigationItem 
                    key={index} 
                    path={ navItem.path } 
                    type="button" 
                    lable={ navItem.lable }/> 
            ))} 
        </Box>
    );
}

export default desktopMenu;