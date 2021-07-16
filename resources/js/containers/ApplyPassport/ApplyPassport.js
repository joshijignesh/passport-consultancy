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
import { serviceControls, applicantControls, familyControls, presentResiControls, emerContDetailsControls, prevPassportControls, otherDetailsControls, documentControls } from '../../controls';
import { updateObject, checkValidity } from '../../shared/utility'; 



 
 
class ApplyPassport extends Component {
     state = { 
        activeStep : 0,
        steplabels: [
            {label: 'Service Required', key: 'serviceForm'},
            {label: 'Applicant Details', key: 'applicantForm'},
            {label: 'Family Details(Father/Mother/Legal Guardian details; at least one is mandatory.)', key: 'familyForm'},
            {label: 'Present Residential Address Details (where applicant presently resides)', key: 'presentResiForm'},
            {label: 'Emergency Contact Details', key: 'emerContDetailsForm'},
            {label: 'Previous Passport/ Application Details', key: 'prevPassportForm'},
            {label: 'Other Details', key: 'otherDetailsForm'},
            {label: 'Documents Submitted as Proof', key: 'documentDetailsForm'}, 
        ],
        serviceForm: {
            controls: {...serviceControls},
            formIsValid: true
        },
        applicantForm: {
            controls: {...applicantControls},
            formIsValid: true
        },
        familyForm: {
            controls: {...familyControls},
            formIsValid: true
        },
        presentResiForm: {
            controls: {...presentResiControls},
            formIsValid: true
        },
        emerContDetailsForm: {
            controls: {...emerContDetailsControls},
            formIsValid: true
        },
        prevPassportForm: {
            controls: {...prevPassportControls},
            formIsValid: true
        },
        otherDetailsForm: {
            controls: {...otherDetailsControls},
            formIsValid: true
        },
        documentDetailsForm: {
            controls: { ...documentControls },
            formIsValid: true
        }
    }; 

