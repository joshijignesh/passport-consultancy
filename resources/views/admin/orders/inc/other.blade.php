<h4 class="text-center">Other Details</h4>
<div class="underlineBox"></div>
<div class="row"> 
    {{ generateAppViews($otherDetails->isArrestWarran, "12") }} 

    @if ($otherDetails->isArrestWarran->value )
        {{ generateAppViews($otherDetails->nameCourtePlace) }} 
        {{ generateAppViews($otherDetails->caseFirWarrantNumber) }} 
        {{ generateAppViews($otherDetails->lawSections) }} 
    @endif
    {{ generateAppViews($otherDetails->isCriminalOffence, "12") }}  

    @if ($otherDetails->isCriminalOffence->value )
        {{ generateAppViews($otherDetails->nameCourtePlace_0) }} 
        {{ generateAppViews($otherDetails->caseFirWarrantNumber_0) }} 
        {{ generateAppViews($otherDetails->lawSections_0) }}  
    @endif
        {{ generateAppViews($otherDetails->isRefusedDenied, "12") }}   
    
    @if ($otherDetails->isRefusedDenied->value )
        {{ generateAppViews($otherDetails->refusalReason) }}   
    @endif
    {{ generateAppViews($otherDetails->isImpoundRevoked, "12") }} 

    @if ($otherDetails->isImpoundRevoked->value )
        {{ generateAppViews($otherDetails->impoundRevokedPassportNo) }}  
        {{ generateAppViews($otherDetails->reasonImpoundRevocation) }}   
    @endif
    {{ generateAppViews($otherDetails->isPoliticalAsylum, "12") }} 

    @if ($otherDetails->isPoliticalAsylum->value )
        {{ generateAppViews($otherDetails->country) }}   
    @endif
    {{ generateAppViews($otherDetails->isEmerCert, "12") }} 

    @if ($otherDetails->isEmerCert->value )
        {{ generateAppViews($otherDetails->emerCirtNo) }}  
        {{ generateAppViews($otherDetails->emerCirtDate) }}  
        {{ generateAppViews($otherDetails->emerCirtCountry) }}  
        {{ generateAppViews($otherDetails->issueAuthority) }}  
        {{ generateAppViews($otherDetails->reasonIssuing) }}   

    @endif

</div>
 