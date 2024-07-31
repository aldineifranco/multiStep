// src/StepTwo.tsx

import { useFormContext } from 'react-hook-form';

export const StepTwo: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          {...register('email')}
          className="border p-2 w-full"
        />
        {/* {errors.email && <span>{errors.email.message}</span>} */}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          {...register('phone')}
          className="border p-2 w-full"
        />
        {/* {errors.phone && <span>{errors.phone.message}</span>} */}
      </div>
    </div>
  );
};

export default StepTwo;
