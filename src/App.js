import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Tugas GSLC Form</h1>
      <Form onFormSubmit={handleFormSubmit} />
      {formData && (
        <div className="success-message">
          <h2>Berhasil masukkan data!</h2>
          <p>Nama: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;