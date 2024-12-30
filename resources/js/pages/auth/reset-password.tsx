import { Logo } from '@/components/logo';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, useForm, usePage } from '@inertiajs/react';
import { AppLayout } from 'layouts';
import { useEffect } from 'react';
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
      }
    });
  };

  return (
    <>
      <Head title="Reset Password" />

      <div className={cn(`w-full px-4 flex items-center justify-center bg-red-500`, `h-[calc(100vh-64px)]`)}>
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
                onChange={(v) => setData('email', v)}
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

              <div className="flex items-center justify-end mt-4">
                <Button type="submit" className="ml-4" isDisabled={processing}>
                  {processing ? <Loader /> : __(translations, 'Reset Password')}
                </Button>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}

ResetPassword.layout = (page: any) => <AppLayout children={page} />;
