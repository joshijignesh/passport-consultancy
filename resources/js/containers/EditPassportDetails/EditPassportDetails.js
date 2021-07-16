import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router'
import axios from '../../shared/axios'; 
import Typography from '@material-ui/core/Typography'; 
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';  
import Service from '../../components/Service/Service'; 
import Grid from '@material-ui/core/Grid';
import ApplicantDetails from '../../components/ApplicantDetails/ApplicantDetails';
import FamilyDetails from '../../components/FamilyDetails/FamilyDetails';
import PresentResi from '../../components/PresentResi/PresentResi';
import EmerContDetails from '../../components/EmerContDetails/EmerContDetails';
import PrevPassport from '../../components/PrevPassport/PrevPassport';
import OtherDetails from '../../components/OtherDetails/OtherDetails';
import DocmentDetails from '../../components/DocumentDetails/DocumentDetails'; 
import { updateObject, checkValidity } from '../../shared/utility'; 
import Loading from '../../components/UI/Loading/Loading';
import AlertModel from '../../components/UI/AlertModel/AlertModel';



 
 
class EditPassportDetails extends Component {
     state = {
         appData: null,
         order_ref: null,
         mobile: null,
         isSaving: null,
         isSavedSuccess: null,
         isSavedFail: null,
     }; 

    componentDidMount(){   
        console.log(this.props);
        if(this.props.location.state && this.props.location.state.editApp){
            axios.get('/order/edit',{
                params:{
                    order_ref: this.props.location.state.editApp.order_ref,
                    mobile: this.props.location.state.editApp.mobile
                }
            })
            .then(res => {
                console.log(res);
                if(res.data){
                    const statedata = JSON.parse(res.data);
                    this.setState({
                        appData : statedata,
                        order_ref: this.props.location.state.editApp.order_ref,
                        mobile: this.props.location.state.editApp.mobile
                    });
                }
            });
        }
        
    }

