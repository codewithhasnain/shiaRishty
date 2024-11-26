import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
import fetchWithAuth from '../../utils/fetchWithAuth';
import '../../styles/ProfileForm.css'; 

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const countries = countryList().getData();

  const relationOptions = [
    { value: "Self", label: "Self" },
    { value: "Parent", label: "Parent" },
    { value: "Brother", label: "Brother" },
    { value: "Sister", label: "Sister" },
    { value: "Relative", label: "Relative" },
    { value: "Friend", label: "Friend" },
  ];

  const maritalStatusOptions = [
    { value: "Never married before", label: "Never married before" },
    { value: "Divorced", label: "Divorced" },
    { value: "Married", label: "Married" },
    { value: "Widowed", label: "Widowed" },
    { value: "Separated", label: "Separated" },
  ];

  const religionOptions = [
    { value: "Shia Jafari/Ithna-asheri", label: "Shia Jafari/Ithna-asheri" },
    { value: "Other", label: "Other" },
  ];

  const ethnicityOptions = [
    { value: "Arab", label: "Arab" },
    { value: "African", label: "African" },
    { value: "African (American)", label: "African (American)" },
    { value: "Asian (IndoPak/Asian)", label: "Asian (IndoPak/Asian)" },
    { value: "Asian (East)", label: "Asian (East)" },
    { value: "Asian (Indian)", label: "Asian (Indian)" },
    { value: "Asian (Pakistan)", label: "Asian (Pakistan)" },
    { value: "Caucasian", label: "Caucasian" },
    { value: "Hispanic", label: "Hispanic" },
    { value: "Mixed Race", label: "Mixed Race" },
    { value: "Persian", label: "Persian" },
    { value: "Other", label: "Other" },
  ];

  const heightOptions = [
    { value: "4'6 (137 cm)", label: "4'6 (137 cm)" },
    { value: "4'7 (140 cm)", label: "4'7 (140 cm)" },
    { value: "4'8 (142 cm)", label: "4'8 (142 cm)" },
    { value: "4'9 (145 cm)", label: "4'9 (145 cm)" },
    { value: "4'10 (147 cm)", label: "4'10 (147 cm)" },
    { value: "4'11 (150 cm)", label: "4'11 (150 cm)" },
    { value: "5'0 (152 cm)", label: "5'0 (152 cm)" },
    { value: "5'1 (155 cm)", label: "5'1 (155 cm)" },
    { value: "5'2 (157 cm)", label: "5'2 (157 cm)" },
    { value: "5'3 (160 cm)", label: "5'3 (160 cm)" },
    { value: "5'4 (163 cm)", label: "5'4 (163 cm)" },
    { value: "5'5 (165 cm)", label: "5'5 (165 cm)" },
    { value: "5'6 (168 cm)", label: "5'6 (168 cm)" },
    { value: "5'7 (170 cm)", label: "5'7 (170 cm)" },
    { value: "5'8 (173 cm)", label: "5'8 (173 cm)" },
    { value: "5'9 (175 cm)", label: "5'9 (175 cm)" },
    { value: "5'10 (178 cm)", label: "5'10 (178 cm)" },
    { value: "5'11 (180 cm)", label: "5'11 (180 cm)" },
    { value: "6'0 (183 cm)", label: "6'0 (183 cm)" },
    { value: "6'1 (185 cm)", label: "6'1 (185 cm)" },
    { value: "6'2 (188 cm)", label: "6'2 (188 cm)" },
    { value: "6'3 (191 cm)", label: "6'3 (191 cm)" },
    { value: "6'4 (193 cm)", label: "6'4 (193 cm)" },
    { value: "6'5 (195 cm)", label: ">6'5 (195 cm)" },
    { value: "6'6 (197 cm)", label: ">6'6 (197 cm)" },
    { value: "6'7 (199 cm)", label: ">6'7 (199 cm)" },
    { value: "6'8 (201 cm)", label: ">6'8 (201 cm)" },
    { value: "6'9 (203 cm)", label: ">6'9 (203 cm)" },
    { value: "6'10 (205 cm)", label: ">6'10 (205 cm)"},
    { value: "6'11 (207 cm)", label: ">6'11 (207 cm)"},
  ];

  const occupationOptions = [
    { value: "Not working", label: "Not working" },
    { value: "Non-mainstream professional", label: "Non-mainstream professional" },
    { value: "Accountant", label: "Accountant" },
    { value: "Acting", label: "Acting" },
    { value: "Administration", label: "Administration" },
    { value: "Advertising", label: "Advertising" },
    { value: "Air Hostess", label: "Air Hostess" },
    { value: "Architect", label: "Architect" },
    { value: "Artist", label: "Artist" },
    { value: "Banker", label: "Banker" },
    { value: "Beautician", label: "Beautician" },
    { value: "Biologist / Botanist", label: "Biologist / Botanist" },
    { value: "Business", label: "Business" },
    { value: "Chartered Accountant", label: "Chartered Accountant" },
    { value: "Clerical Official", label: "Clerical Official" },
    { value: "Commercial Pilot", label: "Commercial Pilot" },
    { value: "Computer/IT Professional", label: "Computer/IT Professional" },
    { value: "Consultant", label: "Consultant" },
    { value: "Construction", label: "Construction" },
    { value: "Contractor", label: "Contractor" },
    { value: "Cost Accountant", label: "Cost Accountant" },
    { value: "Creative Person", label: "Creative Person" },
    { value: "Customer Support", label: "Customer Support" },
    { value: "Defense/Military", label: "Defense/Military" },
    { value: "Dentist", label: "Dentist" },
    { value: "Designer", label: "Designer" },
    { value: "Doctor", label: "Doctor" },
    { value: "Economist", label: "Economist" },
    { value: "Electrician", label: "Electrician" },
    { value: "Engineer", label: "Engineer" },
    { value: "Entertainment", label: "Entertainment" },
    { value: "Event Manager", label: "Event Manager" },
    { value: "Executive", label: "Executive" },
    { value: "Factory worker", label: "Factory worker" },
    { value: "Farmer", label: "Farmer" },
    { value: "Fashion Designer", label: "Fashion Designer" },
    { value: "Finance", label: "Finance" },
    { value: "Flight Attendant", label: "Flight Attendant" },
    { value: "Gardening/Outdoor", label: "Gardening/Outdoor" },
    { value: "Government Employee", label: "Government Employee" },
    { value: "Health Care Professional", label: "Health Care Professional" },
    { value: "Home Maker", label: "Home Maker" },
    { value: "Hotel & Restaurant", label: "Hotel & Restaurant" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Interior Designer", label: "Interior Designer" },
    { value: "Investment Professional", label: "Investment Professional" },
    { value: "Journalist", label: "Journalist" },
    { value: "Lawyer", label: "Lawyer" },
    { value: "Law Enforcement", label: "Law Enforcement" },
    { value: "Lecturer", label: "Lecturer" },
    { value: "Legal Professional", label: "Legal Professional" },
    { value: "Machine Operator", label: "Machine Operator" },
    { value: "Maintenance", label: "Maintenance" },
    { value: "Manager", label: "Manager" },
    { value: "Marketing Professional", label: "Marketing Professional" },
    { value: "Medical Professional", label: "Medical Professional" },
    { value: "Medical Transcriptionist", label: "Medical Transcriptionist" },
    { value: "Nurse", label: "Nurse" },
    { value: "Occupational Therapist", label: "Occupational Therapist" },
    { value: "Optician", label: "Optician" },
    { value: "Other", label: "Other" },
    { value: "Pharmacist", label: "Pharmacist" },
    { value: "Physician Assistant", label: "Physician Assistant" },
    { value: "Physicist", label: "Physicist" },
    { value: "Physiotherapist", label: "Physiotherapist" },
    { value: "Pilot", label: "Pilot" },
    { value: "Politician", label: "Politician" },
    { value: "Production professional", label: "Production professional" },
    { value: "Professor", label: "Professor" },
    { value: "Psychologist", label: "Psychologist" },
    { value: "Public Relations", label: "Public Relations" },
    { value: "Real Estate", label: "Real Estate" },
    { value: "Religious Services", label: "Religious Services" },
    { value: "Research Scholar", label: "Research Scholar" },
    { value: "Restaurant/Food", label: "Restaurant/Food" },
    { value: "Retail", label: "Retail" },
    { value: "Sales", label: "Sales" },
    { value: "Secretary", label: "Secretary" },
    { value: "Self-employed", label: "Self-employed" },
    { value: "Social Worker", label: "Social Worker" },
    { value: "Software Consultant", label: "Software Consultant" },
    { value: "Sports", label: "Sports" },
    { value: "Student", label: "Student" },
    { value: "Supervisor", label: "Supervisor" },
    { value: "Teacher", label: "Teacher" },
    { value: "Technician", label: "Technician" },
    { value: "Telecom Professional", label: "Telecom Professional" },
    { value: "Training Professional", label: "Training Professional" },
    { value: "Travel/Transportation", label: "Travel/Transportation" },
    { value: "Veterinary Doctor", label: "Veterinary Doctor" },
    { value: "Volunteer", label: "Volunteer" },
    { value: "Writer", label: "Writer" },
    { value: "Zoologist", label: "Zoologist" },
];

const onSubmit = async (data) => {
  console.log("Form Data:", data);

  // Extract only the 'value' from fields that are objects
  const updatedData = {
    ...data,
    relation: data.relation.value, // Extract value from 'relation'
    countryCitizenship: data.countryCitizenship.value, // Extract value from 'countryCitizenship'
    countryResidence: data.countryResidence.value, // Extract value from 'countryResidence'
    height: data.height.value, // Extract value from 'height'
    maritalStatus: data.maritalStatus.value, // Extract value from 'maritalStatus'
    religion: data.religion.value, // Extract value from 'religion'
    ethnicity: data.ethnicity.value, // Extract value from 'ethnicity'
    fatherCountry: data.fatherCountry.value, // Extract value from 'fatherCountry'
    motherCountry: data.motherCountry.value, // Extract value from 'motherCountry'
    occupation: data.occupation.value, // Extract value from 'occupation'
    highestEducation: data.highestEducation.value, // Extract value from 'highestEducation'
    smoking: data.smoking.value, // Extract value from 'smoking'
    hijabPreferences: data.hijabPreferences.value, // Extract value from 'hijabPreferences'
    willingToRelocate: data.willingToRelocate.value, // Extract value from 'willingToRelocate'
    preferredCountries: data.preferredCountries.map(item => item.value), // Extract values from array
    educationLevel: data.educationLevel.value, // Extract value from 'educationLevel'
  };

  try {
    const response = await fetchWithAuth('/api/Profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Success:', responseData);
      alert('Profile added successfully!');
    } else {
      const errorResponse = await response.json();
      console.error('Error:', errorResponse);
      alert('Failed to add profile. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please check your connection and try again.');
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
      <h2>Add Your Profile</h2>

      {/* Relation to Person */}
      <div>
        <label>Relation to Person (required):</label>
        <Controller
          name="relation"
          control={control}
          rules={{ required: "Relation is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={relationOptions}
              placeholder="Select Relation"
            />
          )}
        />
        {errors.relation && <p>{errors.relation.message}</p>}
      </div>

      {/* Full Name */}
      <div>
        <label>Full Name (required):</label>
        <input
          {...register("fullName", { required: "Full Name is required" })}
          type="text"
          placeholder="Enter full name"
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>

      {/* Email Address */}
      <div>
        <label>Email Address (required):</label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          placeholder="Enter email address"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Re-enter Email Address */}
      <div>
        <label>Re-enter Email Address (required):</label>
        <input
          {...register("confirmEmail", { required: "Please confirm your email" })}
          type="email"
          placeholder="Re-enter email address"
        />
        {errors.confirmEmail && <p>{errors.confirmEmail.message}</p>}
      </div>

      {/* City of Residence */}
      <div>
        <label>City of Residence (required):</label>
        <input
          {...register("city", { required: "City is required" })}
          type="text"
          placeholder="Enter city"
        />
        {errors.city && <p>{errors.city.message}</p>}
      </div>

      {/* State/Province */}
      <div>
        <label>State/Province/County:</label>
        <input
          {...register("state")}
          type="text"
          placeholder="Enter state/province/county"
        />
      </div>

      {/* Country of Residence */}
      <div>
        <label>Country of Residence (required):</label>
        <Controller
          name="countryResidence"
          control={control}
          rules={{ required: "Country of residence is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={countries}
              placeholder="Select Country"
            />
          )}
        />
        {errors.countryResidence && <p>{errors.countryResidence.message}</p>}
      </div>

      {/* Country of Citizenship */}
      <div>
        <label>Country of Citizenship or Permanent Residence (required):</label>
        <Controller
          name="countryCitizenship"
          control={control}
          rules={{ required: "Country of citizenship is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={countries}
              placeholder="Select Country"
            />
          )}
        />
        {errors.countryCitizenship && (
          <p>{errors.countryCitizenship.message}</p>
        )}
      </div>

      {/* Gender */}
      <div>
        <label>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              value="Male"
              {...register("gender", { required: "Gender is required" })}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="Female"
              {...register("gender", { required: "Gender is required" })}
            />
            Female
          </label>
        </div>
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

      {/* Additional Fields */}

     {/* Date of Birth */}
<div>
  <label>Date of Birth:</label>
  <input
    {...register("dob", { required: "Date of Birth is required" })}
    type="date"
  />
  {errors.dob && <p>{errors.dob.message}</p>}
</div>


      {/* Height */}
      <div>
        <label>Height (required):</label>
        <Controller
          name="height"
          control={control}
          rules={{ required: "Height is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={heightOptions}
              placeholder="Select Height"
            />
          )}
        />
        {errors.height && <p>{errors.height.message}</p>}
      </div>

      {/* Marital Status */}
      <div>
        <label>Marital Status:</label>
        <Controller
          name="maritalStatus"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={maritalStatusOptions}
              placeholder="Select Marital Status"
            />
          )}
        />
      </div>

      {/* Religion */}
      <div>
        <label>Religion:</label>
        <Controller
          name="religion"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={religionOptions}
              placeholder="Select Religion"
            />
          )}
        />
      </div>

      {/* Ethnicity */}
      <div>
        <label>Ethnicity:</label>
        <Controller
          name="ethnicity"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={ethnicityOptions}
              placeholder="Select Ethnicity"
            />
          )}
        />
      </div>

