import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; 

import Input from '../UI/Input';


const presentResi = ({ controls, formIsValid, activeStep, steps, handleBack, handleNext, changed,  }) => { 
    return ( 
        <Fragment>
            <Grid container  spacing={2}>
                <Grid item xs={12}>
                    <Input  
                        {...controls.isPresentOutOfIndia}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isPresentOutOfIndia', 'presentResiForm')} 
                        />   
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.house_street}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'house_street', 'presentResiForm')} 
                        />   
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    <Input  
                        {...controls.village_town_city}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'village_town_city', 'presentResiForm')} 
                        />   
                </Grid>     
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? (
                            <Input  
                                {...controls.country}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'country', 'presentResiForm')} 
                                />  
                        ) : ''
                    } 
                </Grid>  
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? (
                            <Input  
                                {...controls.state_province_y}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'state_province_y', 'presentResiForm')} 
                                />  
                        ) : (
                            <Input  
                                {...controls.state_province_n}
                                shouldValidate={true} 
                                changed={(event) => changed(event, 'state_province_n', 'presentResiForm')} 
                                /> 
                        )
                    } 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? (
                            <Input  
                                {...controls.district_y}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'district_y', 'presentResiForm')} 
                                />  
                        ) : (
                            <Input  
                                {...controls.district_n}
                                shouldValidate={true} 
                                changed={(event) => changed(event, 'district_n', 'presentResiForm')} 
                                /> 
                        )
                    } 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? (
                            <Input  
                                {...controls.zip_pin_y}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'zip_pin_y', 'presentResiForm')} 
                                />  
                        ) : (
                            <Input  
                                {...controls.zip_pin_n}
                                shouldValidate={false} 
                                changed={(event) => changed(event, 'zip_pin_n', 'presentResiForm')} 
                                /> 
                        )
                    } 
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? (
                            <Input  
                                {...controls.police_station_y}
                                shouldValidate={true} 
                                changed={(event) => changed(event, 'police_station_y', 'presentResiForm')} 
                                />  
                        ) : (
                            <Input  
                                {...controls.police_station_n}
                                shouldValidate={true} 
                                changed={(event) => changed(event, 'police_station_n', 'presentResiForm')} 
                                /> 
                        )
                    } 
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                     <Input  
                        {...controls.mobile_no}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'mobile_no', 'presentResiForm')} 
                        />  
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                     <Input  
                        {...controls.email_id}
                        shouldValidate={true} 
                        changed={(event) => changed(event, 'email_id', 'presentResiForm')} 
                        />  
                </Grid>
                <Grid item xs={12}>
                    <Input  
                        {...controls.isPermanentAddress}
                        shouldValidate={false} 
                        changed={(event) => changed(event, 'isPermanentAddress', 'presentResiForm')} 
                        />   
                </Grid> 
                {
                    controls.isPermanentAddress.value ? (
                        <Fragment>
                            <Grid item xs={12}>
                                <Input  
                                    {...controls.isPermanentSameAsPresent}
                                    shouldValidate={false} 
                                    changed={(event) => changed(event, 'isPermanentSameAsPresent', 'presentResiForm')} 
                                    />   
                            </Grid> 
                            {
                                !controls.isPermanentSameAsPresent.value ? (
                                    <Fragment>
                                        <Grid  item md={4} sm={12} xs={12}>
                                            <Input  
                                                {...controls.house_street_temp}
                                                shouldValidate={false} 
                                                changed={(event) => changed(event, 'house_street_temp', 'presentResiForm')} 
                                                />   
                                        </Grid>
                                        <Grid  item md={4} sm={12} xs={12}>
                                            <Input  
                                                {...controls.village_town_city_temp}
                                                shouldValidate={false} 
                                                changed={(event) => changed(event, 'village_town_city_temp', 'presentResiForm')} 
                                                />   
                                        </Grid>
                                        <Grid  item md={4} sm={12} xs={12}>
                                            <Input  
                                                {...controls.country_temp}
                                                shouldValidate={false} 
                                                changed={(event) => changed(event, 'country_temp', 'presentResiForm')} 
                                                />   
                                        </Grid>
                                        <Grid  item md={4} sm={12} xs={12}>
                                            <Input  
                                                {...controls.zip_pin_temp}
                                                shouldValidate={false} 
                                                changed={(event) => changed(event, 'zip_pin_temp', 'presentResiForm')} 
                                                />   
                                        </Grid>
                                    </Fragment> 
                                ) : ''
                            }
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

export default presentResi;
