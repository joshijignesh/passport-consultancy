import React, { Component, Fragment } from 'react';  
import { modifyControls } from '../../controls';
import { updateObject, checkValidity } from '../../shared/utility'; 
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Input from '../../components/UI/Input/Input';
import SectionHead from '../../components/UI/SectionHead/SectionHead'; 
 
class ModifyApplication extends Component {
     state = {  
        modifyForm: {
            controls: {...modifyControls},
            formIsValid: true
        }, 
    }; 

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

        
        const updatedForm  = updateObject(this.state[sectionIdentifier].controls, {
            [inputIdentifier]: updatedFormElement
        });
 
 
         this.setState({
              [sectionIdentifier]:{controls: updatedForm, formIsValid: true}  
        }); 
    }
    
    modifyAppHandler = () => {
        console.log('Lock');
        if(this.state.modifyForm.controls.orderRefNo.value && this.state.modifyForm.controls.mobileNo.value){
            this.props.history.push('/edit', 
            {
                editApp:{
                    order_ref:this.state.modifyForm.controls.orderRefNo.value , 
                    mobile: this.state.modifyForm.controls.mobileNo.value 
                }
            });
        }       
    }

    render() {       
        return ( 
            <Fragment>   
                <SectionHead>YOU CAN MODIFY YOUR SUBMITTED APPLICATIONS HERE</SectionHead>  
                <Grid container justify="center" alignItems="center" alignContent="center" style={{ margin:'75px 0' }} spacing={2}>
                    <Grid item md={4} sm={12} xs={12}>
                        <Input  
                            {...this.state.modifyForm.controls.orderRefNo}
                            shouldValidate={true} 
                            changed={(event) => this.inputChangedHandler(event, 'orderRefNo', 'modifyForm')} 
                            /> 
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Input  
                            {...this.state.modifyForm.controls.mobileNo}
                            shouldValidate={true} 
                            changed={(event) => this.inputChangedHandler(event, 'mobileNo', 'modifyForm')} 
                            /> 
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Button variant="contained" color="primary" onClick={this.modifyAppHandler}>
                            Modify
                        </Button>
                    </Grid>
                </Grid>
                <Divider/>
                <Typography align="center" style={{margin:'20px 0'}}>
                    NOTE : You can also track your order once payment against the order id is done from  <Link to="/track">here.</Link> 
                </Typography> 
            </Fragment> 
        );
    }
}

export default ModifyApplication;
