import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography' ; 
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

import Input from '../UI/Input';


const familyDetails = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed,  }) => { 
    return ( 
        <Fragment>
            <Grid container  spacing={2}>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.father_first_name}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'father_first_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.father_middle_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'father_middle_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.father_surname_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'father_surname_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.mother_first_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'mother_first_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.mother_middle_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'mother_middle_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.mother_surname_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'mother_surname_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.legalGuardian_first_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'legalGuardian_first_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.legalGuardian_middle_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'legalGuardian_middle_name', 'familyForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.legalGuardian_surname_name}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'legalGuardian_surname_name', 'familyForm')} 
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

export default familyDetails;
