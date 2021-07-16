import React from 'react'; 
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

import NavigationItem from '../NavigationItem/NavigationItem';
import logo from '../../../../imgs/passport-consultancy.svg';
import logoWhite from "../../../../imgs/passport-consultancy-white.svg";
import { primaryColor } from '../../../constants/Colors';

const useStyle = makeStyles({
    list: {
        width: 250
    } 
});
const mobileMenu = (props) => {
    const classes = useStyle();
    return (
        <SwipeableDrawer 
            anchor="left" 
            open={props.show} 
            onOpen={ props.toggleDrawer } 
            onClose={ props.toggleDrawer }>
            <Box style={{padding: '40px 20px', backgroundColor: primaryColor}}>
                <img src={logoWhite}/> 
            </Box>  
            <Divider/>
            <List className={ classes.list }>
                {props.navItems.reverse().map((navItem, index) => (
                    <NavigationItem 
                        key={index}
                        path={navItem.path}
                        lable={navItem.lable} 
                        type='listItems' 
                        icon= {navItem.icon}
                    /> 
                ))}
            </List>
           

        </SwipeableDrawer>
    );
}

export default mobileMenu;