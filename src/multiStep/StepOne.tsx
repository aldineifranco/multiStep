import { useFormContext } from 'react-hook-form';

export const StepOne: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          {...register('firstName')}
          className="border p-2 w-full"
        />
        {/* {errors.firstName && <span>{errors.firstName.message}</span>} */}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          {...register('lastName')}
          className="border p-2 w-full"
        />
        {/* {errors.lastName && <span>{errors.lastName.message}</span>} */}
      </div>
    </div>
  );
};