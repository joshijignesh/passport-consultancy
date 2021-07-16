export const documentControls = {  
    proofOfBirth: {
        inputLabel:'Proof of Birth',
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '', displayValue: 'Select Options'},
                {value: 'pan_card', displayValue: 'Pan Card'},
                {value: 'aadhar_card', displayValue: 'Aadhar Card'},
                {value: 'driving_licence', displayValue: 'Driving Licence'},
                {value: 'voter_id', displayValue: 'Voter ID'},
                {value: 'birth_certificate', displayValue: 'Birth Certificate'},
                {value: 'school_leaving', displayValue: 'Transfer/School Leaving Certificate'},
                {value: 'materic_certificate', displayValue: 'Matriculation/10th/12th Certificate'},
                {value: 'service_record', displayValue: 'Service Record/Pay Pension Order'},
                {value: 'policy_bong', displayValue: 'Policy Bond'},
                {value: 'prphan_declaration', displayValue: 'Orphan Declaration'},
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required:true
        } 
    },
    proofOfPresentResi: {
        inputLabel:'Proof of Present Residential Address',
        elementType: 'select',
        elementConfig: {
            options: [
                {value: '', displayValue: 'Select Options'},
                {value: 'aadhar_card', displayValue: 'Aadhaar Card'}, 
                {value: 'voter_id', displayValue: 'Voter ID'}, 
                {value: 'elec_bill', displayValue: 'Electricity Bill'}, 
                {value: 'tel_bill', displayValue: 'Telephone Bill'}, 
                {value: 'water_bill', displayValue: 'Water Bill'}, 
                {value: 'spause_passport', displayValue: 'Spause Passport'}, 
                {value: 'parent_passport', displayValue: 'Parents Passport'}, 
                {value: 'rent_agreement', displayValue: 'Rent Agreement'}, 
                {value: 'bank_account_passbook', displayValue: 'Bank Account Passbook'}, 
                {value: 'gas_bill', displayValue: 'Gas Connection Bill'}, 
                {value: 'it_assessment_order', displayValue: 'IT Assessment Order'}, 
                {value: 'employer_certificate', displayValue: 'Employer Certificate'}, 
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required:true
        } 
    },
}