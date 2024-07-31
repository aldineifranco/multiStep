// src/App.tsx
import React from 'react';
import { FormContext } from './multiStep/FormContext';
import { MultiStepForm } from './multiStep/MultiStepForm';

const App: React.FC = () => {
  return (
    <FormContext>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Multi-Step Form</h1>
        <MultiStepForm/>
      </div>
  
    </FormContext>
  );
};

export default App;

