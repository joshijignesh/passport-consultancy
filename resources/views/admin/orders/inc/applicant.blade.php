<h4 class="text-center">Applicant Details</h4>
<div class="underlineBox"></div>
<div class="row"> 
    {{ generateAppViews($applicantDetails->first_name) }} 
    {{ generateAppViews($applicantDetails->middle_name) }} 
    {{ generateAppViews($applicantDetails->surname) }} 
    {{ generateAppViews($applicantDetails->aadhaar_no) }} 
    {{ generateAppViews($applicantDetails->gender) }} 
    {{ generateAppViews($applicantDetails->marital_status) }} 
    {{ generateAppViews($applicantDetails->dateOfBirth) }} 
    {{ generateAppViews($applicantDetails->isBirthOutOfIndia) }} 
    {{ generateAppViews($applicantDetails->name_VillageTownCity) }} 
    {{ generateAppViews($applicantDetails->country) }}  
     
    @if ($applicantDetails->isBirthOutOfIndia->value === 'no')
        {{ generateAppViews($applicantDetails->state) }}
        {{ generateAppViews($applicantDetails->district) }}        
    @endif
    {{ generateAppViews($applicantDetails->citizenShipOfIndiaBy) }}  
    {{ generateAppViews($applicantDetails->pan) }}  
    {{ generateAppViews($applicantDetails->voterId) }}  
    {{ generateAppViews($applicantDetails->eduQualification) }}  
    {{ generateAppViews($applicantDetails->employType) }}  
   
    @if ($applicantDetails->employType->value === 'government')
        {{ generateAppViews($applicantDetails->orgName) }}   
    @endif
    {{ generateAppViews($applicantDetails->isParentSpouseGovServent) }}   
    {{ generateAppViews($applicantDetails->isEligibleNonECR) }}   
    {{ generateAppViews($applicantDetails->visibleDistiguishMark) }}   
    {{ generateAppViews($applicantDetails->isKnownByOtherName, "12") }}    
    @if ($applicantDetails->isKnownByOtherName->value)
    {{ generateAppViews($applicantDetails->alise_name_1_firstName) }}
    {{ generateAppViews($applicantDetails->alise_name_1_middleName) }}
    {{ generateAppViews($applicantDetails->alise_name_1_surname) }}
    {{ generateAppViews($applicantDetails->alise_name_2_firstName) }}
    {{ generateAppViews($applicantDetails->alise_name_2_middleName) }}
    {{ generateAppViews($applicantDetails->alise_name_2_surname) }} 
     
    @endif
    {{ generateAppViews($applicantDetails->isNameChanged,"12") }}  
    @if ($applicantDetails->isNameChanged->value)
    {{ generateAppViews($applicantDetails->prev_name_1_firstName) }} 
    {{ generateAppViews($applicantDetails->prev_name_1_middleName) }} 
    {{ generateAppViews($applicantDetails->prev_name_1_surname) }} 
    {{ generateAppViews($applicantDetails->prev_name_2_firstName) }} 
    {{ generateAppViews($applicantDetails->prev_name_2_middleName) }} 
    {{ generateAppViews($applicantDetails->prev_name_2_surname) }}    
    @endif
</div> 
