'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';

import { submitContactForm, type ContactState } from '@/lib/actions/contact';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function ContactForm({ className }: { className?: string }) {
  const initialState: ContactState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Message Sent!',
          description: state.message,
        });
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className={cn('space-y-4', className)}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" name="name" placeholder="Your Name" required aria-describedby="contact-name-error" />
          {state.errors?.name && (
            <p id="contact-name-error" className="text-sm text-destructive">{state.errors.name.join(', ')}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input id="contact-email" name="email" type="email" placeholder="Your Email" required aria-describedby="contact-email-error" />
          {state.errors?.email && (
             <p id="contact-email-error" className="text-sm text-destructive">{state.errors.email.join(', ')}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea id="contact-message" name="message" placeholder="Your message..." required rows={5} aria-describedby="contact-message-error" />
        {state.errors?.message && (
          <p id="contact-message-error" className="text-sm text-destructive">{state.errors.message.join(', ')}</p>
        )}
      </div>
      <SubmitButton />
    </form>
  );
}
