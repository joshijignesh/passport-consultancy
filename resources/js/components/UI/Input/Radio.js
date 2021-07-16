import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';  
import FormLabel from '@material-ui/core/FormLabel'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';  
import RadioGroup from '@material-ui/core/RadioGroup'; 
import Radio from '@material-ui/core/Radio';

const radio = (props) => {
    let validationError = null;
   
    if(props.valid && props.shouldValidate && props.touched){ 
        validationError = (<p>Please enter a valid {props.valueType}</p>);
    }

    return (
        <FormControl component="fieldset"  required={props.elementConfig.required} error={!props.valid && props.touched}>
            <FormLabel  component="legend">{props.inputLabel}</FormLabel>
            <RadioGroup value={props.value} onChange={props.changed} style={{ display: 'flex', flexDirection: props.elementConfig.display === 'inline' ? 'row' : 'column', flexWrap: 'wrap' }}>
                {
                    props.elementConfig.options.map(option =>  
                    <FormControlLabel key={ option.value } value={option.value} control={<Radio />} 
                    label={option.displayValue} style={{flexBasis: '48%', minWidth: '20rem'}}/>
                    )
                } 
            </RadioGroup>
        </FormControl>
    );
}
export default radio;

radio.propTypes  = {
    value: PropTypes.any.isRequired,
    valid: PropTypes.bool.isRequired,
    elementType: PropTypes.any.isRequired,
    elementConfig: PropTypes.any.isRequired,
    changed: PropTypes.func.isRequired,
    shouldValidate: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired
}