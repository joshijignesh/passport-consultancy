<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Order; 
use App\Country;
use App\State;
use App\City;
use App\PoliceStation;
use Carbon\Carbon;

class OrderController extends Controller
{
    public function index(Request $request){

        if($request->input('order_status')){
            $orders = Order::where('order_status', 'success')->latest()->paginate(15);
        }else{
            $orders = Order::latest()->paginate(15);
        }
       

        return view('admin.orders.index', compact('orders'));
    }

    public function orderView(Order $order){
        $appData  = json_decode($order->appdata->appdata); 
        $serviceDetails = $appData->serviceForm->controls;
        $applicantDetails = $appData->applicantForm->controls;
        $familyDetails = $appData->familyForm->controls;
        $presentresiDetails = $appData->presentResiForm->controls;
        $emercontDetails = $appData->emerContDetailsForm->controls;
        $prevpassportDetails = $appData->prevPassportForm->controls;
        $otherDetails = $appData->otherDetailsForm->controls;
        $documentDetails = $appData->documentDetailsForm->controls; 
        return view('admin.orders.view', compact('order', 'serviceDetails', 'applicantDetails', 'familyDetails', 'presentresiDetails', 'emercontDetails', 'prevpassportDetails', 'otherDetails', 'documentDetails'));
    }

