// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './components/UserList';
import UserDetail from './components/userDetail';
import UserCreate from './components/userCreate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users/new" element={<UserCreate />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
