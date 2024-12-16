import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here we would clear user authentication (e.g., remove token, etc.)
    localStorage.removeItem('authToken');
    alert('You have logged out successfully.');
    navigate('/Home');  // Redirect to login page
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
