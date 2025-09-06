import { Logo } from '@/components/logo';
import { useTheme } from '@/components/theme-provider';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdAlternateEmail, MdOutlinePassword } from 'react-icons/md';
import { Button, Card, Checkbox, Form, Link, ProgressCircle, TextField } from 'ui';

interface LoginProps {
  status: string;
  canResetPassword: boolean;
}

export default function Login(args: LoginProps) {
  const translations = usePage<PagePropsData>().props.translations;
  const { status, canResetPassword } = args;
  const { data, setData, post, processing, errors, reset, clearErrors } = useForm('login', {
    email: '',
    password: '',
    remember: ''
  });
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    if (theme == 'dark') {
      setTheme('light');
    }
    return () => {
      reset('password');
    };
  }, []);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    post(route('login'), {
      onError: function () {
        reset('password');
      }
    });
  };

  return (
    // h-[calc(100vh-64px)]
    <>
      <div className={cn(`w-full px-4 flex flex-col items-center justify-center bg-red-500 h-screen `, ``)}>
        <Link
          href="/"
          className="flex items-center justify-between gap-2 bg-primary p-2 rounded-md text-sm text-white mb-16 transition-all duration-200 hover:-rotate-3"
        >
          {__(translations, 'Go Home')}
          <FaHome className="size-6" />
        </Link>

        <Head title="Se connecter" />
        <Card className="w-full max-w-lg bg-zinc-50">
          <Card.Header className="flex items-center justify-between text-center">
            <Logo className="mb-4" />
            <Card.Title className="text-xl ">{__(translations, 'Log in to your account.')}</Card.Title>
          </Card.Header>
          <Card.Content>
            <Form validationErrors={errors} onSubmit={submit} className="space-y-6">
              <TextField
                isDisabled={processing}
                label={__(translations, 'Email')}
                type="email"
                name="email"
                prefix={
                  <div className="p-2 border-r-2 ">
                    <MdAlternateEmail className="text-colors-primary" />
                  </div>
                }
                className="mt-1 !pl-0"
                value={data.email}
                autoComplete="email"
                autoFocus
                onChange={function (v) {
                  setData('email', v);
                  if (errors.email) {
                    clearErrors('email');
                  }
                }}
                errorMessage={errors.email}
                isRequired
              />
              <TextField
                isDisabled={processing}
                type="password"
                name="password"
                isRevealable
                label={__(translations, 'Password')}
                value={data.password}
                prefix={
                  <div className="p-2 border-r-2 ">
                    <MdOutlinePassword className="text-colors-primary " />
                  </div>
                }
                className="mt-1 !pl-0"
                autoComplete="password"
                onChange={function (v) {
                  setData('password', v);
                  if (errors.email) {
                    clearErrors('email');
                  }
                }}
                errorMessage={errors.password}
                isRequired
              />
              <div className="flex items-center justify-between">
                <Checkbox isDisabled={processing} name="remember" onChange={(v) => setData('remember', v as any)}>
                  {__(translations, 'Remember me')}
                </Checkbox>
                {canResetPassword && (
                  <Link isDisabled={processing} href="/forgot-password" className="text-sm text-fg hover:underline">
                    {__(translations, 'Forgot your password?')}
                  </Link>
                )}
              </div>

              <div className="flex flex-col items-center justify-between gap-y-3">
                <Button
                  className={'w-full mt-2 transition-transform hover:scale-[98%] duration-300'}
                  isDisabled={processing}
                  isPending={processing}
                  type="submit"
                >
                  {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}

                  {processing ? __(translations, 'Connecting...') : __(translations, 'Log in')}
                </Button>
              </div>
            </Form>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}

// Login.layout = (page: React.ReactNode) => {
//     return <AppLayout children={page} />;
// };
// Login.layout = (page: React.ReactNode) => {
//     return <GuestLayout header={__('Log in')} description={__('Log in to your account.')} children={page} />;
// };