    componentDidUpdate(prevProps, prevState, snapshot){  
        if(!prevState.appData){
            return;
        }


       /**Updating Applicant form location dependents-->**/
       //If birth outside india then fetch Countries
       if(
           this.state.appData.applicantForm.controls.isBirthOutOfIndia.value !== prevState.appData.applicantForm.controls.isBirthOutOfIndia.value ){
            if(this.state.appData.applicantForm.controls.isBirthOutOfIndia.value === 'yes'){ 
                axios.get('countries')
                .then(res => { 
                     this.elementConfigHandler('applicantForm', 'country', res.data);
                });
            }else{
                const options = [
                    {
                        value: '101', displayValue: 'India'
                    }
                ]
                this.elementConfigHandler('applicantForm', 'country', options, '101');
            }
           
       } 

       
       //If Country is India Fetch States
        if(
            this.state.appData.applicantForm.controls.country.value !== prevState.appData.applicantForm.controls.country.value ){
            if(this.state.appData.applicantForm.controls.country.value === '101'){
                if(!this.state.appData.applicantForm.controls.state.value){
                    axios.get('states/101')
                    .then(res => { 
                        this.elementConfigHandler('applicantForm', 'state', res.data);
                    });
                }
               
            }else{
                const options = [ ];
                this.elementConfigHandler('applicantForm', 'state', options);
            }
            
        }

        //On State Update fetch District
        if(this.state.appData.applicantForm.controls.state.value !==               prevState.appData.applicantForm.controls.state.value ){
 

            if(this.state.appData.applicantForm.controls.country.value === '101'){ 
                axios.get('cities/'+this.state.appData.applicantForm.controls.state.value)
                .then(res => {  
                    if(prevState.appData.applicantForm.controls.state.value){
                        this.elementConfigHandler('applicantForm', 'district', res.data);
                    }else{
                        this.elementConfigHandler('applicantForm', 'district', res.data,this.state.appData.applicantForm.controls.district.value);
                    }
                    
                }); 
            }else{
                const options = [ ];
                this.elementConfigHandler('applicantForm', 'district', options);
            }
            
        }
        /**<--Updating Applicant form location dependents**/

        
        /**Updating Preset Resi. form location dependents-->**/

        //On State Update fetch District
        if(this.state.appData.presentResiForm.controls.state_province_n.value !==  prevState.appData.presentResiForm.controls.state_province_n.value ){ 
            if(!this.state.appData.presentResiForm.controls.isPresentOutOfIndia.value){ 
                axios.get('cities/'+this.state.appData.presentResiForm.controls.state_province_n.value)
                .then(res => {  
                    if(prevState.appData.presentResiForm.controls.state_province_n.value){
                        this.elementConfigHandler('presentResiForm', 'district_n', res.data);
                    }else{
                        this.elementConfigHandler('presentResiForm', 'district_n', res.data,this.state.appData.presentResiForm.controls.district_n.value);
                    }
                    
                }); 
            }else{
                const options = [ ];
                this.elementConfigHandler('presentResiForm', 'district_n', options);
            }
            
        }
        
        // On District update fetch Police stations
        if(this.state.appData.presentResiForm.controls.district_n.value !==  prevState.appData.presentResiForm.controls.district_n.value ){ 
            if(!this.state.appData.presentResiForm.controls.isPresentOutOfIndia.value){ 
                axios.get('stations/'+this.state.appData.presentResiForm.controls.district_n.value)
                .then(res => {  
                    if(prevState.appData.presentResiForm.controls.district_n.value){
                        this.elementConfigHandler('presentResiForm', 'police_station_n', res.data);
                    }else{
                        this.elementConfigHandler('presentResiForm', 'police_station_n', res.data,this.state.appData.presentResiForm.controls.police_station_n.value);
                    }
                    
                }); 
            }else{
                const options = [ ];
                this.elementConfigHandler('presentResiForm', 'police_station_n', options);
            }
            
        }

        //Fetch Country on Switching isPresentOutOfIndia to true
        if(this.state.appData.presentResiForm.controls.isPresentOutOfIndia.value !==               prevState.appData.presentResiForm.controls.isPresentOutOfIndia.value ){ 
            if(this.state.appData.presentResiForm.controls.isPresentOutOfIndia.value){
                axios.get('countries')
                .then(res => { 
                     this.elementConfigHandler('presentResiForm', 'country', res.data);
                });
            } 
        }

        //Fetch Country on Switching isPermanentSameAsPresent to False
        if(this.state.appData.presentResiForm.controls.isPermanentSameAsPresent.value !==               prevState.appData.presentResiForm.controls.isPermanentSameAsPresent.value ){ 
            if(!this.state.appData.presentResiForm.controls.isPermanentSameAsPresent.value){
                axios.get('countries')
                .then(res => { 
                     this.elementConfigHandler('presentResiForm', 'country_temp', res.data);
                });
            } 
        }


        /**<--Updating Preset Resi. form location dependents**/

        /**Updating otherDetailsForm. form location dependents-->**/
        //Fetch Countries when isPoliticalAsylum switched to true
            if(this.state.appData.otherDetailsForm.controls.isPoliticalAsylum.value !==               prevState.appData.otherDetailsForm.controls.isPoliticalAsylum.value ){ 
                if(this.state.appData.otherDetailsForm.controls.isPoliticalAsylum.value){
                    axios.get('countries')
                    .then(res => { 
                        this.elementConfigHandler('otherDetailsForm', 'country', res.data);
                    });
                } 
            }
        /**<--Updating otherDetailsForm. form location dependents**/ 

        /*Saving Data */
        if(this.state.isSaving !== prevState.isSaving && this.state.isSaving){
            axios.post('order/updateappdata', {
                appData: JSON.stringify(this.state.appData),
                order_ref: this.state.order_ref,
                mobile: this.state.mobile
            })
            .then(res => {
                if(res.data.status){
                    this.setState({isSaving: false, isSavedSuccess: true, isSavedFail: false});
                }else{
                    this.setState({isSaving: false, isSavedSuccess: false, isSavedFail: true});
                }
            })
            .catch(err => {
                 this.setState({isSaving: false, isSavedSuccess: false, isSavedFail: true});
            });
        }
    }