    componentDidMount(){  
        if(localStorage.getItem('formState')){
            const formData= JSON.parse(localStorage.getItem('formState')); 
            this.setState({...formData});
        }else{
            axios.get('states/101')
            .then(res => {
                this.elementConfigHandler('applicantForm', 'state', res.data);
            });

            //If Present Address in India fetch All States
            axios.get('states/101')
            .then(res => {
                this.elementConfigHandler('presentResiForm', 'state_province_n', res.data); 
            });
        } 
    }
    componentDidUpdate(prevProps, prevState, snapshot){ 
       /**Updating Applicant form location dependents-->**/
       //If birth outside india then fetch Countries
       if(
           this.state.applicantForm.controls.isBirthOutOfIndia.value !== prevState.applicantForm.controls.isBirthOutOfIndia.value ){
            if(this.state.applicantForm.controls.isBirthOutOfIndia.value === 'yes'){ 
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
            this.state.applicantForm.controls.country.value !== prevState.applicantForm.controls.country.value ){
            if(this.state.applicantForm.controls.country.value === '101'){
                if(!this.state.applicantForm.controls.state.value){
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
        if(this.state.applicantForm.controls.state.value !==               prevState.applicantForm.controls.state.value ){
 

            if(this.state.applicantForm.controls.country.value === '101'){ 
                axios.get('cities/'+this.state.applicantForm.controls.state.value)
                .then(res => {  
                    if(prevState.applicantForm.controls.state.value){
                        this.elementConfigHandler('applicantForm', 'district', res.data);
                    }else{
                        this.elementConfigHandler('applicantForm', 'district', res.data,this.state.applicantForm.controls.district.value);
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
        if(this.state.presentResiForm.controls.state_province_n.value !==  prevState.presentResiForm.controls.state_province_n.value ){ 
            if(!this.state.presentResiForm.controls.isPresentOutOfIndia.value){ 
                axios.get('cities/'+this.state.presentResiForm.controls.state_province_n.value)
                .then(res => {  
                    if(prevState.presentResiForm.controls.state_province_n.value){
                        this.elementConfigHandler('presentResiForm', 'district_n', res.data);
                    }else{
                        this.elementConfigHandler('presentResiForm', 'district_n', res.data,this.state.presentResiForm.controls.district_n.value);
                    }
                    
                }); 
            }else{
                const options = [ ];
                this.elementConfigHandler('presentResiForm', 'district_n', options);
            }
            
        }
        
        // On District update fetch Police stations
        if(this.state.presentResiForm.controls.district_n.value !==  prevState.presentResiForm.controls.district_n.value ){ 
            if(!this.state.presentResiForm.controls.isPresentOutOfIndia.value){ 
                axios.get('stations/'+this.state.presentResiForm.controls.district_n.value)
                .then(res => {  
                    if(prevState.presentResiForm.controls.district_n.value){
                        this.elementConfigHandler('presentResiForm', 'police_station_n', res.data);
                    }else{
                        this.elementConfigHandler('presentResiForm', 'police_station_n', res.data,this.state.presentResiForm.controls.police_station_n.value);
                    }
                    
                }); 
            }else{
                const options = [ ];
                this.elementConfigHandler('presentResiForm', 'police_station_n', options);
            }
            
        }

        //Fetch Country on Switching isPresentOutOfIndia to true
        if(this.state.presentResiForm.controls.isPresentOutOfIndia.value !==               prevState.presentResiForm.controls.isPresentOutOfIndia.value ){ 
            if(this.state.presentResiForm.controls.isPresentOutOfIndia.value){
                axios.get('countries')
                .then(res => { 
                     this.elementConfigHandler('presentResiForm', 'country', res.data);
                });
            } 
        }

        //Fetch Country on Switching isPermanentSameAsPresent to False
        if(this.state.presentResiForm.controls.isPermanentSameAsPresent.value !==               prevState.presentResiForm.controls.isPermanentSameAsPresent.value ){ 
            if(!this.state.presentResiForm.controls.isPermanentSameAsPresent.value){
                axios.get('countries')
                .then(res => { 
                     this.elementConfigHandler('presentResiForm', 'country_temp', res.data);
                });
            } 
        }


        /**<--Updating Preset Resi. form location dependents**/

        /**Updating otherDetailsForm. form location dependents-->**/
        //Fetch Countries when isPoliticalAsylum switched to true
            if(this.state.otherDetailsForm.controls.isPoliticalAsylum.value !==               prevState.otherDetailsForm.controls.isPoliticalAsylum.value ){ 
                if(this.state.otherDetailsForm.controls.isPoliticalAsylum.value){
                    axios.get('countries')
                    .then(res => { 
                        this.elementConfigHandler('otherDetailsForm', 'country', res.data);
                    });
                } 
            }
        /**<--Updating otherDetailsForm. form location dependents**/
        localStorage.setItem('formState', JSON.stringify(this.state));
    }

    elementConfigHandler = (formIdentifier, controlIdentifier, updatedOptions, value="") => { 
        const updatedElementConfig = updateObject(this.state[formIdentifier].controls[controlIdentifier].elementConfig, {options:[...updatedOptions]});
        const updatedControl = updateObject(this.state[formIdentifier].controls[controlIdentifier], {elementConfig: updatedElementConfig, value: value});
        const updatedFormControls = updateObject(this.state[formIdentifier].controls,{[controlIdentifier]: updatedControl});
        const updatedform = updateObject(this.state[formIdentifier], {controls: updatedFormControls}); 
        this.setState({[formIdentifier]: updatedform}); 
    }
    inputChangedHandler = (event, inputIdentifier, sectionIdentifier) => { 
        let updatedFormElement = '';
        if(
            this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'select' || 
            this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'input' ||
            this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'radio' || 
            this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'textarea'
            ){
            updatedFormElement = updateObject(this.state[sectionIdentifier].controls[inputIdentifier], {
                value: event.target.value ? event.target.value : '',
                valid: checkValidity(event.target.value ? event.target.value : (event.target.checked ? true: false), this.state[sectionIdentifier].controls[inputIdentifier].validation ),
                touched: true
            });
        } 

        if( 
            this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'checkboxGroup'  ||
            this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'checkbox'  ||
            this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'switch'
            ){
            updatedFormElement = updateObject(this.state[sectionIdentifier].controls[inputIdentifier], {
                value: event.target.checked ? true : false,
                valid: checkValidity(event.target.value ? event.target.value : (event.target.checked ? true: false), this.state[sectionIdentifier].controls[inputIdentifier].validation ),
                touched: true
            });
        } 


        if(this.state[sectionIdentifier].controls[inputIdentifier].elementType === 'date'){
            updatedFormElement = updateObject(this.state[sectionIdentifier].controls[inputIdentifier], {
                value: event,
                valid: checkValidity(event, this.state[sectionIdentifier].controls[inputIdentifier].validation ),
                touched: true
            });
        } 
        
        const updatedForm  = updateObject(this.state[sectionIdentifier].controls, {
            [inputIdentifier]: updatedFormElement
        });

        // let formIsValid = true;
        // for(let inputIdentifier in updatedForm){ 
        //         formIsValid = updatedForm[inputIdentifier].valid && formIsValid; 
        // } 

        let steplabels = [...this.state.steplabels];
        if(inputIdentifier=== 'applyFor'){
            if(event.target.value === 'reissue'){
                steplabels[5].label = 'Enter details of latest held/existing/lost/damaged Ordinary Passport';
            }else{
                steplabels[5].label = 'Previous Passport/ Application Details';
            }
          
        }
         this.setState({
              [sectionIdentifier]:{controls: updatedForm, formIsValid: true},
              steplabels: [...steplabels]
            }); 
    }

    

    handleNext = () => {
        
        this.setState(prevState => (
            { 
                activeStep: prevState.activeStep + 1
            }
        )) ;
    };

    handleBack = () => {
        this.setState(prevState => (
            { 
                activeStep: prevState.activeStep - 1
            }
        )) ;
    };

    handleReset = () => {
        
       localStorage.removeItem('formState');
       window.location.reload();
    };

    handlePreview = () => {
        this.props.history.push('/preview',{data: this.state});
    }
    haldleLabelClick = (step) =>{
        this.setState({
            activeStep : step
        });
    }
  
    render() {
        const steps = this.state.steplabels;  
        return ( 
            <Fragment>   
                <Stepper activeStep={this.state.activeStep} orientation="vertical">
                    {steps.map((step, index) => {

                        return (
                            <Step key={step.label}>
                                <StepLabel error={!this.state[step.key].formIsValid} onClick={() => this.haldleLabelClick(index)} style={{ padding:'2px', cursor: 'pointer' }}>{step.label}</StepLabel>
                                <StepContent>
                                {(() => {
                                    switch (index) {
                                        case 0:
                                            return (<Service 
                                                        controls={this.state.serviceForm.controls} 
                                                        formIsValid={this.state.serviceForm.formIsValid}  
                                                        activeStep={this.state.activeStep}
                                                        steps = {steps} 
                                                        handleBack={this.handleBack} 
                                                        handleNext={this.handleNext} 
                                                        changed={this.inputChangedHandler}/>
                                                    );
                                            break;
                                        case 1:
                                            return (<ApplicantDetails 
                                                        controls={this.state.applicantForm.controls} 
                                                        formIsValid={this.state.applicantForm.formIsValid}  
                                                        activeStep={this.state.activeStep}
                                                        steps={steps} 
                                                        handleBack={this.handleBack} 
                                                        handleNext={this.handleNext} 
                                                        changed={this.inputChangedHandler}/>
                                            );
                                            break;
                                        case 2:
                                            return (<FamilyDetails 
                                                controls={this.state.familyForm.controls} 
                                                formIsValid={this.state.familyForm.formIsValid}  
                                                activeStep={this.state.activeStep}
                                                steps={steps} 
                                                handleBack={this.handleBack} 
                                                handleNext={this.handleNext} 
                                                changed={this.inputChangedHandler}/>
                                            );
                                            break;
                                        case 3:
                                            {console.log(this.state.presentResiForm.controls)}
                                            return ( 
                                            <PresentResi 
                                                controls={this.state.presentResiForm.controls} 
                                                formIsValid={this.state.presentResiForm.formIsValid}  
                                                activeStep={this.state.activeStep}
                                                steps={steps} 
                                                handleBack={this.handleBack} 
                                                handleNext={this.handleNext} 
                                                changed={this.inputChangedHandler}/>
                                            );
                                            break;
                                        case 4: 
                                            return (<EmerContDetails 
                                                controls={this.state.emerContDetailsForm.controls} 
                                                formIsValid={this.state.emerContDetailsForm.formIsValid}  
                                                activeStep={this.state.activeStep}
                                                steps={steps} 
                                                handleBack={this.handleBack} 
                                                handleNext={this.handleNext} 
                                                changed={this.inputChangedHandler}/>  
                                            );
                                            break;
                                        case 5: 
                                            return (<PrevPassport 
                                                controls={this.state.prevPassportForm.controls} 
                                                formIsValid={this.state.prevPassportForm.formIsValid}  
                                                activeStep={this.state.activeStep}
                                                steps={steps} 
                                                handleBack={this.handleBack} 
                                                handleNext={this.handleNext} 
                                                changed={this.inputChangedHandler} 
                                                isReissue= { this.state.serviceForm.controls.applyFor.value === 'reissue' }/>  
                                            );
                                            break; 
                                        case 6: 
                                            return (<OtherDetails 
                                                controls={this.state.otherDetailsForm.controls} 
                                                formIsValid={this.state.otherDetailsForm.formIsValid}  
                                                activeStep={this.state.activeStep}
                                                steps={steps} 
                                                handleBack={this.handleBack} 
                                                handleNext={this.handleNext} 
                                                changed={this.inputChangedHandler} />  
                                            );
                                            break;  
                                        case 7: 
                                            return (<DocmentDetails 
                                                controls={this.state.documentDetailsForm.controls} 
                                                formIsValid={this.state.documentDetailsForm.formIsValid}  
                                                activeStep={this.state.activeStep}
                                                steps={steps} 
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
                        <Button onClick={this.handleReset}>
                            Reset
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.handlePreview}>
                            Preview and Pay
                        </Button>
                    </Grid> 
                </Grid>   
            </Fragment> 
        );
    }
}

export default withRouter(ApplyPassport);
