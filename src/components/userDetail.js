// src/components/UserDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, updateUser, deleteUser } from '../services/UserService';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    drivingLicenseNumber: '',
    dateOfBirth: '' // Assuming date format is compatible with input type date
  });

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await fetchUserById(id);
      setUser(userData);
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, user);
    navigate('/users');
  };

  const handleDelete = async () => {
    await deleteUser(id);
    navigate('/users');
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleInputChange} required />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={user.phoneNumber} onChange={handleInputChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={user.address} onChange={handleInputChange} required />
        </label>
        <label>
          Driving License Number:
          <input type="text" name="drivingLicenseNumber" value={user.drivingLicenseNumber} onChange={handleInputChange} required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={user.dateOfBirth.split('T')[0]} onChange={handleInputChange} required />
        </label>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleDelete}>Delete User</button>
      </form>
    </div>
  );
};

export default UserDetail;
