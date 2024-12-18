import { Logo } from '@/components/logo';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, useForm, usePage } from '@inertiajs/react';
import { AppLayout } from 'layouts';
import React, { useEffect } from 'react';
import { Button, buttonStyles, Card, Form, Link, ProgressCircle, TextField } from 'ui';

export default function Register() {
  const translations = usePage<PagePropsData>().props.translations;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false
  });

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation');
    };
  }, []);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    post('/register');
  };

  return (
    <>
      <div className={cn(`w-full px-4 flex items-center justify-center bg-red-500`, `h-[calc(100vh-64px)]`)}>
        <Head title="Register" />

        <Card className="w-full max-w-lg bg-zinc-50">
          <Card.Header className="flex items-center justify-between text-center">
            <Logo className="mb-4" />
            <Card.Title className="text-xl ">{__(translations, 'Register')}</Card.Title>
          </Card.Header>
          <Card.Content>
            <Form onSubmit={submit} validationErrors={errors} className="space-y-6">
              <TextField
                type="text"
                name="name"
                label="Name"
                value={data.name}
                className="mt-1"
                autoComplete="name"
                autoFocus
                onChange={(v) => setData('name', v)}
                errorMessage={errors.name}
                isRequired
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                value={data.email}
                className="mt-1"
                autoComplete="username"
                onChange={(v) => setData('email', v)}
                errorMessage={errors.email}
                isRequired
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                value={data.password}
                autoComplete="current-password"
                onChange={(v) => setData('password', v)}
                errorMessage={errors.password}
                isRequired
              />

              <TextField
                type="password"
                label="Confirm Password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1"
                onChange={(v) => setData('password_confirmation', v)}
                errorMessage={errors.password_confirmation}
                isRequired
              />

              <div className="flex flex-col items-center justify-between gap-y-3">
                <Button
                  className={'w-full mt-2 transition-transform hover:scale-[98%] duration-300'}
                  isDisabled={processing}
                  isPending={processing}
                  type="submit"
                >
                  {' '}
                  {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
                  {processing ? __(translations, 'Loading...') : __(translations, 'Register')}
                </Button>
                <Link href="/login" className={buttonStyles({ appearance: 'outline', className: 'w-full' })}>
                  {__(translations, 'Already have an account?')}
                </Link>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}

Register.layout = (page: React.ReactNode) => {
  return <AppLayout children={page} />;
};
