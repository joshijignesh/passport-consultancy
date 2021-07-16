<h4 class="text-center">Service Required</h4>
<div class="underlineBox"></div>
<div class="row"> 
        {{ generateAppViews($serviceDetails->applyFor) }}  
        {{ generateAppViews($serviceDetails->typeOfApplication) }}  
        {{ generateAppViews($serviceDetails->typeOfpassportBooklet) }}     
    @if ($serviceDetails->applyFor->value === 'reissue') 
        {{ generateAppViews($serviceDetails->specifyReason_0) }} 
        @if ($serviceDetails->specifyReason_0->value === 'due_to_expire' || $serviceDetails->specifyReason_0->value === 'already_expired')
            {{ generateAppViews($serviceDetails->dateOfExpiry) }} 
        @endif

        @if ($serviceDetails->specifyReason_0->value === 'lost_passport' || $serviceDetails->specifyReason_0->value === 'demaged_passport')
            {{ generateAppViews($serviceDetails->hasPassportExpired) }}  
        @endif
            {{ generateAppViews($serviceDetails->isChangeInExistingPassportParticulars, "12") }}  
        @if ($serviceDetails->isChangeInExistingPassportParticulars->value )
            {{ generateAppViews($serviceDetails->cpp_appearance) }}
            {{ generateAppViews($serviceDetails->cpp_signature) }}
            {{ generateAppViews($serviceDetails->cpp_givenName) }}
            {{ generateAppViews($serviceDetails->cpp_surname) }}
            {{ generateAppViews($serviceDetails->cpp_dateOfBirth) }}
            {{ generateAppViews($serviceDetails->cpp_spouseName) }}
            {{ generateAppViews($serviceDetails->cpp_address) }}
            {{ generateAppViews($serviceDetails->cpp_deleteECR) }}
            {{ generateAppViews($serviceDetails->cpp_others) }} 
        @endif
    @endif  
</div>

