export const applicantControls = {
    first_name: {
        inputLabel:'Applicant\'s First Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: true
        },
        value:'',
        validation: {
            required: true
        },
        valid: false,
        touched: false        
    },
    middle_name: {
        inputLabel:'Middle Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: { 
            required: false,
            autofocus: false
        },
        valid: false,
        touched: false    
    },
    surname: {
        inputLabel:'Surname',
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
    aadhaar_no: {
        inputLabel:'Aadhaar No',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false,
            isNumeric: true,
            isAadhar: true
         },
        valid: false,
        touched: false   
    },
    gender:{
        inputLabel:'Gender',
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '', displayValue: 'Select Gender'},
                {value: 'male', displayValue: 'Male'},
                {value: 'female', displayValue: 'Female'},
                {value: 'trans', displayValue: 'Transgender'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required:true
        }
    },
    marital_status:{
        inputLabel:'Marital Status',
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '', displayValue: 'Select Marital Status'},
                {value: 'single', displayValue: 'Single'},
                {value: 'married', displayValue: 'Married'},
                {value: 'divorced', displayValue: 'Divorced'},
                {value: 'widow_widower', displayValue: 'Widow/ Widower'},
                {value: 'seperated', displayValue: 'Seperated'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required:true
        }
    },
    dateOfBirth:{
        inputLabel:'Date of Birth',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Date of Birth',
            disableFuture: true,
            disablePast: false
        },
        value:new Date(),
        validation: {
            required: true
        },
        valid: false,
        touched: false 
    },
    isBirthOutOfIndia: {
        inputLabel:'Is your Place of Birth out of India?',
        elementType: 'select',
        elementConfig: {
            options: [  
                {value: 'no', displayValue: 'No'}, 
                {value: 'yes', displayValue: 'Yes'}
            ], 
        },
        value:'no', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    name_VillageTownCity:{
        inputLabel:'Name of Birth Village or Town or City',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: true
        },
        valid: false,
        touched: false  
    },
    country:{
        inputLabel:'Country',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select Country'},
                {value: '101', displayValue: 'India'}
            ], 
        },
        value:'101', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    state: {
        inputLabel:'State',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select State'},
                {value: 'Gujarat', displayValue: 'Gujarat'} 
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    district:{
        inputLabel:'District',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select District'},
                {value: 'Bhavnager', displayValue: 'Bhavnager'},
                {value: 'Mehsana', displayValue: 'Mehsana'},
                {value: 'Valsad', displayValue: 'Valsad'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    citizenShipOfIndiaBy: {
        inputLabel:'Citizenship of India by',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select Option'},
                {value: 'birth', displayValue: 'Birth'}, 
                {value: 'descent', displayValue: 'Descent'},
                {value: 'reg_naturalization', displayValue: 'Registration/Naturalization'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: false
        }
    },
    pan: {
        inputLabel:'PAN (If available)',
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
    voterId: {
        inputLabel:'Voter ID (If available)',
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
    eduQualification: {
        inputLabel:'Educational Qualification',
        elementType: 'select',
        elementConfig: {
            options: [  
                {value: '', displayValue: 'Select Qualification'}, 
                {value: 'less_7th', displayValue: '7th pass or less'}, 
                {value: 'between_8th_9th', displayValue: 'Between 8th and 9th standard'}, 
                {value: '10th_above', displayValue: '10th Pass and above'}, 
                {value: 'graduate_above', displayValue: 'Graduate and above'}, 
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    employType: {
        inputLabel:'Employment Type',
        elementType: 'select',
        elementConfig: {
            options: [  
                {value: '', displayValue: 'Select Employment'}, 
                {value: 'government', displayValue: 'Government'},  
                {value: 'homemaker', displayValue: 'Homemaker'},  
                {value: 'not_employed', displayValue: 'Not employed'},  
                {value: 'other', displayValue: 'Others'},  
                {value: 'owner_partner_director', displayValue: 'Owners, Partners & Directors of companies which are members of CII, FICII & ASSOCHAM '},
                {value: 'private', displayValue: 'Private'},  
                {value: 'psu', displayValue: 'PSU'},  
                {value: 'retired_government', displayValue: 'Retired Government Servant'},  
                {value: 'retired_private', displayValue: 'Retired-Private Service'},  
                {value: 'self_employed', displayValue: 'Self Employed'},    
                {value: 'statutory_body', displayValue: 'Statutory Body'},    
                {value: 'student', displayValue: 'Student'} 
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    orgName:{
        inputLabel:'Organisation Name',
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
    isParentSpouseGovServent: {
        inputLabel:'Is your parent/ spouse, a govt servant?',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select Option'},
                {value: 'yes', displayValue: 'Yes'}, 
                {value: 'no', displayValue: 'No'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    isEligibleNonECR: {
        inputLabel:'Are you eligible for Non-ECR category? ',
        elementType: 'select',
        elementConfig: {
            options: [  
                {value: 'yes', displayValue: 'Yes'}, 
                {value: 'no', displayValue: 'No'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    visibleDistiguishMark: {
        inputLabel:'Visible Distinguishing Mark (If any?)',
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
    isKnownByOtherName: {
        inputLabel:'Are you known by any other names?',
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
    alise_name_1_firstName:{
        inputLabel:'Alias Name1, alises First name',
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
    alise_name_1_middleName:{
        inputLabel:'Middle name',
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
    alise_name_1_surname:{
        inputLabel:'Surname',
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
    alise_name_2_firstName:{
        inputLabel:'Alias Name2, alises First name',
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
    alise_name_2_middleName:{
        inputLabel:'Middle name',
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
    alise_name_2_surname:{
        inputLabel:'Surname',
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
    isNameChanged: {
        inputLabel:'Have you ever changed your name ?',
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
    prev_name_1_firstName:{
        inputLabel:'Previous Name1,alises First name',
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
    prev_name_1_middleName:{
        inputLabel:'Middle name',
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
    prev_name_1_surname:{
        inputLabel:'Surname',
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
    prev_name_2_firstName:{
        inputLabel:'Previous Name2,alises given name',
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
    prev_name_2_middleName:{
        inputLabel:'Middle name',
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
    prev_name_2_surname:{
        inputLabel:'Surname',
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