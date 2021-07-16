import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import Button from "@material-ui/core/Button";
import { whiteColor } from "../../../constants/Colors";

const navigationItem = props => {
    let navItem = "";
    if (props.type === "button") {
        navItem = (
            <Button
                style={{color:whiteColor}}
                to={props.path}
                component={React.forwardRef((props, ref) => (
                    <NavLink innerRef={ref} {...props} />
                ))}
            >
                {props.lable}
            </Button>
        );
    }

    if (props.type === "listItems") {
        navItem = (
            <ListItem
                button
                to={props.path}
                component={React.forwardRef((props, ref) => (
                    <NavLink innerRef={ref} {...props} />
                ))}
            >
                <ListItemIcon>
                    <Fragment>{props.icon ? <props.icon /> : ""}</Fragment>
                </ListItemIcon>
                <ListItemText>{props.lable}</ListItemText>
            </ListItem>
        );
    }

    return navItem;
};

export default navigationItem;
