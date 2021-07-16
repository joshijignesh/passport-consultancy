import React, { useState, Fragment } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import CachedIcon from "@material-ui/icons/Cached";
import EditIcon from "@material-ui/icons/Edit";
import AssignmentIcon from "@material-ui/icons/Assignment";
import HelpIcon from "@material-ui/icons/Help";
import PaymentIcon from "@material-ui/icons/Payment";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import DesktopMenu from "./DesktopMenu/DesktopMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

import logoWhite from "../../../imgs/passport-consultancy-white.svg";
import {
    primaryColor,
    redAcentColor,
    whiteColor
} from "../../constants/Colors";

const navItems = [
    {
        path: "/track",
        lable: "Track",
        icon: SearchIcon
    },
    {
        path: "/fees",
        lable: "Fees",
        icon: PaymentIcon
    },
    {
        path: "/faqs",
        lable: "FAQ's",
        icon: HelpIcon
    },
    {
        path: "/documents",
        lable: "Required Documents",
        icon: AssignmentIcon
    },
    {
        path: "/modify_application",
        lable: "Modify Application",
        icon: EditIcon
    },
    {
        path: "/procedure",
        lable: "Procedure",
        icon: CachedIcon
    },
    {
        path: "/",
        lable: "Apply Now",
        icon: FlightTakeoffIcon
    }
];

const useStyle = makeStyles(theme => {
    return {
        menuButton: {
            display: "none",
            [theme.breakpoints.down("sm")]: {
                display: "inline-flex"
            }
        },
        mobileLogo: {
            display: "none",
            [theme.breakpoints.down("sm")]: {
                display: "block",
                flexGrow: 1
            },
            [theme.breakpoints.down("xs")]: {
                textAlign: "center"
            }
        },
        toolBar: {
            backgroundColor: primaryColor,
            justifyContent: "space-between",
            paddingTop: "20px",
            paddingBottom: "20px",
            width: "100%",
            margin: "auto"
        },
        navInfo: {
            width: "300px",
            textAlign: "center"
        },
        desktopAppbar: {
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        },
        fontWhite: {
            color: whiteColor
        },
        headingRedTitle: {
            color: redAcentColor,
            fontWeight: 800
        }
    };
});

const navigation = props => {
    const classes = useStyle();
    const [state, setState] = useState({
        isDrawerOpen: false
    });

    const toggleDrawer = () => {
        setState(prevState => ({
            isDrawerOpen: !prevState.isDrawerOpen
        }));
    };

    return (
        <Fragment className={classes.fragmentView}>
            <AppBar
                position="static"
                color="inherit"
                className={classes.desktopAppbar}
            >
                <Toolbar className={classes.toolBar}>
                    <Grid container justify="space-between" spacing={2}>
                        <Grid item sm={4} />
                        <Grid item sm={12} className={classes.navInfo}>
                            <img
                                src={logoWhite}
                                alt=""
                                style={{ width: "200px" }}
                            />

                            <Typography
                                variant="h4"
                                className={classes.headingRedTitle} >
                                ऑनलाइन पासपोर्ट पंजीकरण
                            </Typography>

                            <Typography
                                variant="h5"
                                className={classes.fontWhite}
                            >
                                Online Passport Application
                            </Typography>
                            <Typography className={classes.fontWhite}>
                                (Private Consultancy Service Provider)
                            </Typography>
                        </Grid>
                        <Grid item sm={4} className={classes.navInfo} />
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box boxShadow={4}>
                <AppBar
                    elevation={0}
                    position="static"
                    style={{ padding: "0.1rem" }}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            onClick={toggleDrawer}
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box className={classes.mobileLogo}>
                            <img
                                src={logoWhite}
                                alt=""
                                style={{ width: "130px" }}
                            />
                        </Box>
                        <DesktopMenu navItems={[...navItems]} />
                        <MobileMenu
                            navItems={[...navItems]}
                            show={state.isDrawerOpen}
                            toggleDrawer={toggleDrawer}
                        />
                    </Toolbar>
                </AppBar>
            </Box>
        </Fragment>
    );
};

export default navigation;
