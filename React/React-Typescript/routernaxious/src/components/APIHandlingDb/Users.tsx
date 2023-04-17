import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
interface User {
  id: number;
  name: string;
  email: string;
}

function Users(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
    .get<User[]>('http://localhost:3000/users')
      .then(response => response.data)
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Axious Assignment from fetch json server</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className='Grid'>
           <div key={user.id} className="card">
            Name: {user.name}
            <br />
            Email ID: {user.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
