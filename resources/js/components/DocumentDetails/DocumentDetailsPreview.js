import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid'; 
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview } from '../../shared/utility';


const docmentDetailsPreview = ({ controls }) => { 
    const proofOfBirth = selectPreview(controls.proofOfBirth);
    const proofOfPresentResi = selectPreview(controls.proofOfPresentResi);
    return ( 
        <Fragment>
            <Grid container spacing={2} style={{ margin: '20px 0' }}>  
                <Grid item md={6} sm={12} xs={12}> 
                    <PreviewBox lable={controls.proofOfBirth} value={proofOfBirth}/>
                </Grid>
                <Grid item md={6} sm={12} xs={12}> 
                    <PreviewBox lable={controls.proofOfPresentResi} value={proofOfPresentResi}/> 
                </Grid>
            </Grid>  
        </Fragment>
    );
}

export default docmentDetailsPreview;
