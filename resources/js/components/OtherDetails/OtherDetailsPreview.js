import React, {Fragment } from 'react';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import PreviewBox from '../PreviewBox/PreviewBox';
import { selectPreview, booleanPreview, multiCheckBoxList } from '../../shared/utility';

const otherDetailsPreview = ({ controls }) => { 
    const isArrestWarran = booleanPreview(controls.isArrestWarran);
    const nameCourtePlace = controls.nameCourtePlace.value;
    const caseFirWarrantNumber = controls.caseFirWarrantNumber.value;
    const lawSections = controls.lawSections.value;
    const isCriminalOffence = booleanPreview(controls.isCriminalOffence);
    const nameCourtePlace_0 = controls.nameCourtePlace_0.value;
    const caseFirWarrantNumber_0 = controls.caseFirWarrantNumber_0.value;
    const lawSections_0 = controls.lawSections_0.value;
    const isRefusedDenied = booleanPreview(controls.isRefusedDenied);
    const refusalReason = controls.refusalReason.value;
    const isImpoundRevoked = booleanPreview(controls.isImpoundRevoked);
    const impoundRevokedPassportNo = controls.impoundRevokedPassportNo.value;
    const reasonImpoundRevocation = controls.reasonImpoundRevocation.value;
    const isPoliticalAsylum = booleanPreview(controls.isPoliticalAsylum);
    const country = selectPreview(controls.country);
    const isEmerCert = booleanPreview(controls.isEmerCert);
    const emerCirtNo = controls.emerCirtNo.value;
    const emerCirtDate = (new Date(controls.emerCirtDate.value)).toDateString();
    const emerCirtCountry = controls.emerCirtCountry.value;
    const issueAuthority = controls.issueAuthority.value;
    const reasonIssuing = controls.reasonIssuing.value;

    return ( 
        <Fragment>
            <Grid container  spacing={2} style={{margin: '20px 0'}}>
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.isArrestWarran} value={isArrestWarran}/> 
                </Grid> 
                {
                    controls.isArrestWarran.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.nameCourtePlace} value={nameCourtePlace}/>
                            </Grid> 
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.caseFirWarrantNumber} value={caseFirWarrantNumber}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.lawSections} value={lawSections}/>
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.isCriminalOffence} value={isCriminalOffence}/>
                </Grid>
                {
                    controls.isCriminalOffence.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.nameCourtePlace_0} value={nameCourtePlace_0}/>
                            </Grid> 
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.caseFirWarrantNumber_0} value={caseFirWarrantNumber_0}/>  
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.lawSections_0} value={lawSections_0}/>
                            </Grid>
                        </Fragment>
                    ) : ''
                } 
                <Grid item xs={12}> 
                     <PreviewBox lable={controls.isRefusedDenied} value={isRefusedDenied}/>
                </Grid>
                {
                    controls.isRefusedDenied.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.refusalReason} value={refusalReason}/>
                            </Grid>
                        </Fragment>
                    ) : ''
                } 
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.isImpoundRevoked} value={isImpoundRevoked}/>
                </Grid>
                {
                    controls.isImpoundRevoked.value ? (
                        <Fragment>
                            <Grid item xs={12}>
                                <Typography align="left" variant="h6" gutterBottom>Impounded/ Revoked Passport Details</Typography>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.impoundRevokedPassportNo} value={impoundRevokedPassportNo}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.reasonImpoundRevocation} value={reasonImpoundRevocation}/>
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.isPoliticalAsylum} value={isPoliticalAsylum}/>
                </Grid>
                {
                    controls.isPoliticalAsylum.value ? (
                        <Fragment>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.country} value={country}/>
                            </Grid>
                        </Fragment>
                    ) : ''
                }
                
                <Grid item xs={12}> 
                    <PreviewBox lable={controls.isEmerCert} value={isEmerCert}/>
                </Grid>
                {
                    controls.isEmerCert.value ? (
                        <Fragment>
                             <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.emerCirtNo} value={emerCirtNo}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                 <PreviewBox lable={controls.emerCirtDate} value={emerCirtDate}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.emerCirtCountry} value={emerCirtCountry}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.issueAuthority} value={issueAuthority}/>
                            </Grid>
                            <Grid item md={4} sm={12} xs={12}> 
                                <PreviewBox lable={controls.reasonIssuing} value={reasonIssuing}/>
                            </Grid>
                        </Fragment>
                    ) : ''
                } 
            </Grid>  
        </Fragment>
    );
}

export default otherDetailsPreview;
