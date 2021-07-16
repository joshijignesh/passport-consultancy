export const prevPassportControls = {
    isHoldIdentityCert: {
        inputLabel:'Have you ever held/hold any Identity Certificate?',
        elementType: 'switch',
        elementConfig: {
             type: 'checkbox',
             label: 'Yes'
        },
        value: false, 
        validation: { 
            required: false
        },
        valid: false,
        touched: false 
    },
    passport_no: {
        inputLabel:'Identity Certificate/Passport Number',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    dateOfIssue: {
        inputLabel:'Date of Issue',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Date of Issue',
            disableFuture: true,
            disablePast: false
        },
        value:new Date(new Date() - (365*24*60*60*1000)),
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
    dateOfExpiry: {
        inputLabel:'Date of Expiry',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Date of Expiry',
            disableFuture: false,
            disablePast: false
        },
        value:new Date(),
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
    placeOfIssue: {
        inputLabel:'Place of Issue',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    fileNumber: {
        inputLabel:'File Number',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    details_prevCurOffPassport: {
        inputLabel:'Detail of Previous/Current Diplomatic/Official Passport',
        elementType: 'radio',
        elementConfig: {
            options: [ 
                {value: 'not_available', displayValue: 'Details Not Available/Never Held Diplomatic/Official Passport'},
                {value: 'available', displayValue: 'Details Available'}
            ], 
            display: 'block'
        },
        value:'not_available', 
        valid: false,
        touched: false,
        validation: {
            required:false
        } 
    },
    passport_no_dipOff: {
        inputLabel:'Passport Number',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    dateOfIssue_dipOff: {
        inputLabel:'Date of Issue',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Date of Issue',
            disableFuture: true,
            disablePast: false
        },
        value:new Date(new Date() - (365*24*60*60*1000)),
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
    dateOfExpiry_dipOff: {
        inputLabel:'Date of Expiry',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Date of Expiry',
            disableFuture: false,
            disablePast: false
        },
        value:new Date(),
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
    placeOfIssue_dipOff: {
        inputLabel:'Place of Issue',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    isAppliedNotIssued: {
        inputLabel:'Have you ever applied for passport, but not issued?',
        elementType: 'switch',
        elementConfig: {
             type: 'checkbox',
             label: 'Yes'
        },
        value: false, 
        validation: { 
            required: false
        },
        valid: false,
        touched: false 
    }, 
    fileNo_notIssued: {
        inputLabel:'File Number',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    monthYearApply: {
        inputLabel:'Month and year Applying',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Month and year Applying',
            disableFuture: false,
            disablePast: false
        },
        value:new Date(),
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
    namePassportOffice: {
        inputLabel:'Name of passport office where applied',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
}