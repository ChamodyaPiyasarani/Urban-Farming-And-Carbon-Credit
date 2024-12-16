import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaStore, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import "../components/css/Dashboard.css";
import Profile from "./Profile";
import Shop from "./Shop"; // Import Shop component

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Logout function
  const handleLogout = () => {
    // Clear user session or token (implement logout logic here)
    alert("You have been logged out.");
    // Optionally, redirect the user to the login page
    window.location.href = "/login";
  };

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "shop":
        return <Shop />;
      case "my-cart":
        return <div>My Cart Feature Coming Soon!</div>;
      case "help":
        return <div>Help Section Coming Soon!</div>;
      default:
        return <div className="dashboard-page">Please select an option from the menu.</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-layout">
        <nav className="dashboard-sidebar">
          <ul className="dashboard-menu">
            <li>
              <button
                className={`dashboard-menu-item ${activeTab === "profile" ? "active" : ""}`}
                onClick={() => setActiveTab("profile")}
              >
                <FaUser className="dashboard-menu-icon" /> Profile
              </button>
            </li>
            <li>
              <button
                className={`dashboard-menu-item ${activeTab === "shop" ? "active" : ""}`}
                onClick={() => setActiveTab("shop")}
              >
                <FaStore className="dashboard-menu-icon" /> Shop
              </button>
            </li>
            <li>
              <button
                className={`dashboard-menu-item ${activeTab === "my-cart" ? "active" : ""}`}
                onClick={() => setActiveTab("my-cart")}
              >
                <FaShoppingCart className="dashboard-menu-icon" /> My Cart
              </button>
            </li>
            <li>
              <button
                className={`dashboard-menu-item ${activeTab === "help" ? "active" : ""}`}
                onClick={() => setActiveTab("help")}
              >
                <FaQuestionCircle className="dashboard-menu-icon" /> Help
              </button>
            </li>
            <li>
              <button
                className="dashboard-menu-item"
                onClick={handleLogout} // Attach the logout function here
              >
                <FaSignOutAlt className="dashboard-menu-icon" /> Logout
              </button>
            </li>
          </ul>
        </nav>

        <div className="dashboard-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
