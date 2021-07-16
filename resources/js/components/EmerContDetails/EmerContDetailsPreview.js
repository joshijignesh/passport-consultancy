import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid'; 
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview, booleanPreview, multiCheckBoxList } from '../../shared/utility';


const emerContDetailsPreview = ({ controls }) => { 
    const name_address = controls.name_address.value; 
    const mobile_no = controls.mobile_no.value; 
    const email_id = controls.email_id.value; 

    return ( 
        <Fragment>
            <Grid container spacing={2} style={{ margin: '20px 0' }}>  
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.name_address} value={name_address}/> 
                </Grid> 
                <Grid item xs={6}> 
                    <PreviewBox lable={controls.mobile_no} value={mobile_no}/> 
                </Grid> 
                <Grid item xs={6}> 
                    <PreviewBox lable={controls.email_id} value={email_id}/> 
                </Grid> 
            </Grid>  
        </Fragment>
    );
}

export default emerContDetailsPreview;
