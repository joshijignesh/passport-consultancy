import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography';

import Input from '../UI/Input';


const otherDetails = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed,  }) => { 
    return ( 
        <Fragment>
            <Grid container  spacing={2}>
                <Grid item xs={12}>
                    <Input  
                        {...controls.isArrestWarran}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isArrestWarran', 'otherDetailsForm')} 
                        />   
                </Grid> 
                {
                    controls.isArrestWarran.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.nameCourtePlace}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'nameCourtePlace', 'otherDetailsForm')} 
                                    />   
                            </Grid> 
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.caseFirWarrantNumber}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'caseFirWarrantNumber', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.lawSections}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'lawSections', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}>
                    <Input  
                        {...controls.isCriminalOffence}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isCriminalOffence', 'otherDetailsForm')} 
                        />   
                </Grid>
                {
                    controls.isCriminalOffence.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.nameCourtePlace_0}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'nameCourtePlace_0', 'otherDetailsForm')} 
                                    />   
                            </Grid> 
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.caseFirWarrantNumber_0}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'caseFirWarrantNumber_0', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.lawSections_0}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'lawSections_0', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                        </Fragment>
                    ) : ''
                } 
                <Grid item xs={12}>
                    <Input  
                        {...controls.isRefusedDenied}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isRefusedDenied', 'otherDetailsForm')} 
                        />   
                </Grid>
                {
                    controls.isRefusedDenied.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.refusalReason}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'refusalReason', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                        </Fragment>
                    ) : ''
                } 
                <Grid item xs={12}>
                    <Input  
                        {...controls.isImpoundRevoked}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isImpoundRevoked', 'otherDetailsForm')} 
                        />   
                </Grid>
                {
                    controls.isImpoundRevoked.value ? (
                        <Fragment>
                            <Grid item xs={12}>
                                <Typography align="left" variant="h6" gutterBottom>Impounded/ Revoked Passport Details</Typography>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.impoundRevokedPassportNo}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'impoundRevokedPassportNo', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.reasonImpoundRevocation}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'reasonImpoundRevocation', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}>
                    <Input  
                        {...controls.isPoliticalAsylum}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isPoliticalAsylum', 'otherDetailsForm')} 
                        />   
                </Grid>
                {
                    controls.isPoliticalAsylum.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.country}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'country', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}>
                    <Input  
                        {...controls.isEmerCert}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isEmerCert', 'otherDetailsForm')} 
                        />   
                </Grid>
                {
                    controls.isEmerCert.value ? (
                        <Fragment>
                             <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.emerCirtNo}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'emerCirtNo', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.emerCirtDate}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'emerCirtDate', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.emerCirtCountry}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'emerCirtCountry', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.issueAuthority}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'issueAuthority', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.reasonIssuing}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'reasonIssuing', 'otherDetailsForm')} 
                                    />   
                            </Grid>
                        </Fragment>
                    ) : ''
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

export default otherDetails;