    elementConfigHandler = (formIdentifier, controlIdentifier, updatedOptions, value="") => { 
        const updatedElementConfig = updateObject(this.state.appData[formIdentifier].controls[controlIdentifier].elementConfig, {options:[...updatedOptions]});
        const updatedControl = updateObject(this.state.appData[formIdentifier].controls[controlIdentifier], {elementConfig: updatedElementConfig, value: value});
        const updatedFormControls = updateObject(this.state.appData[formIdentifier].controls,{[controlIdentifier]: updatedControl});
        const updatedform = updateObject(this.state.appData[formIdentifier], {controls: updatedFormControls}); 
        const updatedAppData = updateObject(this.state.appData, {[formIdentifier]: updatedform});
        this.setState({appData: updatedAppData}); 
    }
    inputChangedHandler = (event, inputIdentifier, sectionIdentifier) => { 
        let updatedFormElement = ''; 
        if(inputIdentifier === "applyFor" || inputIdentifier === "typeOfApplication" || inputIdentifier === "typeOfpassportBooklet"){
            return;
        }

        if(
            this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'select' || 
            this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'input' ||
            this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'radio' || 
            this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'textarea'
            ){
            updatedFormElement = updateObject(this.state.appData[sectionIdentifier].controls[inputIdentifier], {
                value: event.target.value ? event.target.value : '',
                valid: checkValidity(event.target.value ? event.target.value : (event.target.checked ? true: false), this.state.appData[sectionIdentifier].controls[inputIdentifier].validation ),
                touched: true
            });
        } 

        if( 
            this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'checkboxGroup'  ||
            this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'checkbox'  ||
            this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'switch'
            ){
            updatedFormElement = updateObject(this.state.appData[sectionIdentifier].controls[inputIdentifier], {
                value: event.target.checked ? true : false,
                valid: checkValidity(event.target.value ? event.target.value : (event.target.checked ? true: false), this.state.appData[sectionIdentifier].controls[inputIdentifier].validation ),
                touched: true
            });
        } 


        if(this.state.appData[sectionIdentifier].controls[inputIdentifier].elementType === 'date'){
            updatedFormElement = updateObject(this.state.appData[sectionIdentifier].controls[inputIdentifier], {
                value: event,
                valid: checkValidity(event, this.state.appData[sectionIdentifier].controls[inputIdentifier].validation ),
                touched: true
            });
        } 
        
        const updatedForm  = updateObject(this.state.appData[sectionIdentifier].controls, {
            [inputIdentifier]: updatedFormElement
        });

        // let formIsValid = true;
        // for(let inputIdentifier in updatedForm){ 
        //         formIsValid = updatedForm[inputIdentifier].valid && formIsValid; 
        // } 

        let steplabels = [...this.state.appData.steplabels];
        if(inputIdentifier=== 'applyFor'){
            if(event.target.value === 'reissue'){
                steplabels[5].label = 'Enter details of latest held/existing/lost/damaged Ordinary Passport';
            }else{
                steplabels[5].label = 'Previous Passport/ Application Details';
            }
          
        }

        const updatedAppData = updateObject(this.state.appData,{
            [sectionIdentifier]:{controls: updatedForm, formIsValid: true},
            steplabels: [...steplabels]
          } );

         this.setState({appData: updatedAppData}); 
    }

    

    handleNext = () => {
        this.setState(prevState => ({
            appData: updateObject(this.state.appData, { activeStep: prevState.appData.activeStep + 1  })
        })); 
    };

    handleBack = () => {
        this.setState(prevState => ({
            appData: updateObject(this.state.appData, { activeStep: prevState.appData.activeStep - 1  })
        })); 
    };

  

  
    haldleLabelClick = (step) =>{
        this.setState(prevState => ({
            appData: updateObject(this.state.appData, { activeStep: step })
        })); 
    }
    
    handleSaveAppdata = () => {
        this.setState({isSaving: true});
    }

