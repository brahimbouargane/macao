import { Logo } from '@/components/logo';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { AppLayout } from 'layouts';
import { useEffect, useState } from 'react';
import { FaBackspace } from 'react-icons/fa';
import { toast } from 'sonner';
import { Button, Card, Form, Loader, TextField } from 'ui';

interface ResetPasswordProps {
  token: string;
  email: string;
}

type InputTargetProps = { name: any; value: any };

export default function ResetPassword(args: ResetPasswordProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const { token, email } = args;
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: ''
  });


  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    post('/reset-password', {
      onSuccess: () => {
        toast.success(__(translations, 'Password was reset successfully'));
      },
      onFinish: () => {
        toast.error(errors.email);
      }
    });
  };

  return (
    <>
      <Head title="Reset Password" />

      <div className={cn(`w-full px-4 flex items-center justify-center bg-red-500`, `h-full`)}>
        <Card className="w-full max-w-lg bg-zinc-50">
          <Card.Header className="flex items-center justify-between text-center">
            <Logo className="mb-4" />
            <Card.Title className="text-xl ">{__(translations, 'Reset Password')}</Card.Title>
          </Card.Header>
          <Card.Content>
            <Form className="space-y-6" validationErrors={errors} onSubmit={submit}>
              <TextField
                isDisabled={true}
                label="Email"
                isRequired
                errorMessage={errors.email}
                type="email"
                name="email"
                value={data.email}
                autoComplete="username"
              />

              <TextField
                isDisabled={processing}
                label="Password"
                isRequired
                errorMessage={errors.password}
                type="password"
                name="password"
                value={data.password}
                autoComplete="new-password"
                autoFocus
                onChange={(v) => setData('password', v)}
              />

              <TextField
                isDisabled={processing}
                label="Confirm Password"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                autoComplete="new-password"
                onChange={(v) => setData('password_confirmation', v)}
                errorMessage={errors.password_confirmation}
                isRequired
              />

              <div className="flex items-center justify-between mt-4">
                <Button type="submit" className="" isDisabled={processing}>
                  {processing ? <Loader /> : __(translations, 'Reset Password')}
                </Button>

                <Link
                  href="/login"
                  className="flex bg-primary p-3 rounded-md text-sm text-white items-center justify-between gap-2 transition-all duration-200 hover:-rotate-3"
                  disabled={processing}
                >
                  {__(translations, 'Login page')}
                </Link>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}

// ResetPassword.layout = (page: any) => <AppLayout children={page} />;
