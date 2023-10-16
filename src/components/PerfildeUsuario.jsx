import React, { useState, useEffect } from 'react';

const UserDetail = () => {
  const userId = localStorage.getItem("id");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Realizar la solicitud HTTP para obtener la información del usuario
    fetch(`http://localhost:4000/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error:', error));
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
        <h2 className="mt-4">User Details</h2>
        <ul className="list-group mt-4">
          <li className="list-group-item">ID: {user.id}</li>
          <li className="list-group-item">First Name: {user.firstName}</li>
          <li className="list-group-item">Last Name: {user.lastName}</li>
          <li className="list-group-item">Birth Date: {user.birthDate}</li>
          <li className="list-group-item">Phone: {user.phone}</li>
          <li className="list-group-item">Email: {user.email}</li>
        </ul>
      </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetail;