{/* Father Country */}
<div>
        <label>Father's Country:</label>
        <Controller
          name="fatherCountry"
          control={control}
          rules={{ required: "Father's country is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={countries}
              placeholder="Select Father's Country"
            />
          )}
        />
        {errors.fatherCountry && <p>{errors.fatherCountry.message}</p>}
      </div>

      {/* Mother Country */}
      <div>
        <label>Mother's Country:</label>
        <Controller
          name="motherCountry"
          control={control}
          rules={{ required: "Mother's country is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={countries}
              placeholder="Select Mother's Country"
            />
          )}
        />
        {errors.motherCountry && <p>{errors.motherCountry.message}</p>}
      </div>

      {/* Occupation */}
      <div>
        <label>Occupation (required):</label>
        <Controller
          name="occupation"
          control={control}
          rules={{ required: "Occupation is required" }}
          render={({ field }) => (
            <Select
              {...field}
              options={occupationOptions}
              placeholder="Select Occupation"
            />
          )}
        />
        {errors.occupation && <p>{errors.occupation.message}</p>}
      </div>

      {/* Other Details About Your Occupation */}
<div>
  <label>Other Details About Your Occupation:</label>
  <textarea
    {...register("otherDetails", {
      required: "This field is required",
      maxLength: {
        value: 200,
        message: "Maximum length is 200 characters",
      },
    })}
    placeholder="Describe your occupation in brief"
  />
  {errors.otherDetails && <p>{errors.otherDetails.message}</p>}
