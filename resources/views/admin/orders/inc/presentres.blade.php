<h4 class="text-center">Present Residential Address Details</h4>
<div class="underlineBox"></div>
<div class="row"> 
    {{ generateAppViews($presentresiDetails->isPresentOutOfIndia) }} 
    {{ generateAppViews($presentresiDetails->house_street) }} 
    {{ generateAppViews($presentresiDetails->village_town_city) }}  

 

    @if ($presentresiDetails->isPresentOutOfIndia->value)
        {{ generateAppViews($presentresiDetails->country) }}
        {{ generateAppViews($presentresiDetails->state_province_y) }}
        {{ generateAppViews($presentresiDetails->district_y) }}
        {{ generateAppViews($presentresiDetails->zip_pin_y) }}
        {{ generateAppViews($presentresiDetails->police_station_y) }} 
    @else
        {{ generateAppViews($presentresiDetails->state_province_n) }} 
        {{ generateAppViews($presentresiDetails->district_n) }} 
        {{ generateAppViews($presentresiDetails->zip_pin_n) }} 
        {{ generateAppViews($presentresiDetails->police_station_n) }}   
    @endif
        {{ generateAppViews($presentresiDetails->mobile_no) }} 
        {{ generateAppViews($presentresiDetails->email_id) }}     
        {{ generateAppViews($presentresiDetails->isPermanentAddress, "12") }}    

    @if ($presentresiDetails->isPermanentAddress->value)
        {{ generateAppViews($presentresiDetails->isPermanentSameAsPresent, "12") }}   
        @if (!$presentresiDetails->isPermanentSameAsPresent->value)
            {{ generateAppViews($presentresiDetails->house_street_temp) }} 
            {{ generateAppViews($presentresiDetails->village_town_city_temp) }} 
            {{ generateAppViews($presentresiDetails->country_temp) }} 
            {{ generateAppViews($presentresiDetails->zip_pin_temp) }}  
        @endif 
    @endif
     
     
</div> 
