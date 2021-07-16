import React from 'react';
import PropTypes from 'prop-types';

const checkbox = (props) => {
    let validationError = null;
   
    if(props.invalid && props.shouldValidate && props.touched){ 
        validationError = (<p>Please enter a valid {props.valueType}</p>);
    }

    return (
        // <FormControl component="fieldset"   required={props.isRequired}>
        //     <FormLabel  component="legend">{props.inputlabel}</FormLabel>
        //     <RadioGroup name="gender1" value={props.value} onChange={props.changed} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        //         {
        //             props.elementConfig.options.map(option =>  
        //             <FormControlLabel key={ option.value } value={option.value} control={<Radio />} 
        //             label={option.displayValue} style={{flexBasis: '48%', minWidth: '20rem'}}/>
        //             )
        //         } 
        //     </RadioGroup>
        // </FormControl>
    );
}
export default checkbox;