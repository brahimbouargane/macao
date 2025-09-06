import AvatarUploader from '@/components/ui/avatar-uploader';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { IconMail } from 'justd-icons';
import { Button, Card, Form, Link, ProgressCircle, TextField } from 'ui';

interface Props {
  mustVerifyEmail: boolean;
  status?: string;
  className?: string;
  profile_image: string;
  translations: any[];
}

export function UpdateProfileInformationForm({ mustVerifyEmail, status, profile_image, translations }: Props) {
  const { auth } = usePage<PagePropsData>().props;
  const { data, setData, patch, post, errors, processing, recentlySuccessful, clearErrors, setError } = useForm({
    avatar: profile_image ? [profile_image] : [],
    _method: 'patch'
  });

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    post(route('profile.update'), {
      preserveScroll: true
    });
  };

  return (
    <Card className="bg-accent">
      <Card.Header>
        <Card.Title>{__(translations, 'Profile Information')}</Card.Title>
        <Card.Description>
          {__(translations, "Update your account's profile information and email address.")}
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Form
          validationErrors={errors}
          onSubmit={submit}
          className="space-y-6"
          encType="application/x-www-form-urlencoded"
        >
          <div className="grid items-center lg:grid-cols-2 lg:gap-x-5">
            <div className="place-self-stretch">
              <TextField
                isDisabled={true}
                id="email"
                type="email"
                name="email"
                label={__(translations, 'Email')}
                value={auth.user.email}
                prefix={
                  <div className="p-2 border-r-2 ">
                    <IconMail className="text-colors-primary f " />
                  </div>
                }
                className="mt-1 !pl-0"
                autoComplete="email"
              />
            </div>
            <div className="max-lg:my-8">
              <AvatarUploader
                setData={setData}
                errors={errors}
                processing={processing}
                data={data}
                setError={setError}
                clearErrors={clearErrors}
                translations={translations}
              />
            </div>
          </div>

          {mustVerifyEmail && auth.user.email_verified_at === null && (
            <div>
              <p className="mt-2 text-sm">
                Your email address is unverified.
                <Link
                  href={route('verification.send')}
                  intent="secondary"
                  routerOptions={{
                    method: 'post'
                  }}
                >
                  Click here to re-send the verification email.
                </Link>
              </p>

              {status === 'verification-link-sent' && (
                <div className="mt-2 text-sm font-medium text-green-600">
                  A new verification link has been sent to your email address.
                </div>
              )}
            </div>
          )}

          <div className="flex items-center gap-4 ">
            <Button type="submit" isDisabled={processing} className="!mt-6 w-full">
              {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
              {__(translations, 'Save')}
            </Button>
            {recentlySuccessful && <p className="text-sm text-success">{__(translations, 'Saved')}.</p>}
          </div>
        </Form>
      </Card.Content>
    </Card>
  );
}
