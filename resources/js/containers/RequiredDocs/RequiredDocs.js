import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Layout from '../../hoc/Layout/Layout'; 
import { withStyles } from '@material-ui/core/styles'; 
import PropTypes from 'prop-types'; 
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'; 
import ListItemIcon from '@material-ui/core/ListItemIcon'; 
import ListItemAvatar from '@material-ui/core/ListItemAvatar'; 
import ListItemText from '@material-ui/core/ListItemText';
import Bookmark from '@material-ui/icons/Bookmark';
import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
const styles = theme =>({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      }
});

class RequiredDocs extends Component {
    state = {
        value:0
    }

    annexure = () => {
        const annexure = [
            {
                primary: "Annexure C: Minor’s Application - One Parent not given consent",
                secondary: "#"
            },
            {
                primary: "Annexure D: Minors Application – Both Parents given Consent.",
                secondary: "#"
            },
            {
                primary: "Annexure F: Affidavit in case of lost/damaged passport",
                secondary: "#"
            },
            {
                primary: "Annexure G: No Objection Certificate",
                secondary: "#"
            },
            {
                primary: "Annexure H: Prior Intimation Letter",
                secondary: "#"
            },
            {
                primary: "Annexure I: Minor Child born Through Surrogacy",
                secondary: "#"
            },
            {
                primary: "Authority letter to Submit Application",
                secondary: "#"
            }            
        ];
        return annexure;
    }

    proofOfAddress = () => {
        return [
            "Aadhar Card", "Electricity Bill", "Telephone Bill", "Water Bill", "Spouse Passport", "Parents Passport", "Rent Agreement", "Bank Account Passbook", "Gas Connection Bill", "IT Assessment Order", "Employer Certificate"
        ];
    }

    proofOfDob = () => {
        return [
            "Pan Card", "Aadhar Card", "Driving Licence", "Voter ID", "Birth Certificate", "Transfer/School Leaving Certificate", "Matriculation/10th/12th Certificate", "Service Record/Pay Pension Order", "Policy Bond", "Orphan Declaration"
        ];
    }

    proofOfIdentity = () => {
        return [
            "Pan Card", "Aadhar Card", "Driving Licence", "Voter ID"
        ];
    }

    proofofEducation = () => {
        return [
            "Matriculation Certificate", "10th Certificate", "12th Certificate", "Higher Educational Pass Certificate", 
        ];
    }

    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    };
    
    render() {
        const classes = this.props.classes;
        return (
            <Fragment> 
                <div className={classes.root}>
                    <Grid container>
                        <Grid item sm={3} xs={12}>
                            <Tabs
                                orientation="vertical"
                                variant="standard"
                                value={this.state.value}
                                onChange={this.handleChange} 
                                className={classes.tabs}
                            >
                                <Tab label="Annexure's" {...a11yProps(0)} />
                                <Tab label="Proof of Address" {...a11yProps(1)} />
                                <Tab label="Proof of DOB" {...a11yProps(2)} />
                                <Tab label="Proof of Identity" {...a11yProps(3)} />
                                <Tab label="Proof Education / Non-ECR" {...a11yProps(4)} /> 
                            </Tabs>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                            <TabPanel value={this.state.value} index={0}>
                                <List dense>
                                    {
                                        this.annexure().map((item,i) => (
                                            <ListItem key={i}>
                                                <ListItemAvatar> 
                                                    <Bookmark/> 
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={item.primary}
                                                    secondary={<Link href={item.secondary}>Downlaod</Link>}
                                                />
                                            </ListItem>
                                        ))
                                    } 
                                </List>
                            </TabPanel>
                            <TabPanel value={this.state.value} index={1}>
                                <List dense>
                                    {
                                        this.proofOfAddress().map((item,i) => (
                                            <ListItem key={i}>
                                                <ListItemAvatar> 
                                                    <Bookmark/> 
                                                </ListItemAvatar>
                                                <ListItemText primary={item}/>
                                            </ListItem>
                                        ))
                                    } 
                                </List>
                            </TabPanel>
                            <TabPanel value={this.state.value} index={2}>
                                <List dense>
                                    {
                                        this.proofOfDob().map((item,i) => (
                                            <ListItem key={i}>
                                                <ListItemAvatar> 
                                                    <Bookmark/> 
                                                </ListItemAvatar>
                                                <ListItemText primary={item}/>
                                            </ListItem>
                                        ))
                                    } 
                                </List>
                            </TabPanel>
                            <TabPanel value={this.state.value} index={3}>
                                <List dense>
                                    {
                                        this.proofOfIdentity().map((item,i) => (
                                            <ListItem key={i}>
                                                <ListItemAvatar> 
                                                    <Bookmark/> 
                                                </ListItemAvatar>
                                                <ListItemText primary={item}/>
                                            </ListItem>
                                        ))
                                    } 
                                </List>
                            </TabPanel>
                            <TabPanel value={this.state.value} index={4}>
                                <List dense>
                                    {
                                        this.proofofEducation().map((item,i) => (
                                            <ListItem key={i}>
                                                <ListItemAvatar> 
                                                    <Bookmark/> 
                                                </ListItemAvatar>
                                                <ListItemText primary={item}/>
                                            </ListItem>
                                        ))
                                    } 
                                </List>
                            </TabPanel> 
                        </Grid>
                    </Grid> 
                </div> 
            </Fragment>
        );
    }
}

export default withStyles(styles)(RequiredDocs);
