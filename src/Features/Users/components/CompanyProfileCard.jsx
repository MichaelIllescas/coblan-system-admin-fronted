import React from 'react';

const CompanyProfileCard = () => {
  return (
    <div className="card shadow-sm p-4">
      <h5 className="card-title">Datos de la Empresa</h5>
      <div className="card-body">
        <p><strong>Nombre:</strong> (nombre empresa)</p>
        <p><strong>CUIT:</strong> (cuit)</p>
        <p><strong>Dirección:</strong> (dirección)</p>
        <button className="btn btn-primary">Actualizar datos</button>
      </div>
    </div>
  );
};

export default CompanyProfileCard;
