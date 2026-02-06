'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';

import { joinWaitlist, type WaitlistState } from '@/lib/actions/waitlist';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Joining...' : 'Join Waitlist'}
    </Button>
  );
}

export function WaitlistForm({ className }: { className?: string }) {
  const initialState: WaitlistState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useActionState(joinWaitlist, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
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
          <Label htmlFor="name" className="sr-only">Name</Label>
          <Input id="name" name="name" placeholder="Name" required aria-describedby="name-error" />
          {state.errors?.name && (
            <p id="name-error" className="text-sm text-destructive">{state.errors.name.join(', ')}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="sr-only">Email</Label>
          <Input id="email" name="email" type="email" placeholder="Email" required aria-describedby="email-error" />
          {state.errors?.email && (
             <p id="email-error" className="text-sm text-destructive">{state.errors.email.join(', ')}</p>
          )}
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
