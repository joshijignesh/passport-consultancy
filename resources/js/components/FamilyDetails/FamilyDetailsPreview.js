import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid'; 
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview, booleanPreview, multiCheckBoxList } from '../../shared/utility';

const familyDetailsPreview = ({ controls }) => { 
    const father_first_name = controls.father_first_name.value;
    const father_middle_name = controls.father_middle_name.value;
    const father_surname_name = controls.father_surname_name.value;
    const mother_first_name = controls.mother_first_name.value;
    const mother_middle_name = controls.mother_middle_name.value;
    const mother_surname_name = controls.mother_surname_name.value;
    const legalGuardian_first_name = controls.legalGuardian_first_name.value;
    const legalGuardian_middle_name = controls.legalGuardian_middle_name.value;
    const legalGuardian_surname_name = controls.legalGuardian_surname_name.value;

    return ( 
        <Fragment>
            <Grid container spacing={2} style={{ margin: "20px 0" }}>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.father_first_name} value={father_first_name}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.father_middle_name} value={father_middle_name}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.father_surname_name} value={father_surname_name}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.mother_first_name} value={mother_first_name}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.mother_middle_name} value={mother_middle_name}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.mother_surname_name} value={mother_surname_name}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.legalGuardian_first_name} value={legalGuardian_first_name}/>   
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.legalGuardian_middle_name} value={legalGuardian_middle_name}/>
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.legalGuardian_surname_name} value={legalGuardian_surname_name}/>
                </Grid>
            </Grid>  
        </Fragment>
    );
}

export default familyDetailsPreview;