    handleAlertModalClose = () => {
        this.setState({isSaving: false, isSavedFail: false, isSavedSuccess: false});
    }
    render() { 
        let alertText = null;
        let alertIdentifier = null;
        let isLoading = false;
        let isAlertModalOpen = false;
        if((!this.state.appData || this.state.isSaving)){
            isLoading = true;
        }
        if(this.state.isSavedSuccess){
            alertText = "Successfully Saved";
            alertIdentifier = "success"
        }

        if(this.state.isSavedFail){
            alertText = "Saving Failed";
            alertIdentifier = "failed"
        }

        if(this.state.isSavedFail || this.state.isSavedSuccess){
            isAlertModalOpen = true;
        }
        return ( 
            <Fragment>  
                {this.state.appData ? (
                    <Fragment>
                        <Typography color="primary" align="right"><b>Order ID: </b>{ this.state.order_ref }</Typography>
                        <Typography color="primary" align="right"><b>Mobile: </b>{ this.state.mobile }</Typography>
                        <Stepper activeStep={this.state.appData.activeStep} orientation="vertical">
                        { this.state.appData.steplabels.map((step, index) => {

                            return (
                                <Step key={step.label}>
                                    <StepLabel error={!this.state.appData[step.key].formIsValid} onClick={() => this.haldleLabelClick(index)} style={{ padding:'2px', cursor: 'pointer' }}>{step.label}</StepLabel>
                                    <StepContent>
                                    {(() => {
                                        switch (index) {
                                            case 0:
                                                return (<Service 
                                                            controls={this.state.appData.serviceForm.controls} 
                                                            formIsValid={this.state.appData.serviceForm.formIsValid}  
                                                            activeStep={this.state.appData.activeStep}
                                                            steps = {this.state.appData.steplabels} 
                                                            handleBack={this.handleBack} 
                                                            handleNext={this.handleNext} 
                                                            changed={this.inputChangedHandler} 
                                                            isEditMode={true}/>
                                                        );
                                                break;
                                            case 1:
                                                return (<ApplicantDetails 
                                                            controls={this.state.appData.applicantForm.controls} 
                                                            formIsValid={this.state.appData.applicantForm.formIsValid}  
                                                            activeStep={this.state.appData.activeStep}
                                                            steps={this.state.appData.steplabels} 
                                                            handleBack={this.handleBack} 
                                                            handleNext={this.handleNext} 
                                                            changed={this.inputChangedHandler}/>
                                                );
                                                break;
                                            case 2:
                                                return (<FamilyDetails 
                                                    controls={this.state.appData.familyForm.controls} 
                                                    formIsValid={this.state.appData.familyForm.formIsValid}  
                                                    activeStep={this.state.appData.activeStep}
                                                    steps={this.state.appData.steplabels} 
                                                    handleBack={this.handleBack} 
                                                    handleNext={this.handleNext} 
                                                    changed={this.inputChangedHandler}/>
                                                );
                                                break;
                                            case 3:
                                                return (<PresentResi 
                                                    controls={this.state.appData.presentResiForm.controls} 
                                                    formIsValid={this.state.appData.presentResiForm.formIsValid}  
                                                    activeStep={this.state.appData.activeStep}
                                                    steps={this.state.appData.steplabels} 
                                                    handleBack={this.handleBack} 
                                                    handleNext={this.handleNext} 
                                                    changed={this.inputChangedHandler}/>
                                                );
                                                break;
                                            case 4: 
                                                return (<EmerContDetails 
                                                    controls={this.state.appData.emerContDetailsForm.controls} 
                                                    formIsValid={this.state.appData.emerContDetailsForm.formIsValid}  
                                                    activeStep={this.state.appData.activeStep}
                                                    steps={this.state.appData.steplabels} 
                                                    handleBack={this.handleBack} 
                                                    handleNext={this.handleNext} 
                                                    changed={this.inputChangedHandler}/>  
                                                );
                                                break;
                                            case 5: 
                                                return (<PrevPassport 
                                                    controls={this.state.appData.prevPassportForm.controls} 
                                                    formIsValid={this.state.appData.prevPassportForm.formIsValid}  
                                                    activeStep={this.state.appData.activeStep}
                                                    steps={this.state.appData.steplabels} 
                                                    handleBack={this.handleBack} 
                                                    handleNext={this.handleNext} 
                                                    changed={this.inputChangedHandler} 
                                                    isReissue= { this.state.appData.serviceForm.controls.applyFor.value === 'reissue' }/>  
                                                );
                                                break; 
                                            case 6: 
                                                return (<OtherDetails 
                                                    controls={this.state.appData.otherDetailsForm.controls} 
                                                    formIsValid={this.state.appData.otherDetailsForm.formIsValid}  
                                                    activeStep={this.state.appData.activeStep}
                                                    steps={this.state.appData.steplabels} 
                                                    handleBack={this.handleBack} 
                                                    handleNext={this.handleNext} 
                                                    changed={this.inputChangedHandler} />  
                                                );
                                                break;  
                                            case 7: 
                                                return (<DocmentDetails 
                                                    controls={this.state.appData.documentDetailsForm.controls} 
                                                    formIsValid={this.state.appData.documentDetailsForm.formIsValid}  
                                                    activeStep={this.state.appData.activeStep}
                                                    steps={this.state.appData.steplabels} 
                                                    handleBack={this.handleBack} 
                                                    handleNext={this.handleNext} 
                                                    changed={this.inputChangedHandler} />  
                                                );
                                                break;
                                                
                                            default:
                                            return 'Unknown step';
                                        }
                                    })()} 
                                
                                    </StepContent>
                                </Step>
                            );
                        } )}
                    </Stepper>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item sm={6} xs={12}> 
                            <Button variant="contained" color="primary" onClick={this.handleSaveAppdata}>Update</Button>
                        </Grid> 
                    </Grid>
                    <Loading isOpen={isLoading} loadingText='Saving Data...' />
                    <AlertModel 
                        isOpen={isAlertModalOpen} 
                        alertTextMain={alertText} alertTextSecondary="" alertIdentifier={alertIdentifier} handleClose={this.handleAlertModalClose}/>
                </Fragment>
                ): <Loading isOpen={isLoading} loadingText='Getting Order Data...'/>}   
            </Fragment> 
        );
    }
}

export default withRouter(EditPassportDetails);
