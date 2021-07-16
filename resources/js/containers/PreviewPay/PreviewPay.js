import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router';
import axios from '../../shared/axios';
import { orderControls } from '../../controls/order';
import { updateObject,checkValidity } from '../../shared/utility';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; 
import Typography from '@material-ui/core/Typography'; 
import Divider from '@material-ui/core/Divider'; 

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SectionHead from '../../components/UI/SectionHead/SectionHead';
import ServicePreview from '../../components/Service/ServicePreview';
import ApplicantDetailsPreview from '../../components/ApplicantDetails/ApplicantDetailsPreview';
import FamilyDetailsPreview from '../../components/FamilyDetails/FamilyDetailsPreview';
import PresentRestPreview from '../../components/PresentResi/PresentRestPreview';
import EmerContDetailsPreview from '../../components/EmerContDetails/EmerContDetailsPreview';
import PrevPassportPreview from '../../components/PrevPassport/PrevPassportPreview';
import OtherDetailsPreview from '../../components/OtherDetails/OtherDetailsPreview';
import DocumentDetailsPreview from '../../components/DocumentDetails/DocumentDetailsPreview';
import Input from '../../components/UI/Input';
import Loading from '../../components/UI/Loading/Loading';
import AlertModel from '../../components/UI/AlertModel/AlertModel';  

class PreviewPay extends Component {
    state = {
        appData: null,
        orderForm: { ...orderControls}, 
        orderData : null, 
        orderOption: null,
        paymentData: null,
        loadingText: null,
        isOrderFormValid: false,
        isOrderFormOpen: false,
        isCreatingOrder: false,
        isCreatingOrderFailed: false,
        isCheckingOut: false,
        isVerifyingPayment: false,
        isPaymentVerified : null,
        order_ref: null,
        alertModel: {
            isOpen: false, 
            alertTextMain: null,
            alertTextSecondary: null, 
            alertIdentifier: null
        }
       
    }

    componentDidMount(){  
        if(this.props.location.state.data){
            this.setState({appData: this.props.location.state.data});
        }else{
            this.props.history.push('/');
        }
        
    }

