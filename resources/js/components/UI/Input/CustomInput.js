import React from 'react';
import {  TextField, withStyles } from "@material-ui/core";


const CustomTextField = withStyles({
    root: {
        "& input + fieldset": {
            borderRadius: 50,
          }
    }
  })(TextField);

export default function CustomInput(props) {
  
    return (
      <CustomTextField 
      {...props} />
    );
  }