</div>

{/* Highest Education Obtained */}
<div>
  <label>Highest Education Obtained:</label>
  <Controller
    name="highestEducation"
    control={control}
    rules={{ required: "Please select your highest education level" }}
    render={({ field }) => (
      <Select
        {...field}
        options={[
          { value: "No Formal Education", label: "No Formal Education" },
          { value: "Primary School", label: "Primary School" },
          { value: "Middle School", label: "Middle School" },
          { value: "High School Diploma", label: "High School Diploma" },
          { value: "Bachelor's Degree", label: "Bachelor's Degree" },
          { value: "Master's Degree", label: "Master's Degree" },
          { value: "Doctorate or PhD", label: "Doctorate or PhD" },
        ]}
        placeholder="Select Education Level"
      />
    )}
  />
  {errors.highestEducation && <p>{errors.highestEducation.message}</p>}
</div>

{/* Smoking Preferences */}
<div>
  <label>Smoking Preferences:</label>
  <Controller
    name="smoking"
    control={control}
    rules={{ required: "Please select your smoking preference" }}
    render={({ field }) => (
      <Select
        {...field}
        options={[
          { value: "Non-smoker", label: "Non-smoker" },
          { value: "Occasional Smoker", label: "Occasional Smoker" },
          { value: "Frequent Smoker", label: "Frequent Smoker" },
        ]}
        placeholder="Select Smoking Preference"
      />
    )}
  />
  {errors.smoking && <p>{errors.smoking.message}</p>}
