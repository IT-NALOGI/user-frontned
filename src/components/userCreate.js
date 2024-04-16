// src/components/UserCreate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../services/UserService';

const UserCreate = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    drivingLicenseNumber: '',
    dateOfBirth: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user);
      navigate('/users'); // Redirect back to the list of users after creation
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Driving License Number:
          <input
            type="text"
            name="drivingLicenseNumber"
            value={user.drivingLicenseNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Date of Birth:
          <input
            type="date"
            name="dateOfBirth"
            value={user.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserCreate;
