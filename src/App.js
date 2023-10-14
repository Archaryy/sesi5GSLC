import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import FormSubmitMessage from './FormSubmitMessage';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="App">
      <h1>Tugas GSLC Form</h1>
      <Form onFormSubmit={handleFormSubmit} />
      {formData && <FormSubmitMessage formData={formData} />}
    </div>
  );
}

export default App;
