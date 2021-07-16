import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; 

import Input from '../UI/Input';


const emerContDetails = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed,  }) => { 
    return ( 
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Input  
                        {...controls.name_address}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'name_address', 'emerContDetailsForm')} 
                        />   
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <Input  
                        {...controls.mobile_no}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'mobile_no', 'emerContDetailsForm')} 
                        /> 
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <Input  
                        {...controls.email_id}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'email_id', 'emerContDetailsForm')} 
                        /> 
                </Grid>
            </Grid>   
            <div style={{margin: '20px'}}>
                <Button
                    disabled={activeStep === 0}
                    onClick={() => handleBack()}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleNext()}
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div> 
        </Fragment>
    );
}

export default emerContDetails;
