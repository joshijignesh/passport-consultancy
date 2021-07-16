import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';


import SelectElement from './Select';
import RadioElement from './Radio';
import SwitchElement from './Switch';
import CheckboxGroup from './CheckboxGroup';
import Input from './Input';
import DatePickerElement from './Datepicker';
import TextareaEle from './Textarea';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      }
}));

const input = (props) => {
    const classes = useStyles();
    let inputElement = null;      


    switch (props.elementType){
        case('input'):
            inputElement = <Input {...props} />;
            break;
        case('textarea'):
            inputElement = <TextareaEle {...props}/>;
            break;
        case('select'):
            inputElement = <SelectElement {...props}/>;
            break;
        case('radio'): 
            inputElement = <RadioElement {...props}/>;
            break;
        case('switch'): 
            inputElement = <SwitchElement {...props}/>;
            break;
        case('checkboxGroup'): 
            inputElement = <CheckboxGroup {...props} />;
            break;
        case('date'): 
            inputElement = (
                <DatePickerElement {...props}/>
            );
            break;
        default:
            inputElement = <input 
                        {...props.elementConfig} 
                        value={props.value} 
                        onChange={props.changed}/>;
    }
    return (
        <div className={classes.root}> 
            { inputElement } 
        </div>
    );
}

export default input;