import { Button, Form, Note, ProgressCircle, Select, TextField } from '@/components/ui';
import { PagePropsData, UserData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';
import { MdAlternateEmail, MdDriveFileRenameOutline, MdOutlinePassword } from 'react-icons/md';

type EditUserFormProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserData;
};

export default function EditUserForm({ user, setIsModalOpen }: EditUserFormProps) {
  const translations = usePage<PagePropsData>().props.translations;
  const form = useForm({
    name: user.name,
    email: user.email,
    role: user.role ? user.role : null,
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
        setIsModalOpen(false);
      }
    });
  }
  return (
    <Form onSubmit={updateUser} validationErrors={form.errors} className={cn('space-y-8 p-4')}>
      <div className="grid md:grid-cols-1 md:gap-x-6 gap-y-6 ">
        <TextField
          isDisabled={form.processing}
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
        />
        <TextField
          isDisabled={form.processing}
          type="password"
          name="password_confirmation"
          isRevealable
          label={__(translations, 'Password confirmation')}
          prefix={
            <div className="p-2 border-r-2 ">
              <MdOutlinePassword className="text-colors-primary f " />
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
        />
        <Select
          isRequired
          isDisabled={form.processing}
          selectedKey={form.data.role}
          onSelectionChange={function (key) {
            form.setData('role', String(key));
          }}
          label={__(translations, 'Role')}
          placeholder={__(translations, 'Select a role')}
          errorMessage={form.errors.role}
        >
          <Select.Trigger />
          <Select.List
            items={[
              { id: 'admin', name: __(translations, 'Admin') },
              { id: 'manager', name: __(translations, 'Manager') }
            ]}
          >
            {(item) => (
              <Select.Option key={item.id} id={item.id} textValue={item.name}>
                {item.name}
              </Select.Option>
            )}
          </Select.List>
        </Select>
        {form.data?.role == 'admin' && (
          <Note className="my-0" intent="warning">
            {__(translations, "Warning: The 'Administrator' role grants full control, including user management.")}
          </Note>
        )}
        {form.data.role == 'manager' && (
          <Note className="my-0" intent="info">
            {__(translations, "Note: The 'Manager' role has control over all resources except user management.")}
          </Note>
        )}
        {form.errors && form.errors.role && <span className="text-xm text-danger">{form.errors.role}</span>}
      </div>

      <div className="flex items-center justify-between !mt-8">
        <Button type="submit" isDisabled={form.processing} className="w-full">
          {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
          {__(translations, 'Modify')}
        </Button>
      </div>
    </Form>
  );
}
