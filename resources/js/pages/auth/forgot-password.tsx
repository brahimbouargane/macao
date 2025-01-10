import { Logo } from '@/components/logo';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { AppLayout, GuestLayout } from 'layouts';
import toast from 'react-hot-toast';
import { FaBackspace } from 'react-icons/fa';
import { Button, Card, Form, ProgressCircle, TextField } from 'ui';

interface ForgotPasswordProps {
  status: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const { data, setData, post, processing, errors, reset, recentlySuccessful, clearErrors } = useForm({
    email: ''
  });

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    post('/forgot-password', {
      onSuccess: () => {
        reset('email');
        toast.success(
          __(
            translations,
            'A new verification link has been sent to the email address you provided during registration.'
          )
        );
      },
      onError: () => {
        toast.error(__(translations, 'Failed to send reset password email'));
      }
    });
  };

  return (
    <>
      <div className={cn(`w-full px-4 flex items-center justify-center bg-red-500 h-full`)}>
        <Head title="Forgot Password" />
        <Card className="w-full max-w-lg bg-zinc-50">
          <Card.Header className="flex items-center justify-between text-center">
            <Logo className="mb-4" />
            <Card.Title className="text-xl ">{__(translations, 'Forgot your password?')}</Card.Title>
            <Card.Description className="!my-2  text-justify">
              {__(
                translations,
                'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.'
              )}
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <Form validationErrors={errors} onSubmit={submit}>
              <TextField
                isDisabled={processing}
                type="text"
                name="email"
                value={data.email}
                isRequired
                errorMessage={errors.email}
                autoFocus
                onChange={(v) => {
                  setData('email', v);
                  if (errors.email) {
                    clearErrors('email');
                  }
                }}
              />

              <div className="flex items-center justify-between mt-4">
                <Button type="submit" className="" isDisabled={processing}>
                  {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
                  {processing ? __(translations, 'Sending...') : __(translations, 'Send')}
                </Button>
                <Link
                  href="/login"
                  className="flex bg-primary p-2 rounded-md text-sm text-white items-center justify-between gap-2 transition-all duration-200 hover:-rotate-3"
                  disabled={processing}
                >
                  {__(translations, 'Go Back')}
                  <FaBackspace className="size-6" />
                </Link>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}

ForgotPassword.layout = (page: any) => (
  <AppLayout  children={page} />
);
