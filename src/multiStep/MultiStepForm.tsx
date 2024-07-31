// src/MultiStepForm.tsx
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

export const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit } = useFormContext();
  const [data, setData] = useState({})
  


  const onSubmit = (data: any) => {
    console.log(data);
    setData(data)
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep(step - 1)}
            className="bg-gray-500 text-white py-2 px-4"
          >
            Back
          </button>
        )}
        {step < 2 && (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="bg-blue-500 text-white py-2 px-4"
          >
            Next
          </button>
        )}
        {step === 2 && (
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4"
          >
            Submit
          </button>
        )}
        </div>
      </form>
      
    </>
    
  );
};

