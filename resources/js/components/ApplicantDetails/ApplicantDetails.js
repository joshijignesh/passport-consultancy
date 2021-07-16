import React, {Fragment, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; 

import Input from '../UI/Input';


const applicantDetails = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed,  }) => { 
   
    
    return ( 
        <Fragment>
            <Grid container spacing={2}>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.first_name} 
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'first_name', 'applicantForm')}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.middle_name} 
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'middle_name', 'applicantForm')}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                     <Input  
                        {...controls.surname} 
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'surname', 'applicantForm')}/>  
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                <Input  
                    {...controls.aadhaar_no} 
                    shouldValidate={true} 
                    changed={(event) => changed(event, 'aadhaar_no', 'applicantForm')}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.gender}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'gender', 'applicantForm')} 
                        /> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.marital_status}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'marital_status', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <Input  
                        {...controls.dateOfBirth}
                        changed={(event) => changed(event, 'dateOfBirth', 'applicantForm')}  
                        shouldValidate={false} /> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.isBirthOutOfIndia}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'isBirthOutOfIndia', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.name_VillageTownCity}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'name_VillageTownCity', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.country}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'country', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    
                {controls.isBirthOutOfIndia.value === 'no' ? (
                    <Input  
                        {...controls.state}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'state', 'applicantForm')} 
                        /> 
                ) : ''}
                     
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    {controls.isBirthOutOfIndia.value === 'no' ? (
                        <Input  
                            {...controls.district}
                            shouldValidate={true} 
                            changed={(event) => changed(event, 'district', 'applicantForm')} 
                        /> 
                    ) : ''} 
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.citizenShipOfIndiaBy}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'citizenShipOfIndiaBy', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.pan}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'pan', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.voterId}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'voterId', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.eduQualification}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'eduQualification', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.employType}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'employType', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.employType.value === 'government' ? (
                            <Input  
                                {...controls.orgName}
                                shouldValidate={true} 
                                changed={(event) => changed(event, 'orgName', 'applicantForm')} 
                                /> 
                        ) : ''
                    }
                    
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.isParentSpouseGovServent}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'isParentSpouseGovServent', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.isEligibleNonECR}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'isEligibleNonECR', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.visibleDistiguishMark}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'visibleDistiguishMark', 'applicantForm')} 
                        />  
                </Grid>
                <Grid item xs={12}>
                    <Input  
                        {...controls.isKnownByOtherName}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isKnownByOtherName', 'applicantForm')} 
                        />  
                </Grid>
                {
                    controls.isKnownByOtherName.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.alise_name_1_firstName}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'alise_name_1_firstName', 'applicantForm')} 
                                    />  
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.alise_name_1_middleName}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'alise_name_1_middleName', 'applicantForm')} 
                                    />
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.alise_name_1_surname}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'alise_name_1_surname', 'applicantForm')} 
                                    />
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.alise_name_2_firstName}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'alise_name_2_firstName', 'applicantForm')} 
                                    />  
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.alise_name_2_middleName}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'alise_name_2_middleName', 'applicantForm')} 
                                    />
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}>
                                <Input  
                                    {...controls.alise_name_2_surname}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'alise_name_2_surname', 'applicantForm')} 
                                    />
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}>
                    <Input  
                        {...controls.isNameChanged}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isNameChanged', 'applicantForm')} 
                        />  
                </Grid>
                { controls.isNameChanged.value ? (
                    <Fragment>
                        <Grid item md={4} sm={12} xs={12}>
                            <Input  
                                {...controls.prev_name_1_firstName}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'prev_name_1_firstName', 'applicantForm')} 
                                />
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Input  
                                {...controls.prev_name_1_middleName}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'prev_name_1_middleName', 'applicantForm')} 
                                />
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Input  
                                {...controls.prev_name_1_surname}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'prev_name_1_surname', 'applicantForm')} 
                                />
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Input  
                                {...controls.prev_name_2_firstName}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'prev_name_2_firstName', 'applicantForm')} 
                                />
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Input  
                                {...controls.prev_name_2_middleName}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'prev_name_2_middleName', 'applicantForm')} 
                                />
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}>
                            <Input  
                                {...controls.prev_name_2_surname}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'prev_name_2_surname', 'applicantForm')} 
                                />
                        </Grid>
                    </Fragment>
                ) : ''} 
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

export default applicantDetails;
