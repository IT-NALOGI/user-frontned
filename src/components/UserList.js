// src/components/UsersList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllUsers } from '../services/UserService';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchAllUsers();
      setUsers(usersData);
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