    public function deleteorder(Order $order){
        //Delete related data
        $order->payment()->delete();
        $order->appdata()->delete();
        $order->application()->delete();
        $order->delete();

        return redirect()->back()->with('status', 'Order for '.$order->name.' deleted Successfully.');
    }
    public function genXml(Request $request,Order $order){

        //Getting Data
        $appData  = json_decode($order->appdata->appdata); 
        $serviceDetails = $appData->serviceForm->controls;
        $applicantDetails = $appData->applicantForm->controls;
        $familyDetails = $appData->familyForm->controls;
        $presentresiDetails = $appData->presentResiForm->controls;
        $emercontDetails = $appData->emerContDetailsForm->controls;
        $prevpassportDetails = $appData->prevPassportForm->controls;
        $otherDetails = $appData->otherDetailsForm->controls;
        $documentDetails = $appData->documentDetailsForm->controls; 


        $dom = new \DOMDocument('1.0','UTF-8');
        $dom->formatOutput = true;

        //Creating Root Node
        $passportAppForm = $dom->createElement('PassportApplicationForm');
        $dom->appendChild($passportAppForm); 

        //Creating Main Node
        $mainForm = $dom->createElement('MainForm');
        $passportAppForm->appendChild($mainForm);

        //Creating Header Node
        $sf_header = $dom->createElement('SF_Header');
        $sf_header_attr_1 = new \DOMAttr('xmlns:xfa','http://www.xfa.org/schema/xfa-data/1.0/');
        $sf_header->setAttributeNode($sf_header_attr_1);
        $sf_header_attr_2 = new \DOMAttr('xfa:dataNode','dataGroup');
        $sf_header->setAttributeNode($sf_header_attr_1);
        $sf_header->setAttributeNode($sf_header_attr_2);
        $mainForm->appendChild($sf_header); 
        
        //Creating ApplyingFor Node
        $dd_ApplyingFor = $dom->createElement('dd_ApplyingFor');

            if($serviceDetails->applyFor->value === 'new'){
                $dd_ApplyingFor->appendChild(new \DOMText('FRESH'));
            }elseif($serviceDetails->applyFor->value === 'reissue'){
                $dd_ApplyingFor->appendChild(new \DOMText('REISSUE'));
            } 

        $mainForm->appendChild($dd_ApplyingFor);

        //Crating Reissue Reasons Main Node
        $sf_reIssue = $dom->createElement('sf_reIssue');
            if($serviceDetails->applyFor->value === 'new'){
                $sf_reIssue->appendChild($dom->createElement('cb_ValExpWithin3Yrs', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ExhaustionofPages', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ValExpMoreThan3yrsAgo', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_LostPP', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ChangeParticulars', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_DamagedPP', 'N'));

            }elseif($serviceDetails->applyFor->value === 'reissue'){
                $sf_reIssue->appendChild($dom->createElement('cb_ValExpWithin3Yrs', $serviceDetails->specifyReason_0->value === 'due_to_expire' ? 'Y' : 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ExhaustionofPages', $serviceDetails->specifyReason_0->value === 'exhaustion_pages' ? 'Y' : 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ValExpMoreThan3yrsAgo', $serviceDetails->specifyReason_0->value === 'already_expired' ? 'Y' : 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_LostPP', $serviceDetails->specifyReason_0->value === 'lost_passport' ? 'Y' : 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ChangeParticulars', $serviceDetails->isChangeInExistingPassportParticulars->value ? 'Y' : 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_DamagedPP', $serviceDetails->specifyReason_0->value === 'demaged_passport' ? 'Y' : 'N'));
                
            }else{
                $sf_reIssue->appendChild($dom->createElement('cb_ValExpWithin3Yrs', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ExhaustionofPages', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ValExpMoreThan3yrsAgo', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_LostPP', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_ChangeParticulars', 'N'));
                $sf_reIssue->appendChild($dom->createElement('cb_DamagedPP', 'N'));
            } 
        $mainForm->appendChild($sf_reIssue);
           
        //Creating Change in particular Node
        $sf_changeParticular = $dom->createElement('sf_changeParticular');
            if($serviceDetails->applyFor->value === 'new'){
                $sf_changeParticular->appendChild($dom->createElement('cb_appearance', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_signature', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_givenName', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_surname', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_dateofBirth', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_spouseName', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_address', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_deleteECR', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_others', 'N')); 
            }elseif($serviceDetails->applyFor->value === 'reissue'){
                $sf_changeParticular->appendChild($dom->createElement('cb_appearance', $serviceDetails->cpp_appearance->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_signature', $serviceDetails->cpp_signature->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_givenName', $serviceDetails->cpp_givenName->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_surname', $serviceDetails->cpp_surname->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_dateofBirth', $serviceDetails->cpp_dateOfBirth->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_spouseName', $serviceDetails->cpp_spouseName->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_address', $serviceDetails->cpp_address->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_deleteECR', $serviceDetails->cpp_deleteECR->value ? 'Y' : 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_others', $serviceDetails->cpp_others->value ? 'Y' : 'N'));
            }else{
                $sf_changeParticular->appendChild($dom->createElement('cb_appearance', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_signature', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_givenName', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_surname', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_dateofBirth', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_spouseName', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_address', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_deleteECR', 'N'));
                $sf_changeParticular->appendChild($dom->createElement('cb_others', 'N')); 
            } 

        $mainForm->appendChild($sf_changeParticular);
        
        // Creating node based on If sf_changeParticular --> cb_others is 'Y' then set other wise empty
        $tf_other = $dom->createElement('tf_other');
        $mainForm->appendChild($tf_other);

        
        //Creating Application Type Node  Options:  "NORMAL" or "TATKAAL"
        $rbg_apptype = $dom->createElement('rbg_apptype');

            if($serviceDetails->typeOfApplication->value === 'normal'){
                $rbg_apptype->appendChild(new \DOMText('NORMAL'));
            }elseif($serviceDetails->typeOfApplication->value === 'tatkaal'){
                $rbg_apptype->appendChild(new \DOMText('TATKAAL'));
            }
        $mainForm->appendChild($rbg_apptype);

        //Creating Booklet Type Node Options: "NORMAL" or "JUMBO"
        $rbg_BookletType = $dom->createElement('rbg_BookletType');

            if($serviceDetails->typeOfpassportBooklet->value === 'small'){
                $rbg_BookletType->appendChild(new \DOMText('NORMAL'));
            }elseif($serviceDetails->typeOfpassportBooklet->value === 'big'){
                $rbg_BookletType->appendChild(new \DOMText('JUMBO'));
            }
        
        $mainForm->appendChild($rbg_BookletType);

        //Creating Given Applicant Name Node

        $tf_givennameapplicant = $dom->createElement('tf_givennameapplicant' , strtoupper($applicantDetails->first_name->value . ' ' . $applicantDetails->middle_name->value));
        $mainForm->appendChild($tf_givennameapplicant);

        //Creating Applicant surname Node
        $tf_surnameapplicant = $dom->createElement('tf_surnameapplicant', strtoupper($applicantDetails->surname->value));
        $mainForm->appendChild($tf_surnameapplicant);

        //Creating Gender Node Options: 'MALE' , 'FEMALE', 'TRANSGENDER'
        $dd_gender = $dom->createElement('dd_gender');
            if($applicantDetails->gender->value == 'male'){
                $dd_gender->appendChild(new \DOMText('MALE'));
            }elseif($applicantDetails->gender->value == 'female'){
                $dd_gender->appendChild(new \DOMText('FEMALE'));
            }elseif($applicantDetails->gender->value == 'trans'){
                $dd_gender->appendChild(new \DOMText('TRANSGENDER'));
            }
        
        $mainForm->appendChild($dd_gender);
        

        //Is known by any other names? Node 
        $rbg_alias = $dom->createElement('rbg_alias', $applicantDetails->isKnownByOtherName->value ? 'Y' : 'N');
        $mainForm->appendChild($rbg_alias);

        //Allias Names Main Node
        $sf_aliasdetails = $dom->createElement('sf_aliasdetails');
            if($applicantDetails->isKnownByOtherName->value){
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias1givenname', strtoupper($applicantDetails->alise_name_1_firstName->value.' '.$applicantDetails->alise_name_1_middleName->value)));
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias1Surname', strtoupper($applicantDetails->alise_name_1_surname->value)));
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias2givenname', strtoupper($applicantDetails->alise_name_2_firstName->value.' '.$applicantDetails->alise_name_2_middleName->value)));
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias2surname', strtoupper($applicantDetails->alise_name_2_surname->value)));
            }else{
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias1givenname'));
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias1Surname'));
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias2givenname'));
                $sf_aliasdetails->appendChild($dom->createElement('tf_alias2surname'));
            }

        $mainForm->appendChild($sf_aliasdetails);

        // Have you ever changed your name? Node
        $rbg_checkPrevName = $dom->createElement('rbg_checkPrevName', $applicantDetails->isNameChanged->value ? 'Y' : 'N');
        $mainForm->appendChild($rbg_checkPrevName);

        //Previous Names Node
        $sf_previousnamedetails = $dom->createElement('sf_previousnamedetails');
            if($applicantDetails->isNameChanged->value){
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev1GivenName', strtoupper($applicantDetails->prev_name_1_firstName->value.' '.$applicantDetails->prev_name_1_middleName)));
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev1Surname', strtoupper($applicantDetails->prev_name_1_surname->value)));
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev2GivenName', strtoupper($applicantDetails->prev_name_2_firstName->value.' '.$applicantDetails->prev_name_2_middleName->value)));
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev2Surname', strtoupper($applicantDetails->prev_name_2_surname->value)));
            }else{
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev1GivenName'));
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev1Surname'));
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev2GivenName'));
                $sf_previousnamedetails->appendChild($dom->createElement('tf_prev2Surname'));
            }
        
        $mainForm->appendChild($sf_previousnamedetails);

        //Date of Birth Node
        $dt_dob = $dom->createElement('dt_dob', Carbon::parse($applicantDetails->dateOfBirth->value)->format('d/m/Y'));
        $mainForm->appendChild($dt_dob);

        //rb_validityRequired ==>>Unknown Node
        $rb_validityRequired = $dom->createElement('rb_validityRequired');
        $mainForm->appendChild($rb_validityRequired);

        //Is your Place of Birth out of India? Node
        $rb_checkPOBOutsideIndia = $dom->createElement('rb_checkPOBOutsideIndia', $applicantDetails->isBirthOutOfIndia->value === 'yes' ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkPOBOutsideIndia);

        //Name of Birth Village or Town or City Node
        $tfPOB = $dom->createElement('tfPOB', strtoupper($applicantDetails->name_VillageTownCity->value));
        $mainForm->appendChild($tfPOB);

        //Place of birth details Main Node
        $sfpobDtls = $dom->createElement('sfpobDtls');
            if($applicantDetails->isBirthOutOfIndia->value === 'yes'){
                $sfpobDtls->appendChild($dom->createElement('dd_Country', Country::find($applicantDetails->country->value) ? Country::find($applicantDetails->country->value)->name : ''));
                $sfpobDtls->appendChild($dom->createElement('ddState'));
                $sfpobDtls->appendChild($dom->createElement('dd_DistrictPOB'));
                $sfpobDtls->appendChild($dom->createElement('tf_DistrcictOthers'));
                $sfpobDtls->appendChild($dom->createElement('tf_StateProvince'));
            }else{
                $sfpobDtls->appendChild($dom->createElement('dd_Country'));
                $sfpobDtls->appendChild($dom->createElement('ddState', State::find($applicantDetails->state->value) ? State::find($applicantDetails->state->value)->name : ''));
                $sfpobDtls->appendChild($dom->createElement('dd_DistrictPOB', City::find($applicantDetails->district->value) ? City::find($applicantDetails->district->value)->name : ''));
                $sfpobDtls->appendChild($dom->createElement('tf_DistrcictOthers'));
                $sfpobDtls->appendChild($dom->createElement('tf_StateProvince'));
            }
 
        $mainForm->appendChild($sfpobDtls);

        //Marital Status Node Options: 'SINGLE', 'MARRIED' , 'DIVORCED', 'WIDOW/ WIDOWER', 'SEPARATED'
        $dd_maritalStatus = $dom->createElement('dd_maritalStatus');
            if($applicantDetails->marital_status->value === 'single'){
                $dd_maritalStatus->appendChild(new \DOMText('SINGLE'));
            }elseif($applicantDetails->marital_status->value === 'married'){
                $dd_maritalStatus->appendChild(new \DOMText('MARRIED'));
            }elseif($applicantDetails->marital_status->value === 'divorced'){
                $dd_maritalStatus->appendChild(new \DOMText('DIVORCED'));
            }elseif($applicantDetails->marital_status->value === 'widow_widower'){
                $dd_maritalStatus->appendChild(new \DOMText('WIDOW/ WIDOWER'));
            }elseif($applicantDetails->marital_status->value === 'seperated'){
                $dd_maritalStatus->appendChild(new \DOMText('SEPARATED'));
            }
        $mainForm->appendChild($dd_maritalStatus);
        
        //Citizenship of India by Node. Options 'BIRTH', 'DESCENT', 'REGISTRATION/ NATURALIZATION'
        $dd_citisenshipOfIndiaBy = $dom->createElement('dd_citisenshipOfIndiaBy');
            if($applicantDetails->citizenShipOfIndiaBy->value === 'birth'){
                $dd_citisenshipOfIndiaBy->appendChild(new \DOMText('BIRTH'));
            }elseif($applicantDetails->citizenShipOfIndiaBy->value === 'descent'){
                $dd_citisenshipOfIndiaBy->appendChild(new \DOMText('DESCENT'));
            }elseif($applicantDetails->citizenShipOfIndiaBy->value === 'reg_naturalization'){
                $dd_citisenshipOfIndiaBy->appendChild(new \DOMText('REGISTRATION/ NATURALIZATION'));
            }

        $mainForm->appendChild($dd_citisenshipOfIndiaBy);
        

        //Pan card Node
        $tf_PAN = $dom->createElement('tf_PAN');
            if(strlen($applicantDetails->pan->value)>0){
                $tf_PAN->appendChild(new \DOMText($applicantDetails->pan->value));
            }
        $mainForm->appendChild($tf_PAN);

        //Votre ID Node
        $tf_voteId = $dom->createElement('tf_voteId');
            if(strlen($applicantDetails->voterId->value)>0){
                $tf_voteId->appendChild(new \DOMText($applicantDetails->voterId->value));
            }
        $mainForm->appendChild($tf_voteId);

        //Employment Type Node. 
        //Options: 'GOVERNMENT', 'HOME MAKER', 'NOT EMPLOYED', 'OTHERS', 'OWNERS, PARTNERS &amp; DIRECTORS OF COMPANIES WHICH ARE MEMBERS OF CII, FICII &amp; ASSOCHAM, 'PRIVATE', 'PSU', 'RETIRED GOVERNMENT SERVANT', 'RETIRED PRIVATE SERVANT', 'SELF EMPLOYED', 'STATUTORY BODY', 'STUDENT' 
        $dd_employmentType = $dom->createElement('dd_employmentType');
            if($applicantDetails->employType->value === 'government'){ 
                $dd_employmentType->appendChild(new \DOMText('GOVERNMENT'));
            }elseif($applicantDetails->employType->value === 'homemaker'){
                $dd_employmentType->appendChild(new \DOMText('HOME MAKER'));
            }elseif($applicantDetails->employType->value === 'not_employed'){
                $dd_employmentType->appendChild(new \DOMText('NOT EMPLOYED'));
            }elseif($applicantDetails->employType->value === 'other'){
                $dd_employmentType->appendChild(new \DOMText('OTHERS'));
            }elseif($applicantDetails->employType->value === 'owner_partner_director'){
                $dd_employmentType->appendChild(new \DOMText('OWNERS, PARTNERS &amp; DIRECTORS OF COMPANIES WHICH ARE MEMBERS OF CII, FICII &amp; ASSOCHAM'));
            }elseif($applicantDetails->employType->value === 'private'){
                $dd_employmentType->appendChild(new \DOMText('PRIVATE'));
            }elseif($applicantDetails->employType->value === 'psu'){
                $dd_employmentType->appendChild(new \DOMText('PSU'));
            }elseif($applicantDetails->employType->value === 'retired_government'){
                $dd_employmentType->appendChild(new \DOMText('RETIRED GOVERNMENT SERVANT'));
            }elseif($applicantDetails->employType->value === 'retired_private'){
                $dd_employmentType->appendChild(new \DOMText('RETIRED PRIVATE SERVANT'));
            }elseif($applicantDetails->employType->value === 'self_employed'){
                $dd_employmentType->appendChild(new \DOMText('SELF EMPLOYED'));
            }elseif($applicantDetails->employType->value === 'statutory_body'){
                $dd_employmentType->appendChild(new \DOMText('STATUTORY BODY'));
            }elseif($applicantDetails->employType->value === 'student'){
                $dd_employmentType->appendChild(new \DOMText('STUDENT'));
            }    

        $mainForm->appendChild($dd_employmentType);

        //Organization Name Node (Not imlementd on app)
        $tf_organizationName = $dom->createElement('tf_organizationName');
        $mainForm->appendChild($tf_organizationName);

        //Is your parent/ spouse, a govt servant? Node 'yes', 'no' or empty
        $dd_parentSpouseGovtEmp = $dom->createElement('dd_parentSpouseGovtEmp');
            if($applicantDetails->isParentSpouseGovServent->value === 'yes'){
                $dd_parentSpouseGovtEmp->appendChild(new \DOMText('Y'));
            }elseif($applicantDetails->isParentSpouseGovServent->value === 'no'){
                $dd_parentSpouseGovtEmp->appendChild(new \DOMText('N'));
            }
        $mainForm->appendChild($dd_parentSpouseGovtEmp);

        //Educational Qualification Node. Options are '7TH PASS OR LESS', 'BETWEEN 8TH AND 9TH STANDARD', '10TH PASS AND ABOVE', 'GRADUATE AND ABOVE'
        $dd_educationalQualification = $dom->createElement('dd_educationalQualification');
            if($applicantDetails->eduQualification->value === 'less_7th'){
                $dd_educationalQualification->appendChild(new \DOMText('7TH PASS OR LESS'));
            }elseif($applicantDetails->eduQualification->value === 'between_8th_9th'){
                $dd_educationalQualification->appendChild(new \DOMText('BETWEEN 8TH AND 9TH STANDARD'));
            }elseif($applicantDetails->eduQualification->value === '10th_above'){
                $dd_educationalQualification->appendChild(new \DOMText('10TH PASS AND ABOVE'));
            }elseif($applicantDetails->eduQualification->value === 'graduate_above'){
                $dd_educationalQualification->appendChild(new \DOMText('GRADUATE AND ABOVE'));
            }
        $mainForm->appendChild($dd_educationalQualification);
            
        //Are you eligible for Non-ECR category? Node. Options: 'yes', 'no' or empty
        $dd_nonECR = $dom->createElement('dd_nonECR');
            if($applicantDetails->isEligibleNonECR->value === 'yes'){
                $dd_nonECR->appendChild(new \DOMText('Yes'));
            }elseif($applicantDetails->isEligibleNonECR->value === 'no'){
                $dd_nonECR->appendChild(new \DOMText('No'));
            }
        $mainForm->appendChild($dd_nonECR);

        //Visible Distinguishing Mark (If any?) Node
        $tf_visibleDistinguishingMark = $dom->createElement('tf_visibleDistinguishingMark');
            if(strlen($applicantDetails->visibleDistiguishMark->value > 0)){
                $tf_visibleDistinguishingMark->appendChild(new \DOMText(strtoupper($applicantDetails->visibleDistiguishMark->value)));
            }
        $mainForm->appendChild($tf_visibleDistinguishingMark);

        //Aadhaar Number Node
        $tf_aadhaarNumber = $dom->createElement('tf_aadhaarNumber');
            if(strlen($applicantDetails->aadhaar_no->value)>0){
                $tf_aadhaarNumber->appendChild(new \DOMText($applicantDetails->aadhaar_no->value));
            }
        $mainForm->appendChild($tf_aadhaarNumber);

        //Agree to use Aadhaar if provided Node
        $sf_aadhaarNumber = $dom->createElement('sf_aadhaarNumber');
            $sf_aadhaarNumber->appendChild($dom->createElement('cb_yes', strlen($applicantDetails->aadhaar_no->value)>0 ? 'Y' : 'N'));
            $sf_aadhaarNumber->appendChild($dom->createElement('cb_no', 'N'));
        $mainForm->appendChild($sf_aadhaarNumber);
        
        //rbgFatherLegal ==> Unknown Node
        $rbgFatherLegal = $dom->createElement('rbgFatherLegal');
        $mainForm->appendChild($rbgFatherLegal);

        //Family Details Main Node
        $sf_FamilyDtls = $dom->createElement('sf_FamilyDtls');
            //Father Details Node
            $sfFatherDtls = $dom->createElement('sfFatherDtls');
                 if(strlen($familyDetails->father_first_name->value) > 0){
                    $sfFatherDtls->appendChild($dom->createElement('tf_fatherGivenName', strtoupper($familyDetails->father_first_name->value.' '.$familyDetails->father_middle_name->value)));
                    $sfFatherDtls->appendChild($dom->createElement('tf_fatherSurname', strtoupper($familyDetails->father_surname_name->value)));
                 }else{
                    $sfFatherDtls->appendChild($dom->createElement('tf_fatherGivenName'));
                    $sfFatherDtls->appendChild($dom->createElement('tf_fatherSurname'));
                 }
            $sf_FamilyDtls->appendChild($sfFatherDtls);

            //Legal Guardian Details Node
            $sfLegalGuardDtls = $dom->createElement('sfLegalGuardDtls');
                 if(strlen($familyDetails->legalGuardian_first_name->value)>0){
                    $sfLegalGuardDtls->appendChild($dom->createElement('tf_LegalGuardianGivenName', strtoupper($familyDetails->legalGuardian_first_name->value . ' ' . $familyDetails->legalGuardian_middle_name->value)));
                    $sfLegalGuardDtls->appendChild($dom->createElement('tf_legalGuardianSurName', strtoupper($familyDetails->legalGuardian_surname_name->value)));
                 }else{
                    $sfLegalGuardDtls->appendChild($dom->createElement('tf_LegalGuardianGivenName'));
                    $sfLegalGuardDtls->appendChild($dom->createElement('tf_legalGuardianSurName'));
                 }
            $sf_FamilyDtls->appendChild($sfLegalGuardDtls);

            //Mother Details Node
            $sfMotherDtls = $dom->createElement('sfMotherDtls');
                 if(strlen($familyDetails->mother_first_name->value)>0){
                    $sfMotherDtls->appendChild($dom->createElement('tf_MotherGivenName', strtoupper($familyDetails->mother_first_name->value.' '.$familyDetails->mother_middle_name->value)));
                    $sfMotherDtls->appendChild($dom->createElement('tf_MotherSurname', strtoupper($familyDetails->mother_surname_name->value)));
                 }else{
                    $sfMotherDtls->appendChild($dom->createElement('tf_MotherGivenName'));
                    $sfMotherDtls->appendChild($dom->createElement('tf_MotherSurname'));
                 }
            $sf_FamilyDtls->appendChild($sfMotherDtls);

            //Spouse Details Node
            $sfSpouseDtls = $dom->createElement('sfSpouseDtls');
                 $sfSpouseDtls->appendChild($dom->createElement('tf_spouseGivenName'));
                 $sfSpouseDtls->appendChild($dom->createElement('tf_spouseSurname'));
            $sf_FamilyDtls->appendChild($sfSpouseDtls);
            
        $mainForm->appendChild($sf_FamilyDtls);

        //Parents Details for Minor ==> Node not Implmented
        $sfMinorDtls = $dom->createElement('sfMinorDtls');
            $sfMinorDtls->appendChild($dom->createElement('tf_fatherGuardianFilePassportNumber'));
            $sfMinorDtls->appendChild($dom->createElement('tf_fatherGuardiannationalityNotIndian'));
            $sfMinorDtls->appendChild($dom->createElement('tf_motherGuardianFilePassportNumber'));
            $sfMinorDtls->appendChild($dom->createElement('tf_motherGuardiannationalityNotIndian'));
        $mainForm->appendChild($sfMinorDtls);

        //Is your present address out of India? Node
        $rb_checkTempVisit = $dom->createElement('rb_checkTempVisit', $presentresiDetails->isPresentOutOfIndia->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkTempVisit);

        //Present Address if not out of india Node if not then add blank nodes
        $sfPresentDetails = $dom->createElement('sfPresentDetails');
            if($presentresiDetails->isPresentOutOfIndia->value){
                //All Nodes blank as present is out of india
                $sfPresentDetails->appendChild($dom->createElement('tf_houseNoStreetName'));
                $sfPresentDetails->appendChild($dom->createElement('tf_villageTownCity'));
                $sfPresentDetails->appendChild($dom->createElement('ddStatePresentAdd'));
                $sfPresentDetails->appendChild($dom->createElement('dd_DistrictPresentAdd'));
                $sfPresentDetails->appendChild($dom->createElement('tf_DistrcictOthersPresentAdd'));
                $sfPresentDetails->appendChild($dom->createElement('tf_policeStation'));
                $sfPresentDetails->appendChild($dom->createElement('tf_pin'));
                $sfPresentDetails->appendChild($dom->createElement('tf_mobileNumber'));
                $sfPresentDetails->appendChild($dom->createElement('tf_telephoneNumber'));
                $sfPresentDetails->appendChild($dom->createElement('tf_emailID'));
            }else{
                //House and Street Name Node
                $tf_houseNoStreetName = $dom->createElement('tf_houseNoStreetName');
                    if(strlen($presentresiDetails->house_street->value)>0){
                        $tf_houseNoStreetName->appendChild(new \DOMText(strtoupper($presentresiDetails->house_street->value)));
                    }
                $sfPresentDetails->appendChild($tf_houseNoStreetName);

                //Village Toun City Node
                $tf_villageTownCity = $dom->createElement('tf_villageTownCity');
                    if(strlen($presentresiDetails->village_town_city->value)>0){
                        $tf_villageTownCity->appendChild(new \DOMText(strtoupper($presentresiDetails->village_town_city->value)));
                    }
                $sfPresentDetails->appendChild($tf_villageTownCity);

                //State Node
                $ddStatePresentAdd = $dom->createElement('ddStatePresentAdd');
                    if(strlen($presentresiDetails->state_province_n->value)>0){
                        $ddStatePresentAdd->appendChild(new \DOMText(State::find($presentresiDetails->state_province_n->value)->name));
                    }
                $sfPresentDetails->appendChild($ddStatePresentAdd);

                //District Node
                $dd_DistrictPresentAdd = $dom->createElement('dd_DistrictPresentAdd');
                    if(strlen($presentresiDetails->district_n->value)>0){
                        $dd_DistrictPresentAdd->appendChild(new \DOMText(City::find($presentresiDetails->district_n->value)->name));
                    }
                $sfPresentDetails->appendChild($dd_DistrictPresentAdd);

                //District Other Node ===> Not Implemented
                $tf_DistrcictOthersPresentAdd = $dom->createElement('tf_DistrcictOthersPresentAdd');
                $sfPresentDetails->appendChild($tf_DistrcictOthersPresentAdd);

                //Police Station Node
                $tf_policeStation = $dom->createElement('tf_policeStation');
                    if(strlen($presentresiDetails->police_station_n->value)>0){
                        $tf_policeStation->appendChild(new \DOMText(PoliceStation::find($presentresiDetails->police_station_n->value)->name));
                    }
                $sfPresentDetails->appendChild($tf_policeStation);

                //Pin code Node
                $tf_pin = $dom->createElement('tf_pin');
                    if(strlen($presentresiDetails->zip_pin_n->value)>0){
                        $tf_pin->appendChild(new \DOMText($presentresiDetails->zip_pin_n->value));
                    }
                $sfPresentDetails->appendChild($tf_pin);

                //Mobile Number Node
                $tf_mobileNumber = $dom->createElement('tf_mobileNumber');
                    if(strlen($presentresiDetails->mobile_no->value)>0){
                        $tf_mobileNumber->appendChild(new \DOMText($presentresiDetails->mobile_no->value));
                    }
                $sfPresentDetails->appendChild($tf_mobileNumber);

                //Telephone Number Node ==> Not implimented 
                $tf_telephoneNumber = $dom->createElement('tf_telephoneNumber'); 
                $sfPresentDetails->appendChild($tf_telephoneNumber);

                //Email Node 
                $tf_emailID = $dom->createElement('tf_emailID');
                    if(strlen($presentresiDetails->email_id->value)>0){
                        $tf_emailID->appendChild(new \DOMText($presentresiDetails->email_id->value));
                    }
                $sfPresentDetails->appendChild($tf_emailID);
            }

        
        $mainForm->appendChild($sfPresentDetails);
        
        //If Present Address is Out of India Address nodes
        $sfTempVisitIndia = $dom->createElement('sfTempVisitIndia');
            if($presentresiDetails->isPresentOutOfIndia->value){
                //House No Street Name Node
                $tf_houseNoStreetName = $dom->createElement('tf_houseNoStreetName');
                    if(strlen($presentresiDetails->house_street->value) > 0){
                        $tf_houseNoStreetName->appendChild(new \DOMText(strtoupper($presentresiDetails->house_street->value)));
                    }
                $sfTempVisitIndia->appendChild($tf_houseNoStreetName);

                //Village Town City Node
                $tf_villageTownCity = $dom->createElement('tf_villageTownCity');
                    if(strlen($presentresiDetails->village_town_city->value)>0){
                        $tf_villageTownCity->appendChild(new \DOMText(strtoupper($presentresiDetails->village_town_city->value)));
                    }
                $sfTempVisitIndia->appendChild($tf_villageTownCity);

                //Country Node
                $tf_country = $dom->createElement('tf_country');
                    if(strlen($presentresiDetails->country->value)>0){
                        $tf_country->appendChild(new \DOMText(Country::find($presentresiDetails->country->value)->name));
                    }
                $sfTempVisitIndia->appendChild($tf_country);

                //State Node
                $tf_stateUT = $dom->createElement('tf_stateUT');
                    if(strlen($presentresiDetails->state_province_y->value)>0){
                        $tf_stateUT->appendChild(new \DOMText(strtoupper($presentresiDetails->state_province_y->value)));
                    }
                $sfTempVisitIndia->appendChild($tf_stateUT);

                //District node
                $tf_district = $dom->createElement('tf_district');
                    if(strlen($presentresiDetails->district_y->value)>0){
                        $tf_district->appendChild(new \DOMText(strtoupper($presentresiDetails->district_y->value)));
                    }
                $sfTempVisitIndia->appendChild($tf_district);


                //Police Station node
                $tf_policeStation = $dom->createElement('tf_policeStation');
                    if(strlen($presentresiDetails->police_station_y->value)>0){
                        $tf_policeStation->appendChild(new \DOMText(strtoupper($presentresiDetails->police_station_y->value)));
                    }
                $sfTempVisitIndia->appendChild($tf_policeStation);

                //Pincode Node
                $tf_pin = $dom->createElement('tf_pin');
                    if(strlen($presentresiDetails->zip_pin_y->value)>0){
                        $tf_pin->appendChild(new \DOMText($presentresiDetails->zip_pin_y->value));
                    }
                $sfTempVisitIndia->appendChild($tf_pin);

                //Mobile Number Node
                $tf_mobileNumber = $dom->createElement('tf_mobileNumber');
                    if(strlen($presentresiDetails->mobile_no->value)>0){
                        $tf_mobileNumber->appendChild(new \DOMText($presentresiDetails->mobile_no->value));
                    }
                $sfTempVisitIndia->appendChild($tf_mobileNumber);
                
                //Telephone Number node ==> not implemented
                $tf_telephoneNumber = $dom->createElement('tf_telephoneNumber');
                $sfTempVisitIndia->appendChild($tf_telephoneNumber);

                //Email Node
                $tf_emailID = $dom->createElement('tf_emailID');
                    if(strlen($presentresiDetails->email_id->value)>0){
                        $tf_emailID->appendChild($presentresiDetails->email_id->value);
                    }
                $sfTempVisitIndia->appendChild($tf_emailID);


            }else{
                $sfTempVisitIndia->appendChild($dom->createElement('tf_houseNoStreetName'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_villageTownCity'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_country'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_stateUT'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_district'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_policeStation'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_pin'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_mobileNumber'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_telephoneNumber'));
                $sfTempVisitIndia->appendChild($dom->createElement('tf_emailID'));
            }

        $mainForm->appendChild($sfTempVisitIndia);

        //Do you have a Permanent Address? Node
        $rb_havPermAddr = $dom->createElement('rb_havPermAddr', $presentresiDetails->isPermanentAddress->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_havPermAddr);

        //Is permanent address same as present address? Node
        $rb_checkpresentPermanetSame = $dom->createElement('rb_checkpresentPermanetSame');
            if($presentresiDetails->isPermanentAddress->value){
                $rb_checkpresentPermanetSame->appendChild(new \DOMText($presentresiDetails->isPermanentSameAsPresent->value ? 'Y' : 'N'));
            }else{
                $rb_checkpresentPermanetSame->appendChild(new \DOMText('N'));
            }
        $mainForm->appendChild($rb_checkpresentPermanetSame);

        //If permanent address is not same as present then add address node
        $sfPermanentAddDtls = $dom->createElement('sfPermanentAddDtls');
            if($presentresiDetails->isPermanentAddress->value && !$presentresiDetails->isPermanentSameAsPresent->value){
               //House and Streetname Node
                $tf_houseNoStreetName = $dom->createElement('tf_houseNoStreetName');
                    if(strlen($presentresiDetails->house_street_temp->value)>0){
                        $tf_houseNoStreetName->appendChild(new \DOMText(strtoupper($presentresiDetails->house_street_temp->value)));
                    }
                $sfPermanentAddDtls->appendChild($tf_houseNoStreetName);
                
                //Village Town and City node
                $tf_villageTownCity = $dom->createElement('tf_villageTownCity');
                    if(strlen($sfPermanentAddDtls->village_town_city_temp->value)>0){
                        $tf_villageTownCity->appendChild(new \DOMText(strtoupper($presentresiDetails->village_town_city_temp->value)));
                    }
                $sfPermanentAddDtls->appendChild($tf_villageTownCity);

                //State Node ==> Not implemented
                $tf_stateUT = $dom->createElement('tf_stateUT');
                $sfPermanentAddDtls->appendChild($tf_stateUT);

                //District Node ==> Not Implemented
                $tf_district = $dom->createElement('tf_district');
                $sfPermanentAddDtls->appendChild($tf_district);

                //Country Node
                $tf_PermAddCountry = $dom->createElement('tf_PermAddCountry');
                    if(strlen($presentresiDetails->country_temp->value)>0){
                        $tf_PermAddCountry->appendChild(new \DOMText(Country::find($presentresiDetails->country_temp->value)->name));
                    }
                $sfPermanentAddDtls->appendChild($tf_PermAddCountry);

                //Police Station Node ==> Not Implemented
                $tf_policeStation = $dom->createElement('tf_policeStation'); 
                $sfPermanentAddDtls->appendChild($tf_policeStation);

                //Pin code node
                $tf_pin = $dom->createElement('tf_pin');
                    if(strlen($presentresiDetails->zip_pin_temp->value)>0){
                        $tf_pin->appendChild(new \DOMText($presentresiDetails->zip_pin_temp->value));
                    }
                $sfPermanentAddDtls->appendChild($tf_pin);

                //Mobile Number Node
                $tf_mobileNumber = $dom->createElement('tf_mobileNumber');
                    if(strlen($presentresiDetails->mobile_no->value)>0){
                        $tf_mobileNumber->appendChild(new \DOMText($presentresiDetails->mobile_no->value));
                    }
                $sfPermanentAddDtls->appendChild($tf_mobileNumber);
                
                //Telephone Number Node ===> Not implemented
                $tf_telephoneNumber = $dom->createElement('tf_telephoneNumber');
                $sfPermanentAddDtls->appendChild($tf_telephoneNumber);

            }else{
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_houseNoStreetName'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_villageTownCity'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_stateUT'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_district'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_PermAddCountry'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_policeStation'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_pin'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_mobileNumber'));
                $sfPermanentAddDtls->appendChild($dom->createElement('tf_telephoneNumber'));
            }
        $mainForm->appendChild($sfPermanentAddDtls);

        //Agree J&K Node ===> not implemented
        $cb_agreeJAndK = $dom->createElement('cb_agreeJAndK');
        $mainForm->appendChild($cb_agreeJAndK);

        //Emergency Address Details
        $sfEmergencyAddDtls = $dom->createElement('sfEmergencyAddDtls');
            //Name and Address Node
            $tf_nameAddress = $dom->createElement('tf_nameAddress');
                if(strlen($emercontDetails->name_address->value)>0){
                    $tf_nameAddress->appendChild(new \DOMText(strtoupper($emercontDetails->name_address->value)));
                }
            $sfEmergencyAddDtls->appendChild($tf_nameAddress);
            
            //Mobile Number Node
            $tf_mobileNumber = $dom->createElement('tf_mobileNumber');
                if(strlen($emercontDetails->mobile_no->value)>0){
                    $tf_mobileNumber->appendChild(new \DOMText($emercontDetails->mobile_no->value));
                }
            $sfEmergencyAddDtls->appendChild($tf_mobileNumber);

            //Telephone Number Node ==> not implemented
            $tf_telephoneNumber = $dom->createElement('tf_telephoneNumber');
            $sfEmergencyAddDtls->appendChild($tf_telephoneNumber);

            //Email ID Node
            $tf_emailID = $dom->createElement('tf_emailID');
                if(strlen($emercontDetails->email_id->value)>0){
                    $tf_emailID->appendChild(new \DOMText($emercontDetails->email_id->value));
                }
            $sfEmergencyAddDtls->appendChild($tf_emailID); 

        $mainForm->appendChild($sfEmergencyAddDtls);

        //Have you ever held/hold any Identity Certificate? Node
        $rb_checkaplliedIC = $dom->createElement('rb_checkaplliedIC');
            if($serviceDetails->applyFor->value === 'new'){
                $rb_checkaplliedIC->appendChild(new \DOMText($prevpassportDetails->isHoldIdentityCert->value ? 'Y' : 'N'));
            }
        $mainForm->appendChild($rb_checkaplliedIC);

        //Previous Passport Details Nodes attached with main node
        if($serviceDetails->applyFor->value !== 'reissue' && !$prevpassportDetails->isHoldIdentityCert->value){
            $mainForm->appendChild($dom->createElement('tf_passportNumber'));
            $mainForm->appendChild($dom->createElement('dt_dateIssue'));
            $mainForm->appendChild($dom->createElement('dt_dateExpiry'));
            $mainForm->appendChild($dom->createElement('tf_placeOfIssue'));
            $mainForm->appendChild($dom->createElement('tf_prevFileNumber')); 
        }elseif($serviceDetails->applyFor->value === 'reissue' || $prevpassportDetails->isHoldIdentityCert->value){
            //Passport Number Node
            $tf_passportNumber = $dom->createElement('tf_passportNumber');
                if(strlen($prevpassportDetails->passport_no->value)>0){
                    $tf_passportNumber->appendChild(new \DOMText($prevpassportDetails->passport_no->value));
                }
            $mainForm->appendChild($tf_passportNumber);

            //Date of passport issue node
            $dt_dateIssue = $dom->createElement('dt_dateIssue');
                if(strlen($prevpassportDetails->dateOfIssue->value)>0){
                    $dt_dateIssue->appendChild(new \DOMText(Carbon::parse($prevpassportDetails->dateOfIssue->value)->format('d/m/Y')));
                }
            $mainForm->appendChild($dt_dateIssue);

            // Date of Expiry node
            $dt_dateExpiry = $dom->createElement('dt_dateExpiry');
                if(strlen($prevpassportDetails->dateOfExpiry->value)>0){
                    $dt_dateExpiry->appendChild(new \DOMText(Carbon::parse($prevpassportDetails->dateOfExpiry->value)->format('d/m/Y')));
                }
            $mainForm->appendChild($dt_dateExpiry);

            //Place of Issue Node
            $tf_placeOfIssue = $dom->createElement('tf_placeOfIssue');
                if(strlen($prevpassportDetails->placeOfIssue->value)>0){
                    $tf_placeOfIssue->appendChild(new \DOMText(strtoupper($prevpassportDetails->placeOfIssue->value)));
                }
            $mainForm->appendChild($tf_placeOfIssue);

            //Prev File Number Node
            $tf_prevFileNumber = $dom->createElement('tf_prevFileNumber');
                if(strlen($prevpassportDetails->fileNumber->value)>0){
                    $tf_prevFileNumber->appendChild(new \DOMText($prevpassportDetails->fileNumber->value));
                }
            $mainForm->appendChild($tf_prevFileNumber);
        }
        
        //Detail of Previous/Current Diplomatic/Official Passport node
        $rb_checkDiplomaaticOfficial = $dom->createElement('rb_checkDiplomaaticOfficial', $prevpassportDetails->details_prevCurOffPassport->value === 'available' ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkDiplomaaticOfficial);

        //Diplomatic Passport Node
        $sfDiplomaticOfficial = $dom->createElement('sfDiplomaticOfficial');
            if($prevpassportDetails->details_prevCurOffPassport->value === 'available'){
                //Passport number Node
                $tf_DiplOfficialpassportNumber = $dom->createElement('tf_DiplOfficialpassportNumber');
                    if(strlen($prevpassportDetails->passport_no_dipOff->value)>0){
                        $tf_DiplOfficialpassportNumber->appendChild(new \DOMText($prevpassportDetails->passport_no_dipOff->value));
                    }
                $sfDiplomaticOfficial->appendChild($tf_DiplOfficialpassportNumber);

                //Passport Issue date Node
                $dt_DDissueDate = $dom->createElement('dt_DDissueDate');
                    if(strlen($prevpassportDetails->dateOfIssue_dipOff->value)>0){
                        $dt_DDissueDate->appendChild(new \DOMText(Carbon::parse($prevpassportDetails->dateOfIssue_dipOff->value)->format('d/m/Y')));
                    }
                $sfDiplomaticOfficial->appendChild($dt_DDissueDate);

                //Passport expiry date Node
                $dt_DDExpiryDate = $dom->createElement('dt_DDExpiryDate');
                    if(strlen($prevpassportDetails->dateOfExpiry_dipOff->value)>0){
                        $dt_DDExpiryDate->appendChild(new \DOMText(Carbon::parse($prevpassportDetails->dateOfExpiry_dipOff->value)->format('d/m/Y')));
                    }
                $sfDiplomaticOfficial->appendChild($dt_DDExpiryDate);

                //Place of issue Node
                $tf_placeIssueDiplOffPP = $dom->createElement('tf_placeIssueDiplOffPP');
                    if(strlen($prevpassportDetails->placeOfIssue_dipOff->value)>0){
                        $tf_placeIssueDiplOffPP->appendChild(new \DOMText($prevpassportDetails->placeOfIssue_dipOff->value));
                    }
                $sfDiplomaticOfficial->appendChild($tf_placeIssueDiplOffPP);

            }else{
                $sfDiplomaticOfficial->appendChild($dom->createElement('tf_DiplOfficialpassportNumber'));
                $sfDiplomaticOfficial->appendChild($dom->createElement('dt_DDissueDate'));
                $sfDiplomaticOfficial->appendChild($dom->createElement('dt_DDExpiryDate'));
                $sfDiplomaticOfficial->appendChild($dom->createElement('tf_placeIssueDiplOffPP'));
            }
        $mainForm->appendChild($sfDiplomaticOfficial);

        //Have you ever applied for passport, but not issued? Node
        $rb_checkaplliedPP = $dom->createElement('rb_checkaplliedPP', $prevpassportDetails->isAppliedNotIssued->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkaplliedPP);

        //Applied not issued details
        $sfAppliedPPBefore = $dom->createElement('sfAppliedPPBefore');
            if($prevpassportDetails->isAppliedNotIssued->value){
                //File Number Node
                $tf_fileNumber = $dom->createElement('tf_fileNumber');
                    if(strlen($prevpassportDetails->fileNo_notIssued->value)>0){
                        $tf_fileNumber->appendChild(new \DOMText($prevpassportDetails->fileNo_notIssued->value));
                    }
                $sfAppliedPPBefore->appendChild($tf_fileNumber);
                
                // Month of Applying
                $dd_MonthofApplying = $dom->createElement('dd_MonthofApplying');
                    if(strlen($prevpassportDetails->monthYearApply->value)>0){
                        $dd_MonthofApplying->appendChild(new \DOMText(Carbon::parse($prevpassportDetails->monthYearApply->value)->month));
                    }
                $sfAppliedPPBefore->appendChild($dd_MonthofApplying);

                // Year of applying
                $tf_yearofApplying = $dom->createElement('tf_yearofApplying');
                    if(strlen($prevpassportDetails->monthYearApply->value)>0){
                        $dd_MonthofApplying->appendChild(new \DOMText(Carbon::parse($prevpassportDetails->monthYearApply->value)->year));
                    }
                $sfAppliedPPBefore->appendChild($tf_yearofApplying);
                
                // Passport Office name
                $tf_passportOfficeName = $dom->createElement('tf_passportOfficeName');
                    if(strlen($prevpassportDetails->namePassportOffice->value)>0){
                        $tf_passportOfficeName->appendChild(new \DOMText(strtoupper($prevpassportDetails->namePassportOffice->value)));
                    }
                $sfAppliedPPBefore->appendChild($tf_passportOfficeName); 
            }else{
                $sfAppliedPPBefore->appendChild($dom->createElement('tf_fileNumber'));
                $sfAppliedPPBefore->appendChild($dom->createElement('dd_MonthofApplying'));
                $sfAppliedPPBefore->appendChild($dom->createElement('tf_yearofApplying'));
                $sfAppliedPPBefore->appendChild($dom->createElement('tf_passportOfficeName'));
            }

        $mainForm->appendChild($sfAppliedPPBefore);
        
        //Have you ever been charged with criminal proceedings or any arrest warrant/ summon pending before a court of India? Node
        $rb_checkCriminal = $dom->createElement('rb_checkCriminal', $otherDetails->isArrestWarran->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkCriminal);

        //Subject to crime details Node
        $sfsubjectToCrime = $dom->createElement('sfsubjectToCrime');
            if($otherDetails->isArrestWarran->value){
                //Courte Name node
                $tf_courtNameCriminal = $dom->createElement('tf_courtNameCriminal');
                    if(strlen($otherDetails->nameCourtePlace->value)>0){
                        $tf_courtNameCriminal->appendChild(new \DOMText(strtoupper($otherDetails->nameCourtePlace->value)));
                    }
                $sfsubjectToCrime->appendChild($tf_courtNameCriminal);

                //Case / FIR/ warrant No Node
                $tf_CaseFirWarrantCriminal = $dom->createElement('tf_CaseFirWarrantCriminal');
                    if(strlen($otherDetails->caseFirWarrantNumber->value)>0){
                        $tf_CaseFirWarrantCriminal->appendChild(new \DOMText($otherDetails->caseFirWarrantNumber->value));
                    }
                $sfsubjectToCrime->appendChild($tf_CaseFirWarrantCriminal);

                //Law and Section(s) node
                $tf_LawSectionCriminal = $dom->createElement('tf_LawSectionCriminal');
                    if(strlen($otherDetails->lawSections->value)>0){
                        $tf_LawSectionCriminal->appendChild(new \DOMText($otherDetails->lawSections->value));
                    }
                $sfsubjectToCrime->appendChild($tf_LawSectionCriminal);
            }else{
                $sfsubjectToCrime->appendChild($dom->createElement('tf_courtNameCriminal'));
                $sfsubjectToCrime->appendChild($dom->createElement('tf_CaseFirWarrantCriminal'));
                $sfsubjectToCrime->appendChild($dom->createElement('tf_LawSectionCriminal'));
            }
        $mainForm->appendChild($sfsubjectToCrime);

        //Have you at any time during the period of 5 years immediately preceding the date of this application been convicted by a court in India for any criminal offence and sentenced to imprisonment for two years or more? Node
        $rb_checkOffence5years = $dom->createElement('rb_checkOffence5years', $otherDetails->isCriminalOffence->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkOffence5years);

        //Offence 5 Years Node
        $sfOffence5years = $dom->createElement('sfOffence5years');
            if($otherDetails->isCriminalOffence->value){
                //Court Name Node
                $tf_courtName5years = $dom->createElement('tf_courtName5years');
                    if(strlen($otherDetails->nameCourtePlace_0->value)>0){
                        $tf_courtName5years->appendChild(new \DOMText(strtoupper($otherDetails->nameCourtePlace_0->value)));
                    }
                $sfOffence5years->appendChild($tf_courtName5years);

                //Case/ FIR/ Warrant Number Node
                $tf_CaseFirWarrant5years = $dom->createElement('tf_CaseFirWarrant5years');
                    if(strlen($otherDetails->caseFirWarrantNumber_0->value)>0){
                        $tf_CaseFirWarrant5years->appendChild(new \DOMText($otherDetails->caseFirWarrantNumber_0->value));
                    }
                $sfOffence5years->appendChild($tf_CaseFirWarrant5years);

                //Law and Section(s)
                $tf_LawSection5years = $dom->createElement('tf_LawSection5years');
                    if(strlen($otherDetails->lawSections_0->value)>0){
                        $tf_LawSection5years->appendChild(new \DOMText($otherDetails->lawSections_0->value));
                    }
                $sfOffence5years->appendChild($tf_LawSection5years); 
            }else{
                $sfOffence5years->appendChild($dom->createElement('tf_courtName5years'));
                $sfOffence5years->appendChild($dom->createElement('tf_CaseFirWarrant5years'));
                $sfOffence5years->appendChild($dom->createElement('tf_LawSection5years'));
            }
        $mainForm->appendChild( $sfOffence5years);

        //Have you ever been refused or denied passport? Node
        $rb_checkPassportRefused = $dom->createElement('rb_checkPassportRefused', $otherDetails->isRefusedDenied->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkPassportRefused);
        
        //Reason for Refusal Main Node
        $sfReasonRefusal = $dom->createElement('sfReasonRefusal');
            if($otherDetails->isRefusedDenied->value){
                //Reason for refusal node
                $tf_reasonRefusal = $dom->createElement('tf_reasonRefusal');
                    if(strlen($otherDetails->refusalReason->value)>0){
                        $tf_reasonRefusal->appendChild(new \DOMText($otherDetails->refusalReason->value));
                    }
                $sfReasonRefusal->appendChild($tf_reasonRefusal);
            }else{
                $sfReasonRefusal->appendChild($dom->createElement('tf_reasonRefusal'));
            }
        $mainForm->appendChild($sfReasonRefusal);
        
        //Has your Passport ever been impounded or Revoked? node
        $rb_checkImpoundedRevoked = $dom->createElement('rb_checkImpoundedRevoked', $otherDetails->isImpoundRevoked->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkImpoundedRevoked);

        //Impound Revoked passport details
        $sfImpoundRevoked = $dom->createElement('sfImpoundRevoked');
            if($otherDetails->isImpoundRevoked->value){
                //Passport Number Node
                $tf_passportNumber = $dom->createElement('tf_passportNumber');
                    if(strlen($otherDetails->impoundRevokedPassportNo->value)>0){
                        $tf_passportNumber->appendChild(new \DOMText($otherDetails->impoundRevokedPassportNo->value));
                    }
                $sfImpoundRevoked->appendChild($tf_passportNumber);

                //Reason for Impound Node
                $tf_reasonImpoundingRevocation = $dom->createElement('tf_reasonImpoundingRevocation');
                    if(strlen($otherDetails->reasonImpoundRevocation->value)>0){
                        $tf_reasonImpoundingRevocation->appendChild(new \DOMText($otherDetails->reasonImpoundRevocation->value));
                    }
                $sfImpoundRevoked->appendChild($tf_reasonImpoundingRevocation);

            }else{
                $sfImpoundRevoked->appendChild($dom->createElement('tf_passportNumber'));
                $sfImpoundRevoked->appendChild($dom->createElement('tf_reasonImpoundingRevocation'));
            }
        $mainForm->appendChild($sfImpoundRevoked);

        //Have you ever applied for/ been granted political asylum to/ by any foreign country? Node
        $rb_checkAsylum = $dom->createElement('rb_checkAsylum', $otherDetails->isPoliticalAsylum->value ? 'Y' : 'N'); 
        $mainForm->appendChild($rb_checkAsylum);

        //Political Asylum Country
        $sfAsylumCountry = $dom->createElement('sfAsylumCountry');
            if($otherDetails->isPoliticalAsylum->value){
                //Country Node
                $tf_asylumCountry = $dom->createElement('tf_asylumCountry');
                    if(strlen($otherDetails->country->value)>0){
                        $tf_asylumCountry->appendChild(new \DOMText(Country::find($otherDetails->country->value)->name));
                    }
            }else{
                $sfAsylumCountry->appendChild($dom->createElement('tf_asylumCountry'));
            }
        $mainForm->appendChild($sfAsylumCountry);
        
        //Have you ever returned to India on Emergency Certificate (EC) or were ever deported or repatriated? Node
        $rb_checkDeportRepatriate = $dom->createElement('rb_checkDeportRepatriate', $otherDetails->isEmerCert->value ? 'Y' : 'N');
        $mainForm->appendChild($rb_checkDeportRepatriate);

        //Emergency Certificate Details
        $sfDeportRepatriate = $dom->createElement('sfDeportRepatriate');
            if($otherDetails->isEmerCert->value){
                //Emergency Certificate (EC) No. Node
                $tf_ecNo = $dom->createElement('tf_ecNo');
                    if(strlen($otherDetails->emerCirtNo->value)>0){
                        $tf_ecNo->appendChild(new \DOMText($otherDetails->emerCirtNo->value));
                    }
                $sfDeportRepatriate->appendChild($tf_ecNo);

                //Emergency Certificate (EC) Date of Issue
                $dt_ecDateofIssue = $dom->createElement('dt_ecDateofIssue');
                    if(strlen($otherDetails->emerCirtDate->value)>0){
                        $dt_ecDateofIssue->appendChild(new \DOMText(Carbon::parse($otherDetails->emerCirtDate->value)->format('d/m/Y')));
                    }
                $sfDeportRepatriate->appendChild($dt_ecDateofIssue);

                //Country from where travelled on EC/deported/repatriated Node
                $tf_countryDeportRepatriate = $dom->createElement('tf_countryDeportRepatriate');
                    if(strlen($otherDetails->emerCirtCountry->value)>0){
                        $tf_countryDeportRepatriate->appendChild(new \DOMText('Country::find($otherDetails->emerCirtCountry->value)->name'));
                    }
                $sfDeportRepatriate->appendChild($tf_countryDeportRepatriate);
                
                //Issuing Authority Node
                $tf_ecIssuingAuthority = $dom->createElement('tf_ecIssuingAuthority');
                    if(strlen($otherDetails->issueAuthority->value)>0){
                        $tf_ecIssuingAuthority->appendChild(new \DOMText($otherDetails->issueAuthority->value));
                    }
                $sfDeportRepatriate->appendChild($tf_ecIssuingAuthority);

                //Reason for issuing EC/deported/repatriated Node
                $tf_reasonDeportRepatriate = $dom->createElement('tf_reasonDeportRepatriate');
                    if(strlen($otherDetails->reasonIssuing->value)>0){
                        $tf_reasonDeportRepatriate->appendChild(new \DOMText($otherDetails->reasonIssuing->value));
                    }
                $sfDeportRepatriate->appendChild($tf_reasonDeportRepatriate);
            }else{
                $sfDeportRepatriate->appendChild($dom->createElement('tf_ecNo'));
                $sfDeportRepatriate->appendChild($dom->createElement('dt_ecDateofIssue'));
                $sfDeportRepatriate->appendChild($dom->createElement('tf_countryDeportRepatriate'));
                $sfDeportRepatriate->appendChild($dom->createElement('tf_ecIssuingAuthority'));
                $sfDeportRepatriate->appendChild($dom->createElement('tf_reasonDeportRepatriate'));
            }
        $mainForm->appendChild($sfDeportRepatriate);

        //Self Declaration Node
        $sf_selfDecl = $dom->createElement('sf_selfDecl');
            $sf_selfDecl->appendChild($dom->createElement('cb_agree', '1'));
        $mainForm->appendChild($sf_selfDecl);

        //Place of form filling
        $tf_place = $dom->createElement('tf_place');
            if($presentresiDetails->isPresentOutOfIndia->value){
                $tf_place->appendChild(new \DOMText(City::find($presentresiDetails->district_y->value)->name));
            }else{
                $tf_place->appendChild(new \DOMText(City::find($presentresiDetails->district_n->value)->name));
            } 
        $mainForm->appendChild($tf_place);

        //Date of filling form
        $dt_date = $dom->createElement('dt_date', Carbon::parse($order->created_at)->format('d/m/Y'));
        $mainForm->appendChild($dt_date);

        //Validation Check
        $tf_ValidationCheck = $dom->createElement('tf_ValidationCheck', 'FORM VALID'); 
        $mainForm->appendChild($tf_ValidationCheck);

        //Version
        $tf_Version = $dom->createElement('tf_Version', 'MFEV3.0');
        $mainForm->appendChild($tf_Version);

        //Showing XML for testing
        // echo "<xmp>". $dom->saveXML() . "</xmp>";
        
        //Saving XML File and push to Download

        return  response($dom->saveXML())
                ->header('Content-Disposition', 'attachment;filename=' . $order->payment->razorpay_order_id . '.xml')
                ->header('Content-Type', 'text/xml');
    
    }
}
