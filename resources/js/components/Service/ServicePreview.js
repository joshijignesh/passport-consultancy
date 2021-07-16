import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid'; 
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview, booleanPreview, multiCheckBoxList } from '../../shared/utility';



const servicePreview = ({ controls}) => {  
    const applyFor = selectPreview(controls.applyFor);
    const typeOfApplication = selectPreview(controls.typeOfApplication);
    const typeOfpassportBooklet = selectPreview(controls.typeOfpassportBooklet);
    const specifyReason_0 = selectPreview(controls.specifyReason_0);
    const dateOfExpiry = (new Date(controls.dateOfExpiry.value)).toDateString();
    const hasPassportExpired = selectPreview(controls.hasPassportExpired);
    const isChangeInExistingPassportParticulars = booleanPreview(controls.isChangeInExistingPassportParticulars); 
    const changesInExistingPassportParticulars = multiCheckBoxList([controls.cpp_appearance, controls.cpp_signature , controls.cpp_givenName , controls.cpp_surname , controls.cpp_dateOfBirth , controls.cpp_spouseName , controls.cpp_address, controls.cpp_deleteECR, controls.cpp_others ]); 
    return ( 
        <Fragment>
            <Grid container spacing={2} style={{margin:"20px 0"}}>
                <Grid item md={4} sm={12} xs={12}>
                    <PreviewBox lable={controls.applyFor} value={applyFor}/> 
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.typeOfApplication} value={typeOfApplication}/>  
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.typeOfpassportBooklet} value={typeOfpassportBooklet}/> 
                </Grid> 
    {
        controls.applyFor.value === 'reissue' ? 
        (
            <Fragment>
                <Grid item  xs={12}> 
                    <PreviewBox lable={controls.specifyReason_0} value={specifyReason_0}/> 
                </Grid>
               
                {
                    (controls.specifyReason_0.value === 'due_to_expire' 
                    || controls.specifyReason_0.value === 'already_expired') ? (
                        <Grid item md={4} sm={12} xs={12}>
                            <PreviewBox lable={controls.dateOfExpiry} value={dateOfExpiry}/>  
                        </Grid>
                    ) : ''
                }
                {
                    (controls.specifyReason_0.value === 'lost_passport' 
                    || controls.specifyReason_0.value === 'demaged_passport') ? (
                        <Grid item md={4} sm={12} xs={12}>
                            <PreviewBox lable={controls.hasPassportExpired} value={hasPassportExpired}/> 
                        </Grid>
                    ) : ''
                }
                 <Grid item xs={12}>
                     <PreviewBox lable={ controls.isChangeInExistingPassportParticulars } value={isChangeInExistingPassportParticulars}/> 
                 </Grid>
                {
                     controls.isChangeInExistingPassportParticulars.value ?
                     (
                        <Grid item xs={12}>
                            <PreviewBox lable={{inputLabel: 'Changes to make in Passport Particulars'}} value={changesInExistingPassportParticulars}/>   
                        </Grid>
                     ) :
                     ''
                } 
            </Fragment>
        ): ''
    }
               
        </Grid> 
            
    </Fragment>
    );
}

export default servicePreview;