</div>

{/* Hijab Preferences */}
<div>
  <label>Hijab Preferences:</label>
  <Controller
    name="hijabPreferences"
    control={control}
    rules={{ required: "Please select your hijab preference" }}
    render={({ field }) => (
      <Select
        {...field}
        options={[
          { value: "Always Wears Hijab", label: "Always Wears Hijab" },
          { value: "Sometimes Wears Hijab", label: "Sometimes Wears Hijab" },
          { value: "Does Not Wear Hijab", label: "Does Not Wear Hijab" },
        ]}
        placeholder="Select Hijab Preference"
      />
    )}
  />
  {errors.hijabPreferences && <p>{errors.hijabPreferences.message}</p>}
</div>

{/* Willing to Relocate */}
<div>
  <label>Willing to Relocate:</label>
  <Controller
    name="willingToRelocate"
    control={control}
    rules={{ required: "Please select your willingness to relocate" }}
    render={({ field }) => (
      <Select
        {...field}
        options={[
          { value: "Yes-anywhere", label: "Yes-anywhere" },
          { value: "Yes-Within the country", label: "Yes-Within the country" },
          { value: "Yes-certain city", label: "Yes-certain city" },
          { value: "No", label: "No" },
        ]}
        placeholder="Select Relocation Preference"
      />
    )}
  />
  {errors.willingToRelocate && <p>{errors.willingToRelocate.message}</p>}
