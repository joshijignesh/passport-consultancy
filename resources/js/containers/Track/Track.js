import React, { Component, Fragment } from 'react';
import axios from '../../shared/axios';
import Layout from '../../hoc/Layout/Layout'; 
import { withTheme } from '@material-ui/core/styles';
import { modifyControls } from '../../controls';
import { updateObject, checkValidity } from '../../shared/utility'; 
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import Divider from '@material-ui/core/Divider'; 
import Input from '../../components/UI/Input/Input';
import SectionHead from '../../components/UI/SectionHead/SectionHead';
import Loading from '../../components/UI/Loading/Loading';

class Track extends Component {
     state = {  
        trackForm: {
            controls: {...modifyControls},
            formIsValid: true
        }, 
        isTracking: false,
        isTrackSuccess: false,
        isTrackFailed: false,
        orderStatus: null
    }; 

    componentDidUpdate(prevProps, prevState){
        if(prevState.isTracking !== this.state.isTracking){
            axios.post('order/track',{
                order_ref: this.state.trackForm.controls.orderRefNo.value,
                mobile: this.state.trackForm.controls.mobileNo.value
            }).then(res => {
                console.log(res);
                if(res.data.orderstatus){
                    this.setState({isTracking: false, isTrackSuccess: true, isTrackFailed: false, orderStatus: res.data.orderstatus});
                }else{
                    this.setState({isTracking: false, isTrackSuccess: false, isTrackFailed: true});
                }
            }).catch(err => {
                    this.setState({isTracking: false, isTrackSuccess: false, isTrackFailed: true});
            })
        }
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
 
 
        
        const updatedForm  = updateObject(this.state[sectionIdentifier].controls, {
            [inputIdentifier]: updatedFormElement
        });
 
 
         this.setState({
              [sectionIdentifier]:{controls: updatedForm, formIsValid: true} 
        }); 
    }
    
    handleTrack = () => {
        if(this.state.trackForm.controls.orderRefNo.value && this.state.trackForm.controls.mobileNo.value){
            this.setState({isTracking: true});
        }
    }
    render() {       
        return ( 
            <Fragment>   
                <SectionHead>You Can Track Your Order Here</SectionHead>  
                <Grid container justify="center" alignItems="center" alignContent="center" style={{ margin:'75px 0' }} spacing={2}>
                    <Grid item md={4} sm={12} xs={12}>
                        <Input  
                            {...this.state.trackForm.controls.orderRefNo}
                            shouldValidate={true} 
                            changed={(event) => this.inputChangedHandler(event, 'orderRefNo', 'trackForm')} 
                            /> 
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <Input  
                            {...this.state.trackForm.controls.mobileNo}
                            shouldValidate={true} 
                            changed={(event) => this.inputChangedHandler(event, 'mobileNo', 'trackForm')} 
                            /> 
                    </Grid>
                    <Grid item xs={12} align="center">
                        <Button variant="contained" color="primary" onClick={this.handleTrack}>
                            Track
                        </Button>
                    </Grid>
                    <Grid item xs={12} align="center">
                        {
                            this.state.isTrackSuccess ? (<Typography color="primary">{ this.state.orderStatus }</Typography>) : ''
                        }
                        {
                            this.state.isTrackFailed ? (<Typography color="error">There are no records against the provided values, please recheck and try again, Thank You.</Typography>) : ''
                        }
                        
                        
                    </Grid>
                </Grid>
                <Divider/>
                <Typography align="center" style={{margin:'20px 0'}}>
                        Note : You can only track your order or can modify and complete the application 
                </Typography> 
                <Loading isOpen={ this.state.isTracking } loadingText="Tracking your order..."/>
            </Fragment> 
        );
    }
}

export default withTheme(Track);
