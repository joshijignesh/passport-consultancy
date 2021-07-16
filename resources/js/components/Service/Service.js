import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography' ; 
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';

import Input from '../UI/Input';


const service = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed, isEditMode = false }) => { 
    return ( 
        <Fragment>
            <Grid container  spacing={2}>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.applyFor} 
                        readonly={isEditMode}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'applyFor', 'serviceForm')} 
                        />   
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.typeOfApplication}
                        readonly={isEditMode}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'typeOfApplication', 'serviceForm')} 
                        />    
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.typeOfpassportBooklet}
                        readonly={isEditMode}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'typeOfpassportBooklet', 'serviceForm')} 
                        />  
                </Grid>
                <Grid item xs={12}>
                    {
                        controls.typeOfApplication.value === 'tatkaal' ? 
                        (
                            <Typography align="center" color="error" gutterBottom>Note : In case of TatKaal application, Additional fees of Rs.2000 will required to pay at Passport Office in Cash.</Typography>
                        ) : ''
                    }
                </Grid>
    {
        controls.applyFor.value === 'reissue' ? 
        (
            <Fragment>
                <Grid item  xs={12}>
                    <Input 
                        { ...controls.specifyReason_0 }   
                        changed={(event) => changed(event, 'specifyReason_0', 'serviceForm')} 
                        shouldValidate={true} /> 
                </Grid>
               
                {
                    (controls.specifyReason_0.value === 'due_to_expire' 
                    || controls.specifyReason_0.value === 'already_expired') ? (
                        <Grid item md={4} sm={12} xs={12}>
                            <Input    
                                {...controls.dateOfExpiry}
                                changed={(event) => changed(event, 'dateOfExpiry', 'serviceForm')}  
                                shouldValidate={false} /> 
                        </Grid>
                    ) : ''
                }
                {
                    (controls.specifyReason_0.value === 'lost_passport' 
                    || controls.specifyReason_0.value === 'demaged_passport') ? (
                        <Grid item md={4} sm={12} xs={12}>
                            <Input  
                                {...controls.hasPassportExpired}
                                shouldValidate={true} 
                                changed={(event) => changed(event, 'hasPassportExpired', 'serviceForm')} 
                                />  
                        </Grid>
                    ) : ''
                }
                 <Grid item xs={12}>
                    <Input  {...controls.isChangeInExistingPassportParticulars} 
                        changed={(event) => changed(event, 'isChangeInExistingPassportParticulars', 'serviceForm')}  
                        shouldValidate={false} /> 
                </Grid>
                {
                     controls.isChangeInExistingPassportParticulars.value ?
                     (
                        <Grid item xs={12}>
                            <FormControl required component="fieldset">
                                <FormLabel component="legend">Changes to make in Passport Particulars </FormLabel>
                                    <FormGroup row>
                                        <Input    
                                            {...controls.cpp_appearance}
                                            changed={(event) => changed(event, 'cpp_appearance', 'serviceForm')} /> 
                                        <Input    
                                            {...controls.cpp_signature}
                                            changed={(event) => changed(event, 'cpp_signature', 'serviceForm')} />  
                                         <Input    
                                            {...controls.cpp_givenName}
                                            changed={(event) => changed(event, 'cpp_givenName', 'serviceForm')} /> 
                                         
                                         <Input    
                                            {...controls.cpp_surname}
                                            changed={(event) => changed(event, 'cpp_surname', 'serviceForm')} />  
                                         <Input    
                                            {...controls.cpp_dateOfBirth}
                                            changed={(event) => changed(event, 'cpp_dateOfBirth', 'serviceForm')} /> 
                                         <Input    
                                            {...controls.cpp_spouseName}
                                            changed={(event) => changed(event, 'cpp_spouseName', 'serviceForm')} />  
                                         <Input    
                                            {...controls.cpp_address}
                                            changed={(event) => changed(event, 'cpp_address', 'serviceForm')} />  
                                         <Input    
                                            {...controls.cpp_deleteECR}
                                            changed={(event) => changed(event, 'cpp_deleteECR', 'serviceForm')} />  
                                         <Input    
                                            {...controls.cpp_others}
                                            changed={(event) => changed(event, 'cpp_others', 'serviceForm')} />  
                                    </FormGroup> 
                            </FormControl> 
                        </Grid>
                     ) :
                     ''
                } 
            </Fragment>
        ): ''
    }
               
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

export default service;
