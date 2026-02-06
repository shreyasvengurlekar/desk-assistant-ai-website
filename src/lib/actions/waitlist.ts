'use server';

import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const WaitlistSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, { message: 'Name is too long.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

export type WaitlistState = {
  errors?: {
    name?: string[];
    email?: string[];
  };
  message?: string | null;
  success?: boolean;
};

export async function joinWaitlist(
  prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const validatedFields = WaitlistSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid data provided. Please check your inputs.',
      success: false,
    };
  }

  const { name, email } = validatedFields.data;

  try {
    await addDoc(collection(db, 'waitlist'), {
      name,
      email,
      createdAt: serverTimestamp(),
    });

    return { message: "Success! You're on the waitlist.", success: true };
  } catch (error) {
    console.error('Firestore Error:', error);
    return {
      message: 'An error occurred while joining the waitlist. Please try again later.',
      success: false,
    };
  }
}
