import { GuestLayout } from '@/layouts/guest-layout';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Button, Form, Link, ProgressCircle } from 'ui';

let header = 'Verify email';
let description =
  "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.";
export default function VerifyEmail({ status }: { status?: any }) {
  const { post, processing } = useForm();

  const translations = usePage<PagePropsData>().props.translations;
  header = __(translations, 'Verify email');
  description = __(
    translations,
    "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
  );

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    post('/email/verification-notification');
  };
  return (
    <>
      <Head title="Email Verification" />
      {status === 'verification-link-sent' && (
        <div className="mb-4 text-sm font-medium text-green-600">
          {__(
            translations,
            'A new verification link has been sent to the email address you provided during registration.'
          )}
        </div>
      )}

      <div className="mt-4 flex items-center justify-between">
        <Form onSubmit={submit}>
          <Button isDisabled={processing} type="submit">
            {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
            {processing ? __(translations, 'Sending...') : __(translations, 'Resend Verification Email')}
          </Button>
        </Form>

        <Link
          href={'/logout'}
          routerOptions={{
            method: 'post'
          }}
          intent="secondary"
          isDisabled={processing}
        >
          {__(translations, 'Log Out')}
        </Link>
      </div>
    </>
  );
}

VerifyEmail.layout = (page: any) => {
  return <GuestLayout header={header} description={description} children={page} />;
};
