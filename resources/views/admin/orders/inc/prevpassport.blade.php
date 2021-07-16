<h4 class="text-center">
    {{ $serviceDetails->applyFor->value === 'reissue' ?  'Details of latest held/existing/lost/damaged Ordinary Passport' : 'Previous Passport/ Application Details'}}
</h4>
<div class="underlineBox"></div>
<div class="row"> 
    @if ($serviceDetails->applyFor->value === 'new')
        {{ generateAppViews($prevpassportDetails->isHoldIdentityCert) }}  
    @endif
   
    @if ($serviceDetails->applyFor->value === 'reissue' || $prevpassportDetails->isHoldIdentityCert->value )
        {{ generateAppViews($prevpassportDetails->passport_no) }}
        {{ generateAppViews($prevpassportDetails->dateOfIssue) }} 
        {{ generateAppViews($prevpassportDetails->dateOfExpiry) }} 
        {{ generateAppViews($prevpassportDetails->placeOfIssue) }} 
        {{ generateAppViews($prevpassportDetails->passport_no) }}  
    @endif
    {{ generateAppViews($prevpassportDetails->details_prevCurOffPassport, "12") }} 

    @if ($prevpassportDetails->details_prevCurOffPassport->value === 'available')
        {{ generateAppViews($prevpassportDetails->passport_no_dipOff) }} 
        {{ generateAppViews($prevpassportDetails->dateOfIssue_dipOff) }} 
        {{ generateAppViews($prevpassportDetails->dateOfExpiry_dipOff) }} 
        {{ generateAppViews($prevpassportDetails->placeOfIssue_dipOff) }} 
    @endif
    {{ generateAppViews($prevpassportDetails->isAppliedNotIssued, "12") }}  

    @if ($prevpassportDetails->isAppliedNotIssued->value)
        {{ generateAppViews($prevpassportDetails->fileNo_notIssued) }}  
        {{ generateAppViews($prevpassportDetails->monthYearApply) }}  
        {{ generateAppViews($prevpassportDetails->namePassportOffice) }}  
    @endif
</div>
 