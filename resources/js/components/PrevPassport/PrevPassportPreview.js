import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid'; 
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview, booleanPreview, multiCheckBoxList } from '../../shared/utility';
import { bool } from 'prop-types';


const prevPassportPreview = ({ controls, isReissue }) => { 
    const isHoldIdentityCert = booleanPreview(controls.isHoldIdentityCert);
    const passport_no = controls.passport_no.value;
    const dateOfIssue = (new Date(controls.dateOfIssue.value)).toDateString();
    const dateOfExpiry = (new Date(controls.dateOfExpiry.value)).toDateString();
    const placeOfIssue = controls.placeOfIssue.value;
    const fileNumber = controls.fileNumber.value;
    const details_prevCurOffPassport =  selectPreview(controls.details_prevCurOffPassport);
    const passport_no_dipOff = controls.passport_no_dipOff.value;
    const dateOfIssue_dipOff = (new Date(controls.dateOfIssue_dipOff.value)).toDateString();
    const dateOfExpiry_dipOff = (new Date(controls.dateOfExpiry_dipOff.value)).toDateString();
    const placeOfIssue_dipOff = controls.placeOfIssue_dipOff.value;
    const isAppliedNotIssued = booleanPreview(controls.isAppliedNotIssued);
    const fileNo_notIssued = controls.fileNo_notIssued.value;
    const monthYearApply = (new Date(controls.monthYearApply.value)).toDateString();
    const namePassportOffice = controls.namePassportOffice.value;

    return ( 
        <Fragment>
            <Grid container spacing={2} style={{ margin: '20px 0' }}>  
            {
                !isReissue ? (
                     <Fragment>
                            <Grid item xs={12}> 
                                <PreviewBox lable={controls.isHoldIdentityCert} value={isHoldIdentityCert}/> 
                            </Grid>  
                     </Fragment>
                ) : ''
            }
            {
                isReissue || controls.isHoldIdentityCert.value ? (
                    <Fragment>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.passport_no} value={passport_no}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.dateOfIssue} value={dateOfIssue}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.dateOfExpiry} value={dateOfExpiry}/>
                        </Grid>   
                        <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.placeOfIssue} value={placeOfIssue}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.fileNumber} value={fileNumber}/>
                        </Grid>
                    </Fragment>      
                ) : ''
            }
                
                <Grid item xs={12}> 
                     <PreviewBox lable={controls.details_prevCurOffPassport} value={details_prevCurOffPassport}/>
                </Grid>
        {
              controls.details_prevCurOffPassport.value === 'available' ? (
                <Fragment>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.passport_no_dipOff} value={passport_no_dipOff}/>
                        </Grid> 
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.dateOfIssue_dipOff} value={dateOfIssue_dipOff}/>
                        </Grid>   
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.dateOfExpiry_dipOff} value={dateOfExpiry_dipOff}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.placeOfIssue_dipOff} value={placeOfIssue_dipOff}/>
                        </Grid>
                </Fragment> 
              ) : ''  
        } 
                <Grid item  xs={12}> 
                    <PreviewBox lable={controls.isAppliedNotIssued} value={isAppliedNotIssued}/>
                </Grid>
        {
                controls.isAppliedNotIssued.value ? (
                <Fragment>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.fileNo_notIssued} value={fileNo_notIssued}/> 
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.monthYearApply} value={monthYearApply}/>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12}> 
                            <PreviewBox lable={controls.namePassportOffice} value={namePassportOffice}/>
                        </Grid> 
                </Fragment>   
                ) : ''
        } 
            </Grid>  
        </Fragment>
    );
}

export default prevPassportPreview;
