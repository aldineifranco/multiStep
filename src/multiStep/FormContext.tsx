// src/FormContext.tsx
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define a schema using Zod
export const stepOneSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
});

export const stepTwoSchema = z.object({
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
});

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  phone: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export function FormContext ({ children }: any) {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

