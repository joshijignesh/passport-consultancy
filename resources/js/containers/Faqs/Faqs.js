import React, { Component, Fragment } from 'react'; 
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

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

class Faqs extends Component {
    state = {
        value:0
    }

    general = () => {
        const general = [
            {
                ques: "What is a passport?",
                ans: "Passport is a prime source of identification while travelling internationally, it is issued by the country’s government to verify their citizen's identity and nationality."
            },
            {
                ques: "What are the types of Indian passport?",
                ans: "There are mainly two types of Passport issued by the Government of India i.e., Ordinary passport and Diplomatic/Official passport. All citizens can apply for ordinary passport whereas, Diplomatic/Official passport is only for those government officials who are being sent on overseas official duty only."
            },
            {
                ques: "Who qualifies for Indian passport?",
                ans: "If you are qualified for the citizenship of India according to the Indian Constitution then, you can apply for Indian passport i.e., By being born in India, Born elsewhere but one of the parents is Indian, or by being granted Indian citizenship etc."
            },
            {
                ques: "What to do in case of lost/damaged passport?",
                ans: "In this case, you have to re-issue your passport by producing the following documents at Passport Seva Kendra: Affidavit with details of how a passport got damaged or lost (Annexure 'L') / No Objection Certificate (Annexure 'M') / Prior Intimation Letter (Annexure 'N') Current address (proof) / Address Proof / Identity Proof/ Police report (FIR) / Semi-literate or literate applicants: Affidavit sworn before a notary stating the place and date of birth (Annexure 'A') / Photocopy of the first and last pages of the old passport (ECR/Non-ECR page), if available (optional) / Passport-size photographs"
            },
            {
                ques: "How many days it will take to get a passport?",
                ans: "Generally, it will take up to 30 days from the date of application"
            },
            {
                ques: "How to track my passport application?",
                ans: "You can simply check your passport status on www.passportindia.gov.in by clicking on “Track your application status” and then enter your 15-digit file number (provided after submitting your passport application) and birth date."
            }
        ]

        return general;
    }

    feesStructure = () => {
        const feeStructure = [
            {
                ques: "How to make a payment?",
                ans: "You can make a payment online using various options like all credit/debit cards, Net bankings, UPIs, Wallets etc."
            },
            {
                ques: "What are the fees for different passport application?",
                ans: "General fees for below 18 is INR 1000 and for above 18 it is INR 1500. For more details please click on FEES tab above."
            },
            {
                ques: "What is transaction id?",
                ans: "You will get one Transaction ID once, your payment gets successful. Note it down for future reference."
            },
            {
                ques: "What is the consultancy fees?",
                ans: "Generally, we charge INR 2000 per application as a consultancy fee."
            },
            {
                ques: "What is the fee of the Tatkaal passport application?",
                ans: "For Tatkal passport application you have to pay additional tatkal fees at Passport Office i.e., INR 2000"
            },
            {
                ques: "What is the fee for lost/stolen/damaged passport?",
                ans: "In case of lost/damaged/stolen passport, you have to pay INR 5000"
            }
        ];

        return feeStructure;
    }

    tatkaalPassport = () => {
        const tatkaalPass = [
            {
                ques: "What is a tatkal passport application?",
                ans: "There are mainly two types of passport applications that are Normal and Tatkal. First is the standard one and the latter will be called Tatkal. It is generally preferred when there is an urgent requirement of passport. By using Tatkal passport application you can get your passport within a few days but, you have to pay an additional amount for it."
            },
            {
                ques: "How to pay Tatkaal passport fee?",
                ans: "It will be automatically added if you select your passport application as Tatkal."
            },
            {
                ques: "How much time it will take to get Tatkaal passport?",
                ans: "Generally, it will take 2-3 days from the date of application"
            },
            {
                ques: "Can everyone apply under the Tatkaal scheme?",
                ans: "Every Indian citizen with a genuine reason can apply for the tatkal scheme. However, there is a list of applicants who are not allowed to apply under this scheme, in order to know that applicants list you have to download the booklet from the official website."
            },
        ];

        return tatkaalPass;
    }

    documents = () => {
        const documents = [
            "Pan Card", "Aadhar Card", "Driving Licence", "Voter ID"
        ];

        return documents;
    }

    appointment = () => {
        const appointment = [
            {
                ques: "What is PSK?",
                ans: "PSK stands for Passport Seva Kendra. In short, it is an office where you have to submit your final application along with the required documents."
            },
            {
                ques: "How to Cancel/Reschedule passport appointment online?",
                ans: "For that, you have to log in on the official website using your credential. Then select the tab with “View Saved/Submitted Applications” title. There you will find two option under this tab ‘Reschedule Appointment’ and ‘Cancel Appointment’."
            },
            {
                ques: "How many times I can reschedule my appointment?",
                ans: "One can reschedule his/her PSK appointment only 2 times in a span of 12 months."
            },
            {
                ques: "Are the PSK offices open on the weekend?",
                ans: "PSK is closed on all Saturdays and Sundays."
            },
            {
                ques: "Can someone else attend my passport appointment for me?",
                ans: "Don’t Know about it!!!"
            },
        ]

        return appointment;
    }


    handleChange = (event, newValue) => {
        this.setState({value: newValue});
    }
    
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
                                <Tab label="General" {...a11yProps(0)} />
                                <Tab label="Fees Structure" {...a11yProps(1)} />
                                <Tab label="Tatkaal Passport" {...a11yProps(2)} />
                                <Tab label="Documents" {...a11yProps(3)} />
                                <Tab label="Appointment" {...a11yProps(4)} /> 
                            </Tabs>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                            <TabPanel value={this.state.value} index={0}>
                                {
                                    this.general().map((item, index)=> (
                                        <ExpansionPanel style={{ marginBottom: "20px" }} key={index}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}  
                                                > 
                                                { item.ques }
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography color="textSecondary">
                                                    { item.ans }
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    ))
                                } 
                            </TabPanel>
                            <TabPanel value={this.state.value} index={1}>
                                {
                                    this.feesStructure().map((item, index)=> (
                                        <ExpansionPanel style={{ marginBottom: "20px" }} key={index}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}  
                                                > 
                                                { item.ques }
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography color="textSecondary">
                                                    { item.ans }
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    ))
                                } 
                            </TabPanel>
                            <TabPanel value={this.state.value} index={2}>
                                {
                                    this.tatkaalPassport().map((item, index)=> (
                                        <ExpansionPanel style={{ marginBottom: "20px" }} key={index}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}  
                                                > 
                                                { item.ques }
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography color="textSecondary">
                                                    { item.ans }
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    ))
                                } 
                            </TabPanel>
                            <TabPanel value={this.state.value} index={3}>
                                <List dense> 
                                    {
                                        this.documents().map((item,index) => (
                                            <ListItem key={index}>
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
                                {
                                    this.appointment().map((item, index)=> (
                                        <ExpansionPanel style={{ marginBottom: "20px" }} key={index}>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}  
                                                > 
                                                { item.ques }
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>
                                                <Typography color="textSecondary">
                                                    { item.ans }
                                                </Typography>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    ))
                                } 
                            </TabPanel> 
                        </Grid>
                    </Grid> 
                </div> 
            </Fragment>
        );
    }
}

export default withStyles(styles)(Faqs);