    componentDidUpdate(prevProps,prevState){
        console.log(this.state);
        //Creating Order
        if((prevState.isCreatingOrder !== this.state.isCreatingOrder && this.state.isCreatingOrder)){
            axios.post('order/create', {
                appdata: JSON.stringify(this.state.appData),
                name: this.state.orderForm.name.value,
                email: this.state.orderForm.email.value,
                mobile: this.state.orderForm.mobile.value,
                message: this.state.orderForm.message.value,
                applyFor: this.state.appData.serviceForm.controls.applyFor.value,
                typeOfApplication: this.state.appData.serviceForm.controls.typeOfApplication.value,
                typeOfpassportBooklet: this.state.appData.serviceForm.controls.typeOfpassportBooklet.value,
                isLostDamaged: (this.state.appData.serviceForm.controls.specifyReason_0.value === 'lost_passport' || this.state.appData.serviceForm.controls.specifyReason_0.value === 'demaged_passport'),
                isExpired: this.state.appData.serviceForm.controls.hasPassportExpired.value === 'yes',
                dateOfBirth: this.state.appData.applicantForm.controls.dateOfBirth.value

            }).then(res => {  
                const responseData = res.data;
                console.log(res);
                if(res.data.status  === 'failed'){
                    this.setState({isCreatingOrder: false, isCreatingOrderFailed: true, loadingText: null}); 
                }

                if(responseData.orderOption){
                    responseData.orderOption.handler = (res) => this.handlePaymentResponse(res);  
                    responseData.orderOption.modal.ondismiss = this.handlePaymentModalDismiss;
                    this.setState({isCreatingOrder: false, loadingText: null, isCheckingOut:true, ...responseData});
                }  
               
            })
            .catch(err => {
                console.log(err);
                this.setState({isCreatingOrder: false, loadingText: null, isCreatingOrderFailed: true});
            })
        }

        //Failed Order Creation
        if(prevState.isCreatingOrderFailed !== this.state.isCreatingOrderFailed && this.state.isCreatingOrderFailed){
            this.setState({alertModel: 
                                { isOpen: true, 
                                    alertTextMain: "Order Creation Failed",
                                    alertTextSecondary: "Please provide required details.",
                                    alertIdentifier: 'isCreatingOrderFailed'
                                }
                            });
        }

        //Payment Process
        if(prevState.isCheckingOut !== this.state.isCheckingOut && this.state.isCheckingOut){
            // const rzp1 = new Razorpay(this.state.orderOption);
            // rzp1.open();
        }

        if(prevState.isCheckingOut !== this.state.isCheckingOut && !this.state.isCheckingOut){
            document.body.setAttribute('style', 'overflow: auto');
        }

        //Verifying Payment
        // if(prevState.isVerifyingPayment !== this.state.isVerifyingPayment && this.state.isVerifyingPayment){
        //     axios.post('/order/paymentverify', {
        //         razorpay_signature: this.state.paymentData.razorpay_signature,
        //         razorpay_payment_id: this.state.paymentData.razorpay_payment_id,
        //         razorpay_order_id: this.state.paymentData.razorpay_order_id
        //     })
        //     .then(res => {
        //         console.log(res);
        //         if(res.data.order_ref){
        //             this.setState({order_ref: res.data.order_ref, isVerifyingPayment: false, isPaymentVerified: true, loadingText: null})
        //         }else{
        //             this.setState({isVerifyingPayment: false, isPaymentVerified: false, loadingText: null})
        //         }
               
        //     }).catch(err => {
        //         console.log(err);
        //         this.setState({isVerifyingPayment: false, isPaymentVerified: false, loadingText: null})
        //     });
        // }

        //Payment Verified  
         if(prevState.isPaymentVerified !== this.state.isPaymentVerified && this.state.isPaymentVerified){
            this.setState({alertModel: 
                                { isOpen: true, 
                                    alertTextMain: "Payment Successful",
                                    alertTextSecondary: "Please note your order reference : '" + this.state.order_ref + "' for future reference.",
                                    alertIdentifier: 'isPaymentVerified'
                                }
                            });
            }
        // Payment Failed
        if(prevState.isPaymentVerified !== this.state.isPaymentVerified && !this.state.isPaymentVerified){
            this.setState({alertModel: 
                                { isOpen: true, 
                                    alertTextMain: "Payment Failed",
                                    alertTextSecondary: "Contact Support if amount debited from your account",
                                    alertIdentifier: 'isPaymentFailed'
                                }
                            });
            }
 
    };
    inputChangedHandler = (event, inputIdentifier) => { 
        let updatedFormElement = '';
        
        updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
            value: event.target.value ,
            valid: checkValidity( event.target.value, this.state.orderForm[inputIdentifier].validation ),
            touched: true
        }); 
         
        const updatedOrderForm  = updateObject(this.state.orderForm, {
            [inputIdentifier]: updatedFormElement
        }); 
        
        let isOrderFormValid = true;
        for(let inputIdentifier in updatedOrderForm){ 
            isOrderFormValid = updatedOrderForm[inputIdentifier].valid && isOrderFormValid; 
        }

         this.setState({
            orderForm: updatedOrderForm,
            isOrderFormValid: isOrderFormValid
        }); 
    }


    handlePaymentResponse = (res) => {  
        this.setState({isCheckingOut: false, isVerifyingPayment:true, paymentData: res, loadingText: "Awaiting Payment Confirmation..."});
    }

    handlePaymentModalDismiss = () => {
        this.setState({isCheckingOut: false});
    }

    handleEdit = () => {
        this.props.history.push('/');
    }

    handleToOrder = () => {
        this.setState({isOrderFormOpen: true});
    }
    handleClose = () => {
        this.setState({isOrderFormOpen: false});
    }

    handleCheckout = () => {
        this.setState({isOrderFormOpen:false, isCreatingOrder: true, loadingText: 'Creating Order...'});
    }

    handleAlertModalClose = (alertIdentifier) => {
        if(alertIdentifier === 'isCreatingOrderFailed'){
            this.props.history.push('/');
        }
        if(alertIdentifier === 'isPaymentVerified'){
            localStorage.removeItem('formState');
            window.location.href = '/';
        }
        this.setState({alertModel: 
            { isOpen: false, 
                alertTextMain: null,
                alertTextSecondary: null, 
                alertIdentifier: null
            }
        });
    }
    render(){   
       return (
        <Fragment> 
            <Typography color="primary" variant="h4" component="h1" align="center" style={{ marginBottom:'20px' }}>Preview Application</Typography> 
                {
                    this.state.appData ? (
                        <Fragment> 
                            <SectionHead>Service Required</SectionHead>  
                            <ServicePreview controls={this.state.appData.serviceForm.controls}/>
                            <Divider style={{ margin: '30px 0' }}/>
                            <SectionHead>Applicant Details</SectionHead> 
                            <ApplicantDetailsPreview controls={this.state.appData.applicantForm.controls}/>
                            <Divider style={{ margin: '30px 0' }}/>
                            <SectionHead>Family Details</SectionHead> 
                            <FamilyDetailsPreview controls={this.state.appData.familyForm.controls}/>
                            <Divider style={{ margin: '30px 0' }}/>
                            <SectionHead>Present Residential Address Details</SectionHead>  
                            <PresentRestPreview controls={this.state.appData.presentResiForm.controls}/>
                            <Divider style={{ margin: '30px 0' }}/>
                            <SectionHead>Emergency Contact Details</SectionHead> 
                            <EmerContDetailsPreview controls={this.state.appData.emerContDetailsForm.controls}/>
                            <Divider style={{ margin: '30px 0' }}/>
                            {
                                this.state.appData.serviceForm.controls.applyFor.value === 'reissue' ? 
                                <SectionHead>Details of latest held/existing/lost/damaged Ordinary Passport</SectionHead> : 
                                <SectionHead>Previous Passport/ Application Details</SectionHead>
                            } 
                            <PrevPassportPreview controls={this.state.appData.prevPassportForm.controls} isReissue={this.state.appData.serviceForm.controls.applyFor.value === 'reissue'}/>
                            <Divider style={{ margin: '30px 0' }}/>
                            <SectionHead>Other Details</SectionHead> 
                            <OtherDetailsPreview controls={this.state.appData.otherDetailsForm.controls}/>
                            <Divider style={{ margin: '30px 0' }}/>
                            <SectionHead>Documents Submitted as Proof</SectionHead> 
                            <DocumentDetailsPreview controls={this.state.appData.documentDetailsForm.controls}/>
                            <Grid container justify="center" alignItems="center" spacing={2}> 
                                <Button onClick={this.handleEdit}>
                                    Edit
                                </Button>
                                <Button variant="contained" color="primary" onClick={this.handleToOrder}>
                                    Order Now
                                </Button>  
                            </Grid>  
                            <Dialog open={this.state.isOrderFormOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Order Details</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                    Please provide below billing details to complete this order.
                                    </DialogContentText>
                                    <Grid container  spacing={2}>
                                        <Grid item xs={12}>
                                            <Input  
                                                {...this.state.orderForm.name}
                                                shouldValidate={true} 
                                                changed={(event) => this.inputChangedHandler(event, 'name')} 
                                                />   
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <Input  
                                                {...this.state.orderForm.email}
                                                shouldValidate={true} 
                                                changed={(event) => this.inputChangedHandler(event, 'email')} 
                                                />   
                                        </Grid>
                                        <Grid item sm={6} xs={12}>
                                            <Input  
                                                {...this.state.orderForm.mobile}
                                                shouldValidate={true} 
                                                changed={(event) => this.inputChangedHandler(event, 'mobile')} 
                                                />   
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Input  
                                                {...this.state.orderForm.message}
                                                shouldValidate={false} 
                                                changed={(event) => this.inputChangedHandler(event, 'message')} 
                                                />   
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={this.handleCheckout} color="primary" variant="contained" disabled ={!this.state.isOrderFormValid}>
                                        Checkout
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Loading isOpen={this.state.isCreatingOrder || this.state.isVerifyingPayment} loadingText={this.state.loadingText}/>
                            <AlertModel {...this.state.alertModel} handleClose={() => this.handleAlertModalClose(this.state.alertModel.alertIdentifier)}/>
                        </Fragment>
                    ) : 'Plase fill Application'
                } 
        </Fragment>
       );
    }
}

export default withRouter(PreviewPay);