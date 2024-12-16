import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/css/Profile.css";

const Profile = ({ userCategory }) => {
  const navigate = useNavigate();

  // Mock initial profile data (this could come from API or localStorage)
  const initialProfileData = {
    name: "John Doe", 
    email: "john.doe@example.com",
    password: "******", // Don't show the password, just a placeholder
    street: "123 Farm Lane",
    city: "Farmtown",
    zipCode: "12345",
    district: "Farming District",
    contactNo: "+123456789",
    farmSize: "10 acres",
    farmType: "Beginner",
    organizationRegistrationNo: "XYZ12345",
    purposeOfRegistration: "Agricultural Development",
    department: "Agriculture Division"
  };

  const [profile, setProfile] = useState(initialProfileData);

  useEffect(() => {
    // Optionally, fetch real data from an API or localStorage
    // For now, we are using mock data
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the updated profile data (could be an API request)
    alert("Profile updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="profile-container">
      <h2>{`Profile: ${userCategory === "farmer" ? "Farmer" : userCategory}`}</h2>
      <form onSubmit={handleSubmit}>
        {/* Render name field for farmer */}
        {userCategory === "farmer" && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={profile.name}
            onChange={handleChange}
            required
          />
        )}

        {/* Render organization name for non-farmer categories */}
        {userCategory !== "farmer" && (
          <input
            type="text"
            name="organizationName"
            placeholder="Organization Name"
            value={profile.organizationName || ""}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={profile.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={profile.password} // Default to password field for simplicity
          onChange={handleChange}
          required
        />

        <div className="address-fields">
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={profile.street}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={profile.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            value={profile.zipCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="district"
            placeholder="District"
            value={profile.district}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="contactNo"
          placeholder="Contact No"
          value={profile.contactNo}
          onChange={handleChange}
          required
        />

        {/* Render additional fields for farmer */}
        {userCategory === "farmer" && (
          <>
            <input
              type="text"
              name="farmSize"
              placeholder="Farm Size (acres/meters)"
              value={profile.farmSize}
              onChange={handleChange}
              required
            />
            <select
              name="farmType"
              value={profile.farmType}
              onChange={handleChange}
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </>
        )}

        {/* Render additional fields for non-government */}
        {userCategory === "non-government" && (
          <>
            <input
              type="text"
              name="organizationRegistrationNo"
              placeholder="Organization Registration No"
              value={profile.organizationRegistrationNo}
              onChange={handleChange}
              required
            />
            <textarea
              name="purposeOfRegistration"
              placeholder="Purpose of Registration"
              value={profile.purposeOfRegistration}
              onChange={handleChange}
              required
            />
          </>
        )}

        {/* Render additional fields for government */}
        {userCategory === "government" && (
          <>
            <input
              type="text"
              name="organizationRegistrationNo"
              placeholder="Organization Registration No"
              value={profile.organizationRegistrationNo}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="department"
              placeholder="Department / Division Name"
              value={profile.department}
              onChange={handleChange}
              required
            />
            <textarea
              name="purposeOfRegistration"
              placeholder="Purpose of Registration"
              value={profile.purposeOfRegistration}
              onChange={handleChange}
              required
            />
          </>
        )}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;