</div>

{/* Languages */}
<div>
  <label>Languages (up to 5, separated by commas):</label>
  <input
    {...register("languages", {
      validate: (value) => {
        const languages = value.split(",").map((lang) => lang.trim());
        if (languages.length > 5) {
          return "You can only add up to 5 languages";
        }
        return true;
      },
    })}
    type="text"
    placeholder="Enter languages separated by commas (e.g., English, French, Urdu)"
  />
  {errors.languages && <p>{errors.languages.message}</p>}
</div>

  {/* Did you convert to Islam */}
  <div>
        <label>Did you convert to Islam?</label>
        <div>
          <input {...register("convertedToIslam")} type="radio" value="Yes" /> Yes
          <input {...register("convertedToIslam")} type="radio" value="No" /> No
        </div>
      </div>

      {/* Are you a Syed */}
      <div>
        <label>Are you a Syed?</label>
        <div>
          <input {...register("isSyed")} type="radio" value="Yes" /> Yes
          <input {...register("isSyed")} type="radio" value="No" /> No
          <input {...register("isSyed")} type="radio" value="Don't know" /> Don't
          know
        </div>
      </div>

      {/* Do you have any handicap/major disabilities */}
      <div>
        <label>Do you have any handicap/major disabilities?</label>
        <div>
          <input {...register("hasDisabilities")} type="radio" value="Yes" /> Yes
          <input {...register("hasDisabilities")} type="radio" value="No" /> No
        </div>
      </div>

      {/* Do you have children */}
      <div>
        <label>Do you have children?</label>
        <div>
          <input {...register("hasChildren")} type="radio" value="Yes" /> Yes
          <input {...register("hasChildren")} type="radio" value="No" /> No
        </div>
      </div>

      {/* You are seeking */}
      <div>
        <label>You are seeking:</label>
        <div>
          <input
            {...register("seeking")}
            type="radio"
            value="Nikah/Marriage soon after finding the right one"
          />{" "}
          Nikah/Marriage soon after finding the right one
          <input
            {...register("seeking")}
            type="radio"
            value="Nikah/Marriage between one and two years from now"
          />{" "}
          Nikah/Marriage between one and two years from now
          <input {...register("seeking")} type="radio" value="Other" /> Other
        </div>
      </div>

      {/* Common interests */}
      <div>
        <label>
          What common interests do you currently have? (Select all that apply)
        </label>
        <div>
          <label>
            <input {...register("interests")} type="checkbox" value="Board games" />{" "}
            Board games
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Camping/Outdoors"
            />{" "}
            Camping/Outdoors
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Cooking" />{" "}
            Cooking
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Current events" />{" "}
            Current events
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Dining out" />{" "}
            Dining out
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Exercising" />{" "}
            Exercising
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Financial Markets"
            />{" "}
            Financial Markets
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Fishing/Hunting"
            />{" "}
            Fishing/Hunting
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Gardening/Landscaping"
            />{" "}
            Gardening/Landscaping
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Hobbies & crafts"
            />{" "}
            Hobbies & crafts
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Islamic activities"
            />{" "}
            Islamic activities
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Keeping pets" />{" "}
            Keeping pets
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Movies/Videos" />{" "}
            Movies/Videos
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Museums & art" />{" "}
            Museums & art
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Music" /> Music
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Performing arts"
            />{" "}
            Performing arts
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Playing sports"
            />{" "}
            Playing sports
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Political interests"
            />{" "}
            Political interests
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Reading books" />{" "}
            Reading books
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Shopping" />{" "}
            Shopping
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Style & fashion"
            />{" "}
            Style & fashion
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Tea/Coffee & conversation"
            />{" "}
            Tea/Coffee & conversation
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Technology/Gadgets"
            />{" "}
            Technology/Gadgets
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Travel/Sightseeing"
            />{" "}
            Travel/Sightseeing
          </label>
          <label>
            <input {...register("interests")} type="checkbox" value="Video games" />{" "}
            Video games
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Volunteering"
            />{" "}
            Volunteering
          </label>
          <label>
            <input
              {...register("interests")}
              type="checkbox"
              value="Watching sports"
            />{" "}
            Watching sports
          </label>
        </div>
      </div>

