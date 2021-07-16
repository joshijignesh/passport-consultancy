import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid'; 
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview, booleanPreview, multiCheckBoxList } from '../../shared/utility';


const applicantDetailsPreview = ({ controls}) => { 
    
    const first_name = controls.first_name.value;
    const middle_name = controls.middle_name.value;
    const surname = controls.surname.value;
    const aadhaar_no = controls.aadhaar_no.value;
    const gender = selectPreview(controls.gender);
    const marital_status = selectPreview(controls.marital_status);
    const dateOfBirth = (new Date(controls.dateOfBirth.value)).toDateString();
    const isBirthOutOfIndia = booleanPreview(controls.isBirthOutOfIndia);
    const name_VillageTownCity = controls.name_VillageTownCity.value;
    const country = selectPreview(controls.country);
    const state = selectPreview(controls.state);
    const district = selectPreview(controls.district);
    const citizenShipOfIndiaBy = selectPreview(controls.citizenShipOfIndiaBy);
    const pan = controls.pan.value;
    const voterId = controls.voterId.value;
    const eduQualification = selectPreview(controls.eduQualification);
    const employType = selectPreview(controls.employType);
    const orgName = controls.orgName.value;
    const isParentSpouseGovServent = selectPreview(controls.isParentSpouseGovServent);
    const isEligibleNonECR = selectPreview(controls.isEligibleNonECR);
    const visibleDistiguishMark = controls.visibleDistiguishMark.value;
    const isKnownByOtherName = booleanPreview(controls.isKnownByOtherName);
    const alise_name_1_firstName = controls.alise_name_1_firstName.value;
    const alise_name_1_middleName = controls.alise_name_1_middleName.value;
    const alise_name_1_surname = controls.alise_name_1_surname.value;
    const alise_name_2_firstName = controls.alise_name_2_firstName.value;
    const alise_name_2_middleName = controls.alise_name_2_middleName.value;
    const alise_name_2_surname = controls.alise_name_2_surname.value;
    const isNameChanged = booleanPreview(controls.isNameChanged);
    const prev_name_1_firstName = controls.prev_name_1_firstName.value;
    const prev_name_1_middleName = controls.prev_name_1_middleName.value;
    const prev_name_1_surname = controls.prev_name_1_surname.value;
    const prev_name_2_firstName = controls.prev_name_2_firstName.value;
    const prev_name_2_middleName = controls.prev_name_2_middleName.value;
    const prev_name_2_surname = controls.prev_name_2_surname.value;
    return ( 
        <Fragment>
            <Grid container spacing={2} style={{ margin: "20px 0" }}>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.first_name} value={first_name}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.middle_name} value={middle_name}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.surname} value={surname}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.aadhaar_no} value={aadhaar_no}/>
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.gender} value={gender}/>
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.marital_status} value={marital_status}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>  
                     <PreviewBox lable={controls.dateOfBirth} value={dateOfBirth}/>
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.isBirthOutOfIndia} value={isBirthOutOfIndia}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.name_VillageTownCity} value={name_VillageTownCity}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.country} value={country}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    
                {controls.isBirthOutOfIndia.value === 'no' ? ( 
                    <PreviewBox lable={controls.state} value={state}/>
                ) : ''}
                     
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    {controls.isBirthOutOfIndia.value === 'no' ? ( 
                      <PreviewBox lable={controls.district} value={district}/>
                    ) : ''} 
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.citizenShipOfIndiaBy} value={citizenShipOfIndiaBy}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.pan} value={pan}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.voterId} value={voterId}/> 
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.eduQualification} value={eduQualification}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.employType} value={employType}/> 
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.employType.value === 'government' ? (
                            
                            <PreviewBox lable={controls.orgName} value={orgName}/>
                        ) : ''
                    }
                    
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.isParentSpouseGovServent} value={isParentSpouseGovServent}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.isEligibleNonECR} value={isEligibleNonECR}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.visibleDistiguishMark} value={visibleDistiguishMark}/>
                </Grid>
                <Grid item xs={12}> 
                     <PreviewBox lable={controls.isKnownByOtherName} value={isKnownByOtherName}/>
                </Grid>
                {
                    controls.isKnownByOtherName.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.alise_name_1_firstName} value={alise_name_1_firstName}/> 
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.alise_name_1_middleName} value={alise_name_1_middleName}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.alise_name_1_surname} value={alise_name_1_surname}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.alise_name_2_firstName} value={alise_name_2_firstName}/>  
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.alise_name_2_middleName} value={alise_name_2_middleName}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                 <PreviewBox lable={controls.alise_name_2_surname} value={alise_name_2_surname}/>
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.isNameChanged} value={isNameChanged}/> 
                </Grid>
                { controls.isNameChanged.value ? (
                    <Fragment>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.prev_name_1_firstName} value={prev_name_1_firstName}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.prev_name_1_middleName} value={prev_name_1_middleName}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                             <PreviewBox lable={controls.prev_name_1_surname} value={prev_name_1_surname}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                             <PreviewBox lable={controls.prev_name_2_firstName} value={prev_name_2_firstName}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.prev_name_2_middleName} value={prev_name_2_middleName}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.prev_name_2_surname} value={prev_name_2_surname}/>
                        </Grid>
                    </Fragment>
                ) : ''} 
            </Grid>  
        </Fragment>
    );
}

export default applicantDetailsPreview;
