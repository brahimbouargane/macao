import { Logo } from '@/components/logo';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, useForm, usePage } from '@inertiajs/react';
import { AppLayout, GuestLayout } from 'layouts';
import { Button, Card, Form, TextField } from 'ui';

interface ForgotPasswordProps {
  status: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const { data, setData, post, processing, errors } = useForm({
    email: ''
  });

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    post('/forgot-password');
  };

  return (
    <>
      <Head title="Forgot Password" />

      <div className={cn(`w-full px-4 flex items-center justify-center bg-red-500`, `h-[calc(100vh-64px)]`)}>

        <Card className="w-full max-w-lg bg-zinc-50">
          <Card.Header className="flex items-center justify-between text-center">
            <Logo className="mb-4" />
            <Card.Title className="text-xl ">{__(translations, 'Forgot your password?')}</Card.Title>
            <Card.Description className="!my-2 text-xl text-justify">{__(translations, 'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.')}</Card.Description>
            
          </Card.Header>
          <Card.Content>
           
      <Form validationErrors={errors} onSubmit={submit}>
        <TextField
          type="text"
          name="email"
          value={data.email}
          isRequired
          errorMessage={errors.email}
          autoFocus
          onChange={(v) => setData('email', v)}
        />

        <div className="flex items-center justify-end mt-4">
          <Button type="submit" className="ml-4" isDisabled={processing}>
            {__(translations, 'Reset Password')}
          </Button>
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
