export const otherDetailsControls = {
    isArrestWarran: {
        inputLabel:'Have you ever been charged with criminal proceedings or any arrest warrant/ summon pending before a court of India?',
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
    nameCourtePlace: {
        inputLabel:'Name of Court and Place',
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
    caseFirWarrantNumber: {
        inputLabel:'Case/ FIR/ Warrant Number',
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
    lawSections: {
        inputLabel:'Law and Section(s)',
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
    isCriminalOffence:{
        inputLabel:'Have you at any time during the period of 5 years immediately preceding the date of this application been convicted by a court in India for any criminal offence and sentenced to imprisonment for two years or more?',
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
    nameCourtePlace_0: {
        inputLabel:'Name of Court and Place',
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
    caseFirWarrantNumber_0: {
        inputLabel:'Case/ FIR/ Warrant Number',
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
    lawSections_0: {
        inputLabel:'Law and Section(s)',
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
    isRefusedDenied:{
        inputLabel:'Have you ever been refused or denied passport?',
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
    refusalReason: {
        inputLabel:'Reason for Refusal',
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
    isImpoundRevoked:{
        inputLabel:'Has your Passport ever been impounded or Revoked?',
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
    impoundRevokedPassportNo : {
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
    reasonImpoundRevocation : {
        inputLabel:'Reason for impounding/ revocation',
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
    isPoliticalAsylum: {
        inputLabel:'Have you ever applied for/ been granted political asylum to/ by any foreign country?',
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
    country:{
        inputLabel:'Country',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select Country'} 
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: false
        }
    },
    isEmerCert: {
        inputLabel:'Have you ever returned to India on Emergency Certificate (EC) or were ever deported or repatriated?',
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
    emerCirtNo : {
        inputLabel:'Emergency Certificate (EC) No.',
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
    emerCirtDate: {
        inputLabel:'Date of Issue',
        elementType: 'date',
        elementConfig: {
            placeholder: 'Date of Issue',
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
    emerCirtCountry : {
        inputLabel:'Country from where travelled on EC/deported/repatriated',
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
    issueAuthority : {
        inputLabel:'Issuing Authority',
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
    reasonIssuing : {
        inputLabel:'Reason for issuing EC/deported/repatriated',
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