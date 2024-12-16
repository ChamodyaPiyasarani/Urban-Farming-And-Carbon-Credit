import React, { useState } from "react";
import { FaSeedling, FaPeopleCarry, FaBalanceScale } from "react-icons/fa";
import "./Signup.css"; // Importing regular CSS
import SignupForm from "./SignupForm";

const Signup = () => {
  const [userCategory, setUserCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setUserCategory(category);
  };

  return (
    <div className="signupContainer">
      {!userCategory ? (
        <div className="categorySelection">
          <div className="headingWrapper">
            <h2>Choose User Category</h2>
          </div>
          <div className="buttonWrapper">
            <div className="buttonContainer">
              <button
                className="categoryButton"
                onClick={() => handleCategorySelect("farmer")}
              >
                <FaSeedling size={20} style={{ marginRight: "10px" }} />
                Individual Farming
              </button>
            </div>
            <div className="buttonContainer">
              <button
                className="categoryButton"
                onClick={() => handleCategorySelect("non-government")}
              >
                <FaPeopleCarry size={20} style={{ marginRight: "10px" }} />
                Non-Government Organization
              </button>
            </div>
            <div className="buttonContainer">
              <button
                className="categoryButton"
                onClick={() => handleCategorySelect("government")}
              >
                <FaBalanceScale size={20} style={{ marginRight: "10px" }} />
                Government Organization
              </button>
            </div>
          </div>
        </div>
      ) : (
        <SignupForm userCategory={userCategory} />
      )}
    </div>
  );
};

export default Signup;
