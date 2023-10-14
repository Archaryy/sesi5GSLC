import React from 'react';

const FormSubmitMessage = ({ formData }) => {
  return (
    <div className="success-message">
      <h2>Berhasil submit Form!</h2>
      <p>Nama: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default FormSubmitMessage;
