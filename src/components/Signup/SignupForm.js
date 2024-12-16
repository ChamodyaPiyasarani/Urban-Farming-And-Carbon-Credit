import React from "react";
import "./SignupForm.css";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ userCategory }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate form submission (you can add validation logic here)
    alert("Registration submitted successfully!");
    // Navigate to the dashboard after form submission
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>{`Sign Up as ${userCategory}`}</h2>
      <form onSubmit={handleSubmit}>
        {/* Render name field for farmer */}
        {userCategory === "farmer" && (
          <input type="text" placeholder="Name" required />
        )}

        {/* Render organization name for non-farmer categories */}
        {userCategory !== "farmer" && (
          <input type="text" placeholder="Organization Name" required />
        )}

        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />

        <div className="address-fields">
          <input type="text" placeholder="Street" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="District" required />
        </div>

        <input type="text" placeholder="Contact No" required />

        {/* Render additional fields for farmer */}
        {userCategory === "farmer" && (
          <>
            <input type="text" placeholder="Farm Size (acres/meters)" required />
            <select defaultValue="" required>
              <option value="" disabled>
                Select Farm Type
              </option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </>
        )}

        {/* Render additional fields for non-government */}
        {userCategory === "non-government" && (
          <>
            <input type="text" placeholder="Organization Registration No" required />
            <textarea placeholder="Purpose of Registration" required />
          </>
        )}

        {/* Render additional fields for government */}
        {userCategory === "government" && (
          <>
            <input type="text" placeholder="Organization Registration No" required />
            <input type="text" placeholder="Department / Division Name" required />
            <textarea placeholder="Purpose of Registration" required />
          </>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignupForm;
