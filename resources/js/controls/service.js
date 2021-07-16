export const serviceControls = { 
    applyFor: {
        inputLabel:'Apply For',
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '', displayValue: 'Select Options'},
                {value: 'new', displayValue: 'New Passport'},
                {value: 'reissue', displayValue: 'Re-Issue Passport'}
            ]  
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required:true
        }
        
    },
    typeOfApplication: {
        inputLabel:'Type of Applicaton',
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '', displayValue: 'Select Options'},
                {value: 'normal', displayValue: 'Normal'},
                {value: 'tatkaal', displayValue: 'Tatkaal'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required:true
        }
    },
    typeOfpassportBooklet: {
        inputLabel:'Type of Passport Booklet',
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '', displayValue: 'Select Options'},
                {value: 'small', displayValue: '36 pages'},
                {value: 'big', displayValue: '60 pages'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required:true
        }
    },
    specifyReason_0: {
        inputLabel:'Specify reason(s)',
        elementType: 'radio',
        elementConfig: {
            options: [
                {value: 'due_to_expire', displayValue: 'Validity Expired within 3 years/Due to Expire'}, 
                {value: 'already_expired', displayValue: 'Validity Expired more than 3 years ago'}, 
                {value: 'exhaustion_pages', displayValue: 'Exhaustion of Pages'}, 
                {value: 'lost_passport', displayValue: 'Lost Passport'}, 
                {value: 'demaged_passport', displayValue: 'Damaged Passport'}
            ], 
            display: 'inline'
        },
        value:'',
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    dateOfExpiry: {
        inputLabel:'Date of Expiry',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Expiry Date',
            disableFuture: false,
            disablePast: false
        },
        value:new Date(),
        validation: {
            required: true
        },
        valid: false,
        touched: false 
    },
    hasPassportExpired: {
        inputLabel:'Has your Passport Expired? ',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: 'yes', displayValue: 'Yes'},
                {value: 'no', displayValue: 'No'}
            ], 
        },
        value: 'yes', 
        valid: false,
        touched: false,
        validation: {
            required:true
        }
    },
    isChangeInExistingPassportParticulars: {
        inputLabel:'Is there change in Existing Personal Particulars? ',
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
    cpp_appearance:{
        inputLabel:'Appearance',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_signature:{
        inputLabel:'Signature',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_givenName:{
        inputLabel:'Given Name',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_surname:{
        inputLabel:'Surname',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_dateOfBirth:{
        inputLabel:'Date Of birth',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_spouseName:{
        inputLabel:'Spouse Name',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_address:{
        inputLabel:'Address',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_deleteECR:{
        inputLabel:'Delete ECR',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },
    cpp_others:{
        inputLabel:'Other',
        elementType: 'checkboxGroup',
        elementConfig: {
             type: 'checkbox'
        },
        value: false, 
        valid: true,
        touched: false,
        validation: { 
            required: false
         }
    },

} 