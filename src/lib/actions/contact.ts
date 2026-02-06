'use server';

import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, { message: 'Name is too long.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(1000, { message: 'Message is too long.' }),
});

export type ContactState = {
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid data provided. Please check your inputs.',
      success: false,
    };
  }

  // In a real application, you would send an email or save to a database here.
  // For this example, we'll just log the data and simulate success.
  console.log('Contact Form Submission:');
  console.log(validatedFields.data);

  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success
    return { message: "Thank you for your message! We'll get back to you soon.", success: true };

  } catch (error) {
    console.error('Contact Form Error:', error);
    return {
      message: 'An error occurred. Please try again later.',
      success: false,
    };
  }
}
