import React, {Fragment } from 'react';

import Grid from '@material-ui/core/Grid'; 
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview, booleanPreview, multiCheckBoxList } from '../../shared/utility';

const presentResiPreview = ({ controls }) => { 

    const isPresentOutOfIndia = booleanPreview(controls.isPresentOutOfIndia);
    const house_street = controls.house_street.value;
    const village_town_city = controls.village_town_city.value;
    const country = selectPreview(controls.country);
    const state_province_n = selectPreview(controls.state_province_n);
    const state_province_y = controls.state_province_y.value;
    const district_n = selectPreview(controls.district_n);
    const district_y = controls.district_y.value;
    const zip_pin_n = controls.zip_pin_n.value;
    const zip_pin_y = controls.zip_pin_y.value;
    const police_station_n = selectPreview(controls.police_station_n);
    const police_station_y = controls.police_station_y.value;
    const mobile_no = controls.mobile_no.value;
    const email_id = controls.email_id.value;
    const isPermanentAddress = booleanPreview(controls.isPermanentAddress);
    const isPermanentSameAsPresent = booleanPreview(controls.isPermanentSameAsPresent);
    const house_street_temp = controls.house_street_temp.value;
    const village_town_city_temp = controls.village_town_city_temp.value;
    const country_temp = selectPreview(controls.country_temp);
    const zip_pin_temp = controls.zip_pin_temp.value;
    return ( 
        <Fragment>
            <Grid container spacing={2} style={{ margin: '20px 0' }}>
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.isPresentOutOfIndia} value={isPresentOutOfIndia}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.house_street} value={house_street}/> 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}> 
                    <PreviewBox lable={controls.village_town_city} value={village_town_city}/> 
                </Grid>     
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? ( 
                            <PreviewBox lable={controls.country} value={country}/> 
                        ) : ''
                    } 
                </Grid>  
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? ( 
                            <PreviewBox lable={controls.state_province_y} value={state_province_y}/> 
                        ) : ( 
                            <PreviewBox lable={controls.state_province_n} value={state_province_n}/> 
                        )
                    } 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? (
                             
                            <PreviewBox lable={controls.district_y} value={district_y}/> 
                        ) : ( 
                            <PreviewBox lable={controls.district_n} value={district_n}/> 
                        )
                    } 
                </Grid> 
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? ( 
                            <PreviewBox lable={controls.zip_pin_y} value={zip_pin_y}/> 
                        ) : ( 
                            <PreviewBox lable={controls.zip_pin_n} value={zip_pin_n}/> 
                        )
                    } 
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    {
                        controls.isPresentOutOfIndia.value ? ( 
                            <PreviewBox lable={controls.police_station_y} value={police_station_y}/> 
                        ) : ( 
                            <PreviewBox lable={controls.police_station_n} value={police_station_n}/> 
                        )
                    } 
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.mobile_no} value={mobile_no}/> 
                </Grid>
                <Grid item md={4} sm={12} xs={12}> 
                     <PreviewBox lable={controls.email_id} value={email_id}/> 
                </Grid>
                <Grid item xs={12}> 
                     <PreviewBox lable={controls.isPermanentAddress} value={isPermanentAddress}/> 
                </Grid> 
                {
                    controls.isPermanentAddress.value ? (
                        <Fragment>
                            <Grid item xs={12}>
                                <PreviewBox lable={controls.isPermanentSameAsPresent} value={isPermanentSameAsPresent}/> 
                            </Grid> 
                            {
                                !controls.isPermanentSameAsPresent.value ? (
                                    <Fragment>
                                        <Grid  item md={4} sm={12} xs={12}> 
                                            <PreviewBox lable={controls.house_street_temp} value={house_street_temp}/> 
                                        </Grid>
                                        <Grid  item md={4} sm={12} xs={12}> 
                                            <PreviewBox lable={controls.village_town_city_temp} value={village_town_city_temp}/> 
                                        </Grid>
                                        <Grid  item md={4} sm={12} xs={12}> 
                                            <PreviewBox lable={controls.country_temp} value={country_temp}/> 
                                        </Grid>
                                        <Grid  item md={4} sm={12} xs={12}> 
                                            <PreviewBox lable={controls.zip_pin_temp} value={zip_pin_temp}/> 
                                        </Grid>
                                    </Fragment> 
                                ) : ''
                            }
                        </Fragment>
                    ) : ''
                }
                
            </Grid>  
        </Fragment>
    );
}

export default presentResiPreview;
