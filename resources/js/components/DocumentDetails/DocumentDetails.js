import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';  
import Input from '../UI/Input';


const docmentDetails = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed }) => { 
    return ( 
        <Fragment>
            <Grid container spacing={2}>  
                <Grid item md={6} sm={12} xs={12}>
                    <Input  
                    {...controls.proofOfBirth}
                    shouldValidate={false} 
                    changed={(event) => changed(event, 'proofOfBirth', 'documentDetailsForm')} 
                    />  
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                    <Input  
                    {...controls.proofOfPresentResi}
                    shouldValidate={false} 
                    changed={(event) => changed(event, 'proofOfPresentResi', 'documentDetailsForm')} 
                    />  
                </Grid>
            </Grid> 
            <div style={{margin: '20px'}}>
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </div> 
        </Fragment>
    );
}

export default docmentDetails;
