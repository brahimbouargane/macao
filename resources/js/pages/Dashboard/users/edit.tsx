import { Button, Card, Container, Form, ProgressCircle, TextField } from '@/components/ui';
import { DashboardLayout } from '@/layouts';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, useForm, usePage } from '@inertiajs/react';
import { IconKey } from 'justd-icons';
import toast from 'react-hot-toast';
import { MdAlternateEmail, MdDriveFileRenameOutline, MdOutlinePassword } from 'react-icons/md';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';

function Edit({ user }: PagePropsData) {
  const translations = usePage<PagePropsData>().props.translations;
  const form = useForm({
    name: user.name,
    email: user.email,
    password: '',
    password_confirmation: '',
    _method: 'patch'
  });

  function updateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    form.post(route('users.update', user.id), {
      onSuccess: () => {
        toast.success(__(translations, `User updated successfully`));
        form.reset();
      }
    });
  }

  return (
    <>
      <Head title={__(translations, 'Edit') + ' ' + __(translations, 'Users')} />

      {/* <DashboardBreadCrumbs /> */}
      <Container className="p-6 max-w-screen">
        <DashboardBreadCrumbs resource="Users" />
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl"> {__(translations, 'Edit') + ' ' + __(translations, 'User')}</h1>
        </div>
        <Card className="w-full bg-accent">
          <div className="p-4 space-y-8">
            <Form onSubmit={updateUser} validationErrors={form.errors} className={cn('space-y-8')}>
              <div className="grid md:grid-cols-3 md:gap-x-6 gap-y-6 ">
                <TextField
                  type="text"
                  name="name"
                  label="Name"
                  value={form.data.name}
                  className="mt-1"
                  autoComplete="name"
                  autoFocus
                  onChange={(v) => form.setData('name', v)}
                  errorMessage={form.errors.name}
                  isRequired
                  prefix={
                    <div className="p-2 border-r-2 ">
                      <MdDriveFileRenameOutline className="text-colors-primary" />
                    </div>
                  }
                />

                <TextField
                  isDisabled={form.processing}
                  type="email"
                  name="email"
                  description=""
                  prefix={
                    <div className="p-2 border-r-2 ">
                      <MdAlternateEmail className="text-colors-primary" />
                    </div>
                  }
                  className=" !pl-0"
                  label={__(translations, 'Email')}
                  value={form.data.email}
                  autoComplete="username"
                  onChange={function (v) {
                    form.setData('email', v);
                    if (form.errors.email) {
                      form.clearErrors('email');
                    }
                  }}
                  errorMessage={form.errors.email}
                  isRequired
                />
                <TextField
                  isDisabled={form.processing}
                  type="password"
                  name="password"
                  description={__(translations, 'Minimum length : 8')}
                  label={__(translations, 'Password')}
                  isRevealable
                  prefix={
                    <div className="p-2 border-r-2 ">
                      <MdOutlinePassword className="text-colors-primary f " />
                    </div>
                  }
                  className=" !pl-0"
                  value={form.data.password}
                  autoComplete="current-password"
                  onChange={function (v) {
                    form.setData('password', v);
                    if (form.errors.password) {
                      form.clearErrors('password');
                    }
                  }}
                  errorMessage={form.errors.password}
                  isRequired
                />
                <TextField
                  isDisabled={form.processing}
                  type="password"
                  name="password_confirmation"
                  isRevealable
                  label={__(translations, 'Password confirmation')}
                  prefix={
                    <div className="p-2 border-r-2 ">
                      <IconKey className="text-colors-primary f " />
                    </div>
                  }
                  value={form.data.password_confirmation}
                  className=" !pl-0"
                  onChange={function (v) {
                    form.setData('password_confirmation', v);
                    if (form.errors.password) {
                      form.clearErrors('password');
                    }
                  }}
                  errorMessage={form.errors.password_confirmation}
                  isRequired
                />
              </div>

              <div className="flex items-center justify-between !mt-8">
                <Button type="submit" isDisabled={form.processing}>
                  {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
                  {__(translations, 'Modify')}
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </Container>
    </>
  );
}

Edit.layout = (page: any) => <DashboardLayout children={page} />;

export default Edit;
