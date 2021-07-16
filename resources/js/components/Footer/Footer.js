import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link'; 
import logoWhite from '../../../imgs/passport-consultancy-white.svg';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        padding: '50px 0 20px 0',
        color: '#ffffff'
    },
    footerList: {
        listStyleType: 'none'
    },
    footerListLink: {
        color: '#ffffff',
        textDecoration: 'none'
    }
}));
const footer = (props) => {
    const classes = useStyles();
    return (
        <footer className={ classes.root }>
            <Container component="div"> 
                <Grid container justify="center" spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <img src={logoWhite} style={{ width: '180px' }} />
                        <Typography variant="body1" style={{ marginTop: '30px', width: '70%' }}>
                            We are a private organization for online passport consultancy services that helps to get your passport easy and hassle-free way.
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <ul className={ classes.footerList }>
                            {/* <li>
                                <Typography>
                                    <RouterLink to="/about-us" className={ classes.footerListLink }>About Us</RouterLink>
                                </Typography>
                                
                            </li>
                            <li>
                                <Typography>
                                    <RouterLink to="/contact-us" className={ classes.footerListLink }>Contact Us</RouterLink>
                                </Typography>
                            </li> */}
                            <li>
                                <Typography>
                                    <RouterLink to="/privacy-policy" className={ classes.footerListLink }>Privacy Policy</RouterLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    <RouterLink to="/terms" className={ classes.footerListLink }>Terms & Conditions</RouterLink>
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    <RouterLink to="/refund-policy" className={ classes.footerListLink }>Refund Policy</RouterLink>
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Typography variant="h6" style={{ marginTop: '20px' }}>Helpline</Typography>
                        <Typography>+91 7433931123 (Mon-Fri : 10 AM to 6 PM IST)</Typography>
                        <Typography>
                            <Link href="mailto:Info.onlinesevaindia@gmail.com" color="inherit">
                            Info.onlinesevaindia@gmail.com
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{ margin: '10px 0', backgroundColor: 'rgba(245, 245, 245, 0.6)' }} light/>
                <Grid container justify="center" spacing={2}>
                    <Grid item sm={12}>
                        <Typography align="center" style={{ color: 'rgba(245, 245, 245, 0.8)', fontSize: '0.95rem' }}>Copyright &copy; ind-seva.com</Typography>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default footer;