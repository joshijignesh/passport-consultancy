import React, { Component, Fragment } from 'react'; 
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'; 
import { withStyles } from '@material-ui/core/styles';
import formFill from '../../../imgs/formFillup.svg';
import apponment from '../../../imgs/apponment.svg';
import onlinePayment from '../../../imgs/onlinePayment.svg';
import passport from '../../../imgs/passport.svg';
import police from '../../../imgs/police.svg';
import psk from '../../../imgs/psk.svg';
const styles = theme =>({
    box: {
        border: `4px solid ${theme.palette.primary.main}`,
        margin: '50px 10px',
        borderRadius: '10px',
        marginTop: '20px'
    },
    imgIcon: {
        maxWidth: '200px'
    } 
});
 
class Procedure extends Component {
    state = {
        activeStep: 0
    };

    getSteps = () => {
        return [
            '1. Fill & Verify Details', 
            '2. Make Payment', 
            '3. Appointment Booking',
            '4. Visit PSK',
            '5. Police Verification',
            '6. Get Passport'
        ];
      }
      
      getStepContent =  (stepIndex) => {
        switch (stepIndex) {
          case 0:
            return (
                <Grid container item sm={6} xs={12} className={this.props.classes.box} alignItems="center" spacing={2}>
                    <Grid item sm={8} xs={12}>
                         <Typography variant="h5">Fill the online application form & Verify your details.</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} style={{textAlign:'center'}}>
                        <img src={formFill} className={this.props.classes.imgIcon}/>
                    </Grid> 
                </Grid>
            );
          case 1:
            return (
                <Grid container item sm={6} xs={12} className={this.props.classes.box} alignItems="center" spacing={2}>
                    <Grid item sm={8} xs={12}>
                         <Typography variant="h5">Make an online payment.</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} style={{textAlign:'center'}}>
                        <img src={ onlinePayment } className={this.props.classes.imgIcon}/>
                    </Grid> 
                </Grid>
            );
          case 2:
            return (
                <Grid container item sm={6} xs={12} className={this.props.classes.box} alignItems="center" spacing={2}>
                    <Grid item sm={8} xs={12}>
                         <Typography variant="h5">The Executive will book a date of Appointment & Submit the form.</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} style={{textAlign:'center'}}>
                        <img src={apponment} className={this.props.classes.imgIcon}/>
                    </Grid> 
                </Grid>
            );
          case 3:
            return (
                <Grid container item sm={6} xs={12} className={this.props.classes.box} alignItems="center" spacing={2}>
                    <Grid item sm={8} xs={12}>
                         <Typography variant="h5">Visit nearest PSK(Passport Seva Kendra) or PO(Passport Office) with all the necessary documents.</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} style={{textAlign:'center'}}>
                        <img src={psk} className={this.props.classes.imgIcon}/>
                    </Grid> 
                </Grid>
            );
          case 4:
            return (
                <Grid container item sm={6} xs={12} className={this.props.classes.box} alignItems="center" spacing={2}>
                    <Grid item sm={8} xs={12}>
                         <Typography variant="h5">After successful submission, wait for police verification at your present address.</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} style={{textAlign:'center'}}>
                        <img src={police} className={this.props.classes.imgIcon}/>
                    </Grid> 
                </Grid>
            );
          case 5:
            return (
                <Grid container item sm={6} xs={12} className={this.props.classes.box} alignItems="center" spacing={2}>
                    <Grid item sm={8} xs={12}>
                         <Typography variant="h5">After police approval passport comes through Speed Post.</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12} style={{textAlign:'center'}}>
                        <img src={passport} className={this.props.classes.imgIcon}/>
                    </Grid> 
                </Grid>
            );
          default:
            return 'Unknown stepIndex';
        }
      }
    handleNext = () => {
        this.setState(prevState => ({activeStep: prevState.activeStep+1}));
    };
    
    handleBack = () => {
        this.setState(prevState => ({activeStep: prevState.activeStep-1}));
    };
    
    handleReset = () => {
        this.setState(prevState => ({activeStep: 0}));
    };

    render() {
        const classes = this.props.classes; 
        return ( 
            <Fragment> 
                <Stepper activeStep={this.state.activeStep} alternativeLabel>
                    {this.getSteps().map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                <Fragment>
                    {this.state.activeStep === this.getSteps().length ?'' : ( 
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center" 
                        spacing={2} 
                        >

                        {this.getStepContent(this.state.activeStep)}
                        <Grid container item sm={12} justify="center" style={{margin: '20px 0'}}>
                            <Button
                                disabled={this.state.activeStep === 0}
                                onClick={this.handleBack} 
                                >
                                    Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={this.handleNext}>
                                {this.state.activeStep === this.getSteps().length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Grid> 
                    </Grid>  
                    )}
                </Fragment> 
            </Fragment> 
        );
    }
}

export default withStyles(styles)(Procedure);