{/* Religious Practices */}
<div>
  <label>
    Please describe your level of religious practice; also include religious expectations (required): 
    <span>PLEASE DO NOT PUT YOUR EMAIL, MAILING ADDRESS, PHONE, URL BELOW</span>
  </label>
  <textarea
    {...register("religiousPractice", { required: "This field is required" })}
    placeholder="Describe your level of religious practice..."
  />
  {errors.religiousPractice && <p>{errors.religiousPractice.message}</p>}
</div>

{/* Preferences or Qualities */}
<div>
  <label>
    Preferences, or qualities you are seeking (required): 
    <span>PLEASE DO NOT PUT YOUR EMAIL, MAILING ADDRESS, PHONE, URL BELOW</span>
  </label>
  <textarea
    {...register("preferences", { required: "This field is required" })}
    placeholder="Write in detail about the preferences or qualities you are seeking..."
  />
  {errors.preferences && <p>{errors.preferences.message}</p>}
</div>

{/* More About You */}
<div>
  <label>
    More about you (required): 
    <span>PLEASE DO NOT PUT YOUR EMAIL, MAILING ADDRESS, PHONE, URL BELOW</span>
  </label>
  <textarea
    {...register("aboutYou", { required: "This field is required" })}
    placeholder="Write about yourself, your interests, personality, and why you would be a good marriage partner..."
  />
  {errors.aboutYou && <p>{errors.aboutYou.message}</p>}
