import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const switchEle = (props) => {
    let validationError = null;
   
    if(props.valid && props.shouldValidate && props.touched){ 
        validationError = (<p>Please enter a valid {props.valueType}</p>);
    }

    return (
    <FormControl component="fieldset" required={props.validation.required} error={ !props.valid && props.touched }>
        <FormLabel component="legend">{ props.inputLabel}</FormLabel>
        <FormGroup> 
            <FormControlLabel
            control={<Switch checked={props.value} onChange={props.changed} />}
            label={props.elementConfig.label}
            /> 
        </FormGroup> 
    </FormControl>
    );
}
export default switchEle;


switchEle.propTypes  = {
    value: PropTypes.any.isRequired,
    valid: PropTypes.bool.isRequired,
    elementType: PropTypes.any.isRequired,
    elementConfig: PropTypes.any.isRequired,
    changed: PropTypes.func.isRequired,
    shouldValidate: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired 
}