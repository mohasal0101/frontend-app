import React, { useState } from 'react';
import '../style/GridUsers.css';
import Button from '@mui/material/Button';
function UserGrid() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', status: 'Inactive' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com', status: 'Active' },
    { id: 4, name: 'Alice Johnson', email: 'alice.johnson@example.com', status: 'Deleted' },
    { id: 5, name: 'Mark Wilson', email: 'mark.wilson@example.com', status: 'Inactive' },
  ]);

    const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
    };


  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.status}</td>
              <Button color='error' onClick={() => handleDelete(user.id)}>Delete</Button>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserGrid;
