import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';
import Input from '../UI/Input';


const prevPassport = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed, isReissue }) => { 
    return ( 
        <Fragment>
            <Grid container spacing={2}>  
            {
                !isReissue ? (
                     <Fragment>
                         <Grid item xs={12}>
                                <Input  
                                        {...controls.isHoldIdentityCert}
                                        shouldValidate={false} 
                                        changed={(event) => changed(event, 'isHoldIdentityCert', 'prevPassportForm')} 
                                        />    
                                </Grid> 
                                <Grid item xs={12}>
                                {
                                        controls.isHoldIdentityCert.value  ? 
                                        (
                                        <Typography align="left" color="error" gutterBottom>Note: If you already have a Passport,then please apply in Reissue Passport category; Do not apply in New Passport.</Typography>
                                        ) : ''
                                }
                                </Grid>
                     </Fragment>
                ) : ''
            }
            {
                    isReissue || controls.isHoldIdentityCert.value ? (
                      <Fragment>
                              <Grid item md={4} sm={12} xs={12}>
                                        <Input  
                                        {...controls.passport_no}
                                        shouldValidate={false} 
                                        changed={(event) => changed(event, 'passport_no', 'prevPassportForm')} 
                                        />  
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                        <Input  
                                        {...controls.dateOfIssue}
                                        shouldValidate={false} 
                                        changed={(event) => changed(event, 'dateOfIssue', 'prevPassportForm')} 
                                        />  
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                        <Input  
                                        {...controls.dateOfExpiry}
                                        shouldValidate={false} 
                                        changed={(event) => changed(event, 'dateOfExpiry', 'prevPassportForm')} 
                                        />  
                                </Grid>   
                                <Grid item md={4} sm={12} xs={12}>
                                        <Input  
                                        {...controls.placeOfIssue}
                                        shouldValidate={false} 
                                        changed={(event) => changed(event, 'placeOfIssue', 'prevPassportForm')} 
                                        />  
                                </Grid>
                                <Grid item md={4} sm={12} xs={12}>
                                        <Input  
                                        {...controls.fileNumber}
                                        shouldValidate={false} 
                                        changed={(event) => changed(event, 'fileNumber', 'prevPassportForm')} 
                                        />  
                                </Grid>
                      </Fragment>      
                    ) : ''
            }
                
                <Grid item xs={12}>
                        <Input  
                        {...controls.details_prevCurOffPassport}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'details_prevCurOffPassport', 'prevPassportForm')} 
                        />  
                </Grid>
        {
              controls.details_prevCurOffPassport.value === 'available' ? (
                <Fragment>
                        <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                {...controls.passport_no_dipOff}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'passport_no_dipOff', 'prevPassportForm')} 
                                />  
                        </Grid> 
                        <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                {...controls.dateOfIssue_dipOff}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'dateOfIssue_dipOff', 'prevPassportForm')} 
                                />  
                        </Grid>   
                        <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                {...controls.dateOfExpiry_dipOff}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'dateOfExpiry_dipOff', 'prevPassportForm')} 
                                />  
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                {...controls.placeOfIssue_dipOff}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'placeOfIssue_dipOff', 'prevPassportForm')} 
                                />  
                        </Grid>
                </Fragment> 
              ) : ''  
        } 
                <Grid item  xs={12}>
                        <Input  
                        {...controls.isAppliedNotIssued}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isAppliedNotIssued', 'prevPassportForm')} 
                        />  
                </Grid>
        {
                controls.isAppliedNotIssued.value ? (
                <Fragment>
                        <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                {...controls.fileNo_notIssued}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'fileNo_notIssued', 'prevPassportForm')} 
                                />  
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                {...controls.monthYearApply}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'monthYearApply', 'prevPassportForm')} 
                                />  
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                {...controls.namePassportOffice}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'namePassportOffice', 'prevPassportForm')} 
                                />  
                        </Grid> 
                </Fragment>   
                ) : ''
        } 
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

export default prevPassport;