</div>

{/* Preferred Match Criteria */}
<div style={{ backgroundColor: "rgb(248, 236, 175)", padding: "1rem", borderRadius: "8px" }}>
  <h3>Preferred Match Criteria (Optional):</h3>

  {/* Preferred Match should be a resident of */}
  <div>
    <label>Preferred Match should be a resident of:</label>
    <Controller
      name="preferredCountries"
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={countries} // Assuming `countries` is the list of countries
          isMulti
          placeholder="Select Countries"
        />
      )}
    />
    {errors.preferredCountries && <p>{errors.preferredCountries.message}</p>}
  </div>

  {/* Preferred Match age */}
  <div>
    <label>Preferred Match age should be:</label>
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <input
        {...register("minAge", {
          valueAsNumber: true,
          required: "Minimum age is required",
        })}
        type="number"
        placeholder="Min Age"
      />
      <span>to</span>
      <input
        {...register("maxAge", {
          valueAsNumber: true,
          required: "Maximum age is required",
        })}
        type="number"
        placeholder="Max Age"
      />
    </div>
    {errors.minAge && <p>{errors.minAge.message}</p>}
    {errors.maxAge && <p>{errors.maxAge.message}</p>}
  </div>

  {/* Preferred Match marital status */}
  <div>
    <label>Preferred Match marital status:</label>
    {["Never Married Before", "Divorced", "Married"].map((status) => (
      <label key={status} style={{ display: "block" }}>
        <input
          type="checkbox"
          {...register("maritalStatus")}
          value={status}
        />
        {status}
      </label>
    ))}
  </div>

  {/* Preferred Match ethnicity */}
  <div>
    <label>Preferred Match ethnicity:</label>
    {[
      "Arab",
      "African",
      "Asian",
      "Caucasian",
      "Hispanic",
      "Mixed Race",
      "Persian",
      "South Asian - Indian",
      "South Asian - Pakistani",
    ].map((ethnicity) => (
      <label key={ethnicity} style={{ display: "block" }}>
        <input
          type="checkbox"
          {...register("ethnicity")}
          value={ethnicity}
        />
        {ethnicity}
      </label>
    ))}
  </div>

  {/* Preferred Match minimum education */}
  <div>
    <label>Preferred Match minimum education:</label>
    <Controller
      name="educationLevel"
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          options={[
            { label: "Any", value: "Any" },
            { label: "Some schooling", value: "Some schooling" },
            { label: "High school", value: "High school" },
            { label: "Technical Training / Diploma", value: "Technical Training / Diploma" },
            { label: "Associates Degree", value: "Associates Degree" },
            { label: "Bachelors Degree", value: "Bachelors Degree" },
            { label: "Graduate / Masters Degree", value: "Graduate / Masters Degree" },
            { label: "Professional Degree", value: "Professional Degree" },
            { label: "Doctoral Degree / Ph.D", value: "Doctoral Degree / Ph.D" },
          ]}
          placeholder="Select Education Level"
        />
      )}
    />
    {errors.educationLevel && <p>{errors.educationLevel.message}</p>}
  </div>

  {/* Email preferences */}
  <div>
    <label>Email preferences:</label>
    <label>
      <input
        type="radio"
        value="anyone"
        {...register("emailPreference", { required: "Email preference is required" })}
      />
      Email me requests from anyone
    </label>
    <label>
      <input
        type="radio"
        value="preferredOnly"
        {...register("emailPreference")}
      />
      Email me requests from Preferred Matches ONLY
    </label>
    {errors.emailPreference && <p>{errors.emailPreference.message}</p>}
  </div>
</div>


      {/* Submit Button */}
      <div>
        <button type="submit">Add Profile</button>
      </div>
    </form>
  );
};

export default ProfileForm;
