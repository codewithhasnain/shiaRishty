import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import countryList from "react-select-country-list";
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

  const onSubmit = async (data) => {
    console.log("Form Data: ", data);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/Profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Success:", responseData);
        alert("Profile added successfully!");
      } else {
        console.error("Error:", response.status);
        alert("Failed to add profile. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="profile-form">
      <h2>Add Your Profile</h2>
      <div>
        <label>Relation</label>
        <Controller
          name="relation"
          control={control}
          render={({ field }) => (
            <Select {...field} options={relationOptions} />
          )}
        />
      </div>
      <div>
        <label>Full Name</label>
        <input {...register("fullName", { required: "Full Name is required" })} />
        {errors.fullName && <p>{errors.fullName.message}</p>}
      </div>
      {/* Add more form fields here using register or Controller */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
