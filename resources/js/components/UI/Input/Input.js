import React from 'react';
import PropTypes from 'prop-types';   
import CustomInput from './CustomInput'

const input = (props) => {
    let validationError = null;
   
    if(!props.valid && props.shouldValidate && props.touched){ 
        validationError = (<p>Please enter a valid {props.valueType}</p>);
    }

    return ( 
        <CustomInput 
            label= { props.inputLabel }  
            variant= "outlined" 
            autoFocus={props.autofocus}
            error= { !props.valid && props.touched }   
            required= { props.validation.required }
            style= {{ minWidth: 250 }} 
            onChange= { props.changed }
            value={props.value}
            type={props.elementConfig.type}
            autoFocus={props.elementConfig.autofocus}
            fullWidth
        /> 
    );
}
export default input;

input.propTypes  = {
    value: PropTypes.any.isRequired,
    elementConfig: PropTypes.any.isRequired,
    valid: PropTypes.bool.isRequired,
    elementType: PropTypes.any.isRequired, 
    changed: PropTypes.func.isRequired,
    shouldValidate: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired
}