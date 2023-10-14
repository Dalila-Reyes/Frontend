import React from 'react';

const PerfildeUsuario = ({ user }) => {
  return (
    <div>
      <h2>Datos del Usuario</h2>
      <ul>
        <li><strong>Nombre:</strong> {user.firstName} {user.lastName}</li>
        <li><strong>Correo Electrónico:</strong> {user.email}</li>
        {/* Agrega más detalles del perfil según tus necesidades */}
      </ul>
    </div>
  );
};

export default PerfildeUsuario;
